import React from "react";
import bgImage from "../Assets/sebastian-svenson-LpbyDENbQQg-unsplash.jpg";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <div>
      <div className="">
        <div
          className="bg-cover bg-center h-[500px] flex items-center justify-center text-white "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h1 className="text-6xl text-white ">About us</h1>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}
      {/* ABOUT US  */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="">
              <div class="mt-7 h-64 overflow-hidden rounded-lg bg-gray-900 shadow-lg md:h-auto">
                <img
                  src={require("../Assets/3d_1.png")}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="h-[400px] w-[200px] object-cover object-center ml-20 "
                />
              </div>
            </div>

            <div class="md:pt-8">
              <p class="text-center font-bold text-indigo-500 md:text-left">
                About Us{" "}
              </p>

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                About Technoriya ERP Solution
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Technoriya Infrastructure Services(TIS) Group has over Seven
                years of experience working with customers on their software
                needs, having strategic alliances with technology.
                <br />
                <br />
                Multiyear relationship with Technology Majors. Robust Software
                Asset management plan for Technology Majors help customers plan,
                acquire, deploy their software assets Optimize software spend
                and licences compliance. The next generation of IT solutions
                across infrasructure and applications is here and the CIO who
                gets the best out these that will keep their business on the
                winning side. At Technoriya infrastructure group, we bring in
                the experience of working with the best of breed technology
                partners and customers makes the difference to win with IT for
                your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------- */}
      {/* ABOUT US 2  */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div class="md:pt-8">
              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                The ERP Solution!
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                The World is flooded multiple Technologies that might address
                your requirement. Helping you choose the one that fits your
                enterprise the best is what we, at Technoriya ERP Solution do.
                In today's rapidly evolving software market, there is visible
                shift from a Perpetual Licesing for On-permise infrastructure to
                subscription licensing for a cloud based infrastructure model.
              </p>
            </div>

            <div className="">
              <div class="mt-7 h-64 overflow-hidden rounded-lg bg-gray-900 shadow-lg md:h-auto">
                <img
                  src={require("../Assets/3d_2.png")}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class=" object-cover object-center ml-20 "
                />
              </div>
            </div>
          </div>
          <div className="mt-20">
            {" "}
            <p className="text-gray-500 text-xl">
              {" "}
              At Technoriya ERP Solution, we help you streamline your IT
              Infrastructure based upon your enterprise priorities-On-Premise,
              Hybrid or a Cloud model. We recognize that the real purpose of our
              Customer's IT Team is to impact the fundamental of business
              strategy by reshaping core processes, hence our goal is to help
              make your Core IT Infra lean along with reduced overheads.
              Technoriya Infrastructure Service(TIS) Group has over 7+ years of
              experience working with customers on their software needs, having
              strategic alliances with technology majors like Microsoft.
              <br />
              <br />
              Technoriya ERP Solution committed for providing quality Explicit
              implementation & up gradation & supports & corporate trainee of
              ERP All our trainers are real time working consultant from MNC's
              who have great experience in implementing & supporting range of
              multinational project. We share our knowledge & experience with
              student who have great deal of aspiration to be in industry.
            </p>
          </div>
        </div>
      </div>
      {/* ----------------  */}
      {/* FEATURES   */}
      <div class="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8 relative z-10">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our competitive advantage
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div class="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16 relative z-10">
            {/* <!-- feature - start --> */}
            <div class="flex flex-col items-center">
              <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>

              <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">
                Analyze
              </h3>
              <p class="mb-2 text-center text-gray-700">
                Our exceptionally talented app Developers are specializing in
                highly effective apps design & development. Proper analyzing is
                the first step of whole project development process.In the whole
                project analyzing process include the intention of business,
                which part is most important on this project, analysis the whole
                project and in what way we give best result.
              </p>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div class="flex flex-col items-center">
              <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">
                Strategy & Design
              </h3>
              <p class="mb-2 text-center text-gray-700">
                Our developer team is always develop a proper strategy for
                developing any project. On the whole project development process
                developing a strategy is an important part of any business.
                Attractive app design not only helps for attract more and more
                user but also help the growth of any business.Our developer team
                design any project according to the latest design, latest
                technology and able to design any project according to the
                customers requirement are the expectation for designing any
                mobile apps.
              </p>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div class="flex flex-col items-center">
              <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>

              <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">
                Development
              </h3>
              <p class="mb-2 text-center text-gray-700">
                Our developer team is highly qualify and they better know how to
                develop any android app according to latest technology and
                design. The development process include what kind of proper
                coding we use, what is the proper structer of apps, the security
                of mobile app, development according to ideal way.
              </p>
            </div>
            {/* <!-- feature - end --> */}
          </div>

          {/* Scrolling animation - Before */}
          <div class="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-20"></div>
          {/* Scrolling animation - After */}
          <div class="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-20"></div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------  */}
      {/* OUR TEAM  */}

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Meet our Team
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12 justify-around">
            {/* <!-- person - start --> */}
            <div className="">
              <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
                <img
                  src={require("../Assets/neeraj.jpg")}
                  loading="lazy"
                  alt="Photo by christian ferrer"
                  class="h-full w-full object-cover object-center "
                />
              </div>

              <div>
                <div class="font-bold text-indigo-500 md:text-lg">
                  Neeraj Kumar
                </div>
                <p class="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
                  Chief Executive Officer
                </p>

                {/* <!-- social - start --> */}
                <div class="flex">
                  <div class="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/neeraj-kumar-163aa0118/"
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
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}
            {/* <!-- person - start --> */}
            <div>
              <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
                <img
                  src={require("../Assets/sazia.jpg")}
                  loading="lazy"
                  alt="Photo by Radu Florin"
                  class="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div class="font-bold text-indigo-500 md:text-lg">
                  Dr. Sazia Khan
                </div>
                <p class="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
                  Prof. ITM Business School
                </p>

                {/* <!-- social - start --> */}
                <div class="flex">
                  <div class="flex gap-4">
                    <a
                      href="#"
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
                      href="#"
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
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------  */}
      {/* FOOTER  */}
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
      {/* -----------------------------------------------------------------------------------------  */}
    </div>
  );
};

export default AboutCompany;
