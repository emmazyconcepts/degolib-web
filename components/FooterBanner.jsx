import React, { useEffect } from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import $ from "jquery";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  useEffect(() => {
    const slidesContainer = document.querySelector(".slides-container");
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    nextButton.addEventListener("click", () => {
      slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
      slidesContainer.scrollLeft -= slideWidth;
    });
  }, []);

  return (
    <div
      id="app"
      class="max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear mt-12"
    >
      <h2 className="text-[#ab9574] text-3xl lg:text-4xl font-serif mb-12">
        Some of our works
      </h2>

      <div class="relative">
        <div class="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/nj1d5hh/1ff00839-faac-4201-bfa0-a59fb16ac753.jpgs"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/wdJBYkD/3f97c7a0-bf9c-4d79-ad56-c5957dbdb637.jpg"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/WGxxJtd/71a10549-c287-4620-9888-5f3810b276a7.jpg"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/cNDKr0K/88b1891f-0d68-4aa7-94fc-ad412ca359ce.jpg"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/ct0D2wt/270abe64-c2ef-4598-bd7f-6ca5fd6a40d5.jpg1"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/7jwsJ1r/da8a4670-2ac3-4e36-a828-5fc08875b529.jpg"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/YPgxnD6/dd3c4c43-1866-40fa-bbed-6442a7ec5475.jpg"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/DWXPwjP/eb802db2-495d-47eb-83d5-2ccae9dc433b.jpg"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/jyYsH3w/ecb29020-e12f-40ee-92ac-03261d48662a.jpgg"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/7jwsJ1r/da8a4670-2ac3-4e36-a828-5fc08875b529.jpg"
              alt="mountain_image"
            />
          </div>
          <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.ibb.co/DWXPwjP/eb802db2-495d-47eb-83d5-2ccae9dc433b.jpg"
              alt="mountain_image"
            />
          </div>
        </div>

        <div class="absolute top-0 -left-4 h-full items-center hidden md:flex">
          <button
            role="button"
            class="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div class="absolute top-0 -right-4 h-full items-center hidden md:flex">
          <button
            role="button"
            class="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
