"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props) => {
  const { className, testimonials, duration = 10 } = props;

  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role, highlight }, i) => (
                <div
                  className="p-8 rounded-2xl border border-[#2d2d2d] bg-[#1a1a1a] shadow-lg hover:border-[#4a5568] transition-all duration-300 max-w-xs w-full"
                  key={i}
                >
                  <div className="text-[#cbd5e0] leading-relaxed mb-4">
                    {text}
                    {highlight && (
                      <span className="block mt-2 text-white font-semibold">
                        {highlight}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={`${name} - Oura Ring Finder user testimonial profile photo`}
                      className="h-10 w-10 rounded-full object-cover border-2 border-[#6b7280]"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white">
                        {name}
                      </div>
                      <div className="leading-5 text-[#6b7280] text-sm tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
