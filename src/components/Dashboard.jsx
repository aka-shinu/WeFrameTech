"use client";
import React, { useEffect, useState, memo } from "react";
import Footer from "./Footer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

const avatars = [
  "/avatars/woman1.webp",
  "/avatars/man2.webp",
  "/avatars/woman3.webp",
  "/avatars/woman4.webp",
  "/avatars/woman5.webp",
];

const man = [
  "/avatars/man4.webp",
  "/avatars/man5.webp",
  "/avatars/man6.webp",
];

// Memoize the static content
const TotalFranchiseesSection = memo(({ number, percentage, avatars, totalCount, visibleCount, stages, containerVariants, avatarVariants, containerVariants2, itemVariants }) => (
  <div className="ba h-fit">
    <div className="ml-auto mr-auto w-[90%] flex flex-col h-fit pb-5 space-y-2">
      <div className="title mt-5 text-[110%]">
        Total Franchisees Onboard
      </div>
      <div className="flex xl:flex-row flex-col-reverse">
        <div className="flex items-center xl:w-[60%] space-x-5">
          <div className="number text-[200%] font-bold">{number}</div>
          <motion.div
            className="flex items-center text-[90%] pr-2 pl-2 xl:ml-[unset] xl:mt-[unset] ml-auto mt-auto w-fit h-fit rounded-full border-2 border-[#079455] text-[#079455] text-sm font-medium gap-1"
            initial={{ opacity: 1, scale: 1 }}
          >
            <svg
              className="w-3 h-3"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1.5L7.06568 5.43432C6.86768 5.63232 6.76867 5.73133 6.65451 5.76842C6.55409 5.80105 6.44591 5.80105 6.34549 5.76842C6.23133 5.73133 6.13232 5.63232 5.93431 5.43431L4.56568 4.06568C4.36768 3.86768 4.26867 3.76867 4.15451 3.73158C4.05409 3.69895 3.94591 3.69895 3.84549 3.73158C3.73133 3.76867 3.63232 3.86768 3.43431 4.06569L1 6.5M11 1.5H7.5M11 1.5V5"
                stroke="#079455"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{percentage}%</span>
          </motion.div>
        </div>
        <motion.div
          className="flex items-center xl:ml-auto mr-auto ml-auto"
          variants={containerVariants}
          initial="visible"
        >
          {avatars.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`avatar-${index}`}
              className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
              variants={avatarVariants}
              initial="visible"
            />
          ))}
          <motion.div
            className="w-8 h-8 rounded-full border-2 border-white -ml-2 bg-gray-100 text-gray-600 text-sm font-medium flex items-center justify-center"
            variants={avatarVariants}
            initial="visible"
          >
            +{totalCount - visibleCount}
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full xl:h-3 h-2 space-x-4 grid grid-cols-[30%_25%_45%]">
        <div className="rounded-[3px] bg-[#1F7EAA]"></div>
        <div className="rounded-[3px] bg-[#2FBDFF]"></div>
        <div className="rounded-[3px] bg-[#97DEFF]"></div>
      </div>
      <div className="mt-3 inter xl:text-[100%] text-[#475467] w-full h-fit rounded-xl">
        <motion.div
          className="space-y-2 !text-[#475467]"
          initial="visible"
          variants={containerVariants2}
        >
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between xl:text-sm text-[80%]"
              variants={itemVariants}
              initial="visible"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: stage.color }}
                />
                <span>{stage.name}</span>
              </div>
              <span className="font-semibold xl:text-lg text-[100%] text-g">
                {stage.count.toString().padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
));

