const Reviews = () => {
    return (
        <div class="mt-8 flow-root ">
            <div class=" min-h-screen ">
                <div class="px-10 flex flex-col gap-2 p-5 bg-gray-800 text-white">
                    <h1 class="py-5 text-lg">Reviews</h1>
                    <div class="flex bg-gray-600 bg-opacity-20 border border-gray-200 rounded-md">
                        <ion-icon
                            class="py-4 p-3"
                            name="search-outline"
                        ></ion-icon>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Search Review"
                            class="p-2 bg-transparent focus:outline-none"
                        />
                    </div>

             

                    {/* <!-- Item Container --> */}
                    <div class="flex flex-col gap-3 mt-14">
                        <div class="flex flex-col gap-4 bg-gray-700 p-4">
                            {/* <!-- Profile and Rating --> */}
                            <div class="flex justify justify-between">
                                <div class="flex gap-2">
                                    <div class="w-7 h-7 text-center rounded-full bg-red-500">
                                        J
                                    </div>
                                    <span>Jess Hopkins</span>
                                </div>
                                <div class="flex p-1 gap-1 text-orange-300">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star-half"></ion-icon>
                                </div>
                            </div>

                            <div>
                                Gorgeous design! Even more responsive than the
                                previous version. A pleasure to use!
                            </div>

                            <div class="flex justify-between">
                                <span>Feb 13, 2021</span>
                                <button class="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
                                    <ion-icon name="share-outline"></ion-icon>{" "}
                                    Share
                                </button>
                            </div>
                        </div>

                        <div class="flex flex-col gap-4 bg-gray-700 p-4">
                            {/* <!-- Profile and Rating --> */}
                            <div class="flex justify justify-between">
                                <div class="flex gap-2">
                                    <div class="w-7 h-7 text-center rounded-full bg-yellow-500">
                                        A
                                    </div>
                                    <span>Alice Banks</span>
                                </div>
                                <div class="flex p-1 gap-1 text-orange-300">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                            </div>

                            <div>
                                The device has a clean design and the metal
                                housing feels sturdy in my hands. Soft rounded
                                corners make it a pleasure to look at.
                            </div>

                            <div class="flex justify-between">
                                <span>Feb 13, 2021</span>
                                <button class="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
                                    <ion-icon name="share-outline"></ion-icon>{" "}
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
