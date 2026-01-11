"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function FeatureSection({
    features,
    className,
    title = "How Our App Helps You Find Your Ring",
    titleId,
    autoPlayInterval = 4000,
}) {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
            } else {
                setCurrentFeature((prev) => (prev + 1) % features.length);
                setProgress(0);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [progress, features.length, autoPlayInterval]);

    const handleFeatureClick = (index) => {
        setCurrentFeature(index);
        setProgress(0);
    };

    return (
        <div className={cn("mt-12 mb-24", className)}>
            <div className="max-w-7xl mx-auto w-full">
                <h2 id={titleId} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-white">
                    {title}
                </h2>

                <div className="flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12">
                    {/* Left side - Feature list */}
                    <div className="order-2 lg:order-1 space-y-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="cursor-pointer"
                                initial={{ opacity: 0.4 }}
                                animate={{ opacity: index === currentFeature ? 1 : 0.5 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => handleFeatureClick(index)}
                            >
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center border-2 flex-shrink-0 text-xl transition-all duration-300",
                                            index === currentFeature
                                                ? "bg-gradient-to-br from-[#8b95a5] to-[#6b7280] border-[#8b95a5] text-[#0a0a0a] scale-110"
                                                : "bg-[#1a1a1a] border-[#2d2d2d] text-[#6b7280]"
                                        )}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    <div className="flex-1">
                                        <h3
                                            className={cn(
                                                "text-lg sm:text-xl font-semibold transition-all duration-300",
                                                index === currentFeature ? "text-white mb-2" : "text-[#cbd5e0] mb-0"
                                            )}
                                        >
                                            {feature.title}
                                        </h3>

                                        {/* Expandable Content: Description + Problem + Why */}
                                        <AnimatePresence initial={false}>
                                            {index === currentFeature && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-sm sm:text-base leading-relaxed mb-4 text-[#e2e8f0] mt-1">
                                                        {feature.description}
                                                    </p>

                                                    {feature.problem && (
                                                        <div className="mt-3 p-4 bg-red-500/[0.08] rounded-xl border border-red-400/[0.15]">
                                                            <p className="text-xs sm:text-sm text-red-200/70 italic mb-1 uppercase tracking-wide font-medium">
                                                                Real user problem:
                                                            </p>
                                                            <p className="text-sm text-red-100 italic">
                                                                "{feature.problem}"
                                                            </p>
                                                        </div>
                                                    )}
                                                    {feature.whyItMatters && (
                                                        <div className="mt-3 p-4 bg-emerald-500/[0.08] rounded-xl border border-emerald-400/[0.15]">
                                                            <p className="text-xs sm:text-sm text-emerald-200/70 font-medium mb-1 uppercase tracking-wide">
                                                                Why it matters:
                                                            </p>
                                                            <p className="text-sm text-emerald-100">
                                                                {feature.whyItMatters}
                                                            </p>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side - Feature image */}
                    <div className="order-1 lg:order-2 flex flex-col gap-6">
                        <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden rounded-2xl border-2 border-[#2d2d2d] flex-grow">
                            <AnimatePresence mode="wait">
                                {features.map(
                                    (feature, index) =>
                                        index === currentFeature && (
                                            <motion.div
                                                key={index}
                                                className="absolute inset-0 rounded-2xl overflow-hidden"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                            >
                                                <img
                                                    src={feature.image}
                                                    alt={`${feature.title} - Our Ring Finder app feature demonstrating Bluetooth tracking capability`}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />

                                                {/* Progress bar */}
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2d2d2d]">
                                                    <motion.div
                                                        className="h-full bg-gradient-to-r from-[#8b95a5] to-[#6b7280]"
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: `${progress}%` }}
                                                        transition={{ duration: 0.1 }}
                                                    />
                                                </div>
                                            </motion.div>
                                        )
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.a
                            href="https://apps.apple.com/us/app/our-ring-finder/id6444858466"
                            className="py-4 px-8 rounded-xl bg-white hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 text-black font-semibold shadow-lg group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="text-xl"></span>
                            <span>Download on the App Store</span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
}
