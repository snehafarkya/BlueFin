import React from "react";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";

export default function StayCard() {
  return (
    <div>
      <div class="flex flex-col w-3/4 m-auto p-auto mb-20">
        <h1 class="flex py-5 lg:px-5 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 my-10 font-bold text-2xl text-gray-100">
          Looking for best Water-Vacay? Don't worry! These are some best
          staycations next to your waterBay
        </h1>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            <div class="inline-block px-3">
              <div class="w-screen h-max max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card1 />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-screen h-max max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card2 />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-screen h-max max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card3 />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-screen h-max max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card2 />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-screen h-max max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card5 />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-screen h-max max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card6 />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-screen h-max max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card2 />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-screen h-max max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
