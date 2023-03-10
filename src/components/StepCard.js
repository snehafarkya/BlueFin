import React from "react";

export default function StepCard() {
  return (
    <div className="grid grid-rows-1 place-items-center md:w-1/2 w-full mb-20 m-auto px-5 md:mt-40 mt-20 gap-2 rounded-lg">
      <p className="md:m-10 m-5 mb:10 text-justify md:text-center text-lg font-semibold text-blue-100">
        More than 70% of the Earth's surface is covered in water, according to
        the U.S. Geological survey and of that water, more than 96% of it is
        contained in one of earth's five oceans. Here are the five ocean basins from largest to smallest, based on area, according to National Oceanic and Atmospheric Administration. 
      </p>
      <ol class="relative mx-4 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li class="mb-10 ml-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 ">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-green-900 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="font-medium leading-tight text-gray-100">Pacific Occean</h3>
          <p class="text-sm text-gray-200">It contains more than half of the free water on Earth, spanning around 63 million square miles. </p>
        </li>
        <li class="mb-10 ml-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 ">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-900 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="font-medium leading-tight text-gray-100">Atlantic Occean</h3>
          <p class="text-sm text-gray-200">This ocean basin makes up 20% of the Earth???s surface. </p>
        </li>
        <li class="mb-10 ml-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 ">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-900 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="font-medium leading-tight text-gray-100">Indian Occean</h3>
          <p class="text-sm text-gray-200">Step details here</p>
        </li>
        <li class="mb-10 ml-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 ">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-900 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="font-medium leading-tight text-gray-100">Southern Occean</h3>
          <p class="text-sm text-gray-200">Step details here</p>
        </li>
        <li class="mb-2 ml-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-900 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="font-medium leading-tight text-gray-100">Arctic Occean</h3>
          <p class="text-sm text-gray-200">Step details here</p>
        </li>
      </ol>
    </div>
  );
}
