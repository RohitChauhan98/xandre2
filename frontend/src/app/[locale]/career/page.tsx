"use client";

import { useState } from "react";
import Navbar from "@/components/navbars/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import React from "react";
import search from "../../../../public/assets/icons/search.png";
import location from "../../../../public/assets/icons/location.png";
import downArrow from "../../../../public/assets/icons/select-down.png";
import skills from "../../../../public/assets/icons/skills.png";
import ButtonLightGradient from "@/components/ui/buttons/ButtonLightGradient";
import left from "../../../../public/assets/images/gold-left.png";
import right from "../../../../public/assets/images/gold-right.png";
import ButtonLightBordered from "@/components/ui/buttons/ButtonLightBordered";
import ButtonDark from "@/components/ui/buttons/ButtonDark";
import { useRouter } from "next/navigation";

const jobListings = [
  {
    jobTitle: "Financial Analyst",
    jobID: "12906",
    location: "Okinawa, Japan",
    department: "Finance",
    description: "Xandre is a leading online booking service...",
    isExpanded: false, // or true depending on the expand state
  },
  {
    jobTitle: "IT Risk & Control Analyst",
    jobID: "12907",
    location: "Okinawa, Japan",
    department: "Finance & Legal",
    isExpanded: false,
  },
  {
    jobTitle: "Product Manager",
    jobID: "12908",
    location: "Okinawa, Japan",
    department: "Product",
    isExpanded: false,
  },
  {
    jobTitle: "Account Executive",
    jobID: "12909",
    location: "Okinawa, Japan",
    department: "Business Development & Support",
    isExpanded: false,
  },
  {
    jobTitle: "Product Manager",
    jobID: "12910",
    location: "Okinawa, Japan",
    department: "Product",
    isExpanded: false,
  },
  {
    jobTitle: "Financial Analyst",
    jobID: "12911",
    location: "Okinawa, Japan",
    department: "Finance",
    isExpanded: false,
  },
];

