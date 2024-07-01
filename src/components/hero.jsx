"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero({ intro, split }) {
  const splitText = useRef(null);
  const [splitWidth, setSplitWidth] = useState(null);

  return (
    <header className="mb-12 flex flex-col relative px-[13.2vw]">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            opacity: { duration: 0.55, delay: 0.2 },
          },
        }}
        exit={{
          opacity: 0,
          y: -20,
          transition: { duration: 0.75, y: { duration: 0.55, delay: 0.2 } },
        }}
        className="mr-2 h-[12.7725vw] max-w-none text-[1.95vw] pt-[1em] pb-[1.5em] w-2/5 font-semibold tracking-tight text-balance leading-snug"
      >
        {intro}
      </motion.h2>
      <div className="h-[38vh] flex flex-col justify-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[.1rem]  before:w-[calc(100%+13.2vw-5rem)] before:bg-[#27262d] before:opacity-15 after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-[.1rem]  after:w-[calc(100%+13.2vw-5rem)] after:bg-[#27262d] after:opacity-15">
        <div className="mt-[.1em] flex items-center justify-between relative whitespace-nowrap">
          <motion.h1
            ref={splitText}
            initial={{ x: "calc(-100% - 300px)" }}
            animate={{ x: 0 }}
            exit={{ x: "calc(-100% - 300px)" }}
            transition={{
              duration: 0.75,
              ease: [0.6, 0, 0.3, 1],
            }}
            className="text-[#7d31ea] text-[13.8vw] font-bold tracking-tight  text-left leading-none"
          >
            {split}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 5, backgroundColor: "#a1ced1" }}
            animate={{ scaleX: 1, backgroundColor: "#9850ff" }}
            exit={{ scaleX: 5, backgroundColor: "#a1ced1" }}
            transition={{
              duration: 0.75,
              ease: [0.6, 0, 0.3, 1],
            }}
            className="h-5 !origin-right w-[16vw] ml-[.3em] bg-black"
          ></motion.div>
        </div>
      </div>
    </header>
  );
}
