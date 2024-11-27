import EcommerceLayout from "@/Layouts/EcommerceLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const VerifyOtp = () => {
    const [otpField, setOtpField] = useState(new Array(5).fill(""));
    const ref = useRef([]);
    const {url} = usePage();
    const { data, setData, post, processing, errors } = useForm({
        otp_token: url.split("/")[2],
        email: url.split("/")[3],
        otp: "",
    });

    // const params = new URLSearchParams();

    const handleKeyDown = (e, index) => {
        const key = e.key;
        const copyOtpFields = [...otpField];
        if (key === "Backspace") {
            copyOtpFields[index] = "";
            setOtpField(copyOtpFields);
            console.log(index);
            if (index > 0) ref.current[index - 1].focus();
            return;
        }

        if (key === "ArrowRight")
            if (index + 1 < otpField.length) ref.current[index + 1].focus();

        if (key === "ArrowLeft") if (index > 0) ref.current[index - 1].focus();

        if (isNaN(key)) {
            return;
        }

        copyOtpFields[index] = key;
        if (index + 1 < otpField.length) ref.current[index + 1].focus();
        setOtpField(copyOtpFields);
    };

    useEffect(() => {
        ref.current[0].focus();
    }, []);

    const handleSubmitOtp = () => {
        post("/sentOtpForVerifyOtp");
    };

    console.log(url.split("/"));

    return (
        <div class="bg-gray-100 flex flex-col items-center justify-center h-screen w-full ">
            <div class="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md  ">
                <h1 class="text-2xl font-semibold text-center mb-6">
                    Enter OTP
                </h1>
                {/* <p class="text-gray-600 text-center mb-4">
                    Code sent to +880-123456789
                </p> */}
                <div class="grid grid-cols-5 gap-x-4 my-2">
                    {otpField.map((value, index) => (
                        <input
                            key={index}
                            contenteditable="true"
                            class="rounded-lg bg-gray-100 cursor-text  w-14 aspect-square flex items-center justify-center"
                            ref={(currentInput) =>
                                (ref.current[index] = currentInput)
                            }
                            value={value}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onChange={() => setData("otp", otpField.join(""))}
                        />
                    ))}

                    {/* <div
                        contenteditable="true"
                        class="rounded-lg bg-gray-100 cursor-text  w-14 aspect-square flex items-center justify-center"
                    >
                        <span class="text-gray-700 ">9</span>
                    </div>
                    <div
                        contenteditable="true"
                        class="rounded-lg bg-gray-100 cursor-text w-14 aspect-square flex items-center justify-center"
                    >
                        <span class="text-gray-700 ">6</span>
                    </div>
                    <div
                        contenteditable="true"
                        class="rounded-lg bg-gray-100 cursor-text  w-14 aspect-square flex items-center justify-center"
                    >
                        <span class="text-gray-700 ">4</span>
                    </div>
                    <div
                        contenteditable="true"
                        class="rounded-lg bg-gray-100 cursor-text  w-14 aspect-square flex items-center justify-center"
                    >
                        <span class="text-gray-700 ">3</span>
                    </div> */}
                </div>
                <div class="flex items-center flex-col justify-between mb-6">
                    <p class={`${errors.error ? "text-red-500" : "text-gray-500"}`}>{errors.error ? errors.error : "Didn't receive code?"}</p>
                    <div class="flex items-center space-x-2">
                        {/* <button class="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">
                            Request via Call
                        </button>
                        <button class="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">
                            Request Again (00:00:36)
                        </button> */}
                    </div>
                </div>
                <button
                    class="w-full px-4 py-2 text-lg font-medium text-white bg-black rounded-md hover:bg-slate-800"
                    onClick={handleSubmitOtp}
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

VerifyOtp.layout = (page) => <EcommerceLayout children={page} />;

export default VerifyOtp;
