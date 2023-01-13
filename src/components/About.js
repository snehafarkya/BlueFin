import React from "react";

export default function About() {
  return (
    <div id="about">
      <div className="container md:mt-32 mt-20 mb-32 mx-auto p-4 md:p-0 ">
        <div className="shadow-lg flex flex-wrap w-full  lg:w-4/5 mx-auto ">
          <div className="about-img bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative">
            <div className="absolute text-xl ">
              <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
            </div>
          </div>

          <div className="bg-white w-full h-5/6 md:w-2/3 ">
            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
              <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                  <h3>Sneha Farkya</h3>
                  <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                    India
                  </p>
                  <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                </div>

                <div className="w-full lg:w-3/5 lg:px-3">
                  <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm text-blue-900 font-bold">
                    The time period from the formation of the Earth (4.5 Ga) to
                    the establishment of plate tectonics at the beginning of the
                    Proterozoic (2.5 Ga) remains largely hidden and unknown.
                    During this time period, the ocean, atmosphere, and
                    continents formed, and the geochemical and physical
                    processes that allowed the development and evolution of life
                    were established. Our knowledge of these beginnings is
                    scant, with theories changing as each new line of evidence
                    emerges. Perhaps most troubling is that we have no coherent,
                    unified theory that simplifies our understanding of the
                    Earth's beginnings.
                  </p>
                </div>
                <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                  <button className="bg-white hover:bg-blue-900 hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                    {" "}
                    <a href="https://www.tandfonline.com/doi/abs/10.2747/0020-6814.44.2.137?journalCode=tigr20">
                      {" "}
                      Visit now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
