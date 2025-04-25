"use client";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Dashboard = () => {
  const avatars = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/women/5.jpg",
  ];
  const man = [
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/men/6.jpg",
  ];
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: "easeOut",
      },
    },
  };
  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };
  const containerVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4 },
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
            <div className="ba h-fit">
              <div className="ml-auto mr-auto w-[90%] flex flex-col h-fit pb-5 space-y-2">
                <div className="title mt-5  text-[110%]">
                  Total Franchisees Onboard
                </div>
                <div className="flex xl:flex-row flex-col-reverse">
                  <div className="flex items-center xl:w-[60%] space-x-5">
                    <div className="number text-[200%] font-bold">14</div>
                    <motion.div
                      className="flex items-center  text-[90%] pr-2 pl-2 xl:ml-[unset] xl:mt-[unset] ml-auto  mt-auto w-fit h-fit rounded-full border-2 border-[#079455] text-[#079455] text-sm font-medium gap-1 "
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span>7.4%</span>
                    </motion.div>
                  </div>
                  <motion.div
                    className="flex items-center xl:ml-auto mr-auto ml-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {avatars.map((src, index) => (
                      <motion.img
                        key={index}
                        src={src}
                        alt={`avatar-${index}`}
                        className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
                        variants={avatarVariants}
                      />
                    ))}
                    <motion.div
                      className="w-8 h-8 rounded-full border-2 border-white -ml-2 bg-gray-100 text-gray-600 text-sm font-medium flex items-center justify-center"
                      variants={avatarVariants}
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
                <div className="mt-3 inter xl:text-[100%]  text-[#475467] w-full h-fit rounded-xl">
                  <motion.div
                    className="space-y-2 !text-[#475467]"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants2}
                  >
                    {stages.map((stage, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between xl:text-sm text-[80%]"
                        variants={itemVariants}
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                        <svg
                          viewBox="0 0 37 36"
                          className="w-9 h-9 "
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path
                            d="M0.5 18C0.5 8.05888 8.55888 0 18.5 0C28.4411 0 36.5 8.05888 36.5 18C36.5 27.9411 28.4411 36 18.5 36C8.55888 36 0.5 27.9411 0.5 18Z"
                            fill="url(#pattern0_0_7889)"
                          />
                          <path
                            d="M18.5 0.375C28.234 0.375 36.125 8.26598 36.125 18C36.125 27.734 28.234 35.625 18.5 35.625C8.76598 35.625 0.875 27.734 0.875 18C0.875 8.26598 8.76598 0.375 18.5 0.375Z"
                            stroke="black"
                            stroke-opacity="0.08"
                            stroke-width="0.75"
                          />
                          <rect
                            width="36"
                            height="36"
                            fill="url(#pattern1_0_7889)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_0_7889"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_0_7889"
                                transform="scale(0.003125)"
                              />
                            </pattern>
                            <pattern
                              id="pattern1_0_7889"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image1_0_7889"
                                transform="scale(0.0025)"
                              />
                            </pattern>
                            <image
                              id="image0_0_7889"
                              width="320"
                              height="320"
                              preserveAspectRatio="none"
                              xlinkHref="data:image/jpeg;base64,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"
                            />
                            <image
                              id="image1_0_7889"
                              width="400"
                              height="400"
                              preserveAspectRatio="none"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAgAElEQVR4Ae29f7BmV1nv6T9Whd7viRTcC0LCBbFg1CQUXi01Sd8rV4sfMfGKOmU3mmuiM6SjgGKaBMcERZNO3RlCyKQT1CIkdMcy1hBIN94ZEyfQpx3DGAl92uCg06H7FASvXJPuw0iwTFV3v+Nn93nefs46a6299u+93/c5VafWfveP9eNZaz3f9fxa61u+xf6MAkYBo4BRwChgFDAKGAWMAkYBo4BRwChgFDAKGAWMAkYBo4BRwChgFDAKGAWMAkYBo4BRwChgFDAKGAWMAkYBo4BRwChgFDAK5BR44Qtf+MJzzjnnVedMJm/Isuxq/rdMJu/PJpM7siy7L/+fTA5kk8mBLVm2Kv/ZZLKWTSbTxP819d0KeeX5TSYPkT/l5WVm2dXUI/8/55xXWRcZBYwCRgGjQI8UABy+NctePwOGMwz7IRh6SRBIBYum3wOoVrYANpPJHS/Isl/dsrT0VtoE+PVIWivaKGAUMArMBwUAChgrDHZdamClX0ZKaJrxd5UfbUSiycEF6cWAZT7GtLXCKGAUaJgCMEdW3wsIFGUBaQYsIrE03BWWnVHAKGAUGDYFkCxy2wQ2ickEqaIsI7X3z9IsBxXsLSapDHvcW+2MAkaBChQQ6WJd578IKqi+AW4lN+QvLb0VsK7QZfaJUcAoYBTohwIwLaWOMsA4Ky30BSwzQDFbSj9zwko1ChgFAhSAKaE+wei77gnVF6O0ctPA6gAAj2QY6FK7bRQwChgF2qMAoJFLGWe8hUzKSGPcwwM4XJ+z7D4WAO2NFsvZKGAUWHgKOKAxPGY4ViY+nHqvie1k4Qe7EcAoYBSoT4Ghg8b1118/XT54cHpsdXV66tSp6crhw9M9e/dOv/t7vscArh4wGZjUnz6Wg1Fg8SgAaKy72RLMNkhGPFlamh4+fDgHDYDD/T927JiBSFN9Z2quxWMC1mKjQFkKiCF8DNHeO3bs2AQaPhB5+XnnDRIAhwrMhfVi77DJ5LfMPbjs7LL3jQJzSAGkDRjCmLynkD5QW7mA4ft98803G4A0JYlszudAlmVXzeG0sCYZBYwCMQqsSxuDVVHFVsIAyN7775++5/rrC0Hk+PHjAIh5iW1m/s0Bq6i4LGgxNuXsmVFg3BRQBvHRbx+Cauq888+fnjhxIgoiJ0+enL75LW9pjlm2yYjnIG92GzCX4HHzCau9UWADBURNNW8r8VRV1p49ewxAuganLDtm6q0N09B+GAXGRQFWguv7T80lA81VWXv3RiUQ7CLraqy5pEFM1TeIZ2Z0HxfTsNoaBcZs3yjL9G655ZZCAEGNZXEhYXdsVHxvv+aa/L9VdR8R72YnMQZlFBgmBRYJOARoUtx5AZBrrrmmUAIBZC7ZunVhDO7fc8EFXm82Ymh+Ztu2QnpJH5RODUiGyUCsVotJgUUEDmFa27dvL5RAUGPF3HnFq0vcgFdXV5MAR+owxhTwoJ3SZjftxPnAgGQxGZa1ehgUWGTgEKZ98SWXBJmgZooxQ/otu3Z587hz9+72VuFdG7VVeQBmDDyEbjGaCf0bSQ1IhsFQrBaLQQEDjrP6fFbSwvBi6b59+7xgUPQ9+2o1wiQVA+8zP8Bj9113FdLs+IkT0zvvvLPbthuQLAYDs1b2QwEMkNmZ7dO7ndgDYX4+xlsEAAIqTzzxxCbbhqu6knd1iiqHDRt9ZSfeWxuSAf/Ciy5a0+3zXR/tdx+xE+yMgOt5P7PMSjUKzBkFmEzZZPKhRIZVh9mN7luCCX1M0L2HYdilX+q3gMgFF164CYDc/PhNgCOAs/9Tn9oU5EjQI/cx6PcBKimqK9raR9020dLiSOaMi1lzOqfAvAYAbmIWNSQcmKILFr7fPgBJ8eAirwMHDkx/6OKLNwGQ2w5sKUWR8bpuN99yS2Gebhl1fqe0t3O1VVHfZ9mxLUtLP9H55LMCjQJjpgB2jjY2OGSFDDMUv39SfP/HumttVQDhu5QNGWPeW8LMUaPFtpbXoOFe79u/vxPap0gfPauu4mBq9pExszOre1cUaMPOgUqC1XERw+QwJgysg1BhFK1M159XBZAU9VWKFxLgkeLR5AKH/l3FUK8XASnSUYr0kdJeAc2e0tPYR7qai1aOUWA0FGhDXUUwWBFoaEamr8dyql9VAHnLZZdFVV8pq/EmwAOaY3dIjQB/82WX5acu6r7iOha7kiJ9DMb2kbJwMPvIaPiaVbQDCjStrsJIW3dVDFPCbpDK2IpWpOSDFIQRWY6f1UwQ2wFghwG6jARUBUD4hu3gdfn6GmZaFIlNHlXBWZcl10W2B8pLcb/1xa6kSB/YeYr6cHDPTa3VAXeyIgZLgaa9q2DSri5+//79m2wcvLc3YRNCmBvMFDtJVeZRFcxSJaCqABID2BRVTgpThn7Ly8v5uSXQMEbzGAMvAjwBIUm1SiwF6Or2cdWx0ch3Wbb6gix792AnuVXMKNAGBZaWlt7a1PbqGMDd1SnMqmglz3OfNCCMSFJ2s03Rs2uGgHqn7godCaioDVUAJKa+SlFdUWYMgKAbTNmV3vhu9+7dXsknBCD5NwmBf9JXkgqI0A9yL5RS17E6Uagx9xnbqLENTmV5DooC67aOh9TAr7y6Jw8Y7NGjR2fBYQCCy7hiZaWCyIHl5eR6NmUbgOEBIjHmVhZAeD+kvkpdiccASJh0yHsr9G1IhRXaZkXKiaUsKkJt1d+FwCs2bgb6zIzsg+J2VplGKdCk1MEERirQcQd4URWt2H0Tn290Ppq5yLVvRe3LK8agJa+yaYgZU35ZAImtyGPlSFtT2getQv3gU32F3o/VVdPw0MpKvmjAbpMiUepvua4ZaZ+8sBAatp5m2TGTRhplXZZZnxRo2tbBBPyRH/3Rw5rpAx6xlXrRpE05Xzy0n5TOu2hzQ/ZY4gwPpCT+KbeI6fm2IZEyUwEEWrEi1zTTjDTF7kGZlOfamXQ+XMPQpX46Rfrwqb58wEU5vnfdslyVG+7JjAX3vdjvsupJ3aYBX58w20ifXM/KboQCTXtYMWGZ8KdOndqgtgqteMtM8CKbRcrJfqxmQ8wqtNKGWYZsA+TFdyFw5NtQeSn3ybvMCjylPFEJ0SeAJPmHaOsDD/rMJ6m47aHuPgcHJJcQULp58F6ZMTK6d81TqxE+Zpn0QIGshf2rfOqmJsADxnDFFVfMQMllNPyGYRWVFQOQ2CqflXOI6VFu6ECoFIbuawv3Uoz0LsNMVSuFypT7gEzIVkWbQoAj35Mifbj14zffxwBZ54GXni+PubqXZcdQH/fAAqxIo0B5CrQRTc6Ehnm7ag28rYomO6t3VqqojmDwIRDgvRATh+mkAEgICPg2xDCpP0wv5uYaAp+UiHLqTrt8bcM5IEQPH12rAghgBbMW9Z0vb7mXUgb09EkfkkeKBANdqI9802eKVM3YFMM/xn8Zr4ybkARaos5mYC/PyuyLrinQtKFcTxCfR02R/vr6G27wMs4Q8yHQT69Q9XUKgFBfnzGXFbfLBPhN/akLjCNmWwipz1KYLW2gfN712VvKSCIp5RWBpe5T33VMipP+oAyXnpJXqgRSt55SXp0UyTLVZoNUFlsAJdXDDOxds0QrL5UCWQsqK5kUTDRhHpLCDOW5L425gLIa9zEgVn2Sv5vCcHzlhO4BDvxLOawkAYpQNLpbnv4dYnYpDJ18RIKJgUgRGNNOmLNPktF15bqM27OmH/mnqK9iDg3k4Uqqbv34DU2lb3QdurhGckxpp6/e3PvcE0+shdSahfW3rVBSWZq91wUF1lVWK4UDN2Wfn8A7PoYQ01/HwEMmpU994QMqeV+Mw2XbCdOOSReSf1EqwXG6/FQA0XXHU8wHAjBUVrg6f/c6lcHTFl99dX4CqFqFlgJQ1DMkQZJ/Kk1CUp2uYxvXgIdvPBf1v+85+bzjHe9IOqvFaYuptLpgjlZGnAJteFk5Az23HfgmT8j+AUPyve/eg4m6ZYUApIhpufnIb5hZU8yCOiAl4A6L2glVWSgwz22rBhDqFnNbhvFDQ5g5wOee2xGT0txyaTtSFwxf/vn9JRX8qaUVynTzcH8LHYTGbrp9+/bCPMjTpYmbTxu/aR/td9sU+o3bN9vBMNb5Z9G0srKy6XvoXFEiOWQxI3EeZ09bosALsuxX25hkbp4+2wcTLiSBwPx8K2zfJHUN2yEACXn8uHXVv2EWMfBABQdTlRW4MGxfPeUe+WnVR8xmI9+QusySskJ0le+0bl5LEyFHAfmubAogiCopRXrgfU1nfZ0z6MB2KW69QtHvOr+mr1PaRz0BDlychS5uPbjP2GEO6Hb9yZ/8yaqMJ/eb4G+zi7TEIS1bLwXywMAsuy84IANqqKrvh5iwT4KQMmIrbD3hcPeUb0h9BlwYFpNVv5dyHfMEQn3iTnSYnwYHXc+610gsbp0BAp9RPVSWjtkoI4WE8pP70FdokcJgfW2RtkHD0HiR8kgps6LqZxMdpeyiNBXcCMQUehTlyXPe1R58tL+CNHLaAg+97M5uNkmBLuwd7qTRE9+9junsH3jggVX3ffc3IKRXeb5VuRig3XrFfheBgc8IXPSNW/cyv0NMN2QP8eUN6AmtyoKPLz+5BzOXfFMAxJWmdD+k2L4olzIrMNnK4EEd6d8iWxiS7nnnn1/FppEvcvSCwFU9ajoFrs0u0iSztLw2UiDLste3ccxsYDDLZI0G9wEAIUYAU0pRZW3btk3KCq5eyYfJiVoHKQE9duzMDJiFMEhf6gMlvkmpry+/onsxg3GqtOYyXZi9ZlhFdQg914BQRDfy0O/rsbPj2mujNNfl0xZZfAh46bzauC5qG3WqIunqutInWvXoOx9Fv++73jKZfBItw8bZb7+MAjUokGXZVU1tv+4btLF7KUxVmDoSBNcCCimqFt6n/NTVq2ZEqAv4zlU5FBm3fRJB0Te63LLXMKcQ4MHYoEFKnq7doC6IPOuo8lLq4ttri3iflPrrd+gD+k0b8WPjsO6zFABpAsxc6bAKiGRmF6nBLe3TDRTgHOa6k6fO96nMTTMH8dBKlUJ8qiudX9E1zEgb5FPAQKsYmPQpuvuiesSe+xiv9IvLdEL5uAAi37NyLiuNIEm4wEt+1+zYEQUDLQlB81RHglCbYtKZtK+JFACJLYZoVxMAQl31+CNfkbZKtcNAZAMftB8VKNA3eDDgYU6hyR+6j+ujTJYUKSSUT5n7TFRRQegJHMsDcAS8NGMRBqnvxfJIec/dtVZoo9OinYR1+/R3+jqP7di9O3c9xZNI1xuQpV/oDw22+nuuYbRaDaPzKLqustigXW4d2vhdJF1Rj1/4xV9c1WULLQBn2oa61ge6+huu3bJOnjy5dsGFF1axrZywfbQqMM5F/6RrTyt3Ari/y65uNYCkSiG4RKLmYYLC4JBiypYLE+DbFGNwiBmKy3ARCKH+gaEUrdixt6SubGN5ueomt4+a/F1WNUbdWGVXobtPndhkW3ReRX0qajX5xufJd/LkyTUtvcq7OgVA3A0la6jqzENr0QGhTPvXz+9oNbJcD/aU60u3bo0a011m7LrnupPJfZ/fPjEfMNEukr7v3HswAVRCKZKB+y2/tYEdQHNBjJU97+iVKNIDoEnZ/HONcTwVOHQfkJdbJgw6ZEPR3zZ5nUp7rQqDcZalu88jrsl26LyoX5HKTRi9K0W4Y0XH5ugy5NoFH1ncyPOSqXlolWGii/oubro9eFolqRBSVVkwP81cmShIBe4EdH+jIghNqjJqMCYqYJTq3aTr4VM1AQIwb9pPWgUUQu2K3acs2l0ViGJ5l3kmQKJBDRBFYnRVYUVMV9NarkXtWKZOdd5lcRFS0TF2BKhdAJD6Ssq7sVgW3/d6cVKhDQYiiwoMKe0eMnjIYIeZaEYik0lSnoU2BUzRj4eYM4wpRYqRerCKLMvMWOWH6i7tt3QSBHmhTRmwZ7yE+lzyayOlTHc8HTp0aAaIjJ0Up4pHH300aNfw0WHdYSD4TVJbl5ZuT+En9s4CUWAM4KEHNytPJgjqJf65dlej+n2ufRNKGL6kvON+J7/LAAKrQ5hEKvC4Kikp09JiwHBplOpRRh+1JX3Q964U7NaT37zHuHXfTXUpD8XEhMYqbW5kkZJl9y4Qe7SmxigwNvDwTcSUe0xWAYpQiv6c90L5FRlBJV8mqqgiyAsGAbNi1QngkaIa6lIlFWrTPN5PMcLrrVmaoAHjBsbvSsjiPZVaRhlHgFtuuWWD15aUEcqDcRkKvJVvU1MLOIxx1QV5tijgIZMiRY0Vm2ChlZ0Ah6RNTlSpu6XlpRFsUZsY+vJy45JH6OAyGQ+k+/bvjy5O6F+kpxTVFfn57GXkwRiNxTXdeOON9VRYG/e6O2RR6wsCFm4zFw08mFwwFD2pfddM4LpSiAFIeWbfJkDSn0iBsX6tUj4MP8as3fEViwovYvw6L8ZXKK4jJH3I901LXtlkYiDiMtd5/z2v4IE+mQmNpOFTHbBRnUykWBqbZEz0IldRJrhWYVVhTvbNsEDI7Y9UaVSPs5MnT66FQCzV7sHY8rmcU78iCSb2rdu+kr8NROYdNKR98woeoYN6kCi0kTJFjYW3iv5GTyYYR5EvPxO1yKiv87TrYYOFr39SGb4DIF4jduohWOQVWtykjssWFzYGIsJk5zWdV/AomsxIDAIIN910U5IUIgFdLvNgoroumJpJcA2AhFaabn72e3zgUaQmcseD/PYtLMpsqR/aiyxVlUb5Mg9aGnefmVfeufDtmlfwYKUvEzSWiiQCY4+9J8+YbCFVQZFLcMi9sqVJG/Qas/KaB6cqqis9pjQDB4hSjeahzTDJo+icESm/k3FpLr7zhzXzCh4wyCJ1kkwetveQyZuixuI7QMTnNx8DEL5pK77AAKF5QChL06JNJ2W8+VLZ54wyy4CHz+OKhRCSd5E9TurR6bg0EJkfEJln8GAipkwgN0AwVWph8mEP0XrjIhWWb7KXZVL2fv9A4euDor4XZi17kbGQIN6H3zwTFRQqp1SpQfJkocQ4xtaXugCSb0lrbmNSVsq1bU/mAUKGuDGib2JWvYd0oCeJ73plZcU7+MtMQpn41LNIhREyclZto303HDAp6nsWDz6JlT5kEYIETB6pUjPj2d0W3zfGi+71tKgxEBk7iGyZTB6aZwaUIkmEvKFSvmViumosGMCpU6e8hngmqhnPh8Pwmx779H1IcsBGkdL3RQ4fGgyQOFB1ucGQ+p2ia+olqtum6ZGQn20FP1YQySaTDyV0sHd1PpbvUiSQWFtStmp3JQrfLqc+oImVa8/GCTIhAEld4Zc5elcbzQGRFFWtBhMkF8ZuCqi1PB5P26FUI0ORIZwk2PKgzIGPlZWeNO41Hi6xehBYGFrdsTuuu60JDCTkNeMCTazcoT+Drqn/Q29Lk/Wj/32LjhT7QhkQcAGJctm+3h3f7m/OguG9vrfg99D8RJZlrx8ZG13M6r4gy37V04FRRjrm92MrM54VtQ1GKUZOJiSTMLRyC6kfhg4erEKR1jDq4pqMIZaIfXTxnE0BiMbo6DIq32++Jx9sS/yTPyoYykP/j8pwAKvhwvFQNF5oj24/Ks6QmlTyKooQT8nPLZdvQrFKUu6gUjtjffiABMr3PWiYTDAOGAiMilU8TLqtehUF9aWWDXOLMbgd1167gXEwgeUo1bbaVjZf2gpICP0Bh7rAoJlbE9fUh3qJVxHgEjI8l21/F+8jSWg6ACCxMYb0ENolQecj16HFiE91mgJeXdAkuYwsO2abLw4UR/p21wU4Yp5NrN6TB9rGHT+j31GuTD5fCjOtW65P8kDN0Cfjo2xWpQD1EIHC1xdF92gH7aFdRav6un1a9XsAQY/zIgBxASdGA8ZUqF4+ACGvUUkhZ+a1RasPDUNA9T6Pok1dYbUFInpCuxOUFW9shRiasNxH9eBzucStNyatxPKs8oyycslu166ceQ1NqnBp3uRv+pbxRfu7pHmsn67ZsWO2aCmSAkKM36VRDIhyKWb37lmZ+tui8mPt6O2ZnWo4LAjpy12XCf3E5z/vdWnVg1xft7GyBCBiTFW2MUmdMLQLsHPzZCuINurvq9eiAoYeK75rAAWpsqt+8PUNDF07X4TUTrznW4D42vWBD3wgeE6HK/W433/kIx8Jfuur/wDumXvvUCCkT4+r1MmhBzxeLG0MYDxPdDnuNSDielW59QCI+gIOkTJQ4bjA5bbFfp/K+5o+hV7YUbqWTvTplKGzxmH8Pq8tt/9cryt3XBapwdbLb2VeuXVp8Pdp88zqGUWyLLu6wQ4tNQB9dgF3Yvh+M+nbqjMrU1+Z+h7liwGX91GPPPiJT3jdeduWOGB6GL1ZVRtonAEF3Vdlr+lXFgldgAngoB04brzpJq8UoIHG1x5UUIyB2Jwommsx9ZebL4skAJcy+UeSq6ridfMu/ds8s/pDEIzm2WTiHbSlO7KE0Zq8GXDHjx+Pqq5CWzC0CSDUjQmh1Qu+SRu7F3PjbYqu1BFmZ6BRHzRCfQl9YZRN9ZkvH61aOnny5FrIqSK2sIH5E4/ky597KfEj5LF169ZgHgAqIBSbF8zLPXv39gEmZlTvGkb6NprHztQAOEQ/DdAwkfUkx9MmNFmavA/zQH0QmzTUC8DgPVRgba7EoAnSjoFGe6Chx5lcC2MMMfe6Yw4GL2OMsRQaQyEQiW2xrgFK2uNLARCZc7o9AEeqg4vOt3MgMaN6txCSZdnH9EDp+ppJqQecvsYFU9eHQayft2UD0WW619SBCab/QxPd/bbOb8qFHjEvMU0bu24XXFi8FNnBqvR3Kojwno4oh/HH1FdFqisZL+TjAiTbzsfmqXwbSgFDN88qtEn8BnvIVd1y0QUtre9IcwZVaNCxuvYNGL3qdtUK27Zt692rxlfnOvcADia/bneIZna/XdDw0VekkiYXERpEMGoXARXzKFZ+KnjQvpMnT25QX60HvUZVzD66uPdoR4cgcgK1/IKy9W6avW738DLpOgyvzLcwfHegyW+2BHHzYpLIc0R997leneNRA/N13xnLbyQcV2Unbbe0e6BIoTljzqf+qTLmNIhQdhVVUCj2KNaWffv2zebMpf/u39UGDl0WIBIDuip0inxj56q3BSV92z2k01HJ6AGmr332Db2ScsV1DS6SD4AiZY0lhQFpIJS2WDpM0PD1CxHdTQAJIMI8kDJOnjy5lgIkVaVW1FeXX355LoFQdh21ldTZTfft39/dnDR7SDsQ0rfdQ5h5yBgog05LEACEDOgicJHvSZuYyFLfNlMDjvEAhB5fsWvGa5H6qWhMuS6+Uh6LDAIGUeMydvhnUXXPPfesVVV3fu5zn8vBgzKRpqSslBSHFw5cC3lMSh4+G0sRDWo8t+3fm4aQPuM93IHA5JKB5Uvx+pBvRJ2D6soVg33Sh+SHf73kMcTUgGP+gEPGnqQYkVHX1hl/gIN4aEm+TaZs5inzCukjNW8CFxnDum3Eq8TqGoq213k0eG32kKZApO9NEt1BwcArGqiorUR1xepGBrnkhZQikokvrz48taRusdSAY/6Bwx2PqLbc8RsbI+4zvmU8u/nW/Y1UIA4pZaSPWNS7a8PRddQHXLltbOm3xYc0ASLZZHKgpQ7asAJJLQPmrwdW0bXrxcGEOnr0aNTQ57oCp9atrfdyJlBSPVBEF3s+LjBKsWPExh/MWZ87U6f/kTwEPCgTAAkdteuWc+fu3UFHlZDqjTwArFj7Wnhm+2XVBZA+97mKDYgyBmPUWNhNCD5ky5BTgfPE9UCvs+KL1bvss6qGTd0Wux4XUBT118233BJkwCnjK5dil5dLLcJ0nQg8dOcHnlv6naLrkJ0HABG1s5tHDwACYJkqqyqIDMFlNzQhWP24A6yp30NRX6H/jqnZmmqv5TM+gAkx4NB88d1HMmesx+wOMjZQA2MXdO0Wkm+K/QMAcO0cSFVaQ+A7NE3q0IMKSyQeU2VVAZE+z/eQgRlLUwa+DL7U1GcvidWhjWes7spIWKlts/fGBxRFfYZ7qysNVBmTMHEWZWyng7TOP9fcS8k/BUBkx17e1W7G0sbYfAZ8qE+VtjXwjamyygJIH6orBiornNjGbnow8K4MvqbSvm0f199wg0WPn5o/Rt/U+Azlg1pLz42ur1MABK8yqVfM1uFrI4Z37Z4v+XSYmiorFUS6Vl35VtwYuXHHLVr96O2sfQOvzD1WXR0OyA1lsQJMNUKWaZO9uzhgFNtIse1xDSAUxZEggbggwH5ZxIHExmnMa6vtdjn5myorBUS69LoCIIr0/AQnxYCkCXVPn3YPcTeOTSJ7tjhAULev+5BGAJCUeRiK5WABxWJQwARVMh5jvO+CjsPUNyzEWn5mqqwiAOk6YLAIPPRkuul979uwYZsMFgZYyHNDfx+67kvy8EleoTrafQOQMmOgD2mk6OAq6t/05ogAD//CCzpITZUVApGuAwaLIsp9E4ZVTkgaAQh834TuscrRvuwdDL7ZQDdbhwFCaFw2dR9m3aVNL1UKoV51t2q5ZseODSoz1Gd142RKzH9TZflApMpeV6z+Yeghph7rlBSR1zeZYi6M1AN1FODg+5Z7PANs+hCNKbPsfkGhdth9A6GUMdAhY006vVDqXLVeRQb7DlR4pyeTyRt8PHRh721ZWnprjNm7z/JgpIMHNzFpQCFldQEjlYFUNcXIHgMB6ghQ8I9+lRSJI/aN284mfyNql1HZVaWLfWfA4o6BLlVaKaosXT94BtHpqXONeay/9123DiJZdozdyRcWMNyGl4n5QP3i6zR9D0YZslkwUJpywaWcKtJP6mBt6j1TWRlT1/Ojj2tiKbpSaaFiKtNG1Fqpcy12nLWU2UVbt0wm73f56EL+LhPzceWVV0b3kJIOlBQGD1i4g0MDCAFEgAD3qu7V09XEcNuR8rvKmdBCP0sNeJoeA2VW+ynjO/ROGRDRB1KF8pP7qRIOINKygf00duOFBA1pdBnDOWuWq4oAACAASURBVEy+qgoGV1UZAKQaQFwXWragLvIp902qIndfXX4X19DLYjsMAHxjte97Xam0sFfEIsyhA4ze1SLwG3UzvIB/+IWonlON9eTdwfYni21QL2M4rxu0x/YFMlBIZRLt95w2xvOigSff6xSAa3nVsQEIQ0Bk9g4DDj0uh3jdFYgwR0J2C3b1VTbTNRaaT3z+80EthxjeASYWmTjE0I6Q00wHqqzFNaiXjTiv6jWlJ4+2WYiUQRpixKGBp/P0XbsSTyj/Nu6zCaK0zVc3u2fgMpQxgO2hK1d2FoVIEywY+WdBKgtKACFVu0GdWaCJRCJzmL2yfHQtY1+RvEqlWXZMNDoLlZaNOEfV5OugCvfWsFno4D8ZSL6OCw2MonLJP5avr6y691IcDIrqbc8NYLoeA617LU0mwUViGfAQugAKLoAwd30LTqQQVGB153bk+8WLUK8ScQ4zlg5sItWrdDo+0kH5iqOqSqvlwTOrt21JYoy/iXnRVx59gAj2jKpxUT5ngNC5JHfeeedsnsb4TI1nJxbKrbeM264QNeRNhFhahbnriYJ6TMoJpQBY1XIYpABJW2ASoo1uo10bwAx9DPiYcmg+NnH//Fe8ImjvKKKVT7IAkHyqMOwkTdQ3lsfCuPVWkT5i247A/BEn6xrZU5g7IOI7S6BosMlz1+MrNiBSn1VdQUmdLDVgGdIYwFDtUw+lzocy76W65Ibo43pZhTy0AJsO2rQYUkgV6cOH6rpTpXN8Okj9Xuw6RQqRwVkVrIgzkTzqprQ55jESa6s9M9DwjYETzz0/PfHNf25UVewrp+gejFnmdN15Evs+FUCYt9hCXTsswKC8uPKtVE55jqzmvU7soUtLt8+1Ib2K9HHp1q2FYqaWHuqASBmPkCrlNAUgTC6L8TAQKGLEZZ8vP/XM9PIPP947gFDvLkAEA3qMRjB+lye4AYpaPRWyQ5JPR+798xtcWCZoUK8a8Jiik7E/hFb+GkD4FrtIbGCEnmFYL7NSYFCUsYs0ocIy8DDgCI3fOvdPnjo1fe++L05f+J6Hp3cfPFZp/tQp3/dt2yCCyimmkvYZv/lG8yHAAdf5mB2yQwCZZll231xKIWW2LNEAIit9OlrAxB1sPnSvCiKUU0Z8BnBSY1Sok25b2WsDDwMPd+w39RsAuWjXwem3vefh6Svf9+ggVFm0rW0QEf7i0tEnfch8xdtKe3G637q/yasMT5FyKqbzJ4VUlT4goO5gX6dxL0TorkDErac7gPiNpBKqZ+p9U1sZgPjGVtl7f/rF/7bqfoP6CvCQ/1sfPjIIKYR6tgkiMTAInWCIFFLGeeXAgQO1534qj8jfmzcppKr0ATE0gLiDnt9FaiGkEx/w+PLS98pKItQVacSn0mKrA5+UVGZQlBmwuh12baCjx8CxZ57bJGEgfVz7wJMz8ABEhmILkbrjnVVmvpR5N8RjkBzQeoj0cN7556+xKE3VOFD3TtVXZwMm50sKqeJ5JQMg5sJLB7n2D/lOp1VBRG99ovMrumZACpBgOK8LHjH9qkwwSw0oisbA8pFncjUVdo6DR56dSRj3P/70BvAQNZab3+qzz00PP702+8593vbvtkCkyBZSp10hKaaIh9R+Pi9SSBXPK008DFShDiyjFgpJB6G85X5VENFtqHMd8uyQ+llqwFE0BgCOH/vw4zOQ0IbyY88+N7N9iPqKlHfIF7feXQ8fmf6bmx7Nv7/14aeC87GoHk08bytiHY8sWfQ1UU82akR6qTP3a347H1JIHemjyGjMSr8MkauCCCowLcqWKbPOuwYeBg5lmRkMHynh7uXVXC0ljF+DA9eorJAoxHDuPn/h9Y+sicQiz37i9z9X6FJftr5V3m8LRJirqKhWVlZqgSQ2G3hNnbnf0Ld3jNojq470QQcUBRAy+GCyZYhdFURkoNf1pEqta0zykrpYuhgAI6qjT//tP6zd//hXcnDAyA0I8I90ceGu5ZmUIAzfTXnn0g8+lksSKe/r7y/atZwDzhDGHHaFtuchi1d4Bf8PfuITycDpc/1NnfMtvDfu6PSq0kcqeMhgBmh0RGhRRzA49G68kk9RWkZlVlSH2HPaX8XwX1R/ez5cwAEkAAcBhn9/x2NrMHnNxEPXr7jp0RxAfM8vvf2x6a2PPJWronzGct837j3UWff/5dO1VuVNjz3ZVj02j5p4VhRsKO0C1MrwoCbqlpLHaPfIqip9lAUP6UBSVgp8n0JY3gl5X+g89XWRx1dqubH36rRf19Wuhw8WBO7B4ENqJpeRy28AA8kD4/fqs9/MGTveVfKcFKnk4FNnDeWMBx3rod8tuiYu5JRni46+x1jbh1KluuuWBQ+cah799KfXWJDyLwdVxfhCjWfjlELKnvcBgZAMUtRWRQMXl9dUIEkFEVxxU/Os0dmNtL+IPva8W3BBusAm8bb7Pl8aLIS5AwhIEi4oSF+yjxWAokFFnkm68tWvz9Rdb7v30PSug6t5fnr/q089+fdeuwi2kj94PJdCNsWQSP59pG3HiKS0CU8reFfKvEeiCWkXWrLtjO+8kLKnDQrhUwLlQsdHuh1NJ6XaRwCGIg+MsgZ7aVOZ1Nx1u2Xs7php8vfBI8/kW4OkqKF4B4aOVIEKCxAAKJAuRMJosm6hvAAUAaxQCpCsBxkOBkjacu9NVV/BG2688ca1lLkO0AAUvj5Akvmxyy9PyielrNk7Yzu1sMxZ59LIFOaJCimF2evOKWMfwTDnA5IuwMM8rsYPHgIaMZUURmxUV4DE4ae/PpgtQ2TOAFwAiXb79YGJkki8zFDyI0XCQbKh3T+/Z2VN7Duvu/XgGuUgmSGhff7La8nGap0/jLcNl9lYlLoun2u9qaLwNF/K5rAxLUtqPr68I/fGc3Z6Fekj5ShWGLuokEhjm6C5nctvOi0l6JBO4D22b+Y/9ZtI5xWKtrTHV2e7Nw5QgTmGGC7SBYwTxqxVRWPoW+qL8RzpyAci3PuVj39hzdcu7gEKIbqE8isDTJqGgEgbczVVxb1nz57oPKdu2D10nX3XbbUDk8IoXHrLGs9hniGdoCaw67aHKKh3xdTvxq7L2EfqgELqt7Q/tiKJtcWe9QcwMEgdYKcZIqARs1eMsd+w46Bi0+2U69f/5z9bO/6N53PmWCSFQRucAOTbUEqelFmGVqzeU20RqfMTKcSnldD1gukzj5081wANNCsp/E3n11L0+jgCC8u67qbs8QRQOJ0z+526QtAdxDUqI/a2CeXb1f2U9rt1t9/9AQe0R/3ESlkzP/GMChm556XPiFwHBHTbucabLCRtcP+TK//1gJZUcrflv3w6+A15vm7XwdKxJwcaPLRNeEBRlLpm+IAGc7osaOjxofOTOjSRDt6ld2lp6a1lGspqQRPOdw36F60qQP+iVYIv7zL2kTLtSn03RXXnq7fd6wdAiMzeevuZQDxhoACHxFksSr8AIhKQKHTwpQBHCqACJnv/8mlvnoCIBp4iGrdlD4HHYIPV5evtSjjdsAlNAvV3tS2p/CThvWG79G6ZTB5KaMRMerjyyisLdYKpes2qKi0GBEGFHhF0Vs8ybUp9l/L0YLTrfkAhhe4wTHd1vYjAoWlF3EnIWeDMXlurlcb3ytNnXI01IJXdGbjNIEPmLacUwpfgOcSKpDgAadrFrgPqsKZ40ektS0s/MUhbSBXjeZENo0rgHkE6VaQROjXV7TcVJGLvNbFaiQ3ERX+Wq0ge/0puwMbLB7XLK3/z02uaMXFPVC8Yuolz0LvNhuwcvFtmVTyPfbHyla97AYQtT/Auq9vmXY88tUFN9t6HvlgqzzbsIe58Tg00LEOLttRXqu7DNKaXNZ7TIFck1IQGBOpIBdhGqgAJ3l11ylUdFVw1mMtuO9IGTJ0YBZ+OXgNH0TX2DV/QH8wxRSWjx/E8XqPK80kfTe+XpUGkynYqd0ZspynztOidpufxvn37gjyjqC4lng/TmF7WeE6DYwDShB4QIIiVEZrcSAdtgQj5hsq1+9WABWkj5CFUBBapz03qONM3uPX6aNY0eDAX2HpFuxCzpQp9nTpPUAelqsBLMOCcySN9NKlF+NwTT6wV2XrL1jH0/uCM6edMJm8IVTZ2P3RYFJJD7Luyz6oASVsg0uSgS51I8/re8W/+c66ichma2Cfc2AtUK9wjUA7GlGIIZqVtUseZI5mv2XlTbfBASkRNiLuvVheGxujxbzy/Qdopaw9pS5WF0TxU5zr30YAQ1d7WAnadd54YlB2kSuQ5DQFxfWqmJqQPH8iwGvGVF+pwmH2Tq4KmRd5QvRfhPoZt1yMKICkrKYj04lN7tbGqHlvfaE+jySXbNgFIqmrJPdQK2qbaSnY9cmRWLuXp0xRT6NmGXWHHjh21AARg4z9Wf/gFko6Pl9W8N6zI9CrqKyEASOsy9ZbRN48wT/XTbmobE9oUGyz2LF19BXi4cRh1JYVdD2802gJOZdQl89h/nG1xdgG1ND13x94ZIxep75ceeDI6rpESr33grzZ8hxRRxgmhrhSCKqvusdLCryS9+JJLou32jYcDBw7kHlxnaTrJwYG6sWjev3//1N3rD5AhDkXKbTAdxmFTZWM/fASAuYqtgtT3TtP3fMDl63SAxu3wKnUpu/WKry6LfE9WbEePHZtuv/PhDQyJVWnqatZHQzyKhCGSAh5lGJwvzzHfg9FtYrivet0GGkGnIgnNtWHwTVkVlNCxrhTSdIAhkkHKIhRAwNs01RYDWLi8grHfBA9y+NYwYkKqqq+cxuSgAVNPJbTv+5R75E+kKO/SKSmDoG6dQrYemRyLmjK5lpeX8wnGCgz/esaA/Mf6c/KyV08nr/3B6eSiH5le8JO/nOdThY6uNANTXFTw0Ooql/ZLF2/fBCBF56Nrpg94nAH6tdIrd/rVPe+kSPJxxwJSSNMbLsZ2wQhJGy5dfb990g2xJr53a9zrX431whe+8IU1GtA0QZLyk6Nijxw5snrPPfcUBjIyEOucNAYzNMP5GfWUAAabVEKXpscOC4J8gbB37ya1qMtQ+M0KWQcIFq2ofXnMyz0YXqxPlt70rg0AAhjEVHwuwxcAuftgXO8foueZw7DObqFS5ZArAgybXMn79slCQq664IT+u2691buobcmj7DO9GtOrxH40zTTK5odoHhqkofusjMuWI+83GaUaqt+Q7wMaMCcmVZOTV+gbSwVMQvTR519gQ4kxxFAe83A/5RzvpR9/7wYAiUkAMPuQW3VVdeOZPM/aUqpKM03Hhuh9sqraWhinywcPFvKl2J6AsXkQedavGqvs1iWRhlRm0FXyTFFbacYQW5nFyuc7nc8iXQMceL90DRq+/qAfxMYmfaC34oAZFZ35jR4adRuGTvJiMst2/+TPf6itPGPhAqNAVcc/6g8kYPLk/1QPR8bivEKdfDRz751/5a0zAIFeMU+oM9LC2c0mef/ug6vTd338C/lOAGX3t5I+Y/djJBmRZtZPSCw1x6oyeZce7m8WmSlArL9LBQ5pPxKU/r6B69MIAb1JIdlk0vtutlWIGNNdSmdJyuSuUgbfLOpOuy2J25X7QfpPgMRdIft0+fQ744RJHgIGybeplHIEZAAo6gAQy1hsMuUoWOiRUvdrduyYLj/17Ix5r6uPgvViPyth9KQirWhvqvVTDYN5+NrKLsg63yp5kG/TBvUUGrrvVIkjYV65+dT+nWX39QIgTXhf1W785IwbXNl8mKiu67BvwHIvdYXm1oHvQnnO+30GOiuy7/ru757ec89H83+uXRr19RvGed7Wn5yilrno1z8+6yeYNaCRyli7qj/1gZ6AysrKyqy+VccRhx+lguI73/Wu3E6omf/P3vf5aB0eeOKrq8LokT5ENajVUIBQWWcFDSBnpJqK9pQWI9RTxgQeXCkqK7d/sa+k5F/ynX7UWE16X5VscCNEZFIWgQjMpGrdFt1wnhy89eKXVqZx1b7R38FIGQv8pzJV/X0f19QVNdi66ivKzF0mlNwvk0m+uah8D/PH4QDGXaTu06om121XnpFPSiS6lE/qAggnQernZa77lEIAkLL8gUVZmb4rMS778caqEzxYonGtMhcmoqsbZxCyEq3j8mduu6emSR4vL37pdPJ9V0yX3vCLrfbzUMZbG/UQMME2E2OgMKDUMY13kU/9ihrLBQRfmfuf/NrMTqHBBhB6231njscFQGJ2FF++Aj5IN1UASOcpUnIbfVKUZ1kAaRE8ZN51G1RYde+rIsL29RwDJ9KGGEbrrkTLri70wJ6n633790fVQef+7AfzOA4AhJiOvvp/Xspl3CKZuGACA0p1RcerqO74BSjeu+9vcsO5Hs/atReXaf2s6PpMnl+c2UDKfu/LH8eIPvoeAIHX+Oqk79FveDC+KdHRoUZbut0bK5tM7qhR2V46rav6mvSxeUuSm72qwPWtMX7lwWn2sldPsxe/ZK7HRVfjT8oBTLCbIGGn2vE4IbOsh6JmeLFrHbCJFFN25wAAZOsHz5wGifTx0b/4clIMV6xOZYBV6NpUClCHaN0hcMic61aNlU0mK00Rct7yqbt6iw34sT5jQmyW6pam5179e/mK8twde86ACNHlF/2IDGpLKzqJlJ1TqKwe/fSnazPk2Pj84yf/PrdhrD77zcKVty8fjPhimG8y4LMvKYQ+IuIcVa+0l3mCKzBqybJ9WPf9zrZ4r3LyYN3GjeV7kz42Sx9MDiaGb1Is/fc3z5hCDiIvfsl06c3vnE5edWFnEwj15WZw83j3veil08nF284AXUeMvYtxv3379uBKWBjbEFJtQPe5XVetI2MzVb3XRn+IHZZ6tGQkT51L3ZxUOMbo8zY63penSR8lAcTZHuPcX/hwrsrqCkR2XHttvvpjFQqQ+PqUe5NXXngGOF700il2m1zlNlAQ+bVf+7Xpx/+3j09/67feP/3FXww7JwCa93z0o61KHVWZuvudNr43Yftw8+/TI0vGHP2RtJBpb9ydZmuq1mNCxhp9Lh3VVrrIcR/uhHR/s7pCH+/SHg8sUUtI2hWIoIM+paK/Caxz6zf7vb4Tbe4t9rLvGDyIvOzlL5++8Y1vyv998TesuEP6d7fvhvBbjO/YPuq47obawvhMtRPNxkR7jDw8Dtst8/SWpaWfaB9Asmx1jolYufOqBAaFBvQ83veK554twgGSHEQmk7W2JBG8YHxuqt46Mmlf9uoZ0C39+K9Ps5d9Rx6EOLZ5AGiObZwifci+WhwW1tbcGIIUMoDx1K47b5Zlrx9AIysz+bbqjh6zrYE9L/nu27fP029L02971ydmzFmkENKcUU8mrdhEMBr76BqOXVlSdfyT6eS878y38MlVW+2uCj0089hnEurAdiRjkjqkf2TDS1RXZSPXJY+U1KSQyTTLsmOtSiAvyLJ3t8WEx5yvbzWbMmgX6Z3QRnDuLq8+EMmwQSQwydR3QseRwkT8wXYbT+ObeY01WKfUuld5r8q+S0MYmxo8ZDuUNuu1p6PD7Kr0YUfftGsHMfvH5tWfSR9+w7k70WHOPk8snx3ECyINMGsOoVp6+XdO7/8//iy4mvWrMs66HEvdNoBIwwDXBLPARRR11RilDn1+Otvsl40Zccde6u+wBLp53jfRRwPMo93dece6+26bHWWuu+kA4l3dv+jbg2osYday1ckZ+8OrvdJIfkLhRT+Su9ouvfld03N/+nem5/7C73rP8ZZ833bvodlGf8JkQkCnXY7l+xmIYBN507u89Wpz7IXyLrtVhrS9i/TgkWemv/nHf7uGXYO9tf79HY+tkfJ/6e2PTQEMoW+X4CFtD9rBGljAhPprYPfbsYOY/cO/CjHX3TQAYYL6V/eTnPkK0wil+XYnr7ww94Di+twf//XpuVfdvXbujr0zhhP6lvuvuOnR6aUffGyKIZaYglBAW0iN5Z7IJ2UJiGAPGQqIhGw8wiT7SI9/8583nP4o9Aul2Dy6kjw0PUKq1oEx+fYWK23ZQSz+YzOAmOtuOngwSUMqgslrfygJBELMxr0PWLCiFbAoy4h8Bn8i5N1y5HcOIi9+SR4vMgQQGaLN41PrGywKzYrSoi3jNdNv8poFxIK79LZjBxn79u1trCDMeF4OQJicoahfAvSKmIrvuQsWIcmiDJPxrkJRta2fhudLJX5lCJIIqsIy7e3i3ePPPT+9cNfZM819NNT32or5SGlrSFJug4cMMM924kFs/6uNEghRoymD0d7ZCDK+yclOvNgsNAMJXQMY2C7w0CkrWaT2RcgOUgRyMxB57Q/O3JD7YBDsLJ3a1q7fO/jUs7lkiIRIP/IfAhYOnerC+8qlQUhS7qMveyqzWTsIIe49NaQ9XV9No5gZzzcCgzsJQ79hzmwbAmjkxu5AHIgGEBgM6iiYTyjfJu9TR1/kPLYXXS/fNXYZ5kp+zglBhzXHWdnvQ0GSTdKnjbz2/uXTXiBJOX+k6frQ/16Hj477smzfN/j+ZxqNB5m38z+aIPTYInqbnmRV8iMQjEOBtKeNjwlzD0kDb52uQMNtj9cbR0Wkh+rNfQmC7ANEAJCxjk2kDYk61/R970PtRaC7/S6/fZJyE3xjJHk0ez6IBRBuVF9Z7Ec56QPXTSSIQuDY+cjaf/z9z/UGGsI8SDk33DfZi9RYwvj6AhEARLdjjNdII3qsYA8pe3ph3XYjhfS8uaF3/PnGZAv3TrPremNSiAUQbgQQU1+lAQgb36HrFqYaSpE2bn3kqWBwX11mUOX70DkRZTzGNIh0dWDWkGNAyvQDB1Bp20gf9hCvFLoYaqxmAwrNgL4RQMaqIigzgau+W0ZNBbj0paIqal9sBZoqhQCY5/7ojtwm0sIq0btCnQcJRPrGBZGu7SELrsZqxpBuBvSN4GHqq7D0gWeUVj2EJA703EMFDmFeAEjI5biMFAINJJI+B5EXv9TL+JsCGLYwkTbMQ6pBBFXW3QePddY+xoBv+52m+mrI+aB1akSFZQb0jQBi6qvNAMLeRRftOhhVVQ1RTVXEYGMr0DJSiAYRAhKXvu/HWwMRThgsatfYnq985euzhUmX9hAAZGG9sZqKSDcD+kYAMfXVWQBhdZhi44CB9uFJU5dRxtRY+RkhCS7IWgoTSYS0DRBBfbV79+65AxD6cfefrc4WKK/bdbAze1lsETFkCaKBujUTkZ5NJnc0UJnWVlxd1s2CB8+CR6q6ShholyvHusChv48ZUsuqsrQk0gaIACDzusDhYCm9WOlqQRJdRMy3Qf30ZDJ5Q201VjaZHOiSSQ+5rG3bts3l6k4zzKLrspviCYCQsnI8pY6RLSprCM+LopInl2ybrYx1W2PXM0nkx9/bqCQyxE0Um+zD5aeendGaBUkXUeoASMgWNmRe1UDdTqN9agJAOvUiaaDhrUk7i7731crTXy+0dcQYJ89uffjI6EB43/790TEFIBS1233eBoiEDspqkon3mZcrhXS14eKdd94Z7f8h86yadavniWUeWBvtH4cPHx4d82tqwt/vBHe5DDH1N/78x7/x/FpT9eoiH1ahvq1N9OTMd+utahNpQBJBfbX/U5+a+/EppxQy3pBC2jzmVsZWKCZI9/88Xtf2xDIPrLMAssjuu4BHKkCkvPdLDzw5OkaHKqvQpfNl3xE9wMpHm6Ykke+54ILR0VQYdJn02DPPbRiLXUi0LCAK+34e7SF1PbGWlpbeOo/IWqVNi+q+y4RNie3wMcfQva5WjmUYU8q7rERTGAl7YKUedAWNco+sF3379Nyrf2+KJFN2fCJ9LIp69eTJUxvGYxfBhQDIgrrz1vPE2jKZvL/sYJ7X9xdlgmpGisG8KL4jBBJF97tYOeq2NHWdCiLMgxxIEs85OQMiL52e+7O3Tctue7Io0gd9iB1k6wcfm0khXS1GQnujzSu/W29XvT2xbA+ssyqsRbR/7HrkyGyiFgFC2efYQppi6l3nA4iUOrXuZd9xZnv3N78zP5L3XK+t5E+mk1ddeEb6eOV6mqAWWSTpQwBEu/MCIOy51vYYWFA7SL3DpcyF9wyALGL8h6trLgsQRe8z8Q8/vdb6xG+Tsdx8yy2l1U16xTp52avzc1E4GyVXXb34JaXzm3fPK7f/XE8sxtG9n/1y604ZC2oHqefKuyXLVvWAX9TrRYz/uP/xZg3nLqAw8f/g8adHDSAwt9XV1d7iBFBdnThxYvQ0dEEi9ttVYTGuulCHAiALGg/yocqxIIsKGG67h3xEaGyyVX3GJH3bfYdaU18JmHQx8avSoOx3RIB3yWAAD8CrbD3H/j5GdBk/knY1jhYyHiTL7qsEIBwo4jLSRf09r9tDhJiJqyaQidp02tXED7WzjfswdTx2Ury1qs6na3bsWDjJQ/qKYFY9DpFku9qhd0H3xTpUDUAmkzdUHeDz9t0iqgmufeCvNkxUPWmbuO5y4gvz6TpdOXx4uvuuu3KDexOn22G4X7TFjNtnOpCQccg4OvTltdZtINSDWKB5422F7akaC2IxIGcM6Kwk3UG8CL/didoEaOg8mPhdH1Pad78BKESLI6F84AMfWAMQ+GeM+SQW7hEBf8uuXQsPHPSdTzK+aNdyZ/NzUQ3plSSQLrdxZxKxUnvi859fO7a6OmWisdLC9uCbWIWomeD+mJoHdeub8fRR/vFvPN+qBNLlxO+Dflbm2Z2bm6KFa/9gEcIuCU3lX5RP14Z0pFYWGyw64Iv8wxeJSSvaWieVvyW8Vy0WpIsgwh+6+OKklRUE6wtI6MCigTWPz32rPS1B1LnueuLPY/8sYpvcRc2vfPyvO1FdaVrHtvdPYMbJKjCkziLVeUcegKe/NcteX1oK2ZJlH2uSIG5eZQ2BEAvAcfNp+/cibFCnJ4i+biuQ8NaHn1pIUNa0tetqEsqtjzyVnwty98F+PNDajkg/7/zz18oGLd+5e3ebfLHauSBtRqFXjasAkbsGkUU2WurzF+pIHPItx9r2NfGNYVdj2Ea3jXRrMyKdXQXK36AYQgAAIABJREFUgof0z569e9sCkdNZll1dWgJpKwodVVQd/3W+bcKjJVVyKRIjpQPnMXU3rhMgqJKy6V0XBwDNYz9YmzYy8T7p0ZYnFuCBHbhq21q0z1SLRs8mk5VUJlvmvSY2JcS4XqbMqu8u4hYmegBjB3nvvi9WNqZfuGs5//7gU89Wnhi6PnY9HEa6qH3RlidWExtitgVu2MNLSyBtbWPSxIoetVJVUCjz3aJ6YGnmUKTGAiQu/eBj07fde2h67QNPTnH//dSTX5uuPvtNA41TxvD1WJqHawCkaQ+oXPrYvbv2fKFu8KwyPC7x3fLbmSRmXKqyTTLkLtRYVW018zBRpA2uGouzQZAoujgJTupgqQHRUMZAG6qiOrYPly6tbLeSZfeWlkDaAJAmXWJbQtoNgNhkfd2OHstv1Fg6Kn2MpwmOhdZWz3EAZdOuvABIU32/b9++DTysCT5e+mjbts5Cb3JTwi42rtvdgFjZ1MDoMx+txprH/av6pK2VPQ7Q0P3UtCtvkwBy4MCBxgEkm0w+U0oCaWsjxSZX9F1IIIscA6InDAFccqytSSDjY3i6L+26fv81vco3AEncOqRJm0IX8SCLHAOiGY1WY7319z/XefSvrssYrrEP4bJsbsv1mfUQ+/vQykqjq3wApE5og6ZRSzaQY+UkkJZ24sXw3YQXFnvCNKHbK8rjS0ePGrNc9ySSA6bGfBStnmhNXxMgeentj80kNR0rw3081Lo4erXpdll+m0Gw6WBCAKQJdTkG/rdfc03zvLHsjrzntAQgMOy9e/fWNhi95192My1i/k08bwLs5mUCihqLfaxsZb2ZqRx86pn8ZDzcmXFr1gCiry/adXAuTmKcl3FdpR0w6ib4i87jLZddVpsvHj12rPF65XUcEoAQiV6HMSN9dLWxYpXBNa/fyOaKAEhXB/iMmZaA7N6/fHpKnIwGELk2Z4TNIDyW/gZAmg4jqCuFUCdszBqUGrseEoDQKCSIqoOlC+M5dVz0KHRf/4g3FtuS+J7bvc1M8fhzz0/fu+9vDETmKKgSZt3GIva888/Pt2yvMo+aNuw74HNiEDYQXamyLr3HT5zo9MxpBkiVjpznb7Qaa9EOg6rTr5xZIZKHTpHmjI6bQbcOrbv4FgBpy4mHLU3QspRpB667TUtEmldnk8npwQEIFUSaSCHW8vJyax3mEGomAjJAynTiorwrW7xrd95jzz43fdt9n8+NyBiLDx55xmjHEajf/OfCvcRMmhsngLSpCUESSbEVs6huOqgxwA/LAUjXx9niObB///7pysrKjPHg6QAR2+yoALFyEKHcRQGFMu089sxz+WpaDoXit8SI6NX1ou++u3zkmSkGc00TrqHbytNfnxnaX3j9I2u2Lcy4QAQJpAu+hBYE7yzNFwENFtSYAVqWOmaL6dISCPu/x5jrIjwzAPFP6jM79J7R6f+b9z3qBQ9hmotocAc4fuzDj28CDqGJSBwCvNDoM//vM+YuPiIbCQDSxU4YA+Kzw5ZABkSoGeoagPgBBGlFbCHCFIvSefc4QmVHG0MeV0IfwOITK383AwvUgYsIsmUk3iG+awBSYBFpMw5kiGDhq5MBSBhAmNS7/2w1uMoWhqlTbCTzEj+Cyun+x7+SBwf61He63fr6ol3LG9Si4tX2Kx//wgxUhsgwrU4b54IBiAHITNLwgQf3xg4gMLnDT6/ljO7u5dV8hcwq+Tf/+G/XSPnnPtHRvFeWSZzZ3uTJUiACM8XIXqW8svVr8n1oiZTB4VpElWtQSL1G0sAbS9dLtsrXDgn6uV1vZNxDoYcBiAFIIYCg4xzKgE2pB0wOQIBBF6lSQkwP5giTBFTIL6XcWx95qlJ5GJhv//TRtSGCCW2HBtAiZs8I0dF335U+oC0g/Lb7Dk0NQIYJFKHxv3AAMrRAwtCqf0j3r7zyysGrFQQ0UpgcoPKKmx4ttXpG7fQHj29cNYcmFYdM6X9OJUTKYWuPIkADTCgLAFx3Ae6E9tAPtRrqKMCCOhTV1QcOKfduffgpLyBT/uGnv+59FqK13e8XcAxATAIplECGrMKC6cDwyujfJWDtzOr6a7mkIoyPe0gS8hsmCvMXYILBI9nUsWFQBgDDkbdF+0VRD6QhyqedSCowecCFf+oh/4qZrsk9UiQb3kWS4FvAibxoB3m3BRRCQ53iqkudVF3tekReV26/GYAUAcg557xqSNJAH3UZIoDAhGGAmjn5ri/94J/nKihWtqLSgpG6EwGmBjOX+0gNr7zp0Q26et5hKw5huHWBRMoiLQsqvraO4Z6pqPqVGPSYa+LaAMQAZFQSSC4hPHzEK3HIKh2JQcACpioSBxOmzOo3pE4hDw1eTQKJO6mpA2CGxED7yqrehgQqGM/L0N+lhf0eHvgsHIAM5UTCPiSJqmUORQJBDeOLaBYm6XOPxdunLabFDrOiOqNeqTaSuoxQpBWxrQBggEts63ShUZ+pSR/DA4C6YxEAgT9U5S0j/K7ckbZtnYk+JsINYS+sWx85skFdxUocxsnKXCQOmCggUndSlPmeva9EpQVzJo4BBl8mj6bfXX32m7mNBYDZ9fBmuv2P9x+a8n/BzQc20LRNcDHpY/7Ag3FrAFKgwuLxmJh9G3XtczdemDHA4GNubixB04w4NT+2Kcd+InXcevtjya6/qWXUeU82faR+MPK/+4e16Tf+8RvTe/7s6KzOUve2UpM+DEDa4E2d55ll9yZAxsZXsslkrfOKJp6t3kW9+gIQVE+uygrJgxU/Kc/qMNamv92lvLcAkVOnTnXiglvUDrZbEWAAQP7iyNdyAPnqf1vrxKbyyvc9ap5XI/a0io0vJBD4Qxd8aBBlVAGQLVm2OojK9wgqsUHUxjOMxxo8AA1cX3VZqGr0776v9eaKMOz3PvTFQdSPehG8R50AkD/9wldzAPnHf/zG9JLb/mwGLgIyTaehuI+++8vKry8VLRqAbJlM3r9RvEj4lU0mK4sOIHWO3i07UQEPMU4LM2O3275tCyntgFmLMRtmrT3AUr5v4x3qtHX9bHIXQLCFCI3bSNejzgchibVB20XPEwBZJN5YFUAOLBKRfG1dLXkyWNWJ5VNbCWO76+CxQazoi9p2/+NnT9173QDUbACI2JEAELGBIIG0CSCUNRQ7VVGf2fNq0sjx48cXCUBOc7xHgsyx8ZUtWfYxH1NdpHuHDx9unXm74IHaCi8rvInGIH0IE3JtDn1LIRpALv3A/5WrrzCiAyBv2f1/tyaB+Pa8EhpZWo1hD41uh1ZWFgpAJpPJGzaiQ8KvbDK5Y5HAwtfW/Z/6VOsAguFZpI2u3XGbnJgwbLE50J6r9q70qsKhPtc+8Fc5bbd95HMbAKQtGwjSR1vxN032leVVD8g4g9zHL+b03ulKAILea04Jktz5KecS15mMbpwHezSNlQG5AFJXjfX8c1+fPvNXy9O/W35gevSh26dPf/r+h/7+sYfu45/ro5/84Cr31448MfuX94/84e9Mn7j5p6afvvHHp3uv+8npf/mdq6erf7pn+vdP/vkULywB7KZTc9utx5jrzKUuv923b18yD5kDHnr6nHPOeVWCzLHxFTvWdjK95ZZbWpNAiDAXBoau3vW26nJCNFGWnG0hbWI1XjZfQOPLD39k+oW7f3n62HUXt/L/59ddPL1q5/tntJf61k2RvsYK/mX7adHfv/POOxcKQDYiQ+KvpaWlt84Betbq6LbOBMG2Ie66Y1ZbaUbCGd+aCZcBEKSINkHDB0bvv+6Xpi9/z74Nddb1L3NthvPFkDwY73hgXX/99bX4ysj46olEyNj4GmLLyBraeKdeccUVrejxteqK4MB58NrRXlgw360f/PNCCQSJ4+hDH2pF0vCBhntvz3U/2QiImOpqsQDkZ7Zta5zXDJjXHtqIDIm/bD+sSR5tqlfZTVyj5pDVLd5WY/K0CrVfezxJ24qY6jNPHpg+/htv7A08BEyQRKTOVVJTXS0OeIgEwj55A2b4Tdet3EaKGl8WfTsTBkmIaVa9L1uiz1Oksk99de8tvzb94r03TL/8Jx/JjeH/+PTfzmiZInU88o4fnP7WFd81vfKHXpX/cy1Mv8kUm8ibd/6vlUAE1VVo+/uq48O+GzYgocJ6+XnnNc2kh5zfhzQmlLq2aPTJtMlgQi19lDl3fMhM5Yz31cENDPiXd/56kNnjHVUEADvf+JrpS178bZsm1Xe+7EXTT7z9+wu/L8rfff6J6y7bUP9USWSeFgFDHmNDqtuxY8c2jct5lkYqRaELymyZTB6aZ+KktK3JWBCRPmBQBAz2OTE4x6OJszz0rre067/b+UAtBo+kEeuXn/y3r6iVvwse/EYK2brz90qByFV7+o1z6XPsLHLZixYDsmVp6ScED0qnFkw4me7evbsRRq+lDxht3y6fuA1TD7zBqgAJkgc2HPKQ//N2fnLtk9ddVpnBw8hf/bIXdQ4ggMj1O39t1g5pTyjF7jEPtqtFBoKqbV80F95KQYSCNC/IsnfHVoOL8KwpV17NbIei+tCbNwIkHFKVAmzLR56Z6gh6GO15O/flQXu+FX7qPQDkJS/arLqScTaZTKaffPv3FQIU9pNPvv37p6SpZRNwGAIMfT9mNDdQGbb9oipoyHcL6MJ7GmcqwYPSqcWCTKYXXHhhI668EvcBM6qy4pdB3GT6tvv8u9IS2AiYYKch4JH/T6z83RogKBsUaqb62p1/lIMHDPvaH3719I0XvHx68Wtemqdljd/veeNrvBIIwPJbl393FBAe/BfQoFwNOB/e/rroNwIwj1z3HwoBJHbGB8Bb5HnWZN9ZXt2DFQCyYEfZVosBEaSxWJBJzozqbut++Ktf38CcUlb5XTCIuw+ubqiXBoXUa2wHqK1Chm+YeVkQQcr4Tz/0qukbL3x5/n/tD3/n9E/f8QNRIAA8XPXXt7/o25IkFkAE6SfWZsAj5HEljgTzEM/TxbgbaxkL6IFV3YVXQMRceSfTurvyakaNIX0oE0jsIERkX7Xzt6MM1GWuSB2/fd0v5Uz9f/mpC2arfln96xSJRFb6baU+43sZg3vMEyumtgI82LSRd4bSr1aPdqSTBduFd4oTleBA5bRvV16Ojnz7Ndfk+1Lddttta+xP1bUYWdeQrtU+qIWGMsGRhAQYfve67bkk8dM7//P05Tv9W3y8ZucfTX965/88/d3r3jYDBFbuSAoaMNzrLgDk7u2vm9UBdRcSTIq9RADtw9e9bUYLoQnp5R9+PGoXwguNeJCx72U2lDE55Hos2CaKAEj5kwhdpOnrXBBAYvlg+Pxv4jNu2bWrk6CeuoZ0bawemqFVmOX1O989AwWYKkZlgIJ/rv/0uv+w4bkwXgCElb6AxsWvfekUuwNGbPkvUj9JXnVTJCFUaVXKc72w2GIGyTHG0MSFeShOEbG62rN6UkkXBvRrduyYDijK/XQtF14Bkj48sXbfddeGiXv8xInpysrKdP/+/dPl5eUpv2VCACRtH3BP/lJelVSY9KUJ+0NVyb/qNyeee3626n7zzju8AJHK1Pde9b05YKS+P6T3AMHXvOePZrT46XueWI3ZqbQL8w9/6LONOFlU7UP7rh4wpNKvbQP6xZdcAo9ZI1CxbX4mi72C9PS3ZtnrBQcqp117YmnwACxC6irUWsfWj5wFRNreXqCqIV2riYa28+7Bp85uKf+9Oz9WC0CGBAhV6oKk9e77PhNVV8Fsjn/zn2eeaDHbSCpjsve6AYC6dG7zGNvvueCC2Y4Xe/bsCfKy62+4IdfKrBw+PCXA+ed+7ufWCkBgphmo8F49DyxBnC49sbSqCFtHUaNBagERCFr0fp3nVSPStQcWrrF1B3KT32vj/qIDiIDOVw8+EOwj4l/EHdvAYxyMv6n50lYE+mRpabr3/vvzMRcy0vPOPR/9qFfS/cBtt7UFIvU9sAREuvLEkn2nOAkwldkDIiIdhKSV1Lxi73EGQJXB2AaAEI9x72e/7B1QZeoozBAVW10VljDgeUg51ErTEalDB4IaeCwWeDAWbr755mSeFOMj7jOkD/JHRRZSXb3zne+czXV443uuv34qp6XyHQtvN98GflffRFGAQ9JsMjnQQIWijdy2bVtOSCSKECFDdRAvKdLQO3XvA06aqaReaxVWUxKIBADWyU+fSQKAiEvuPABAahu+uvzA9At3+U8/BERweNj18JGpdoIw8Fg88GjT/iEL05CHl1ZvaRBDKhG+d2B5uWm+dxrbt/D/2mkXe2IJMcpIHwIKAj5IMHKvjVQknVTw4D1tqGYVW+bb0LvaLbhK8Nof/OXTM4OxGPjr7GGVyrBj78n27Tvf9Jo8mv0DP3VBqzYZwAP6/t3yHwbL+eWd/9MGOuHSOzQvutAYsfvNAV1b9g9AANU4AOU75VCrt456dgE+7/zz8zHcQv1O19oDy0WcLs5HF5fdKuIYEotMmDaAQ/KsageRFWxTRnQNIABAGRBxJQ++j22/HmP6TTx7+B0/uGH7EaE1KduiNFGGzoNDrL72+B/Pxss/PfN0sAy2NyH2BRo1Bf4yTi1tjsG3Tcs27R/wvZAaSqu3cBrSc4NrAIa28737rObv0y4G1PrdhSG9DoBo9VJZ9VcZQou4WXbACsPH5lD2W9/7kp9IDykgwsr5P/7+59b0N1zXMZ4jNZTZsFAzcq5xn33dK/91cPCzeeLen//eIIN38yv6/cTNPzn9hjrYKqftyZPTx28Mn4z4kRvfbkGCp8bD7H3zpc69kHRQhm+E3s0ljL17c56g1VO8zzOxCYfUWyKBtAAg1Y6xjaFM24Z0MQqleF+5HSIqLAaK+6zJ31rSKTMotQE2Fl+Qmufrbj24CQgAg5BN5I+f/PuZ95AGELYjqaK6cve9Yg+qKox+z89/b7S/AJDUzRCLwINTEJ//5tc9AH5yuvKBnw+C1OM3vXlmwEztH3tvfgAH5txmcJ8sSon/OO/882ceVQRJM44oP7Qo3rFjR/5OCxJScwZ0AZW2D5cSQiKJlGX6Yj/BP7rst2Xf/9LRo6UZiuw5BfO+++AxDxMrN+FEJfbTH/zfp+xjpUEBKedXPv7Xa4AJwMXBVfq5XCN5VAEP1Eo+mpXZd0qYfRGAfOe3vyjI2CWPohQj+dqRJ6I0P/KHN0fKyQO8ot8bYJQbv2Oil8/24Bv/Ve8hRUgoAhIHLr2ijYFOrmQi5SChiPrLp96S9yqkp7Msu0r4fmNp2xHpBAKKkfrKK6+cIXEKAWSzwyoG+JT89TtISFUmgDB91E9VvpdvtFfXa9/zR9Prr0s/CEnA46qd7w9uTRJjyKicNC30dZX9rh5+5w9MX/3tZw+QYg8rtkJh910kjypbkkj9U4BDaMq57fKdm35258UH5D1L5xcoQn1LYJ8e521cY+sQENH1iJUt0gcAF5JQKta1mQh0F3mwylesUHIHCHMGSFKJAvAI8VO/qdMObW/RnV10rdVYB488WxlEOEtEgODb3vPIGgzP9RY6+/zsaYHcY+t1vRGiyyyLfgMgMHihH9dsWliH2T/yzh+YsodVnTzceouHVVGfyPOv/cUfBwHksZ2XrMh7li4WgKA+ajO2TOaRpEgSaFNYCP/Mtm2zeSbPJb1069Y1eCT1a1j6oMxmItBdAOFkKmlAW6kGA8S5MoDQZUeLpFSGoWg1Vh0pRAf/AQrCPInjEI8hF0DqAoeUQcoOt00ye5133Ws8rIrUVb4+iwHIZ3deXFpl6SvD7o0PfNpWX1XhozuuvXa2+GzjeN1GtnB3wUN+dxFQCGiIRNF2XEeVDuQbsbmUZQrae+q9D5WPCfG54LpMl51zb7vuF6a/fd21eRraRdf9bh5+l5U8pP9iAPIXN75pNmHlfUvHBwZV+iymQqrKO+Q7bL6ELJRZJPMtUei0paW6NRtAKMAhaRcBhRAJorLzbhWbBpIIGzJKR7WRVlVjaSkEKeGH7/js2uGn15IYlN63SiSMIhfcPVd97/TKfzkX43Wv/Ff5/1v/7StKnw44FmDBy6oKk+CbWDDhF+5+R+V8q9bHvusfoNpUX4mLbtUyYuqtmvyuHfuHAEgXdhBNgNQddnF/w+1NJBcmYNsqrSpqLOr13n1/o2wYZ2wUl97+2JSTCu9eXs3PHpdzyDl86vZPH13TkouABynG8BCDx9VW01Jfc+546Lsx3l+57edrMPmT0y/ee0OQHjro0Bh7/4y9qz5oU331lssuy8drm2Xo+V7iuh37hwBIF3aQ1MYCLoiB2uVNBhfbwLeI0jljFoO/lJmasrVJyLVWg0PKdcgN13e8q6YrcRtjBApfnZ+4+aem//TsV2sBCAGGobyff+7/q5H34jDc1PE/lvdaUhHlAYKy+26ojNSFs57TTVy3av8QEOnCDhIjBpIFoOFKAATiwNS7Ij7BRVUnA664dUEktv2IPiHQR8uLXvmvvQzTx0SHfK8+eJyafu3xTwVp4e7KW7W/7btxASmqpbaCB7X6auvWrZvCFXgObwtt7e6bzw3dayf+Q4BDUs7JbajCQRWLL3+AQ0L7ZUJyMiEG7bbVVb76cM8n/UjdilJA5NIPPrZJnVUkeXBeOcevxhh7KNhP2oEXVez7Np7J8bZN5d0EeJw6dXIakz7qSTbjYppF43WRnrfJvIvUV9u3b88XpqE6wOuQYFrgee3aPwRAuraDwPQkrF8GsZxU2JW0IYzXTSV6XupVJWUjxBRpBFfc2667OikAkNiKi175rzYBNMb0LsGDfbIAs5e8+Ns21OXKi19VC8CaAY+49GG2j8UEwJZiK/Lxj3Qh6iufCy7PZXdeX3xH0fcufyr1O8uOCY9vPW17XyzdcA0eeGaVdXvTeTV9DYC5qrQqIMI3h5/++vSug6v59iMY1Pn/hQ8/kkeaV3XFBSywh/DPmeVNrf5T8nnw7d8/xdYSonnVnXYxmDchGbALb0j6+MJd5nlVdRyP/TsApC0eAwCgRQmpyPTuu746FH0fmmtJ97Ps3taBQwrYkmUfS6rUZBJkICnfQ0QZkFVcelPKqPtO1ZgQaVcsPfKHv9Mp008BhpR3iFjHZThG20te89LSbWPPKv+GiOVWy88/txYEj8d/402NAFSsX+1Zuf7qkl4hw3ZsLKc+E/VUyPtKticJbY5Y9H1qPTzvnd6ytPQTwt9bT7s4H4RGyhnpuOf6ENlDiCjTauN9dJFtDfDQCjmFiff5DgBy0as2q9A0/f+Hrd+Rb8OSWs8mDdqxzRNNdTVc5t7WPJN8kQxasC3kPEnUT5SB6lvPBa55Htscseh7N7+Sv0/jYds6cEgBXbnz3nPPPfk2EkOVPqST6hjTZfC6Ke6jqcy16fewXWD0Zov2qud9xAz5l7y2nPRRNcLcpSm/Y+DRJEj5yrZ7wwankOFa5nmdVJ/d4QOpIvUV36Mub0nF9hnh7Z2lXbjzAhxMOtxz63Re298Sc9I0c+gDQLCZXPyas5slCt0wvn/i7d9fGtDYVdfdbfc9b3xtcj5IYJsOgKpxuFEMPA7f/gu251UN2jY9/rvOD8bsM1zLHKibinpK2sXRE3orE3keUl8VPa9Rv27cd11kant7dwgiAIKdoQaBOokNacqYLgOMFG+jpqWLUH4xiQHaVznvQ8piW3YkGvmdkmLIbsLeAR0xmK/c9p+C5UPnpsrS/WfXw5Y4dP+E7BJ1+I7+FhU8fEzvliHlo8EQ47oPxFBfxbyzdDkVrk9z4qzL31v/3YUaS9xkIXAFwuT6TPbFgrn7xMYqeYa+qRqZLoPIlx795IeCTC+FCae+g3QRapfc73L7kyZVVmtHPhc0mEOfplyCff1n98YBIG1LHzKHJCVIkcVxCEyQTHSIQpF6S/KtmHavvhJ0aluNpd1kfYYnH8HoHFx/XYmgrhTjK0vf03VtinGwNXkqCNR5D1uHbot7XUf6KFMvpIQmVVZssBgr38BjHAy+qfkUygfpoy8nHRa2ITAhZgT1eJvqKzRJws87T7uISpeVPYAQ2l4A5g3A+IzZBB2yBbJGdJdBNvVb6hoaqFXuc7JejAk29YzgPpcOHBj1W5d/V+vlc44HpwJWoY/vG6SOmMoKmhl4GHjI2GnTddedU7HfAibssCF1k7QlKakf9ZUgFbqzGEGaeibRmxBTUBldIeopH2jQATDzLkBDt7ENKYQVeVMgUZQPtgoM6QQd1jlOtqgc/RyAbCIwkLHx/HNfnxZJHZRt4GHgoRlzm9IH6qg9e/eWlnDgbwROt1zPQ8LLe0vbVmMJgy5a3fe9L1ZqPWVAlEmxCWimOw/XeFhVOT3QRzeAAxdcJJki2jQVye6rh90bHzC1KX1g/Nb79338wQfXLvFsoCi8w5eyKAVMbr755k0aAt/7Je71433lIlUX3lhCFPFkQC21srKSIzS2jbYN5FJ+StqGFAJjQsVTxBzH8LxJdVUZ4IA2f/PRG8zbaoFddV2AbymmYgOjh/m7xvIDy8vTH7v88k078abwlwbf6Vd9JUDShTdWHaLB0DFE8d+mqKrrWCQtuQM59feYQUSAowl3WSSXVIlDQLXOiYWp/WPvjUsC8W1oqOdxk9cscln46jGCdIKKq8lySuTVn/eVgIekXamxShAn7xSvN9Zdd7VuG2lLCmHwYS8Y0x5Z2Djqbg+CpPG1v/gvebuxXwgopKYWYT4uxq6ZbFvXfXlesYiV+DZpWw9AMgz1lQBIl2qsVBDBwC4dhH1Eoz9RoDD51LyqvNeWFCJtAkgev7FY55/KZJt8D2nj6EO317Zx/PM3TqwBlim2jVD9/+tnP2kR5qa2mvECmT8t2BSS+Qm2EVTvUhdJOwSSYaivBEDW1Vh96/RmHQjKS6fAyAUAuC/6SABG7reRAlBSltSlyfQf172zvnD3L+exE6zyYdqs+Kus0kMMOPU+TB5mj3qpCTXVM08eqAUc1OcfDj1q4GHgMeMFMv/ajjov4ifauA5/8kkk1+3cudqayr2vNM0sAAAgAElEQVTLrdsFJIrSbDK5o4hwTT6PSRDb1N5U7nsaXNo2vmNAk0HbdKrVWF89+IC3HBg5kgpMPfT/d8sPBIEHIAqBEfepA9+Td5Ptix0zmwJobMneZEBik22zvPpVp7UUT1FqMSqBgRrI4EsAiY4B4ZjuFnjUaQ4FLOLnnT/v+qRCQILgQl+EugYQH2iJ+Nh2dDpl++JUmmAiKx/4+Q22gLp2Bl0nmK8rRQBE3CfV7zZ9/Y0v/82GdqUAhn7HwKNfBt30eGg6P820fbyh7XsifYSADCBBKkF70Upduzx5sCwKZZPJStsdIPnHQICIdRl4rgTC9wIw2EIkv7ZSVhBSlyZTzTTleuzG4tgpgdLGWGrgYeARm2NduO0W8RFH+oiq/dtQYbF7SFm+3tn7XWxtIh0kekNt45BngIYMJJ8IKGosJBj5ps1UwE7q1EQaYqTYRP7pmXalhCbq7+bBKYFF24+E2sx9AhO/+cxXzOZhNo/Z3HfHWJtBg/AP+M55558fBAWkD9FI9GTEH5bx3EWmLo3pMQChMyUC1KfiEgBhgLUJHJI3A8vd3NEd3GV/xzywnlkZl/G4Pnj8VOuqtbL9Y+8PSxpCHdTGil7mOODANkvwnbvuvttrAH/LZZfl4Hb8+PFW6yJ1ctMtk8lDLs8e3O+ujOmyqgdIXELxWwDGZ+cQtVJXEgj1YUPHJplKbJNFDqNqsqw286qrtmrqnPQ222h59wsmIXuDj29UvceJgSJdSH/rPbC09NG2JBRoQ7fnnldFpq6M6URw0lF0mo9gSB48Z0My9zkSAQzdJ5247zb52x1gMtCqpLGo9CIAwWsK76mmPKgI9MOtmGA/Ugzt/PP7mb9azr20uM970tay25C46ivcdJs8N0TqZWm/zL4N+h86dGgTD2hyXuu8fFuXIJlcs2NHPvZ7s8MM2Xjugk0XkemiFkKK4Fp3ItcCMF0Yyt2yQ78RoZtSZcWOvPW59f7jl/+ftdD2H9gP8OIqsp1ooCDm5Iv33hB083UZvvyG8fMvv6ukTe7g2wbDsjyHA0J9MWwfkDAu2AcrxB9avD+syHMXMNzfWZZd3SIxZh2AAZ1OAeHd8rjHMyLQ3Wfubxg7R0b6gMh9t+7vJlVZMTUWMRpfeXTPGow+FMvhY97sVvvXv/euPAKcPPjnXpk8fPk2ca/JHXyNyQ+HybfZFz0Zq2c8xwckgIjPuacub4l8P2zjuQsg/M4mk6A3QqShM8KnvAPDl2hvIsvFSCYxIjm4BGwkOn9RLbUdnS5lSnl1Jw5qoiYY89DzEAmpLr3s+8UADennVuIoJhMvjwIQYhsjAiR6OyXqeOTIkdXYN8IvaqdDjDz3gYa+15VLLzEfWi2krwEXAZVYJ4hRnU4NnXoY+77ssyZVWfN4VogAGhJW01HuwlwsnW8webYjTyfOK5cFId5VRVoMeI0+KIpx2PIeWOOTPgCSLl16YcguuvM7BTyE+YtXF4NB7rWZNqnKwhNJmO6YU2wjgAbGfTcS3hj+fDP8JvsXu0cXDjIYxvWC9cCBA8k8B94knqK0vTVbzRilD5FEupJChNGD/kgQRasAeV+nfCODoYvBR9nYXZqaOEc/+aEkEIFBoxJqC2gAAewmlCP//MZrjH9sMhzshE2F7Vh4Jt5gBhoGEk3Mhy7cZLdv3z6buwBHVZuGAElLdR7mvlcCEEVpV2emayCocy1SAUBSBYTKlk0ZYsNpYuLgSRUCB5i5VgfF3q0KLraViAFAE+O4Th5tBwwyx1FbyWKzy0OpyvKXbDIZzqFRRWARep5l2ccqNLwTNZKuV64GO3hwtqrweXbp95u61vaXOhNHfwtQEIMhcRixlT1AArhUBQ35jjza3mhRt9GuDazcMYAaqKokkDqfJeKcsluSGprifeNy3Q0BSFeBhakDwPee7+RCBkjbg1HqIpKPOyG6/A3zR50UkmAEKNzUPKSMkXc5TmNldeGyi/RBHaraLNA6lLHNCo8onY4pcDAEHnK/i8DC0gSeTHKAOHz48EzqQJ3E2eliUMc7ogt3ZOrepD0kNslSnkmkOrYKJIu//dhvrEnkOvf4x5ahVWIp+do7BjZtjYF9+/Y1tXKP5iO76WL3KMtzkF5oP95aZb8t+f58SB8CIEOTQlgF6CNv6VRAQ+we2jbh2+23ZGcmDRZdZluTzPI1Bj6PY6ALuwdzHgCQxWUVaUcABOkltmtvbf4yT9KHgMhQpJDrb7hhZgBjMuHu61NViW0CY1knIudkkpcjxrl5nOjWJgOwpsdAV/EeAiDielsFQNhwkfZXVX8lAst8SR8CIH1LIa6RnKMji9x1JUDItyFjYmcmSR86LyJWm55klp8x7nkcAzBi5oueP21eawmkigH94ksumQGIaDsar+88Sh8CIn1IIXQURnI9gVhFpHQgoIMKK+XdJgeC7PGl62zXBgI2BjaOgSpSQN15KjaQKnYM+bbFLVbmU/oQAOk6LgQ1lBwsxeTDSO5TV9UdVG18L7pWYxobmYbRw+jBGOgr/gI1FGpmpJ8iDYbmC0gvotGoIr3ovILX8yx9CIh0GRciK3nUVV0Zw4OdG9iELfa+DDhjmsY0bQycHQOHVlY6U1v55ueMr5TYb+vyK67Ij1tu0f5xemlp6a3CZ+c27XKPLFRP2C+6MoL7Blude9S/yUh1Y0JnmZDRYpy0QP3TtUrZncNIITIvjx07VqjVIHZENCEtSk7jjzpPRb2u98hyB8CYfgN+MliN6Y2T6Vm/NdNvXbnrwh+Yd7Gt1gEFPS/ZuQL1uAa3Cy68cE0HKbcoOY1zx91UwHDf61IKqQIWDAL0m6iQtFstpxsyULqWaAxEmmFAxsjHS8cuwQN7hQT23qniw1xe4oKIGl+5ukr9nhLoqMHFzavW7zHvuOuCQ+rvLMveXYtoFWwKKeW5hnc9CPQ1gYitDQhP2wARDWa6LnY9XsZofVfcd13GesAjUFFJvAf9g5oqtmjElXhlZWWDp6f0KxHr7G6RwnsqvrNY0ocGmC1ZtlqRaK10yE3ve9+GlQP2EzqfwYM4esUVV6zpgXX06NG1LkHEPTxLBqmlxUzIaDROGgEeXRzy5uND7FEnizbcdou8ruATLEABFOEbvnybvDeZTN6veepCXfcdXKg7kmNwhcmg24wNWgaK6D9Rc+l82r42EBknI5SxZWl6//UBHu6C0FVT7UmMIWubD+T5Z9kxzAELBRpuY/sILnQ7F0AQLwmAwR1E7vv85htZnSC5+N5p656BSDoTMoY9Tlr1AR5Eih9YXt60IIQf6LisIpVWW/PeyXe+gwZdoAj9Xg8u7JQBOx2Ri6YwGuJFAAb3eei3bMMOkKSATiifKvcNRMbJGA3QivutD/DQAYKhYGNUU7JopB9vvuWWZF5RZY4XfHMoxFMX7n7fbr2ypTv2jYJO2/RcBtSVV17ZOQhqVZoxpmLGZDQaPo3wtoqpj8vOz9T38bwS+6ZPCpF8XJXWxx98cK3MolPyqZkuruHch47o8foyqCM5CGOpMnBl0CHi1hwUlb43EBk+U5TxZWm8r7p01fXNVcCBBSHR4j92+eXRBaFEo9OnqLQu2bo1+r6vvKr3JpPJh3x8dKHv9WVQhwHLxK7SoaIbrSK9VCnP942BSJwxSf9aOlw69Q0eMq8EGAAFuRdK8bQSZxrGVicqLTOch3Fyy2TyUKiz2rpfF0BEAukTQKAN7SDQ0ZjkcJmk9Y2/b4jQ7tqGGOIn2hYSi0SX75Fa9J51rW2UeCY2zAznYfj4lm/pI0Jdq7BgwjIwUlOxnwxls0aRiIxZ+ZmV0WVYdIHhDgU8ZM6LFPLss88mx3nxTYsbJZ7hS4sYcR4DDN+zPiLUZQVRFgS09BLy3JBB2WUqE8CY5bCYpfXHxv7o4zyPlHmoN0ssU8cqC9CU+uTvZNkxPFZ9PNPuORToOjYE9zwmd1l3XB07kjwQPNuUtPGtjqI1xrWRcRk9+qUHbrop6qE25gXlpjD6a3bsyHkCEegDkJBMdeVgRPRnH7EhYj9gs8SUgcteWMKIACDfNz/8hjespubn+77uPSaKNvJJfS3tl4EuMv37ctNlLrEVidAeV92YpxVuvTJ3ykghdeds4PvF2ao9igwlHnatyoLZSkwHYBJapeDqKyovBmNI7aUD/R588MHOXPzcAUg7dH1lAllqINL1GGBjwdC8csdtG7/fctllMwCRtqNFCElD27ZvH4IUcsJUVyWAQ7/atSoLpi+rDgYYjBeAQMJA4nAZcQp4kE9fMSJ6EppdxABDmGYfaYsHKXmlfz325VofK+vSACDh7A4NcPr9nqQQVFfv1jzRrktQoA9VFgNIXHPdQSa/AZmQ0VxLHvJ+0S6eMsDbTl2/damfpQYubY0B7B2Mu7bHdmr+7HdFW+VMc+a6XjTyjA0TBUhEasEWct7553erSTCvqxJoEXg1y7KrUwdHk+8xgJAclpeXZ//8DgEHZWvwYF8tmZSxb5qsc0petMuVpKSelhqQNDkG+lZZ+eYDUoW4usuWJRjJ0TK4QPJ/PvroGgAizjIAiy/PVu6Z11UAESrcnkwmd7TSSQ16RGnwYCCy6pLJOAAvjk0D31RaBhYyPptOZXU/1DmrgwVdQzqLvZAGovU4j7P8yLyuKuBE8JM+98pKmQQcNiUGeMADwJDzRTDIp+TRxztII+6qq2lmYvktFlD16WVVZg7JAiq0ZQlzw6feQiopU06Vd22vqyAUVH/Q115ZRQOAgSYiLsyY33wjAxQVWFEefT+XuhqzXyxm33R/YyjvW9pm/skcjM0rCRZMkZa0eqt1Y7rtdVUdJIq+7Nq1NzYAeRYCD57t/9SnchUWzLkonyE8py0mjRiAVAEV9rIagp0PUJCthbDzhdxzZb6VDRZETS3ftpTaNu1FIFD3edeuvaGBEgMPvpGBPCQPlFBb9H2TRgxEUkEER5HWV+Rn7QKFzBuDt7sIkjgPn1QyADdd3SZz2a0LDinfD8EeUgQeMGSZhKFVC6I+4HLTTTetIa3Eghc1g+/imvaFDInSLksXG2iG6GElcyNkCNfuufKudtPtU/1mdo8U7t/QO33aQ1LAA9AQBstAxX/88iuuWCMehK1N3FWSvDs0g7vW/UodLV1s4MBIPgR1lQBALGWuIlG7802rtwYhhZjdoyFkKJFNX/YQOQedQckA9Q1g8cCC2Yp3lo/x6lgRrkPSiq+MLu/RZncS+tpj9+YXXERd1ecqvc6YZzGEQ4seo6Le2tHvxom2VUkJvt/oq1mWfazOoKr6LZJECDzI02dHwF0QtRDMmBUc34udhEE9dFsJ9TW11vwChGas7vUQvKuqzlX3u8A4XpM2f+See1p301V1sniPRhGhZGbrB1CtqA7xSgRdP+doSwELpAp31cZvDR5F3iJd1z9WXmACbljZyWS0dNyAw2FP9HdsPHT9jLnDAg41lEj3pPy+8cYb11Lry3s+FS1uvcR1ddGuyWTy/pIsz15vmgJ97JdVZ3CNGTx0uw1Ixg0OMXDHQD5EO8f27dtnoBGqP2BS9mxy2rp///58EdTV2exbJpNPNs0LLb+KFOjTqK6ZatH1vICHbqcByfwACVLzEIGDeXPPRz86UzNhy0AVjHTP+KPO1F3b6cqCCGOavDqxQ5rRvCKnb/GzvozqmpkWXT/++OOrsnIak9qqqF0y+cxGMj4wwTjO5oIwz5R+7vqd77nggtlOD+zsG9vZmndRZTHHUiLMu25LXp5tktgiCtTMesibLuK+2yB4dKKjrTLBYEQ+3bK03dJhgAzAgbMHq/sq/dzFN8RoiJ0jdY8t7ZY7kONoNX0xmr++Jpuzz9ukwJbJ5KEuBneZMpoEDyQX3A+HumLUdPG5ThqA9Asg2DeG7vHHGLr+hhtmCy7qXAbokEQEeAYUKW+R5m0y/qbyHppnlgYPVnyawZa9BjQAD5gwRr+y3/f1PvV2ddQGJN0BiUgbQ7Rv+MYke1oRVMsYqbKFuu/MD185Xd4zj6umOHwH+eCZtSXLVrscIL6ymgQP8j969GhuSIwFMfrqMaR7rH45I94ApF0AATTEm6rM6n0oYwUpQozibNZYtg16i5K+22TblHTA9Jsuom/3XlZ7wiTrSh5MAM5rlvw68RQpsYldlQkqthI3OljaaGk1gBEPpbIMt0ofNvmNb0zL8bOMhTt37y4lcQNAfIcE02Q9K+R1qGneZvl1RAEMVtlk0pvBmUkR8xpJHYx6a5QmwCi13K7eEzARX3wDj3TwQNIYK2gwvsRzCoM348Adc7J1UFmvKgGfXgHE3HU74vQtFtPXmeruRKj6m0k1RrtH1fbync+v30DlLKiwLQ6ut9BpbJKGOy6wV4iqSs4o1+9oewZgkGrHkf2tUH/p/Dq7NnfdFrl6x1mPGURky5MiuwcTC2kHCYV/bA1jZy5Mdi2dCKNZNDBBysAJgdW4b5XeGVNsSa0p9ooQQLiuuUU04H1ZdPXihWXg0TGH76A4vCDGNtG03SO08mKb+Cc+//mgURpDftGEGxNdaAvgyAp8Hu0ngMXKykrePtyg56nvQuNMSxlIV76FjxxBy+Ih9I7kL/Omq21JpNw8NfDogJv3VMSYQARgkJV2yO6hvbx4F8bDSpV/zVyPHz++Nm+R73rSYmvSoAITFtoNOYURYvcBDAELnyFZt3OerwEIid0IGcx1fMe+gBu7gAfSDDTtmGYnLFCwJ+beVbFjABFWnSKCAwS+SfDgJz4xAxiYkG+lyj3ARJjoTe97X28OBb42tHmPVawACwAsEgsg2xXAUI6AhKigBCh8q+w26TGGvLdt3z7znApJ3HKOOWPa3e9KwCN/dvPN3nnTIh0MPLpi4n2XM3QQkf18QnYPPVFC0omeKLwjIBKamPr9RbkGYAEZaIIEA3PnH3ql/ss3pORDfj4wXxSa6nYSTY7km0oPbeuIGb9lPIuUgfSipfEe7B4GHn0z9a7LHyqIaHDwMXsmo4ABE0lP2Ng1567zHZJN7D17NjH61DSWAwSaoTPuGH8palStpgoBgc4ftZc4mrDZYkoZDY9xA4+umfdQyhsaiAAYReAgExPppMxE0MDjA6Yyedm7BjJFY0A8q2Q8SwrDZwwj8YXykNiPUGwI3+ntTsg7dbPFUJkV7xt4DIWZ91WPIYGIqK5Cdg8GudhG0OmXHfQSqOd+i9TDf6qqoWy59v7iAY72rILBM/ZcN2zGMmDiLmj4VvbC8sWGyHgSaQV1Vw9j18CjL6Y9tHKHAiJMAph7aDJgeJWVnDvpZFLFUvJ1v+Oe5Hnq1KlVJnSo/Fje9mzxQKKoz32eVYw/HAp8YLJn796ZJ5pIMNg5Yrs59DRWDTyGxsT7rs9QQCQ2KTWzb2riiErM9UwyIDFAiI3F1GcxzyoBE3fsIZkgEYsUMqhzPSzOo29WPdzyh36qoZZAmgAQDUjiRaTdfpFMDEgMSAQsMFCjLioTr4I6SlSzMc8qbCKiYlUS8Uw6RjqRevSWGngMl3kPpWbr254MNl5CbCBNeJuI9OEa5AEWAxIDDs2oRaUEcy9SK+nvuBZbBd+GPKvkGxZJLGZ0IKyU6apf5ZtOUgOPobDo4deDaNIhnCfimxjYSJhQrOp8z1PvudKH7zsfkJRxHfblaffGCUwaQBh/ORiUcCNP8axyxwbjT8CEs0347b7T0e9DHFQ3fM5lNRwMBYZyKJU7QTTj/7krr6wsKYWkD7c8fmsgYUL73rF74wSG1H5DigA0cjdctbvB+rYjheMw1bMqtT6dvZdl9xl4DIYtj6siQwURkUKYzDF/+tAk0yAU83Bxv+9xBWigVTO4z+3Lsr8FQNiahW9FogBUvvSlL62ljA2RYsqqwMrWtan37STBcfHrQdaW1ceWyeShpgZlU/mIBMEE5vqCCy8sXAVK2fpb+T6FAcj3ls63tOHrXxdAeIdDm8QdF2ApGkM6NmRQnlUecMYrc5AMySo1TgoM0c1X9gQCBPhHIsE2gvsj174JzT153zVUlgUiH6Oxe8MFF4zQSJz0M+OE/9133ZUkxfoAhL7mvoAIoFAkERMbIu8PwrNqM3gQ43H1OLmU1XrQFBgiiAAIeEy5vvSAhM9eIdKHeF7J9wIqpA8//PBqrx4vmye1qbBq0AQmD1joPtbXMP4i4A8BiICIxGyQr7tLrpu3VmUNapxl2THbjn3QLHj8lZtMJm8YqoeW7CxL6tsuXEsfLrj4gASmU8bn32UU/IZBsMqFwQBapOT7zne+M0lv7svT7qVLOTB+cf1mkcFiA/sF/U+KPa3ItRZ6xwCE5zrqHBD5wG23BVWqqLJkc89YbEjH/XwIm+f4OZS1YPAUGKpxvWjCudKH732ABNWYqBmqrhDJJ7bqlRUwdTrv/PODzMZXR7uXBiAwagGPuvtFxQCEMeLra/axCvUtgLNv3z6vmrXr/jVj+eBZ7vxVEON6lmUf63qwVy0Pho5dBMbtSh++PHl/W2THVN83cg+DvjAuyiPCGN04ecJsKF9HHfMuz+R7S9MAoohO29cPaGKnWp9EWvS9fi4AotVdBLNq4EDCYfGhPbRSjOu6nI6vT7P7xPxxJ2vRaCgwRLuIbxLqc0baZNbkLeCBFBOTYHgmko4PRHiO0Ze0LgP00WRM92h/WRqIkwUr/bptRZoRqZGxJH3MPYADNZiun+uhVVcVWrf+m743e8doeOzcV3TIkesycYSZCBNAddQGkGg1WUr+vCMgwmpW6ksq8S5SZ/EyE88hzbD0d/N0DeOe0XQ9BiO1fYAvtJPYjdTvfO9pAJH+4HhgpMlQPyC10LcCML58e7r3GQsOnHu2PK4GYhfJJpMDPU2IDYw3VAeYdZt7XJG/MJcUNZnUEwmD7wAMuUcq6hEBGMlbp7xz+RVXzK0NRVRHtJkAvBCz1nSTa+wMQit93gt50Ffuv3znSzWAsK0IfeZ7z71HGWXq7H7f9G+L7xgXX1242o5BpcWkbgNI7rnnnjUYFgy/7MT3MRlhfsKsUINgSwFoWP3Kc1KkEl+Zb+H8ifvvz58jhQFs5EGe5ActfN+l3gsZiX3fYzN49NOfXnviiSfWfO31faNVjwBIGVUQTN+V4jTN3GvUUqGdCQRAqENdmvna2fq9LDuGB+XCMSRr8PgoMAaVFhO2aSCRs6ldSaIKc4BRCoMLMVvqr1VzPhARNY7kFUsBPjyHUhhklVgGXRe8okLtEnrBtLWtAeZdZRdmaIQaKdZ2eUYZPhAZOYCYymp8bHSxa5yrtEbipeUDkiLmJkxOp+LlVYXJ6Xy4xgMMpkae7jP3t/b6cestAAM4AGxIXkTg849twGWsKStsmKnYJahj7NhVXVfxihJmvR4DEVS/7dixI6cBdZe4iTvvvLOQHrpMfU0/63/9DMCWMnzbjIwUQIgqNy+rxWbF42492yIMNfBQMxCuBUhguu6zlN/CGIu2s0jJS1QvMPqU9wW8RN0l30g+Dz74YJBR8y7AQ/vd7yUfnWq7BG0GdKp8x7eh7TxE+iBv1G7SjiY8qnRb9LXYTCjTVZWNEEAsMHDcrNNqLxQYg4FdM5Kq16Ju8alAyuYpBvRUMAsBiKyq66zc3bqLVIM0I7akFCkEJiz1lO9CICLSBzEclC+/m/Coctsjv6V+PkAcE4BYYKBwHkvnigLrR+ZGV8IymceYCrMmrVt/YbQp0gwqM5F+XBWWAFHKdh0pdYaRApTCZNelkTX5HcuDb7ET8S4ge826ioq6r5+rkdNN3uO+1Ju4Cn7zrdvGWJllnolkRRlIY+63AKfvvvteb7/NUD5X/NIa46HAPEsjMHth5HUYDQxS8jl48GBuKCdvV60Co0J1JJIPq3qXeYlhvwm7DHmLJCCSAfduu+223PusSAoBGETyEIlIg4hsQigGesoQOsbUS26bq/wGPISOe/bs2UTHKnl2+Q1Sh8V2eBiO3ZpPCozJNlKGEWDwhfmz8i/znX4XUBAAcVMkE/JGytE7wFKuMFudlzDFJgAEAKBsVug6zgXmTr24X2QLEU8sDTbaCQC3XZHkNCOnbJF8qrQFgIBeeKpRR8AYetEOKQ9ap3iHafoO4PqQuefOJ4+0VhVQYEyeWqmMAsYkTB/G5GPqRXkJkwUUkDwwIGNMdz2mKId7qFZCah2pi6QwetkRmPrhTcX3lOmTcHRdYyqeVClEPLH0nlKUIXYVqaerRgJAhNGL9KLrFrvmWzHCS/6+lHxDdIzl39OzNQsKLGAw9ngxKDBv0ghMH0YNk2LVDJPmHitfznGHWYttwse0hVH6VFKsmIX5+b51mZm8m5KKvcHNg98wYXHd1ZKBvHv+K16Rq7GKpBANQi6z1iDilqFBoMijTOqkU8rKpY39+/MgTIzx/LOpJRKQWxf97QCvP8PiazG4g7XSKJBAAfS3Y4hiT2UmSB5IDUWMW6uCJG+xWwA0ck+noiaD4er77jV1kPK5hkmSAmT8UzbMk3xYoXPPzUN+o6YSFZLvvRxg9u7Ny9PqKfleUt4TddfWrVs3OVRQF1f6kG/F/tKmJ5aUNcg0y44tLS29NWE62StGgcWkwLyptWC2ooKSVS/bkMAoYeY+RiVM38eoeV+kEBhxbOWs1WnZZLKJWfvKDt0T5v3Ul76UH4SlgYh6UifaRN1jUggAIp5YIVtGqN3aEytUzzm9n6urzEi+mDzRWl2BAvOm1kplbDBPAZDYNylSSGpesXJ4BtMXY7zUrSgNSSFaUilry9CeWCHwLWrLCJ+buqoC/7BPjAI5BYgdGUskexPMSQzoGLpj+aVIIbIdCsw/llfRM3GrBTREiiJFRaf/sdnIQVkxKUTaWDaqXICMvEPSS1FbRvT8gHlXGRM0CjRAgXlTa8WYGCtr7BIAROw9nhVJIcKoi8AoVk4uMdx/fy4VuYZt33dawghJIeKJVdaWIXnLORy+8kd/78xBT1c1MG0sC6OAUUBTYJGAJIURFkkhYn5itCMAAANmSURBVJMAaAAT8QTDNpKqAtJeUyleX9Rbf+OzZ+jnMRtOCg3m6B2zc+jJbtdGgbYoYEBy9sxwQAK1kU9iSYl9wBAPwOBW7JMYxHjOIUqpzFokBVRevjx5Lp5YqaCUWvYI3zPgaItRWL5GgRgFDEjOAomPcbL6B2AAEuwTYq9AdeQLSsS2oPOB0Yvrrg+g9LvutUgZR48e9QYoUrdUKcjNe05+G3DEJrc9Mwp0RQEDkjiQxBguTBwpAIaOiku/yzMAqCx46DzselPfGHB0xRisHKNAGQoYkGxiVhsAwZh5r/Qx4Cgzme1do0BfFDAg6ZVRGmhNNtDfgKMvRmDlGgXqUAAgmUwmdyxSHIlJGRuYd59gdiDLMnPHrTOB7VujwFAosKiR7QYonQOKBQAOZdJbPYwCTVOA6N4syz5mjLVzxtqnNNB22aamanqiWn5GgSFTYN1OcrWptwxIaiwmDrA7rm1yOOSZbnUzCrRMAZNKDERKgEgubbAAaXlYWvZGAaPAmCggUkk2mRwowVDaVo9Y/hu9mvqgx1qWZffZ5oZjms1WV6NAjxQATF6QZb9qKq6Flk7wpLraVFQ9TkQr2igwdgpkWfb6zNyB+1j591HmARYOBhpjn7VWf6PAACkgkompueZGMuGkRpM0BjjXrEpGgbmmgNhMtkwmD9U9MtZsLt0B0rpa8g5sGiZpzPUUtcYZBcZDgdybazK5I5tMVgwQugOEBFrnUgaqKUB/PCPKamoUMAosJAVY2RIjgO3EAKVzMMkBYzKZvN88pxZy+lmjjQLzRQEHUHAThsn1YSSexzLXUCMiYRhgzNe8sdYYBYwCAQrk3l1ZdvW6lGKxJ2mAesboPZncgYRnKqnA4LLbRgGjwOJRAFCBMW6ZTN6/7um1qPYUgGKFAD4kCwOLxZsL1mKjgFGgIQo4wIJdBYll7OCyhkfUuhfbHQYUDQ0Wy8YoYBQwCqRSADUOun9W6TDhXHrJsvvWQebAuttqZzaXHBSybHU9voJ63LFep6tFkjD32dTetfeMAkYBo8CAKADgCOgAPPIPc2frjqJ/eZ9U8iIdUBOtKkYBo4BRwChgFDAKGAWMAkYBo4BRwChgFDAKGAWMAkYBo4BRwChgFDAKGAWMAkYBo4BRwChgFDAKGAWMAl1S4P8HZ2Y/fVfpgtcAAAAASUVORK5CYII="
                            />
                          </defs>
                        </svg>
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
                        fill-opacity="0.5"
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
                          className="w-8 h-8 rounded-full object-cover"
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
