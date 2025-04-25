"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.1, // 10% visible
  });
  const [input, setInput] = useState("");

  return (
    <div className="w-full bt grid xl:h-70 h-full xl:grid-cols-[35%_65%]">
      <div className="w-full h-fit xl:pb-1">
        <div className="flex items-center bb2 justify-between px-5 py-3 bg-white w-full ">
          <div className="text-lg font-semibold text-gray-800">
            Pending Questions
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-2.5 py-1 rounded-full text-white text-sm font-semibold bg-[#2FBDFF] shadow-md"
          >
            02
          </motion.div>
        </div>
        <div className="bb pb-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative  mt-auto flex items-start gap-4 mb-[-11] p-5 bg-white/50 backdrop-blur-md rounded-2xl  mx-auto border border-white/10  hover:!border-blue-400  transition-all"
          >
            <span className="absolute top-3 left-3 w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-md" />

            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/20.jpg"
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-white hover:ring-blue-400 transition duration-300"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-ping"></span>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>

            {/* Content */}
            <div className="flex flex-col w-full">
              <div className="grid grid-cols-2 items-center">
                <span className="font-medium text-gray-900">Phoenix Baker</span>
                <span className="text-gray-400 text-xs text-end">
                  • 5min ago
                </span>
                <span className="text-gray-500 text-sm">@phoenix</span>
              </div>

              <p className="text-gray-900 mt-2 text-sm leading-relaxed font-medium">
                What are the requirements for opening a new store?
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex items-start gap-4 p-5 bg-white/50 backdrop-blur-md rounded-2xl  border border-white/10  hover:border-blue-400  transition-all"
        >
          <span className="absolute top-3 left-3 w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-md" />

          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/21.jpg"
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white hover:ring-blue-400 transition duration-300"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-ping"></span>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>

          {/* Content */}
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-2 items-center">
              <span className="font-medium text-gray-900">Burl Church</span>
              <span className="text-gray-400 text-xs text-end">
                • 4hour ago
              </span>
              <span className="text-gray-500 text-sm">@koray</span>
            </div>

            <p className="text-gray-900 mt-2 text-sm leading-relaxed font-medium">
              What are the requirements for opening a new store?
            </p>
          </div>
        </motion.div>
      </div>
      <div className="bg-[#F9FAFB] xl:mt-0 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center  h-full  bg-gray-50 px-4 xl:py-0 py-20 text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6 flex w-full"
          >
            <div className="text-4xl flex w-full text-[#2FBDFF]">
              <svg
                width="64"
                height="36"
                className="ml-auto mr-auto"
                viewBox="0 0 64 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_7768)">
                  <path
                    d="M21.9433 0.222656C18.3332 0.222656 14.8709 1.65679 12.3181 4.20957L3.98692 12.5408C1.43413 15.0935 0 18.5558 0 22.166C0 29.6839 6.09439 35.7782 13.6122 35.7782C17.2224 35.7782 20.6847 34.344 23.2375 31.7912L29.0002 26.0285C29.0002 26.0284 29.0003 26.0286 29.0002 26.0285L45.7908 9.23789C47.01 8.0187 48.6636 7.33377 50.3878 7.33377C53.2744 7.33377 55.7217 9.21514 56.5702 11.8186L61.8693 6.5195C59.4519 2.73328 55.213 0.222656 50.3878 0.222656C46.7776 0.222656 43.3153 1.65679 40.7625 4.20957L18.2092 26.763C16.99 27.9822 15.3364 28.6671 13.6122 28.6671C10.0217 28.6671 7.11111 25.7565 7.11111 22.166C7.11111 20.4418 7.79604 18.7882 9.01523 17.569L17.3464 9.23789C18.5656 8.0187 20.2191 7.33377 21.9433 7.33377C24.8301 7.33377 27.2773 9.21523 28.1257 11.8188L33.4249 6.51963C31.0075 2.73335 26.7687 0.222656 21.9433 0.222656Z"
                    fill="#2FBDFF"
                  />
                  <path
                    d="M17.8557 26.763C16.6365 27.9822 14.9829 28.6671 13.2587 28.6671C10.3724 28.6671 7.92538 26.7862 7.07667 24.1832L1.77771 29.4822C4.19525 33.2679 8.43383 35.7782 13.2587 35.7782C16.8689 35.7782 20.3312 34.344 22.884 31.7913L45.4373 9.23789C46.6565 8.0187 48.3101 7.33377 50.0343 7.33377C53.6248 7.33377 56.5354 10.2444 56.5354 13.8349C56.5354 15.5591 55.8505 17.2126 54.6313 18.4318L46.3001 26.763C45.0809 27.9822 43.4274 28.6671 41.7032 28.6671C38.8166 28.6671 36.3695 26.7859 35.5209 24.1826L30.2219 29.4817C32.6393 33.2678 36.878 35.7782 41.7032 35.7782C45.3134 35.7782 48.7756 34.344 51.3284 31.7913L59.6595 23.4601C62.2123 20.9073 63.6465 17.4451 63.6465 13.8349C63.6465 6.31705 57.5522 0.222656 50.0343 0.222656C46.4241 0.222656 42.9618 1.65679 40.4091 4.20957L17.8557 26.763Z"
                    fill="#2FBDFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_7768">
                    <rect
                      width="64"
                      height="35.5556"
                      fill="white"
                      transform="translate(0 0.222656)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-2xl  md:text-3xl font-medium  text-gray-800 mb-8">
            Welcome to the AI Chat Assistant
          </h1>

          {/* Input box */}
          <div className="flex  items-center w-[90%] bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-300 transition overflow-hidden">
            <input
              type="text"
              placeholder="Ask your question here.."
              className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none bg-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-3 transition duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-700"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.954125 0.649047C1.07852 0.540991 1.23215 0.472235 1.3956 0.451469C1.55906 0.430704 1.725 0.45886 1.87246 0.53238L16.8725 8.03238C17.0111 8.10149 17.1278 8.2079 17.2093 8.33965C17.2909 8.4714 17.3341 8.62327 17.3341 8.77821C17.3341 8.93315 17.2909 9.08503 17.2093 9.21678C17.1278 9.34853 17.0111 9.45493 16.8725 9.52405L1.87246 17.024C1.72501 17.0978 1.55899 17.1262 1.39541 17.1056C1.23183 17.085 1.07804 17.0163 0.953495 16.9083C0.828952 16.8002 0.739255 16.6577 0.695756 16.4987C0.652256 16.3396 0.656909 16.1713 0.709125 16.0149L2.84413 9.61155H7.33329C7.55431 9.61155 7.76627 9.52375 7.92255 9.36747C8.07883 9.21119 8.16663 8.99923 8.16663 8.77821C8.16663 8.5572 8.07883 8.34524 7.92255 8.18896C7.76627 8.03268 7.55431 7.94488 7.33329 7.94488H2.84413L0.708292 1.54155C0.656345 1.38522 0.651893 1.21701 0.6955 1.05816C0.739106 0.899305 0.829648 0.75694 0.954125 0.649047Z"
                  fill="#1C222B"
                  fillOpacity="0.3"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
