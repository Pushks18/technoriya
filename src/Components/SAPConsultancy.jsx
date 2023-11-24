import React from "react";
import bgImage from "../Assets/sebastian-svenson-LpbyDENbQQg-unsplash.jpg";
import Navbar from "./Navbar";
import ParticlesBackground from "./Particles";

const SAPConsultancy = () => {
  return (
    <div>
      <Navbar />
      <ParticlesBackground />
      <div className="">
        <div
          className="bg-cover bg-center h-[500px]  flex items-center justify-center text-white "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h1 className="text-6xl text-white ">Our Services</h1>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="tabs-profile-tab"
        role="tabpanel"
        aria-labelledby="tabs-profile-tab"
      >
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
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}

              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}

              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}

              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}

              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}

              {/* <!-- product - start --> */}
              <div>
                <a
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
                </a>
              </div>
              {/* <!-- product - end --> */}
            </div>
          </div>
        </div>

        {/* Add content specific to the "Trending" tab */}
      </div>

      <div class="bg-gray-900">
        <footer class="mx-auto max-w-screen-2xl px-4 md:px-8 ">
          <div class="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12 justify-between">
            <div class="col-span-full lg:col-span-2">
              <div class="mb-4 lg:-mt-2">
                <a
                  href="/"
                  class="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                  aria-label="logo"
                >
                  <svg
                    width="95"
                    height="94"
                    viewBox="0 0 95 94"
                    class="h-auto w-5 text-indigo-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>
                  Technoriya ERP Solution
                </a>
              </div>

              <p class="mb-6 text-gray-400 sm:pr-8">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>

              <div class="flex gap-4">
                <a
                  href="https://www.instagram.com/technoriyaerpsolution/"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://twitter.com/technoriyae"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/technoriya-erp/"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/channel/UCMb0YKx17afraGeiwO5U8bQ?view_as=subscriber"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-youtube"
                    viewBox="0 1 16 16"
                    className=""
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/technoriya.erp"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0.5 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className=" ml-60 w-[200px]">
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Services
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Overview
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Responsive Website Design
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Web Development
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Website Maintenance
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Mobile App Development
                  </a>
                </div>
              </nav>
            </div>

            {/* <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Company
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    About
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Investor Relations
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Jobs
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Press
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Blog
                  </a>
                </div>
              </nav>
            </div> */}

            <div className="ml-80 pl-70 w-[200px]">
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Support
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Contact
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Documentation
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Chat
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    FAQ
                  </a>
                </div>
              </nav>
            </div>

            {/* <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Legal
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Terms of Service
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Cookie settings
                  </a>
                </div>
              </nav>
            </div> */}
          </div>

          <div class="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
            © 2020 - Present Technoriya ERP Solutions. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SAPConsultancy;
