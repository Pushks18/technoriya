import React from "react";
import { useState } from "react";
import bgImage from "../Assets/sebastian-svenson-LpbyDENbQQg-unsplash.jpg";

const Services2Page = () => {
  const [activeTab, setActiveTab] = useState("tabs-profile");

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    console.log("Clicked tab:", tabId);
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="">
        <div
          className="bg-cover bg-center h-[500px] opacity-40 flex items-center justify-center text-white "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h1 className="text-6xl text-black ">Our Services</h1>
        </div>
      </div>
      {/* Tab Links */}
      <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 justify-around">
        {/* ... Your tab links ... */}{" "}
        <li>
          <button
            onClick={() => handleTabClick("tabs-profile")}
            className={activeTab === "tabs-profile" ? "active" : ""}
          >
            SAP Project Consultancy
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabClick("tabs-messages")}
            className={activeTab === "tabs-messages" ? "active" : ""}
          >
            Web/App Development
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabClick("tabs-contact")}
            className={activeTab === "tabs-contact" ? "active" : ""}
          >
            SAP Ariba Support
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeTab === "tabs-profile" ? "show" : ""
          }`}
        >
          {/* ... Your SAP Project Consultancy content ... */}{" "}
          <div
            className="tab-pane fade"
            id="tabs-profile-tab"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            <h2>SAP Project Consultancy Content Goes Here</h2>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
              <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
                  Our Projects Consultancy
                </h2>
                <h2 className="mb-8 text-center text-xl font-bold text-gray-800 md:mb-12 lg:text-2xl">
                  Providing the following modules in our Project Consultancy
                </h2>

                <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/hana.png")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[250px] w-[500px] mt-10 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          HANA
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}

                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/sd.jpg")}
                        loading="lazy"
                        alt="Photo by engin akyurt"
                        class="absolute inset-0 h-[200px] w-[500px] mt-10  object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          SD
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}

                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/fiori.png")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute h-[300px] w-[500px] mt-3 inset-0  object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          FIORI
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}

                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/srm.jpeg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[275px] w-[500px] mt-3 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          SRM
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/ewm.png")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[200px] w-[500px] mt-12 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          EWM
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}

                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/successfactors.png")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[180px] w-[500px] mt-12 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          Success Factor
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/mm.jpg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[180px] w-[500px] mt-12 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          MM
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/hcm.jpeg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[120px] w-[500px] mt-14 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          HCM
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/ps.jpeg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[120px] w-[500px] mt-14 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          PS
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/ehs.jpeg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[120px] w-[500px] mt-14 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          EHS
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/pi.jpeg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[120px] w-[500px] mt-14 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          PI
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/bi.jpg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[120px] w-[500px] mt-14 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          BI
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/fico.jpeg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[120px] w-[500px] mt-14 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          FICO
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/crm.png")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[120px] w-[500px] mt-14 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          CRM
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/pp.jpeg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[120px] w-[500px] mt-14 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          PP
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}

                  {/* <!-- product - start --> */}
                  <div>
                    <button
                      href="#"
                      class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src={require("../Assets/wm.jpeg")}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="absolute inset-0 h-[120px] w-[500px] mt-14 object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">
                          BW & WM
                        </span>
                      </div>
                    </button>
                  </div>
                  {/* <!-- product - end --> */}
                </div>
              </div>
            </div>

            {/* Add content specific to the "Trending" tab */}
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "tabs-messages" ? "show" : ""
          }`}
        >
          {/* ... Your Web/Mobile App Development content ... */}
          <div
            className="tab-pane fade"
            id="tabs-messages"
            role="tabpanel"
            aria-labelledby="tabs-messages-tab"
          >
            <h2>ENTERTAINMENT Content Goes Here</h2>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
              <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                {/* <!-- text - start --> */}
                <div class="mb-10 md:mb-16">
                  <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Take Tour of Our Web Development{" "}
                  </h2>

                  <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                    Always render more and better service than is expected of
                    you....
                  </p>
                </div>
                {/* <!-- text - end --> */}

                <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
                  {/* <!-- article - start --> */}
                  <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <button
                      href="#"
                      class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                        loading="lazy"
                        alt="Photo by Minh Pham"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    </button>

                    <div class="flex flex-col gap-2 p-4 lg:p-6">
                      <span class="text-sm text-gray-400">July 19, 2021</span>

                      <h2 class="text-xl font-bold text-gray-800">
                        <button
                          href="#"
                          class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                        >
                          WEBSITE DESIGN & DEVELOPMENT{" "}
                        </button>
                      </h2>

                      <p class="text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>

                      <div>
                        <button
                          href="#"
                          class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- article - end --> */}

                  {/* <!-- article - start --> */}
                  <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <button
                      href="#"
                      class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                        loading="lazy"
                        alt="Photo by Lorenzo Herrera"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    </button>

                    <div class="flex flex-col gap-2 p-4 lg:p-6">
                      <span class="text-sm text-gray-400">April 07, 2021</span>

                      <h2 class="text-xl font-bold text-gray-800">
                        <button
                          href="#"
                          class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                        >
                          MOBILE APPS DESIGN & DEVELOPMENT{" "}
                        </button>
                      </h2>

                      <p class="text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>

                      <div>
                        <button
                          href="#"
                          class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- article - end --> */}

                  {/* <!-- article - start --> */}
                  <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <button
                      href="#"
                      class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                        loading="lazy"
                        alt="Photo by Magicle"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    </button>

                    <div class="flex flex-col gap-2 p-4 lg:p-6">
                      <span class="text-sm text-gray-400">March 15, 2021</span>

                      <h2 class="text-xl font-bold text-gray-800">
                        <button
                          href="#"
                          class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                        >
                          E-COMMERCE WEBSITE DESIGN{" "}
                        </button>
                      </h2>

                      <p class="text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>

                      <div>
                        <button
                          href="#"
                          class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- article - end --> */}

                  {/* <!-- article - start --> */}
                  <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <button
                      href="#"
                      class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                        loading="lazy"
                        alt="Photo by Martin Sanchez"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    </button>

                    <div class="flex flex-col gap-2 p-4 lg:p-6">
                      <span class="text-sm text-gray-400">
                        January 27, 2021
                      </span>

                      <h2 class="text-xl font-bold text-gray-800">
                        <button
                          href="#"
                          class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                        >
                          SOFTWARE DEVELOPMENT{" "}
                        </button>
                      </h2>

                      <p class="text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>

                      <div>
                        <button
                          href="#"
                          class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- article - end --> */}

                  {/* <!-- article - start --> */}
                  <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <button
                      href="#"
                      class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                        loading="lazy"
                        alt="Photo by Martin Sanchez"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    </button>

                    <div class="flex flex-col gap-2 p-4 lg:p-6">
                      <span class="text-sm text-gray-400">
                        January 27, 2021
                      </span>

                      <h2 class="text-xl font-bold text-gray-800">
                        <button
                          href="#"
                          class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                        >
                          DIGITAL ONLINE MARKETING{" "}
                        </button>
                      </h2>

                      <p class="text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>

                      <div>
                        <button
                          href="#"
                          class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- article - end --> */}
                  {/* <!-- article - start --> */}
                  <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <button
                      href="#"
                      class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                        loading="lazy"
                        alt="Photo by Martin Sanchez"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    </button>

                    <div class="flex flex-col gap-2 p-4 lg:p-6">
                      <span class="text-sm text-gray-400">
                        January 27, 2021
                      </span>

                      <h2 class="text-xl font-bold text-gray-800">
                        <button
                          href="#"
                          class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                        >
                          OTHERS IT SERVICES{" "}
                        </button>
                      </h2>

                      <p class="text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>

                      <div>
                        <button
                          href="#"
                          class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- article - end --> */}
                </div>
              </div>
            </div>

            {/* Add content specific to the "ENTERTAINMENT" tab */}
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "tabs-contact" ? "show" : ""
          }`}
        >
          {/* ... Your SAP Ariba Support content ... */}
          <div>
            <button href="">SAP Ariba</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2Page;
