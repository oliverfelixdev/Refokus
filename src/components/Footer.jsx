import React from "react";
import { FaArrowRightLong, FaArrowRight } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full min-h-[70vh] pt-20">
      <div className="sections flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="w-full md:w-[28%] h-[29rem] rounded-lg p-5 hover:px-6 flex items-start justify-between flex-col bg-[#46289A] hover:bg-[#ffffff] hover:text-[var(--color-dark)] transition-all duration-300">
          <div className="w-full flex items-start justify-between flex-col gap-7">
            <div className="w-full flex items-start justify-between">
              <span className="text-xs font-medium">BLOG</span>
              <span className="text-xs">
                <FaArrowRightLong />
              </span>
            </div>
            <h2 className="text-3xl font-medium">News & Insights</h2>
          </div>
          <p className="text-sm w-56">
            News and Insights on Web Design, Webflow Development, and Creative
            Development.
          </p>
        </div>
        <div className="w-full md:w-4/6 h-[29rem] rounded-lg p-5 hover:px-6 bg-[#7542FF] hover:bg-[#ffffff] hover:text-[var(--color-dark)] transition-all duration-300">
          <div className="w-full h-full flex items-start justify-between flex-col">
            <div className="w-full flex items-start justify-between flex-col gap-7">
              <div className="w-full flex items-start justify-between">
                <span className="text-xs font-medium">GET IN TOUCH</span>
                <span className="text-xs">
                  <FaArrowRightLong />
                </span>
              </div>
              <h2 className="text-3xl font-medium">
                Let's get to it <br /> together
              </h2>
            </div>
            <div className="w-full flex items-start md:items-end justify-between flex-col md:flex-row gap-4 md:gap-0 mb-3">
              <h1 className="text-8xl font-medium tracking-tighter">
                Start a Project
              </h1>
              <div className="group flex items-center justify-center gap-2 border-b border-white hover:border-b hover:border-black">
                <a href="#" className="relative text-lg">
                  Contact us
                </a>
                <span className="text-sm transition-transform group-hover:translate-x-2 duration-300 ease-in-out">
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[94.66%] relative m-auto flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-4 md:gap-0 h-28">
        <div className="flex items-center justify-start flex-wrap gap-0 md:gap-5">
          {[
            "Privacy Policy",
            "Cookie Policy",
            "Cookie Preference",
            "Webflow Agency",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-sm font-normal w-32 md:w-fit capitalize hover:text-zinc-400 hover:-translate-y-px transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-sm flex items-center gap-1">
          Refokus Clone &copy; 2025
          <a
            href="https://www.instagram.com/oliverfelix.dev"
            className="relative inline-block overflow-hidden"
          >
            <span className="block animation-span font-bold">OLIVER FELIX</span>
            <span className="absolute inset-0 block font-bold animation-span animation-span-hidden">
              OLIVER FELIX
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
