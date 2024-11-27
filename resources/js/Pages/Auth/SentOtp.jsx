import { useForm } from "@inertiajs/react";
import React from "react";

const SentOtp = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/createOtp");
    };
    return (
        <div class="flex items-center justify-center h-screen bg-[#F3F4F6]">
            <div class=" rounded-md border shadow-lg p-10 max-w-lg">
                <div class="flex flex-col items-center space-y-4">
                    <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
                        Enter Your Email
                    </h1>
                    <p class="text-sm text-gray-500 text-center w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut laborea.
                    </p>
                    <p className="text-red-600 font-bold">{errors.email}</p>
                    <form action="" className="w-full" onSubmit={handleSubmit}>
                        <input
                            type="Email"
                            placeholder="Email"
                            value={data.email}
                            class="border-2 rounded-lg w-full h-12 px-4 mb-4"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <button
                            type="submit"
                            class={`bg-black text-white rounded-md font-semibold px-4 py-3 w-full ${
                                processing && "bg-slate-500"
                            }`}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SentOtp;
