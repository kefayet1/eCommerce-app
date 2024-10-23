import React from "react";
import { BsStarFill } from "react-icons/bs";
import { MdStar } from "react-icons/md";

const Product = () => {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-3 md:p-6 shadow-sm ">
        <div className="h-56 w-full">
          <a href="#">
            <img className="mx-auto h-full " src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
          </a>
        </div>
        <div className="lg:pt-6">
          <div className="lg:mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800"> Up to 35% off </span>

            <div className="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 md:block hidden">
                <span className="sr-only"> Quick look </span>
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                  <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </button>
              <div id="tooltip-quick-look" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 ">
                <span className="sr-only"> Add to Favorites </span>
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                </svg>
              </button>
              <div id="tooltip-add-to-favorites" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a href="#" className="lg:text-lg text-sm font-bold leading-tight text-gray-900 hover:underline">Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="">
            <div className="md:block hidden md:flex items-center gap-1">
            <BsStarFill color="#FF9529"/>
            <BsStarFill color="#FF9529"/>
            <BsStarFill color="#FF9529"/>
            <BsStarFill color="#FF9529"/>
            <BsStarFill color="#FF9529"/>
            </div>

            <div className="md:hidden flex items-center gap-[1.5px]">
            <BsStarFill color="#FF9529" size={10}/>
            <BsStarFill color="#FF9529" size={10}/>
            <BsStarFill color="#FF9529" size={10}/>
            <BsStarFill color="#FF9529" size={10}/>
            <BsStarFill color="#FF9529" size={10}/>
            </div>
            </div>

            <p className="text-sm font-medium text-gray-900 ">5.0</p>
            <p className="text-sm font-medium text-gray-500 ">(455)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500 ">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500">Best Price</p>
            </li>
          </ul>

          <div className="lg:mt-4 flex items-center justify-between gap-4">
            <p className="text-lg font-bold leading-tight text-gray-900">$1,699</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300">
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default Product;
