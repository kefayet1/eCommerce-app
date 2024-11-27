<?php

namespace App\Jobs;

use App\Mail\OrderSuccess;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class OrderSuccessJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public $email, $order, $order_items, $user;
    public function __construct($email, $order, $order_items, $user)
    {
        //
        $this->email = $email;
        $this->order = $order;
        $this->order_items = $order_items;
        $this->user = $user;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //
        Mail::to($this->email)->send(new OrderSuccess($this->order, $this->order_items, $this->user));
    }
}
