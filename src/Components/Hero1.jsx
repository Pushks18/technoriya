import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div>
      {/* --------------------------------------------------------- */}
      <div className="bg-white  ">
        <Navbar className="" />
      </div>
      {/* ---------------------------------------------------- */}
      {/* OUR MISSION OUR VISION   */}
      <section className="bg-white">
        <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
              Our Mission Our Vision
            </h1>
            <p className="max-w-2xl mb-6 font-md lg:mb-8 md:text-lg lg:text-xl text-black">
              A visible difference of education even from far away.
            </p>
            <Link to="/eLearning">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
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
            </Link>
            <Link to="/contact">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 bg-gray-800 text-white dark:border-gray-700  dark:focus:ring-gray-800"
              >
                Speak with us
              </a>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-4xl">
            <img
              src={require("../Assets/3d_3.png")}
              alt="mockup"
              classNameName="w-full h-full rounded-4xl"
            />
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------------------- */}
      {/* REVOLUTIONARY WAY TO BUILD THE WEB  */}
      <div className="relative bg-white pb-6 sm:pb-8 lg:pb-12 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white py-16 shadow-lg md:py-20 xl:py-48">
            <img
              src={
                "https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
              }
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center mt-10"
            />

            <div className="absolute inset-0 dark:bg-blue-400 mix-blend-multiply mt-10"></div>

            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <p className="mb-4 text-center text-lg text-white font-md sm:text-xl md:mb-8">
                Very proud to introduce
              </p>
              <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                Revolutionary way to build the web
              </h1>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <Link to="/eLearning">
                  <a
                    href="#"
                    className="inline-block px-8 py-3 text-center text-sm font-semibold border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 bg-gray-800 text-white dark:border-gray-700  dark:focus:ring-gray-800 md:text-base "
                  >
                    Start now
                  </a>
                </Link>
                <Link to="/services">
                  <a
                    href="#"
                    className="inline-block  px-8 py-3 text-center text-sm font-semibold  outline-none  transition duration-100  focus-visible:ring  border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 bg-gray-200 text-black dark:border-gray-700  dark:focus:ring-gray-800 md:text-base"
                  >
                    Take tour
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* OUR CORE SERVICES  */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our Core Services
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Always render more and better service than is expected of you....
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {/* <!-- feature - start --> */}
            <div class="flex flex-col rounded-lg border p-4 md:p-6">
              <h3 class="mb-2 text-lg font-semibold md:text-xl">
                Website Design & Development
              </h3>
              <p class="mb-4 text-gray-500">
                Our excellent website design & development services help boost
                your business and increase your business sales.
              </p>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div class="flex flex-col rounded-lg border p-4 md:p-6">
              <h3 class="mb-2 text-lg font-semibold md:text-xl">
                Mobile App Design & Development
              </h3>
              <p class="mb-4 text-gray-500">
                We develop mobile apps that help to influence your customers and
                support your business for growth.
              </p>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div class="flex flex-col rounded-lg border p-4 md:p-6">
              <h3 class="mb-2 text-lg font-semibold md:text-xl">
                Software Development
              </h3>
              <p class="mb-4 text-gray-500">
                The software developed by our company not only helps your
                business but also adopt new technology for your business.
              </p>
            </div>
            {/* <!-- feature - end --> */}
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------- */}
      {/* OUR LATEST PROJECTS  */}
      <div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 class="mb-8 text-center text-2xl font-bold text-black md:mb-12 lg:text-3xl">
              Our Latest Projects
            </h2>
            <h4 className="mb-8 text-center text-md font-bold text-black md:mb-8 lg:text-lg">
              Operations keeps the lights on, strategy provides a light at the
              end of the tunnel, but project management is the train engine that
              moves the organization forward.
            </h4>
            <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              <div>
                <a
                  href="#"
                  class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                >
                  <img
                    src={require("../Assets/1.jpg")}
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                    {/* <span class="text-gray-500">Men</span> */}
                    <span class="text-lg font-bold text-gray-800 lg:text-xl">
                      Happy Life Shaadi
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                >
                  <img
                    src={require("../Assets/2.jpg")}
                    loading="lazy"
                    alt="Photo by engin akyurt"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                    {/* <span class="text-gray-500">Women</span> */}
                    <span class="text-lg font-bold text-gray-800 lg:text-xl">
                      Global IOT School
                    </span>
                  </div>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                >
                  <img
                    src={require("../Assets/3.jpg")}
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                    {/* <span class="text-gray-500">Men</span> */}
                    <span class="text-lg font-bold text-gray-800 lg:text-xl">
                      BioTRAK Research Foundation
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                >
                  <img
                    src={require("../Assets/4.jpg")}
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                    {/* <span class="text-gray-500">Women</span> */}
                    <span class="text-lg font-bold text-gray-800 lg:text-xl">
                      Taloja Industries Asso. & Taloja CETP
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------- */}
      {/* TRUSTED BY THE BEST  */}
      <div class=" py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-8 lg:text-3xl">
            Trusted by the best
          </h2>

          <div class="grid grid-cols-2 gap-6 rounded-lg bg-gray-700 p-6 sm:h-40 sm:content-evenly md:grid-cols-5">
            <div class="flex justify-center text-gray-400">
              {/* <svg
                class="h-6 w-auto sm:h-8 lg:h-10"
                width="154"
                height="39"
                viewBox="0 0 154 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M35.0227 31H39.9432V21.3864H49.4091V17.3295H39.9432V11.7841H50.4318V7.72727H35.0227V31ZM58.4915 7.72727H53.6506V31H58.4915V7.72727ZM70.2557 31.3409C75.5511 31.3409 78.8466 27.7159 78.8466 22.3409C78.8466 16.9318 75.5511 13.3182 70.2557 13.3182C64.9602 13.3182 61.6648 16.9318 61.6648 22.3409C61.6648 27.7159 64.9602 31.3409 70.2557 31.3409ZM70.2784 27.5909C67.8352 27.5909 66.5852 25.3523 66.5852 22.3068C66.5852 19.2614 67.8352 17.0114 70.2784 17.0114C72.6761 17.0114 73.9261 19.2614 73.9261 22.3068C73.9261 25.3523 72.6761 27.5909 70.2784 27.5909ZM85 31H90.1136L93.1136 20.0227H93.3295L96.3295 31H101.455L106.193 13.5455H101.307L98.6477 25.2045H98.5L95.6364 13.5455H90.8295L88.0114 25.2727H87.8523L85.1477 13.5455H80.25L85 31ZM108.776 31H113.616V21.125C113.616 18.9773 115.185 17.5 117.321 17.5C117.991 17.5 118.912 17.6136 119.366 17.7614V13.4659C118.935 13.3636 118.332 13.2955 117.844 13.2955C115.889 13.2955 114.287 14.4318 113.651 16.5909H113.469V13.5455H108.776V31ZM121.869 31H126.71V13.5455H121.869V31ZM124.301 11.2955C125.744 11.2955 126.926 10.1932 126.926 8.84091C126.926 7.5 125.744 6.39773 124.301 6.39773C122.869 6.39773 121.688 7.5 121.688 8.84091C121.688 10.1932 122.869 11.2955 124.301 11.2955ZM139.974 13.5455H136.509V12.375C136.509 11.1932 136.986 10.5 138.406 10.5C138.986 10.5 139.577 10.625 139.963 10.75L140.815 7.11364C140.213 6.93182 138.884 6.63636 137.395 6.63636C134.111 6.63636 131.668 8.48864 131.668 12.2841V13.5455H129.202V17.1818H131.668V31H136.509V17.1818H139.974V13.5455ZM152.216 13.5455H148.932V9.36364H144.091V13.5455H141.705V17.1818H144.091V26.2727C144.068 29.6932 146.398 31.3864 149.909 31.2386C151.159 31.1932 152.045 30.9432 152.534 30.7841L151.773 27.1818C151.534 27.2273 151.023 27.3409 150.568 27.3409C149.602 27.3409 148.932 26.9773 148.932 25.6364V17.1818H152.216V13.5455Z" />
                <path d="M24 8V20L12 32H0V20L12 8H24Z" />
              </svg> */}
              <img
                src={require("../Assets/tata-icon.png")}
                alt=""
                className="w-[80px] h-[80px] mt-5"
              />
            </div>
            <div class="flex justify-center text-gray-400">
              {/* <svg
                class="h-6 w-auto sm:h-8 lg:h-10"
                width="186"
                height="39"
                viewBox="0 0 186 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M43.0909 31C50.1818 31 54.2841 26.6023 54.2841 19.3295C54.2841 12.0909 50.1818 7.72727 43.3295 7.72727H35.5568V31H43.0909ZM39.0682 27.9318V10.7955H43.1136C48.2045 10.7955 50.8295 13.8409 50.8295 19.3295C50.8295 24.8409 48.2045 27.9318 42.8977 27.9318H39.0682ZM63.4574 31.3864C66.3438 31.3864 67.9688 29.9205 68.6165 28.6136H68.7528V31H72.071V19.4091C72.071 14.3295 68.071 13.3182 65.2983 13.3182C62.1392 13.3182 59.2301 14.5909 58.0938 17.7727L61.2869 18.5C61.7869 17.2614 63.0597 16.0682 65.3438 16.0682C67.5369 16.0682 68.6619 17.2159 68.6619 19.1932V19.2727C68.6619 20.5114 67.3892 20.4886 64.2528 20.8523C60.946 21.2386 57.5597 22.1023 57.5597 26.0682C57.5597 29.5 60.1392 31.3864 63.4574 31.3864ZM64.196 28.6591C62.2756 28.6591 60.8892 27.7955 60.8892 26.1136C60.8892 24.2955 62.5028 23.6477 64.4688 23.3864C65.571 23.2386 68.1847 22.9432 68.6733 22.4545V24.7045C68.6733 26.7727 67.0256 28.6591 64.196 28.6591ZM89.6761 17.8068C88.9716 15.0909 86.8466 13.3182 83.0739 13.3182C79.1307 13.3182 76.3352 15.3977 76.3352 18.4886C76.3352 20.9659 77.8352 22.6136 81.108 23.3409L84.0625 23.9886C85.7443 24.3636 86.5284 25.1136 86.5284 26.2045C86.5284 27.5568 85.0852 28.6136 82.858 28.6136C80.8239 28.6136 79.517 27.7386 79.108 26.0227L75.8239 26.5227C76.392 29.6136 78.9602 31.3523 82.8807 31.3523C87.0966 31.3523 90.017 29.1136 90.017 25.9545C90.017 23.4886 88.4489 21.9659 85.2443 21.2273L82.4716 20.5909C80.5511 20.1364 79.7216 19.4886 79.733 18.3068C79.7216 16.9659 81.1761 16.0114 83.108 16.0114C85.2216 16.0114 86.1989 17.1818 86.5966 18.3523L89.6761 17.8068ZM97.1506 20.6364C97.1506 17.8523 98.9119 16.2614 101.332 16.2614C103.673 16.2614 105.071 17.75 105.071 20.3068V31H108.469V19.8977C108.469 15.5455 106.082 13.3182 102.491 13.3182C99.7756 13.3182 98.1392 14.5 97.321 16.3864H97.1051V7.72727H93.7528V31H97.1506V20.6364ZM119.537 31.3409C122.719 31.3409 123.969 29.3977 124.582 28.2841H124.866V31H128.185V7.72727H124.787V16.375H124.582C123.969 15.2955 122.81 13.3182 119.56 13.3182C115.344 13.3182 112.241 16.6477 112.241 22.3068C112.241 27.9545 115.298 31.3409 119.537 31.3409ZM120.287 28.4432C117.253 28.4432 115.673 25.7727 115.673 22.2727C115.673 18.8068 117.219 16.2045 120.287 16.2045C123.253 16.2045 124.844 18.625 124.844 22.2727C124.844 25.9432 123.219 28.4432 120.287 28.4432ZM138.114 31.3864C141 31.3864 142.625 29.9205 143.273 28.6136H143.409V31H146.727V19.4091C146.727 14.3295 142.727 13.3182 139.955 13.3182C136.795 13.3182 133.886 14.5909 132.75 17.7727L135.943 18.5C136.443 17.2614 137.716 16.0682 140 16.0682C142.193 16.0682 143.318 17.2159 143.318 19.1932V19.2727C143.318 20.5114 142.045 20.4886 138.909 20.8523C135.602 21.2386 132.216 22.1023 132.216 26.0682C132.216 29.5 134.795 31.3864 138.114 31.3864ZM138.852 28.6591C136.932 28.6591 135.545 27.7955 135.545 26.1136C135.545 24.2955 137.159 23.6477 139.125 23.3864C140.227 23.2386 142.841 22.9432 143.33 22.4545V24.7045C143.33 26.7727 141.682 28.6591 138.852 28.6591ZM164.332 17.8068C163.628 15.0909 161.503 13.3182 157.73 13.3182C153.787 13.3182 150.991 15.3977 150.991 18.4886C150.991 20.9659 152.491 22.6136 155.764 23.3409L158.719 23.9886C160.401 24.3636 161.185 25.1136 161.185 26.2045C161.185 27.5568 159.741 28.6136 157.514 28.6136C155.48 28.6136 154.173 27.7386 153.764 26.0227L150.48 26.5227C151.048 29.6136 153.616 31.3523 157.537 31.3523C161.753 31.3523 164.673 29.1136 164.673 25.9545C164.673 23.4886 163.105 21.9659 159.901 21.2273L157.128 20.5909C155.207 20.1364 154.378 19.4886 154.389 18.3068C154.378 16.9659 155.832 16.0114 157.764 16.0114C159.878 16.0114 160.855 17.1818 161.253 18.3523L164.332 17.8068ZM171.807 20.6364C171.807 17.8523 173.568 16.2614 175.989 16.2614C178.33 16.2614 179.727 17.75 179.727 20.3068V31H183.125V19.8977C183.125 15.5455 180.739 13.3182 177.148 13.3182C174.432 13.3182 172.795 14.5 171.977 16.3864H171.761V7.72727H168.409V31H171.807V20.6364Z" />
                <path d="M0 31L24 7V31H0Z" />
              </svg> */}
              <img
                src={require("../Assets/Tech_Mahindra-Logo.wine.png")}
                alt=""
                className="w-[150px] h-[150px]"
              />
            </div>
            <div class="flex justify-center text-gray-400">
              {/* <svg
                class="h-6 w-auto sm:h-8 lg:h-10"
                width="173"
                height="39"
                viewBox="0 0 173 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M43.2727 31C50.3636 31 54.6591 26.6136 54.6591 19.3409C54.6591 12.0909 50.3636 7.72727 43.3409 7.72727H35.0227V31H43.2727ZM39.9432 26.7841V11.9432H43.0795C47.4432 11.9432 49.75 14.1705 49.75 19.3409C49.75 24.5341 47.4432 26.7841 43.0682 26.7841H39.9432ZM63.1903 31.3295C65.7699 31.3295 67.4403 30.2045 68.2926 28.5795H68.429V31H73.0199V19.2273C73.0199 15.0682 69.4972 13.3182 65.6108 13.3182C61.429 13.3182 58.679 15.3182 58.0085 18.5L62.4858 18.8636C62.8153 17.7045 63.8494 16.8523 65.5881 16.8523C67.2358 16.8523 68.179 17.6818 68.179 19.1136V19.1818C68.179 20.3068 66.9858 20.4545 63.9517 20.75C60.4972 21.0682 57.3949 22.2273 57.3949 26.125C57.3949 29.5795 59.8608 31.3295 63.1903 31.3295ZM64.5767 27.9886C63.0881 27.9886 62.0199 27.2955 62.0199 25.9659C62.0199 24.6023 63.1449 23.9318 64.8494 23.6932C65.9062 23.5455 67.6335 23.2955 68.2131 22.9091V24.7614C68.2131 26.5909 66.7017 27.9886 64.5767 27.9886ZM86.0597 13.5455H82.7756V9.36364H77.9347V13.5455H75.5483V17.1818H77.9347V26.2727C77.9119 29.6932 80.2415 31.3864 83.7528 31.2386C85.0028 31.1932 85.8892 30.9432 86.3778 30.7841L85.6165 27.1818C85.3778 27.2273 84.8665 27.3409 84.4119 27.3409C83.446 27.3409 82.7756 26.9773 82.7756 25.6364V17.1818H86.0597V13.5455ZM94.1903 31.3295C96.7699 31.3295 98.4403 30.2045 99.2926 28.5795H99.429V31H104.02V19.2273C104.02 15.0682 100.497 13.3182 96.6108 13.3182C92.429 13.3182 89.679 15.3182 89.0085 18.5L93.4858 18.8636C93.8153 17.7045 94.8494 16.8523 96.5881 16.8523C98.2358 16.8523 99.179 17.6818 99.179 19.1136V19.1818C99.179 20.3068 97.9858 20.4545 94.9517 20.75C91.4972 21.0682 88.3949 22.2273 88.3949 26.125C88.3949 29.5795 90.8608 31.3295 94.1903 31.3295ZM95.5767 27.9886C94.0881 27.9886 93.0199 27.2955 93.0199 25.9659C93.0199 24.6023 94.1449 23.9318 95.8494 23.6932C96.9062 23.5455 98.6335 23.2955 99.2131 22.9091V24.7614C99.2131 26.5909 97.7017 27.9886 95.5767 27.9886ZM114.207 31.2841C117.026 31.2841 118.491 29.6591 119.162 28.2045H119.366V31H124.139V7.72727H119.31V16.4773H119.162C118.514 15.0568 117.116 13.3182 114.196 13.3182C110.366 13.3182 107.128 16.2955 107.128 22.2955C107.128 28.1364 110.23 31.2841 114.207 31.2841ZM115.741 27.4318C113.366 27.4318 112.071 25.3182 112.071 22.2727C112.071 19.25 113.344 17.1705 115.741 17.1705C118.094 17.1705 119.412 19.1591 119.412 22.2727C119.412 25.3864 118.071 27.4318 115.741 27.4318ZM128.119 31H132.96V21.125C132.96 18.9773 134.528 17.5 136.665 17.5C137.335 17.5 138.256 17.6136 138.71 17.7614V13.4659C138.278 13.3636 137.676 13.2955 137.188 13.2955C135.233 13.2955 133.631 14.4318 132.994 16.5909H132.812V13.5455H128.119V31ZM141.213 31H146.054V13.5455H141.213V31ZM143.645 11.2955C145.088 11.2955 146.27 10.1932 146.27 8.84091C146.27 7.5 145.088 6.39773 143.645 6.39773C142.213 6.39773 141.031 7.5 141.031 8.84091C141.031 10.1932 142.213 11.2955 143.645 11.2955ZM159.318 13.5455H155.852V12.375C155.852 11.1932 156.33 10.5 157.75 10.5C158.33 10.5 158.92 10.625 159.307 10.75L160.159 7.11364C159.557 6.93182 158.227 6.63636 156.739 6.63636C153.455 6.63636 151.011 8.48864 151.011 12.2841V13.5455H148.545V17.1818H151.011V31H155.852V17.1818H159.318V13.5455ZM171.56 13.5455H168.276V9.36364H163.435V13.5455H161.048V17.1818H163.435V26.2727C163.412 29.6932 165.741 31.3864 169.253 31.2386C170.503 31.1932 171.389 30.9432 171.878 30.7841L171.116 27.1818C170.878 27.2273 170.366 27.3409 169.912 27.3409C168.946 27.3409 168.276 26.9773 168.276 25.6364V17.1818H171.56V13.5455Z" />
                <rect y="26" width="24" height="5" />
                <rect x="9" y="17" width="15" height="5" />
              </svg> */}
              <img
                src={require("../Assets/Capgemini-Logo.wine.png")}
                alt=""
                className="w-[150px] h-[150px]"
              />
            </div>
            <div class="flex justify-center text-gray-400">
              {/* <svg
                class="h-6 w-auto sm:h-8 lg:h-10"
                width="146"
                height="39"
                viewBox="0 0 146 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M55.0909 7.72727V22.9091C55.0909 26.3182 52.75 28.7727 48.8636 28.7727C44.9773 28.7727 42.6364 26.3182 42.6364 22.9091V7.72727H39.8182V23.1364C39.8182 27.9091 43.3864 31.4091 48.8636 31.4091C54.3409 31.4091 57.9091 27.9091 57.9091 23.1364V7.72727H55.0909ZM63.1733 37.5455H65.8551V28.3182H66.0824C66.6733 29.2727 67.8097 31.3636 71.1733 31.3636C75.5369 31.3636 78.5824 27.8636 78.5824 22.3182C78.5824 16.8182 75.5369 13.3182 71.1278 13.3182C67.7188 13.3182 66.6733 15.4091 66.0824 16.3182H65.7642V13.5455H63.1733V37.5455ZM65.8097 22.2727C65.8097 18.3636 67.5369 15.7273 70.8097 15.7273C74.2188 15.7273 75.9006 18.5909 75.9006 22.2727C75.9006 26 74.1733 28.9545 70.8097 28.9545C67.5824 28.9545 65.8097 26.2273 65.8097 22.2727ZM90.2642 13.5455H86.5369V9.36364H83.8551V13.5455H81.2188V15.8182H83.8551V26.7273C83.8551 29.7727 86.3097 31.2273 88.5824 31.2273C89.5824 31.2273 90.2188 31.0455 90.5824 30.9091L90.0369 28.5C89.8097 28.5455 89.446 28.6364 88.8551 28.6364C87.6733 28.6364 86.5369 28.2727 86.5369 26V15.8182H90.2642V13.5455ZM94.2983 31H96.9801V13.5455H94.2983V31ZM95.6619 10.6364C96.7074 10.6364 97.571 9.81818 97.571 8.81818C97.571 7.81818 96.7074 7 95.6619 7C94.6165 7 93.7528 7.81818 93.7528 8.81818C93.7528 9.81818 94.6165 10.6364 95.6619 10.6364ZM101.892 31H104.574V20.0909C104.574 17.5341 106.438 15.7273 108.528 15.7273C110.562 15.7273 111.983 17.0568 111.983 19.0455V31H114.71V19.6364C114.71 17.3864 116.119 15.7273 118.574 15.7273C120.483 15.7273 122.119 16.7386 122.119 19.3182V31H124.801V19.3182C124.801 15.2159 122.597 13.3182 119.483 13.3182C116.983 13.3182 115.153 14.4659 114.256 16.2727H114.074C113.21 14.4091 111.688 13.3182 109.392 13.3182C107.119 13.3182 105.438 14.4091 104.71 16.2727H104.483V13.5455H101.892V31ZM137.023 31.3636C140.568 31.3636 143.159 29.5909 143.977 26.9545L141.386 26.2273C140.705 28.0455 139.125 28.9545 137.023 28.9545C133.875 28.9545 131.705 26.9205 131.58 23.1818H144.25V22.0455C144.25 15.5455 140.386 13.3182 136.75 13.3182C132.023 13.3182 128.886 17.0455 128.886 22.4091C128.886 27.7727 131.977 31.3636 137.023 31.3636ZM131.58 20.8636C131.761 18.1477 133.682 15.7273 136.75 15.7273C139.659 15.7273 141.523 17.9091 141.523 20.8636H131.58Z" />
                <path d="M16 6L29.8564 30H2.14359L16 6Z" />
              </svg> */}
              <img
                src={require("../Assets/Accenture-Logo.wine.png")}
                alt=""
                className="w-[150px] h-[150px]"
              />
            </div>
            <div class="flex justify-center text-gray-400">
              {/* <svg
                class="h-6 w-auto sm:h-8 lg:h-10"
                width="146"
                height="39"
                viewBox="0 0 146 39"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M55.0909 7.72727V22.9091C55.0909 26.3182 52.75 28.7727 48.8636 28.7727C44.9773 28.7727 42.6364 26.3182 42.6364 22.9091V7.72727H39.8182V23.1364C39.8182 27.9091 43.3864 31.4091 48.8636 31.4091C54.3409 31.4091 57.9091 27.9091 57.9091 23.1364V7.72727H55.0909ZM63.1733 37.5455H65.8551V28.3182H66.0824C66.6733 29.2727 67.8097 31.3636 71.1733 31.3636C75.5369 31.3636 78.5824 27.8636 78.5824 22.3182C78.5824 16.8182 75.5369 13.3182 71.1278 13.3182C67.7188 13.3182 66.6733 15.4091 66.0824 16.3182H65.7642V13.5455H63.1733V37.5455ZM65.8097 22.2727C65.8097 18.3636 67.5369 15.7273 70.8097 15.7273C74.2188 15.7273 75.9006 18.5909 75.9006 22.2727C75.9006 26 74.1733 28.9545 70.8097 28.9545C67.5824 28.9545 65.8097 26.2273 65.8097 22.2727ZM90.2642 13.5455H86.5369V9.36364H83.8551V13.5455H81.2188V15.8182H83.8551V26.7273C83.8551 29.7727 86.3097 31.2273 88.5824 31.2273C89.5824 31.2273 90.2188 31.0455 90.5824 30.9091L90.0369 28.5C89.8097 28.5455 89.446 28.6364 88.8551 28.6364C87.6733 28.6364 86.5369 28.2727 86.5369 26V15.8182H90.2642V13.5455ZM94.2983 31H96.9801V13.5455H94.2983V31ZM95.6619 10.6364C96.7074 10.6364 97.571 9.81818 97.571 8.81818C97.571 7.81818 96.7074 7 95.6619 7C94.6165 7 93.7528 7.81818 93.7528 8.81818C93.7528 9.81818 94.6165 10.6364 95.6619 10.6364ZM101.892 31H104.574V20.0909C104.574 17.5341 106.438 15.7273 108.528 15.7273C110.562 15.7273 111.983 17.0568 111.983 19.0455V31H114.71V19.6364C114.71 17.3864 116.119 15.7273 118.574 15.7273C120.483 15.7273 122.119 16.7386 122.119 19.3182V31H124.801V19.3182C124.801 15.2159 122.597 13.3182 119.483 13.3182C116.983 13.3182 115.153 14.4659 114.256 16.2727H114.074C113.21 14.4091 111.688 13.3182 109.392 13.3182C107.119 13.3182 105.438 14.4091 104.71 16.2727H104.483V13.5455H101.892V31ZM137.023 31.3636C140.568 31.3636 143.159 29.5909 143.977 26.9545L141.386 26.2273C140.705 28.0455 139.125 28.9545 137.023 28.9545C133.875 28.9545 131.705 26.9205 131.58 23.1818H144.25V22.0455C144.25 15.5455 140.386 13.3182 136.75 13.3182C132.023 13.3182 128.886 17.0455 128.886 22.4091C128.886 27.7727 131.977 31.3636 137.023 31.3636ZM131.58 20.8636C131.761 18.1477 133.682 15.7273 136.75 15.7273C139.659 15.7273 141.523 17.9091 141.523 20.8636H131.58Z" />
                <path d="M16 6L29.8564 30H2.14359L16 6Z" />
              </svg> */}
              <img
                src={require("../Assets/Wipro_Primary_Logo_Color_RGB.svg.png")}
                alt=""
                className="w-[80px] h-[80px] mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------- */}
      <div class=" py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-white md:mb-12 lg:text-3xl">
            What others say about us
          </h2>

          <div class="grid gap-4 md:grid-cols-2 md:gap-8">
            <div class="flex flex-col items-center gap-4 rounded-lg bg-gray-700 px-8 py-6 md:gap-6">
              <div class="max-w-md text-center text-white lg:text-lg">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    John McCulling
                  </div>
                  <p class="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center gap-4 rounded-lg bg-gray-700 px-8 py-6 md:gap-6">
              <div class="max-w-md text-center text-white lg:text-lg">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    Kate Berg
                  </div>
                  <p class="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                    CFO / Dashdash
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src={require("../Assets/sap.png")}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div class="md:pt-8">
              {/* <p class="text-center font-bold text-indigo-500 md:text-left">
                Who we are
              </p> */}

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                We are working together with SAP & ERP Solution
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Providing Project Consultancy With SAP HANA, Fiori, Success
                Factor, Bottom Oracle EBC, Ariba, C4C.
                <br />
                <br />
                SAP Business One is an affordable, integrated enterprise
                resource planning – ERP solution designed to enable growing
                small to midsized enterprises (SMEs) and large enterprises. Now
                is the time to discover how SAP Business One can make life
                simpler.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div class="md:pt-8">
              {/* <p class="text-center font-bold text-indigo-500 md:text-left">
                Who we are
              </p> */}

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                We are providing Web Application & App Development services
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                With a web application, you can build your data with multiple
                filters as per the requirement.
                <br />
                <br />
                Our excellent website design & development services help boost
                your business and increase your business sales. We develop
                mobile apps that help to influence your customers and support
                your business for growth.
              </p>
            </div>

            <div>
              <div class="h-64 overflow-hidden rounded-lg bg-white shadow-lg md:h-auto">
                <img
                  src={require("../Assets/webapp.png")}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------- */}
      {/* FOOTER SECTION  */}
      <div class="bg-gray-900">
        <footer class="mx-auto max-w-screen-2xl px-4 md:px-8 ">
          <div class="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12 justify-between">
            <div class="col-span-full lg:col-span-2">
              <Link to="/">
                <div class="mb-4 lg:-mt-2">
                  <a
                    href="/"
                    class="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                    aria-label="logo"
                  >
                    <img
                      src={require("../Assets/logo.png")}
                      alt=""
                      className="h-[100px] w-[130px] top-0 left-0"
                    />{" "}
                    Technoriya ERP Solution
                  </a>
                </div>
              </Link>

              {/* <p class="mb-6 text-gray-400 sm:pr-8">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p> */}

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
                  <Link to="/webdev">
                    <a
                      href="#"
                      class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Responsive Website Design
                    </a>
                  </Link>
                </div>

                <div>
                  <Link to="/webdev">
                    <a
                      href="#"
                      class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Web Development
                    </a>
                  </Link>
                </div>

                <div>
                  <Link to="/webdev">
                    <a
                      href="#"
                      class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Website Maintenance
                    </a>
                  </Link>
                </div>
                <div>
                  <Link to="/webdev">
                    <a
                      href="#"
                      class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Mobile App Development
                    </a>
                  </Link>
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
                <Link to="/contact">
                  <div>
                    <a
                      href="#"
                      class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Contact
                    </a>
                  </div>
                </Link>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Documentation
                  </a>
                </div>
                <Link to="/eLearning">
                  <div>
                    <a
                      href="#"
                      class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Chat
                    </a>
                  </div>
                </Link>
                <Link to="/contact">
                  <div>
                    <a
                      href="#"
                      class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      FAQ
                    </a>
                  </div>
                </Link>
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

export default Hero1;