const Dashboard = () => {
  const leads = [
    { name: "Wade Warren", stage: "Initial Inquiry" },
    { name: "Ava Wright", stage: "Initial Inquiry" },
    { name: "Cody Fisher", stage: "Initial Inquiry" },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };
  const totalCount = 12;
  const visibleCount = avatars.length;
  const stages = [
    { name: "Stage 1 (Initial Inquiry)", count: 2, color: "#1D4E89" },
    { name: "Stage 2 (Document Submission)", count: 7, color: "#3ABEF9" },
    { name: "Stage 3 ((Training))", count: 5, color: "#B3E5FC" },
  ];
  const percentage = 85;
  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: [0.8, 1.1, 1],
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  const tickVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
  };
  const incompleteVariants = {
    hidden: { scale: 0.6, opacity: 0 },
    visible: {
      scale: [0.6, 1, 1.05, 1],
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
        ease: "easeOut",
      },
    },
  };
  const avatarVariants = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };
  const containerVariants2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.2 },
    },
  };
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 100 });
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    motionValue.set(percentage);
  }, [percentage, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      setDisplayedValue(Math.round(v));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <div className="w-full h-full ">
      <div className="p-4 w-[98%] mt-3 ml-auto mr-auto h-fit">
        <div className="w-full lg:h-135 h-fit space-y-5 lg:space-y-0 lg:space-x-5 grid grid-cols-1 lg:grid-cols-[25%_37%_37%]">
          <div className="ba h-fit flex flex-col">
            <div className="ml-auto mr-auto w-[87%] flex flex-col lg:h-42 h-60 space-y-5">
              <div className="title mt-5 text-[110%] text-center">
                Account Progress
              </div>
              <div className="flex flex-col space-y-5 ggasd lg:pb-0 pb-3 w-full xl:h-[66%] lg:h-[50%] h-[80%] dm-sans">
                <CircularProgressbar
                  value={displayedValue}
                  text={`${displayedValue}%`}
                  styles={buildStyles({
                    textColor: "#111827",
                    pathColor: "#279DD4",
                    trailColor: "#EAECF0",
                    strokeLinecap: "round",
                  })}
                  strokeWidth={10}
                />
              </div>
            </div>
            <div className="flex flex-col h-fit w-full space-y-5 p-5">
              <div className="w-full h-fit rounded-xl bg-(--card-color)">
                <div className="title mt-5 w-[92%] ml-auto text-[90%]">
                  Steps Completed
                </div>
                <div className="w-[92%] pt-5 pb-5 space-y-2 text-[90%] inter font-medium ml-auto flex flex-col">
                  <div className="grid grid-cols-[9%_70%_2%] lg:grid-cols-[5%_80%_10%]">
                    <div className="dot"></div>
                    <div className="w-[96%] ml-auto text-[85%] lg:text-[100%] text-(--text-card-color)">
                      Profile Setup
                    </div>
                    <div className="ml-auto relative items-center translate-x-2 lg:translate-x-0 justify-center w-4 h-4 text-[#F9FAFB] rounded-full">
                      <motion.svg
                        className="rounded-full w-4 h-4"
                        viewBox="0 0 48 48"
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.circle
                          cx="24"
                          cy="24"
                          r="24"
                          fill="#34A853"
                          variants={circleVariants}
                        />
                        <motion.path
                          d="M16 24L22 30L34 18"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          variants={tickVariants}
                          initial="hidden"
                          animate="visible"
                        />
                      </motion.svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-[9%_70%_2%] lg:grid-cols-[5%_80%_10%]">
                    <div className="dot"></div>
                    <div className="w-[96%] ml-auto text-[85%] lg:text-[100%] text-(--text-card-color)">
                      Initial Training
                    </div>
                    <div className="ml-auto relative items-center translate-x-2 lg:translate-x-0 justify-center w-4 h-4 text-[#F9FAFB] rounded-full">
                      <motion.svg
                        className="rounded-full w-4 h-4"
                        viewBox="0 0 48 48"
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.circle
                          cx="24"
                          cy="24"
                          r="24"
                          fill="#34A853"
                          variants={circleVariants}
                        />
                        <motion.path
                          d="M16 24L22 30L34 18"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          variants={tickVariants}
                          initial="hidden"
                          animate="visible"
                        />
                      </motion.svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-[9%_70%_2%] lg:grid-cols-[5%_80%_10%]">
                    <div className="dot"></div>
                    <div className="w-[96%] ml-auto text-[85%] lg:text-[100%] text-(--text-card-color)">
                      Legal Documents
                    </div>
                    <div className="tick ml-auto relative items-center translate-x-2 lg:translate-x-0 justify-center w-4 h-4 text-[#F9FAFB] border rounded-full">
                      <motion.svg
                        className="rounded-full w-4 h-4"
                        viewBox="0 0 48 48"
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.circle
                          cx="24"
                          cy="24"
                          r="24"
                          fill="#34A853"
                          variants={circleVariants}
                        />
                        <motion.path
                          d="M16 24L22 30L34 18"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          variants={tickVariants}
                          initial="hidden"
                          animate="visible"
                        />
                      </motion.svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-fit rounded-xl bg-(--card-color)">
                <div className="title mt-5 w-[92%] ml-auto text-[90%]">
                  Steps Remaining
                </div>
                <div className="w-[92%] pt-5 pb-5 space-y-2 text-[90%] inter font-medium ml-auto flex flex-col">
                  <div className="grid grid-cols-[9%_70%_2%] lg:grid-cols-[5%_80%_10%]">
                    <div className="dot"></div>
                    <div className="w-[96%] ml-auto text-[80%] lg:text-[100%] whitespace-nowrap text-(--text-card-color)">
                      Financial Integration
                    </div>
                    <div className="tick ml-auto relative flex items-center translate-x-2 lg:translate-x-0 justify-center w-4 h-4 text-[#F9FAFB] rounded-full">
                      <motion.svg
                        className="rounded-full  w-4 h-4 lg:w-4 lg:h-4"
                        viewBox="0 0 48 48"
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.circle
                          cx="24"
                          cy="24"
                          r="24"
                          fill="#0A995240"
                          variants={incompleteVariants}
                        />
                        <motion.path
                          d="M16 24L22 30L34 18"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial="hidden"
                          animate="visible"
                        />
                      </motion.svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-[9%_70%_2%] lg:grid-cols-[5%_80%_10%]">
                    <div className="dot"></div>
                    <div className="w-[96%] ml-auto text-[85%] lg:text-[100%] text-(--text-card-color)">
                      Final Review
                    </div>
                    <div className="ml-auto relative flex items-center translate-x-2 lg:translate-x-0 justify-center w-4 h-4 text-[#F9FAFB] rounded-full">
                      <motion.svg
                        className="rounded-full  w-4 h-4 lg:w-4 lg:h-4"
                        viewBox="0 0 48 48"
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.circle
                          cx="24"
                          cy="24"
                          r="24"
                          fill="#0A995240"
                          variants={incompleteVariants}
                        />
                        <motion.path
                          d="M16 24L22 30L34 18"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial="hidden"
                          animate="visible"
                        />
                      </motion.svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <TotalFranchiseesSection 
              number={14}
              percentage={7.4}
              avatars={avatars}
              totalCount={totalCount}
              visibleCount={visibleCount}
              stages={stages}
              containerVariants={containerVariants}
              avatarVariants={avatarVariants}
              containerVariants2={containerVariants2}
              itemVariants={itemVariants}
            />
            <div className="ba h-fit">
              <div className="ml-auto mr-auto w-[90%] flex flex-col h-fit pb-2 space-y-2">
                <div className="title mt-5  text-[110%]">
                  Financial Wellbeing
                </div>
                <div className="flex">
                  <div className="grid grid-cols-2 items-center w-full space-x-5">
                    <div className="number xl:text-[200%] text-[150%] font-bold">20</div>
                    <motion.div
                      className="ml-auto flex items-center  text-[90%] pr-2 pl-2 w-fit h-fit rounded-full border-2 border-[#079455] text-[#079455] text-sm font-medium gap-1 "
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1.5L7.06568 5.43432C6.86768 5.63232 6.76867 5.73133 6.65451 5.76842C6.55409 5.80105 6.44591 5.80105 6.34549 5.76842C6.23133 5.73133 6.13232 5.63232 5.93431 5.43431L4.56568 4.06568C4.36768 3.86768 4.26867 3.76867 4.15451 3.73158C4.05409 3.69895 3.94591 3.69895 3.84549 3.73158C3.73133 3.76867 3.63232 3.86768 3.43431 4.06569L1 6.5M11 1.5H7.5M11 1.5V5"
                          stroke="#079455"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span>2.1%</span>
                    </motion.div>
                    <div className="text-g2 font-medium xl:text-[100%] text-[90%]  col-span-full bb pb-2 translate-y-[-2px]">
                      Total Franchisees
                    </div>
                  </div>
                </div>
                <div className="inter   text-[#475467] w-full h-full rounded-xl">
                  <div className="w-full mt-5  space-x-5 text-center h-fit grid grid-cols-2">
                    <div className="p-4 bg-(--card-color) rounded-[5px] space-y-5">
                      <div className="title xl:text-[100%] text-[90%]">Target</div>
                      <div className="number xl:text-[130%] text-[100%] text-(--text-heading-color)  font-bold">
                        $500,000
                      </div>
                    </div>
                    <div className="p-4 bg-(--card-color) rounded-[5px] space-y-5">
                      <div className="title xl:text-[100%] text-[90%] ">Current</div>
                      <div className="number xl:text-[130%] text-[100%] text-(--text-heading-color)  font-bold">
                        $450,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="ba h-fit">
              <div className="ml-auto mr-auto w-[90%] flex flex-col h-full pb-5 space-y-2">
                <div className="title mt-5  text-[110%]">
                  Key Insights & Feedback
                </div>
                <div className="flex">
                  <div className="grid grid-cols-2 items-center w-full space-x-5">
                    <div className="number xl:text-[200%] text-[150%] font-bold">10%</div>
                    <div className="w-full ml-auto ">
                      <div className="w-25  flex justify-center items-center ml-auto">
                        <img src="/image.webp" alt="" width={36} height={36}/>
                      </div>
                    </div>

                    <div className="text-g2 font-medium xl:text-[100%] text-[90%]   bb pb-4 translate-y-[-2px]">
                      Sales Growth
                    </div>
                    <svg
                      className="w-25 ml-auto"
                      viewBox="0 0 107 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="106"
                        height="23"
                        rx="11.5"
                        fill="#D5F2FF"
                        fillOpacity="0.5"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="106"
                        height="23"
                        rx="11.5"
                        stroke="#BAE9FF"
                      />
                      <path
                        d="M12.5284 8.40625V7.27273H19.2827V8.40625H16.5597V16H15.2472V8.40625H12.5284ZM22.4808 16.1321C21.8672 16.1321 21.3317 15.9915 20.8743 15.7102C20.4169 15.429 20.0618 15.0355 19.8089 14.5298C19.5561 14.0241 19.4297 13.4332 19.4297 12.7571C19.4297 12.0781 19.5561 11.4844 19.8089 10.9759C20.0618 10.4673 20.4169 10.0724 20.8743 9.79119C21.3317 9.50994 21.8672 9.36932 22.4808 9.36932C23.0945 9.36932 23.63 9.50994 24.0874 9.79119C24.5447 10.0724 24.8999 10.4673 25.1527 10.9759C25.4055 11.4844 25.532 12.0781 25.532 12.7571C25.532 13.4332 25.4055 14.0241 25.1527 14.5298C24.8999 15.0355 24.5447 15.429 24.0874 15.7102C23.63 15.9915 23.0945 16.1321 22.4808 16.1321ZM22.4851 15.0625C22.8828 15.0625 23.2124 14.9574 23.4737 14.7472C23.7351 14.5369 23.9283 14.2571 24.0533 13.9077C24.1811 13.5582 24.245 13.1733 24.245 12.7528C24.245 12.3352 24.1811 11.9517 24.0533 11.6023C23.9283 11.25 23.7351 10.9673 23.4737 10.7543C23.2124 10.5412 22.8828 10.4347 22.4851 10.4347C22.0845 10.4347 21.7521 10.5412 21.4879 10.7543C21.2266 10.9673 21.032 11.25 20.9041 11.6023C20.7791 11.9517 20.7166 12.3352 20.7166 12.7528C20.7166 13.1733 20.7791 13.5582 20.9041 13.9077C21.032 14.2571 21.2266 14.5369 21.4879 14.7472C21.7521 14.9574 22.0845 15.0625 22.4851 15.0625ZM26.9542 18.4545V9.45455H28.1985V10.5156H28.305C28.3789 10.3793 28.4854 10.2216 28.6246 10.0426C28.7638 9.86364 28.957 9.70739 29.2042 9.57386C29.4513 9.4375 29.7781 9.36932 30.1843 9.36932C30.7127 9.36932 31.1843 9.50284 31.5991 9.76989C32.0138 10.0369 32.3391 10.4219 32.5749 10.9247C32.8136 11.4276 32.9329 12.0327 32.9329 12.7401C32.9329 13.4474 32.815 14.054 32.5792 14.5597C32.3434 15.0625 32.0195 15.4503 31.6076 15.723C31.1957 15.9929 30.7255 16.1278 30.1971 16.1278C29.7994 16.1278 29.4741 16.0611 29.2212 15.9276C28.9712 15.794 28.7752 15.6378 28.6332 15.4588C28.4911 15.2798 28.3817 15.1207 28.305 14.9815H28.2283V18.4545H26.9542ZM28.2028 12.7273C28.2028 13.1875 28.2695 13.5909 28.4031 13.9375C28.5366 14.2841 28.7298 14.5554 28.9826 14.7514C29.2354 14.9446 29.5451 15.0412 29.9116 15.0412C30.2923 15.0412 30.6104 14.9403 30.8661 14.7386C31.1218 14.5341 31.315 14.2571 31.4457 13.9077C31.5792 13.5582 31.646 13.1648 31.646 12.7273C31.646 12.2955 31.5806 11.9077 31.4499 11.5639C31.3221 11.2202 31.1289 10.9489 30.8704 10.75C30.6147 10.5511 30.2951 10.4517 29.9116 10.4517C29.5423 10.4517 29.2298 10.5469 28.9741 10.7372C28.7212 10.9276 28.5295 11.1932 28.3988 11.5341C28.2681 11.875 28.2028 12.2727 28.2028 12.7273ZM37.6385 16V7.27273H40.7493C41.4283 7.27273 41.9908 7.39631 42.4368 7.64347C42.8828 7.89062 43.2166 8.22869 43.4382 8.65767C43.6598 9.08381 43.7706 9.56392 43.7706 10.098C43.7706 10.6349 43.6584 11.1179 43.4339 11.5469C43.2124 11.973 42.8771 12.3111 42.4283 12.5611C41.9822 12.8082 41.4212 12.9318 40.745 12.9318H38.6058V11.8153H40.6257C41.0547 11.8153 41.4027 11.7415 41.6697 11.5938C41.9368 11.4432 42.1328 11.2386 42.2578 10.9801C42.3828 10.7216 42.4453 10.4276 42.4453 10.098C42.4453 9.76847 42.3828 9.47585 42.2578 9.22017C42.1328 8.96449 41.9354 8.7642 41.6655 8.61932C41.3984 8.47443 41.0462 8.40199 40.6087 8.40199H38.9553V16H37.6385ZM47.951 16.1321C47.3061 16.1321 46.7507 15.9943 46.2848 15.7188C45.8217 15.4403 45.4638 15.0497 45.2109 14.5469C44.9609 14.0412 44.8359 13.4489 44.8359 12.7699C44.8359 12.0994 44.9609 11.5085 45.2109 10.9972C45.4638 10.4858 45.8161 10.0866 46.2678 9.79972C46.7223 9.51278 47.2536 9.36932 47.8615 9.36932C48.2308 9.36932 48.5888 9.4304 48.9354 9.55256C49.282 9.67472 49.593 9.86648 49.8686 10.1278C50.1442 10.3892 50.3615 10.7287 50.5206 11.1463C50.6797 11.5611 50.7592 12.0653 50.7592 12.6591V13.1108H45.5561V12.1562H49.5107C49.5107 11.821 49.4425 11.5241 49.3061 11.2656C49.1697 11.0043 48.978 10.7983 48.7308 10.6477C48.4865 10.4972 48.1996 10.4219 47.87 10.4219C47.5121 10.4219 47.1996 10.5099 46.9325 10.6861C46.6683 10.8594 46.4638 11.0866 46.3189 11.3679C46.1768 11.6463 46.1058 11.9489 46.1058 12.2756V13.0213C46.1058 13.4588 46.1825 13.831 46.3359 14.1378C46.4922 14.4446 46.7095 14.679 46.9879 14.8409C47.2663 15 47.5916 15.0795 47.9638 15.0795C48.2053 15.0795 48.4254 15.0455 48.6243 14.9773C48.8232 14.9062 48.995 14.8011 49.1399 14.6619C49.2848 14.5227 49.3956 14.3509 49.4723 14.1463L50.6783 14.3636C50.5817 14.7187 50.4084 15.0298 50.1584 15.2969C49.9112 15.5611 49.6001 15.767 49.2251 15.9148C48.853 16.0597 48.4283 16.1321 47.951 16.1321ZM52.1729 16V9.45455H53.4045V10.4943H53.4727C53.592 10.142 53.8022 9.86506 54.1033 9.66335C54.4073 9.45881 54.7511 9.35653 55.1346 9.35653C55.2141 9.35653 55.3079 9.35937 55.4158 9.36506C55.5266 9.37074 55.6133 9.37784 55.6758 9.38636V10.6051C55.6246 10.5909 55.5337 10.5753 55.4031 10.5582C55.2724 10.5384 55.1417 10.5284 55.011 10.5284C54.7099 10.5284 54.4414 10.5923 54.2056 10.7202C53.9727 10.8452 53.788 11.0199 53.6516 11.2443C53.5153 11.4659 53.4471 11.7187 53.4471 12.0028V16H52.1729ZM60.2802 9.45455V10.4773H56.5813V9.45455H60.2802ZM57.5955 16V8.69602C57.5955 8.28693 57.685 7.94744 57.864 7.67756C58.043 7.40483 58.2802 7.2017 58.5756 7.06818C58.8711 6.93182 59.1921 6.86364 59.5387 6.86364C59.7944 6.86364 60.0131 6.88494 60.195 6.92756C60.3768 6.96733 60.5117 7.00426 60.5998 7.03835L60.3015 8.0696C60.2418 8.05256 60.1651 8.03267 60.0714 8.00994C59.9776 7.98437 59.864 7.97159 59.7305 7.97159C59.4208 7.97159 59.1992 8.0483 59.0657 8.2017C58.935 8.35511 58.8697 8.5767 58.8697 8.86648V16H57.5955ZM64.0941 16.1321C63.4805 16.1321 62.945 15.9915 62.4876 15.7102C62.0302 15.429 61.6751 15.0355 61.4222 14.5298C61.1694 14.0241 61.043 13.4332 61.043 12.7571C61.043 12.0781 61.1694 11.4844 61.4222 10.9759C61.6751 10.4673 62.0302 10.0724 62.4876 9.79119C62.945 9.50994 63.4805 9.36932 64.0941 9.36932C64.7077 9.36932 65.2433 9.50994 65.7006 9.79119C66.158 10.0724 66.5131 10.4673 66.766 10.9759C67.0188 11.4844 67.1452 12.0781 67.1452 12.7571C67.1452 13.4332 67.0188 14.0241 66.766 14.5298C66.5131 15.0355 66.158 15.429 65.7006 15.7102C65.2433 15.9915 64.7077 16.1321 64.0941 16.1321ZM64.0984 15.0625C64.4961 15.0625 64.8256 14.9574 65.087 14.7472C65.3484 14.5369 65.5415 14.2571 65.6665 13.9077C65.7944 13.5582 65.8583 13.1733 65.8583 12.7528C65.8583 12.3352 65.7944 11.9517 65.6665 11.6023C65.5415 11.25 65.3484 10.9673 65.087 10.7543C64.8256 10.5412 64.4961 10.4347 64.0984 10.4347C63.6978 10.4347 63.3654 10.5412 63.1012 10.7543C62.8398 10.9673 62.6452 11.25 62.5174 11.6023C62.3924 11.9517 62.3299 12.3352 62.3299 12.7528C62.3299 13.1733 62.3924 13.5582 62.5174 13.9077C62.6452 14.2571 62.8398 14.5369 63.1012 14.7472C63.3654 14.9574 63.6978 15.0625 64.0984 15.0625ZM68.5675 16V9.45455H69.799V10.4943H69.8672C69.9865 10.142 70.1967 9.86506 70.4979 9.66335C70.8018 9.45881 71.1456 9.35653 71.5291 9.35653C71.6087 9.35653 71.7024 9.35937 71.8104 9.36506C71.9212 9.37074 72.0078 9.37784 72.0703 9.38636V10.6051C72.0192 10.5909 71.9283 10.5753 71.7976 10.5582C71.6669 10.5384 71.5362 10.5284 71.4055 10.5284C71.1044 10.5284 70.8359 10.5923 70.6001 10.7202C70.3672 10.8452 70.1825 11.0199 70.0462 11.2443C69.9098 11.4659 69.8416 11.7187 69.8416 12.0028V16H68.5675ZM73.1729 16V9.45455H74.396V10.5199H74.4769C74.6133 10.1591 74.8363 9.87784 75.146 9.67614C75.4556 9.47159 75.8263 9.36932 76.2582 9.36932C76.6957 9.36932 77.0621 9.47159 77.3576 9.67614C77.6559 9.88068 77.8761 10.1619 78.0181 10.5199H78.0863C78.2425 10.1705 78.4911 9.89205 78.832 9.68466C79.1729 9.47443 79.5792 9.36932 80.0508 9.36932C80.6445 9.36932 81.1289 9.5554 81.5039 9.92756C81.8817 10.2997 82.0707 10.8608 82.0707 11.6108V16H80.7965V11.7301C80.7965 11.2869 80.6758 10.9659 80.4343 10.767C80.1928 10.5682 79.9045 10.4688 79.5692 10.4688C79.1545 10.4688 78.832 10.5966 78.6019 10.8523C78.3718 11.1051 78.2567 11.4304 78.2567 11.8281V16H76.9869V11.6491C76.9869 11.294 76.8761 11.0085 76.6545 10.7926C76.4329 10.5767 76.1445 10.4688 75.7894 10.4688C75.5479 10.4688 75.3249 10.5327 75.1204 10.6605C74.9187 10.7855 74.7553 10.9602 74.6303 11.1847C74.5082 11.4091 74.4471 11.669 74.4471 11.9645V16H73.1729ZM86.5994 16.1321C85.9545 16.1321 85.3991 15.9943 84.9332 15.7188C84.4702 15.4403 84.1122 15.0497 83.8594 14.5469C83.6094 14.0412 83.4844 13.4489 83.4844 12.7699C83.4844 12.0994 83.6094 11.5085 83.8594 10.9972C84.1122 10.4858 84.4645 10.0866 84.9162 9.79972C85.3707 9.51278 85.902 9.36932 86.5099 9.36932C86.8793 9.36932 87.2372 9.4304 87.5838 9.55256C87.9304 9.67472 88.2415 9.86648 88.517 10.1278C88.7926 10.3892 89.0099 10.7287 89.169 11.1463C89.3281 11.5611 89.4077 12.0653 89.4077 12.6591V13.1108H84.2045V12.1562H88.1591C88.1591 11.821 88.0909 11.5241 87.9545 11.2656C87.8182 11.0043 87.6264 10.7983 87.3793 10.6477C87.1349 10.4972 86.848 10.4219 86.5185 10.4219C86.1605 10.4219 85.848 10.5099 85.581 10.6861C85.3168 10.8594 85.1122 11.0866 84.9673 11.3679C84.8253 11.6463 84.7543 11.9489 84.7543 12.2756V13.0213C84.7543 13.4588 84.831 13.831 84.9844 14.1378C85.1406 14.4446 85.358 14.679 85.6364 14.8409C85.9148 15 86.2401 15.0795 86.6122 15.0795C86.8537 15.0795 87.0739 15.0455 87.2727 14.9773C87.4716 14.9062 87.6435 14.8011 87.7884 14.6619C87.9332 14.5227 88.044 14.3509 88.1207 14.1463L89.3267 14.3636C89.2301 14.7187 89.0568 15.0298 88.8068 15.2969C88.5597 15.5611 88.2486 15.767 87.8736 15.9148C87.5014 16.0597 87.0767 16.1321 86.5994 16.1321ZM90.8214 16V9.45455H92.0529V10.4943H92.1211C92.2404 10.142 92.4506 9.86506 92.7518 9.66335C93.0558 9.45881 93.3995 9.35653 93.783 9.35653C93.8626 9.35653 93.9563 9.35937 94.0643 9.36506C94.1751 9.37074 94.2617 9.37784 94.3242 9.38636V10.6051C94.2731 10.5909 94.1822 10.5753 94.0515 10.5582C93.9208 10.5384 93.7901 10.5284 93.6594 10.5284C93.3583 10.5284 93.0898 10.5923 92.854 10.7202C92.6211 10.8452 92.4364 11.0199 92.3001 11.2443C92.1637 11.4659 92.0955 11.7187 92.0955 12.0028V16H90.8214Z"
                        fill="#279DD4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="inter   text-[#475467] w-full h-full rounded-xl">
                  <div className="w-full  space-x-5  h-full grid">
                    <div className="p-4 bg-(--card-color) rounded-[5px] space-y-2 grid grid-cols-2">
                      <div className="title text-[90%] text-(--text-heading-color) col-span-ful">
                        Feedback
                      </div>
                      <div className="col-span-2 grid xl:grid-cols-[5%_95%] grid-cols-[7%_93%]">
                        <div className="dot !m-[0] translate-y-1"></div>
                        <div className="xl:text-[90%] text-[70%] ft font-light text-(--text-card-color)">
                          Franchisees are requesting more detailed training
                          materials.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ba h-fit">
              <div className="ml-auto mr-auto w-[90%] flex flex-col h-full pb-2 space-y-2">
                <h2 className="text-lg mt-5 font-semibold mb-4">
                  Prospect Leads
                </h2>
                <div className="space-y-3 flex flex-col h-fit">
                  {leads.map((lead, index) => (
                    <motion.div
                      key={lead.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                      className="flex  user-name items-center justify-between px-2 py-2 bg-(--card-color)  rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={man[index % man.length]}
                          alt={lead.name}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                        />
                        <span className="text-gray-800 xl:text-[100%] text-[85%] font-medium">
                          {lead.name}
                        </span>
                      </div>
                      <span className="label-small xl:text-sm text-[80%] text-(--text-card-color)">
                        Stage: <span className="font-medium">{lead.stage}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {<Footer />}
    </div>
  );
};

export default Dashboard;