function Career() {
  const [isExpanded, setIsExpanded] = useState<String>("");
  const router = useRouter();

  const toggleExpand = (jobId: string) => {
    setIsExpanded(isExpanded === jobId ? "" : jobId);
  };
  return (
    <main className="flex flex-col justify-center items-center w-full">
      {/* Navbar and hero section */}
      <div className="flex h-[300px] md:h-[450px] w-full justify-center relative z-10 bg-[url('/assets/career_hero_mobile.jpg')] md:bg-[url('/assets/images/career_hero.jpg')] bg-center bg-cover before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:via-transparent before:to-transparent before:opacity-75 before:z-[-5]">
        <div className="w-[1100px] px-4 md:px-0">
          <Navbar />
          <div className="mt-[60px] gap-[10px]">
            <h1 className="text-[20px] leading-[140%] md:text-[34px] md:leading-[52px] font-bold">
              Build your career <br className="block md:hidden" /> with Xandre
            </h1>
            <h3 className="text-[15px] leading-[140%] md:text-[20px] md:leading-[52px]">
              Opportunities for <br className="block md:hidden" /> the future
            </h3>
          </div>
        </div>
      </div>

      {/*main section*/}
      <div className="w-full flex flex-col gap-5 pt-6 md:pt-10 justify-center items-center">
        {/* search jobs */}
        <section className="w-full md:w-[1100px] flex flex-col md:flex-row md:items-center gap-8 md:gap-6 px-4 md:px-0 py-8">
          <div className="flex border border-glass-300 items-center w-full md:w-[300px] h-[40px] px-2">
            <Image src={search.src} alt="search image" height={25} width={19} />
            <input
              type="text"
              className="px-4 py-[19px] text-[14px] text-input-300 h-full w-full outline-none"
              placeholder="Search Jobs"
            />
          </div>
          <div className="flex border border-glass-300 items-center w-full md:w-[300px] h-[40px] px-2">
            <Image
              src={location.src}
              alt="search image"
              height={22}
              width={18.21}
            />
            <input
              type="text"
              className="px-4 py-[19px] text-[14px] text-input-300 h-full w-full outline-none"
              placeholder="Search location"
            />
          </div>

          <div className="border border-glass-300 px-2 w-full md:w-[300px] h-[40px] outline-none flex items-center justify-between">
            <div className="flex h-full w-full items-center gap-3">
              <Image
                src={skills.src}
                alt="search image"
                height={20}
                width={15.45}
              />
              <p className="text-[14px] text-input-300">Skills</p>
            </div>
            <img
              src={downArrow.src}
              alt="down arrow"
              className=" h-[6px] w-[12px]"
            />
          </div>
          <label className="flex gap-2 items-center cursor-pointer h-full ">
            <input
              type="checkbox"
              className="appearance-none  h-4 w-4 border border-input-200 rounded-full bg-white checked:bg-oxford-blue focus:outline-none transition duration-200"
            />
            <p className="text-[15px] leading-[22px] font-semibold whitespace-nowrap">
              Current employee
            </p>
          </label>
          <ButtonDark
            className="w-full md:w-[220px] h-[40px]"
            imgWidth={28}
            imgHeight={28}
          >
            Search
          </ButtonDark>
        </section>

        {/* sorting section */}
        <section className="w-full md:w-[1100px] flex justify-between px-4 md:px-0">
          <p className="font-medium">32 jobs found</p>
          <div className="flex items-center gap-3">
            <p className="text-[14px] leading-[20px] text-input-300">Sort by</p>
            <p className="text-[14px] leading-[20px] font-semibold">
              Relevance
            </p>
            <img
              src={downArrow.src}
              alt="down arrow"
              className=" h-[6px] w-[12px]"
            />
          </div>
        </section>

        {/* Job listings */}
        <section className="w-full md:w-[1100px] px-4 md:px-0">
          <div className="flex flex-col gap-5 md:gap-[30px]">
            {jobListings.map((job) => (
              <div className="grid grid-cols-1 md:grid-cols-7 gap-5 md:gap-3 min-h-[133px] p-5 md:px-6 md:py-2 border-alice-blue-200 rounded-[6px] border-2">
                {/* role and id */}
                <div className="flex flex-col justify-center gap-[15px] md:gap-2 md:col-span-2 md:py-7">
                  <h2 className="text-[20px] md:text-[26px] leading-[24px]">
                    {job.jobTitle}
                  </h2>
                  <p className="text-[14px] leading-[20px] text-input-300">
                    Job ID: {job.jobID}
                  </p>
                </div>

                {/* Expand Mobile */}
                <button
                  onClick={() => {
                    toggleExpand(job.jobID);
                  }}
                  className="flex md:hidden gap-2 justify-center items-start"
                >
                  <div className="h-[22px] w-[22px] flex items-center justify-center rounded-full bg-input-100">
                    <img
                      src={downArrow.src}
                      alt="down arrow"
                      className=" h-[4px] w-[8px]"
                    />
                  </div>
                </button>

                {/* job location and skill */}
                <div className="flex flex-col justify-center gap-[10px] md:gap-[18px] px-0 md:px-4 col-span-2">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={location.src}
                      alt="search image"
                      height={22}
                      width={18.21}
                    />
                    <h2 className="text-[14px] md:text-[20px] leading-[24px] md:text-input-300">
                      {job.location}
                    </h2>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={skills.src}
                      alt="search image"
                      height={22}
                      width={18.21}
                    />
                    <p className="text-[14px] md:text-[20px] leading-[24px]">
                      {job.department}
                    </p>
                  </div>
                </div>
                {/* apply button */}
                <div className="flex flex-col w-[296px] gap-2 md:col-span-2 mt-[40px]">
                  <ButtonLightGradient
                  onClick={()=>{router.push(`/en/career/apply`)}}
                    imgHeight={28}
                    imgWidth={28}
                    background="bg-white"
                    className="w-[296px] md:w-[220px] h-[40px]"
                  >
                    Apply now
                  </ButtonLightGradient>
                  {isExpanded === job.jobID && (
                    <div className="md:hidden mt-[30px] flex flex-col gap-10">
                      <div className="text-[11.5px] leading-[16px] md:text-[15px] md:leading-[22px] text-input-300">
                        Xandre is a leading online booking service that goes
                        beyond traditional travel platforms. We offer a
                        comprehensive range of services, including luxury
                        vacation homes, real estate, and healthcare, all
                        designed to elevate your travel experience.
                        <br className="block md:hidden" />
                        Our commitment to personalized luxury sets us apart.
                        From concierge assistance and tailored dining
                        experiences to curated wellness programs, we provide
                        exceptional service that exceeds your expectations.
                      </div>
                      <ButtonLightBordered className="w-[121px] h-[35px]">
                        Read More
                      </ButtonLightBordered>
                    </div>
                  )}
                </div>
                {/* expand */}
                <button
                  onClick={() => {
                    toggleExpand(job.jobID);
                  }}
                  className="hidden md:flex gap-2 justify-center items-end"
                >
                  <p className="w-full text-[14px] leading-[20px] text-input-300">
                    {isExpanded === job.jobID
                      ? "Close Details"
                      : "Expand Details"}
                  </p>
                  <div className="h-[22px] w-[22px] flex items-center justify-center rounded-full bg-input-100">
                    <img
                      src={downArrow.src}
                      alt="down arrow"
                      className=" h-[4px] w-[8px]"
                    />
                  </div>
                </button>
                {isExpanded === job.jobID && (
                  <div className="hidden col-span-7 md:flex flex-col gap-10 my-[30px]">
                    <div className="h-[79px] md:h-[98px] text-[11.5px] leading-[16px] md:text-[15px] md:leading-[22px]">
                      <p>
                        Xandre is a leading online booking service that goes
                        beyond traditional travel platforms. We offer a
                        comprehensive range of services, including luxury
                        vacation homes, real estate, and healthcare, all
                        designed to elevate your travel experience.
                      </p>
                      <p className="md:mt-6">
                        Our commitment to personalized luxury sets us apart.
                        From concierge assistance and tailored dining
                        experiences to curated wellness programs, we provide
                        exceptional service that exceeds your expectations.
                      </p>
                    </div>
                    <ButtonLightBordered className="w-[121px] h-[35px]">
                      Read More
                    </ButtonLightBordered>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* navigation buttons */}
        <div className="flex justify-start md:justify-end items-center gap-5 my-[30px] md:my-[60px] w-full md:w-[1100px] px-4  md:px-0">
          <button>
            <Image
              src={left.src}
              alt="left navigation"
              height={36}
              width={36}
            />
          </button>
          <button>
            <Image
              src={right.src}
              alt="left navigation"
              height={36}
              width={36}
            />
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Career;
