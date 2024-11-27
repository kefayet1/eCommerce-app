<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Mail\SentOtpMail;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Jobs\SendMailOtpJob;

class OtpController extends Controller
{
    //
    public function sentOtp()
    {
        // dd("hello");
        return Inertia::render("Auth/SentOtp");
    }

    public function createOtp(Request $request)
    {
        $user = DB::table("users")
            ->where("email", "=", $request->input("email"));

        // dd($user->first());
        if (!$user->first()) {
            return redirect("/sentOtp")->withErrors([
                "email" => "Email doesn't not exist."
            ]);
        }

        $uuid = Str::uuid();
        $otp = rand(10000, 99999);

        // dispatch(new SendMailOtpJob($request->input("email"),$otp));
        for ($i = 0; $i < 20; $i++) {
            SendMailOtpJob::dispatch($request->input("email"), rand(10000, 99999));
        }

        $user->update([
            'otp' => $otp,
            'otp_token' => (string) $uuid,
            'otp_created_at' => Carbon::now()
        ]);

        return redirect("/verifyOtp/{$uuid}/{$request->input('email')}");
    }

    public function verifyOtp($otp_token, $email)
    {
        $user = DB::table("users")
            ->where("email", "=", $email)
            ->where("otp_token", "=", $otp_token);
        if (!$user->first()) {
            return redirect("/");
        }
        return Inertia::render("Auth/VerifyOtp");
    }

    public function sentOtpForVerifyOtp(Request $request)
    {
        // dd($request->input("otp_token"));
        $user = DB::table("users")
            ->where("email", "=", $request->input("email"))
            ->where("otp_token", "=", $request->input("otp_token"))
            ->where("otp", "=", $request->input("otp"));

        if (!$user->first()) {
            return redirect("/verifyOtp/{$request->input("otp_token")}/{$request->input("email")}")->withErrors([
                'error' => 'Your otp is not valid'
            ]);
        }

        $resetPasswordToken = Str::uuid();

        $user->update([
            'reset_password_token' => $resetPasswordToken
        ]);

        return redirect("/otpResetPassword/{$request->input("otp_token")}/{$request->input("email")}/{$resetPasswordToken}");
    }

    public function otpResetPassword($otp_token, $email, $resetPasswordToken)
    {
        $user = DB::table("users")
            ->where("email", "=", $email)
            ->where("otp_token", "=", $otp_token)
            ->where("reset_password_token", "=", $resetPasswordToken)->first();
        // dd($user);
        if (!$user) {
            return redirect("/");
        }
        return Inertia::render("Auth/ResetOtpPassword");
    }

    public function resetUserPassword(Request $request)
    {
        // dd($request);
        $user = DB::table("users")
            ->where("email", "=", $request->input("email"))
            ->where("otp_token", "=", $request->input("otp_token"))
            ->where("reset_password_token", "=", $request->input("reset_password_token"));

        if (!$user->first()) {
            // dd("hell");
            return redirect("/otpResetPassword/{$request->input("otp_token")}/{$request->input("email")}/{$request->input("reset_password_token")}")->withErrors([
                'error' => 'Something is Wrong!'
            ]);
        }

        if ($request->input("password") !== $request->input("confirmPassword")) {
            // dd($request->password, $request->confirmPassword);
            return redirect("/otpResetPassword/{$request->input("otp_token")}/{$request->input("email")}/{$request->input("reset_password_token")}")->withErrors([
                'error' => 'Password is Wrong!'
            ]);
        }

        if (Carbon::parse($user->first()->otp_created_at)->addMinutes(2) < Carbon::now()) {
            return redirect("/otpResetPassword/{$request->input("otp_token")}/{$request->input("email")}/{$request->input("reset_password_token")}")->withErrors([
                'error' => 'Otp validity expired!'
            ]);
        }

        $user->update([
            "otp" => null,
            "otp_token" => null,
            "reset_password_token" => null,
            "password" => bcrypt($request->input("password"))
        ]);

        // dd($user->update());

        return redirect("/login");
    }
}
