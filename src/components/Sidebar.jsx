import React, { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { gsap, Expo } from "gsap";

const Sidebar = ({ isVisible, onClose }) => {
  const [expandedSection, setExpandedSection] = useState("services");
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);
  const sidebarRef = useRef(null);

  const toggleSection = (section) => {
    if (expandedSection === section) return;
    setExpandedSection(section);
  };
  useEffect(() => {
    const servicesEl = servicesRef.current;
    const solutionsEl = solutionsRef.current;

    if (expandedSection === "services") {
      gsap.to([servicesEl, solutionsEl], {
        maxHeight: 0,
        duration: 1,
        ease: Expo.easeInOut,
        stagger: 0,
      });

      gsap.to(servicesEl, {
        maxHeight: 1000,
        duration: 1.5,
        ease: Expo.easeInOut,
      });
    } else if (expandedSection === "solutions") {
      gsap.to([solutionsEl, servicesEl], {
        maxHeight: 0,
        duration: 1,
        ease: Expo.easeInOut,
        stagger: 0,
      });

      gsap.to(solutionsEl, {
        maxHeight: 1000,
        duration: 1.5,
        ease: Expo.easeInOut,
      });
    }
  }, [expandedSection]);
  const serviceImgs = [
    {
      imgSrc: "./src/assets/media/sidebarIconImage1.webp",
      altText: "Target Not Found",
      title: "Web Design",
      description: "High-end design that captivates and converts.",
    },
    {
      imgSrc: "./src/assets/media/sidebarIconImage2.webp",
      altText: "Target Not Found",
      title: "WebFlow Development",
      description: "Fast and scalable sites with the power of Webflow.",
    },
    {
      imgSrc: "./src/assets/media/sidebarIconImage3.webp",
      altText: "Target Not Found",
      title: "Creative Development",
      description: "Blending storytelling with immersive experiences.",
    },
  ];
  const solutionImgs = [
    {
      imgSrc: "./src/assets/media/sidebarIconImage1.webp",
      altText: "Target Not Found",
      title: "Startups",
      description: "Stand out and scale with ease.",
    },
    {
      imgSrc: "./src/assets/media/sidebarIconImage4.webp",
      altText: "Target Not Found",
      title: "Enterprise",
      description: "Modern solutions that keep you ahead.",
    },
    {
      imgSrc: "./src/assets/media/sidebarIconImage5.webp",
      altText: "Target Not Found",
      title: "Venture Capital",
      description: "Custom sites for your unique vision.",
    },
    {
      imgSrc: "./src/assets/media/sidebarIconImage6.webp",
      altText: "Target Not Found",
      title: "Marketing Campaigns",
      description: "Websites that convert and engage.",
    },
  ];

  useEffect(() => {
    const sidebarEl = sidebarRef.current;

    if (isVisible) {
      gsap.to(sidebarEl, {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
      });
    } else {
      gsap.to(sidebarEl, {
        x: "-120%",
        duration: 1.5,
        ease: Expo.easeInOut,
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={sidebarRef}
      style={{ transform: "translateX(-120%)", marginLeft: "0.75%" }}
      className="h-full md:h-[97%] w-full md:w-1/3 bg-[var(--color-dark)] text-white p-5 border-y border-x border-zinc-600 rounded-lg fixed top-[1.5%] z-20 overflow-auto"
    >
      <div className="wrap h-full w-full">
        {/* Close Icon Top */}
        <div className="close-icon w-full pb-4">
          <button
            onClick={onClose}
            className="btn-default inline-block px-1 py-1 rounded-lg border"
          >
            <IoCloseOutline />
          </button>
        </div>
        {/* Middle Headings */}
        <div className="w-full">
          <a
            href="#"
            className="block text-2xl py-2.5 border-b border-zinc-600"
          >
            <span>Home</span>
          </a>
          <a
            href="#"
            className="block text-2xl py-2.5 border-b border-zinc-600"
          >
            <span>Portfolio</span>
          </a>
          <a
            href="#"
            className="block text-2xl py-2.5 border-b border-zinc-600"
          >
            <span>About</span>
          </a>
          <div className="w-full services_section">
            <div
              className="w-full flex items-center justify-between cursor-pointer border-b border-zinc-600"
              onClick={() => toggleSection("services")}
            >
              <span className="block w-full text-2xl py-2 pt-4 ">Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div ref={servicesRef} style={{ overflow: "hidden", maxHeight: 0 }}>
              <div className="py-3 flex items-start justify-center flex-col gap-4 transition-all duration-500">
                {serviceImgs.map((service, index) => (
                  <div className="flex items-center" key={index}>
                    <div className="w-10 h-10 bg-white bg-opacity-15 rounded-sm overflow-hidden">
                      <img
                        src={service.imgSrc}
                        alt={service.altText}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-2">
                      <span className="block text-sm font-normal">
                        {service.title}
                      </span>
                      <span className="block text-sm text-gray-500">
                        {service.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full solution_section">
            <div
              className="w-full flex items-center justify-between cursor-pointer border-b border-zinc-600"
              onClick={() => toggleSection("solutions")}
            >
              <span className="block w-full text-2xl py-2 pt-4 ">
                Solutions
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div
              ref={solutionsRef}
              style={{ overflow: "hidden", maxHeight: 0 }}
            >
              <div className="py-3 flex items-start justify-center flex-col gap-4">
                {solutionImgs.map((solution, index) => (
                  <div className="flex items-center" key={index}>
                    <div className="w-10 h-10 bg-white bg-opacity-15 rounded-sm overflow-hidden">
                      <img
                        src={solution.imgSrc}
                        alt={solution.altText}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-2">
                      <span className="block text-sm font-normal">
                        {solution.title}
                      </span>
                      <span className="block text-sm text-gray-500">
                        {solution.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a href="#" className="block text-2xl py-2 border-b border-zinc-600">
            Contact
          </a>
          <div className="text-zinc-600 py-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Refokus Tools
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Webflow Agency
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Twitter (X)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
