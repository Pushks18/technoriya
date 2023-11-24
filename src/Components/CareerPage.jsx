import React, { useState } from "react";
import bgImage from "../Assets/sebastian-svenson-LpbyDENbQQg-unsplash.jpg";
import toast, { Toaster } from "react-hot-toast";
import { storage } from "../Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

const CareerPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
    experience: "",
    ctc: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const [file, setFile] = useState(null);

  const postJobData = async (e) => {
    e.preventDefault();
    const { name, email, phone, job, experience, ctc } = user;

    if (file) {
      const fileRef = ref(storage, `resumes/${file.name + v4()}`);
      uploadBytes(fileRef, file).then(() => {
        toast.success("File Uploaded!");
        setFile(null);
      });
    } else {
      toast.error("Select a file!");
    }

    if (name && email && phone && job && experience && ctc) {
      const res = await fetch(
        "https://technoriya-909aa-default-rtdb.firebaseio.com/jobs.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            job,
            experience,
            ctc,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          job: "",
          experience: "",
          ctc: "",
        });
        // alert("Appointment Booked Successfully");
        toast.success("Applied Successfully!");
      }
    } else {
      toast.error("Fill in the required fields first!");
    }
  };

  // const postJob = () => {
  //   console.log("hello");
  //   if (file) {
  //     const fileRef = ref(storage, `resumes/${file.name + v4()}`);
  //     uploadBytes(fileRef, file).then(() => {
  //       toast.success("File Uploaded!");
  //     });
  //   } else {
  //     toast.error("Select a file!");
  //   }
  // };
  return (
    <div>
      <Toaster />
      {/* COVER BG STARTS  */}
      <div className="">
        <div
          className="bg-cover bg-center h-[500px]  flex items-center justify-center text-white "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h1 className="text-6xl text-white ">Career</h1>
        </div>
      </div>
      {/* COVER BG ENDS  */}

      {/* --------------------------------------------------------------------------- */}
      {/* TABLE STARTS  */}
      <div className="mt-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-black font-semibold  ">
          Openings for SAP
        </h1>
        <div className="w-[1500px] h-[350px] mt-20 flex justify-center items-center">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center items-center">
            <table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400 border-collapse">
              <thead class="text-xs text-black uppercase bg-gray-200">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Job Title
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total Experience
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Domain Experience
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-500 text-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SAP PP/QM Consultant{" "}
                  </th>
                  <td class="px-6 py-4">Bangalore and Mumbai </td>
                  <td class="px-6 py-4">4-7 Years </td>
                  <td class="px-6 py-4">2-4 Years </td>
                </tr>
                <tr class="bg-gray-700 text-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SAP FICO Consultant{" "}
                  </th>
                  <td class="px-6 py-4">Bangalore, Chennai and Mumbai </td>
                  <td class="px-6 py-4">4-7 Years </td>
                  <td class="px-6 py-4">$2-4 Years </td>
                </tr>
                <tr class="bg-gray-500 text-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SAP MM Consultant{" "}
                  </th>
                  <td class="px-6 py-4">Bangalore, Chennai and Pune </td>
                  <td class="px-6 py-4">4-7 Years </td>
                  <td class="px-6 py-4">$2-4 Years </td>
                </tr>
                <tr class="bg-gray-700 text-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SAP SD Consultant{" "}
                  </th>
                  <td class="px-6 py-4">Bangalore, Chennai and Mumbai </td>
                  <td class="px-6 py-4">4-7 Years </td>
                  <td class="px-6 py-4">2-4 Years </td>
                </tr>
                <tr class="bg-gray-500 text-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SAP ABAP Consultant{" "}
                  </th>
                  <td class="px-6 py-4">Bangalore and Chennai </td>
                  <td class="px-6 py-4">4-7 Years </td>
                  <td class="px-6 py-4">2-4 Years </td>
                </tr>{" "}
                <tr class="bg-gray-700 text-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SAP PM Consultant{" "}
                  </th>
                  <td class="px-6 py-4">Bangalore, Chennai and Mumbai </td>
                  <td class="px-6 py-4">4-7 Years </td>
                  <td class="px-6 py-4">$2-4 Years </td>
                </tr>{" "}
                <tr class="bg-gray-500 text-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SAP PS Consultant{" "}
                  </th>
                  <td class="px-6 py-4">Bangalore </td>
                  <td class="px-6 py-4">4-7 Years </td>
                  <td class="px-6 py-4">$2-4 Years </td>
                </tr>{" "}
                <tr class="bg-gray-700 text-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SAP ABAP Associate Consultant{" "}
                  </th>
                  <td class="px-6 py-4">Pune </td>
                  <td class="px-6 py-4">4-7 Years </td>
                  <td class="px-6 py-4"> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* TABLE ENDS  */}
      {/* ------------------------------------------------------------------- */}
      {/* CAREER FORM STARTS  */}
      <div class="bg-white py-6 sm:py-8 lg:py-12 mt-10">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Career Form{" "}
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Fill the form below to apply for jobs.
            </p>
          </div>
          {/* <!-- text - end --> */}

          {/* <!-- form - start --> */}
          <form
            class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
            method="POST"
          >
            <div>
              <label
                for="name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name*
              </label>
              <input
                value={user.name}
                onChange={getUserData}
                name="name"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                value={user.email}
                onChange={getUserData}
                name="email"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Phone Number*
              </label>
              <input
                value={user.phone}
                onChange={getUserData}
                type="tel"
                id="phone"
                name="phone"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                required
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="job"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Enter your job type*
              </label>
              <input
                value={user.job}
                onChange={getUserData}
                name="job"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="experience"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Enter your experience*
              </label>
              <input
                value={user.experience}
                onChange={getUserData}
                name="experience"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="ctc"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Enter your expected CTC*
              </label>
              <input
                value={user.ctc}
                onChange={getUserData}
                name="ctc"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div class="sm:col-span-2">
              <label for="file">Drop your resume: </label>
              <input
                onChange={(event) => {
                  setFile(event.target.files[0]);
                }}
                type="file"
                id="file"
                name="file"
              />
            </div>

            <div class="flex items-center justify-between sm:col-span-2">
              <button
                onClick={postJobData}
                class="inline-block rounded-lg dark:bg-gray-900 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-700 md:text-base"
              >
                Sumbit
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center">
            <h1 className="mt-20 text-2xl font-semibold">
              Or Please Drop Your Resume To hr@technoriya.com
            </h1>
          </div>
          {/* <!-- form - end --> */}
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      {/* CAREER FORM ENDS  */}
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
      {/* ------------------------------------------------------------------------------ */}
      {/* FOOTER ENDS  */}
    </div>
  );
};

export default CareerPage;
