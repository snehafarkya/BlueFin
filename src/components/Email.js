import React from "react";

export default function Email() {
  return (
    <div className="md:w-1/2 mx-4 md:mb-40 md:mt-40 md:m-auto grid grid-rows-1 place-items-center mb-20">
      <div class="max-w-3xl p-6  bg-white  border border-gray-200 rounded-lg shadow-md dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Want to view such amazing websites more?
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          If you liked this website and want to stay updated about my creative
          work, hit the subscribe button!
        </p>
        <div className="mail flex justify-between gap-4">
          <input
            type="email"
            className="p-2 rounded-lg bg-none text-lg w-9/12 border-2 border-gray-900 outline-gray-900 "
            placeholder="Enter your email"
          />
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
