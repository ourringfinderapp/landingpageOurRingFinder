"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function RingAnimation() {
    const [batteryLevel, setBatteryLevel] = useState(100);

    useEffect(() => {
        // Battery depletion animation - goes from 100% to 0% over 10 seconds, then restarts
        const interval = setInterval(() => {
            setBatteryLevel((prev) => {
                if (prev <= 0) return 100;
                return prev - 1;
            });
        }, 100); // Update every 100ms for smooth animation

        return () => clearInterval(interval);
    }, []);

    // Calculate battery color based on level
    const getBatteryColor = () => {
        if (batteryLevel > 60) return "#10b981"; // Green
        if (batteryLevel > 30) return "#f59e0b"; // Amber
        return "#ef4444"; // Red
    };

    return (
        <div className="relative w-full max-w-md mx-auto py-8">
            {/* Ring with pulsing animation */}
            <div className="relative flex items-center justify-center">
                {/* Outer glow - pulsing effect */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `radial-gradient(circle, rgba(139, 149, 165, 0.3) 0%, rgba(107, 114, 128, 0.15) 40%, transparent 70%)`,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Ring SVG */}
                <svg
                    width="280"
                    height="280"
                    viewBox="0 0 280 280"
                    className="relative z-10"
                >
                    {/* Outer ring */}
                    <motion.circle
                        cx="140"
                        cy="140"
                        r="100"
                        fill="none"
                        stroke="url(#ringGradient)"
                        strokeWidth="8"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />

                    {/* Inner ring */}
                    <motion.circle
                        cx="140"
                        cy="140"
                        r="80"
                        fill="none"
                        stroke="url(#ringGradientInner)"
                        strokeWidth="4"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    />

                    {/* Blinking indicator dot */}
                    <motion.circle
                        cx="140"
                        cy="40"
                        r="8"
                        fill="#8b95a5"
                        animate={{
                            opacity: [1, 0.3, 1],
                            scale: [1, 0.8, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Gradient definitions */}
                    <defs>
                        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b95a5" />
                            <stop offset="50%" stopColor="#6b7280" />
                            <stop offset="100%" stopColor="#4a5568" />
                        </linearGradient>
                        <linearGradient id="ringGradientInner" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a0aec0" />
                            <stop offset="100%" stopColor="#8b95a5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Battery indicator */}
            <motion.div
                className="mt-8 max-w-xs mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">Battery Level</span>
                    <span className="text-sm font-bold" style={{ color: getBatteryColor() }}>
                        {batteryLevel}%
                    </span>
                </div>

                {/* Battery bar container */}
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    {/* Battery fill */}
                    <motion.div
                        className="h-full rounded-full"
                        style={{
                            width: `${batteryLevel}%`,
                            background: `linear-gradient(90deg, ${getBatteryColor()}, ${getBatteryColor()}dd)`,
                        }}
                        animate={{
                            opacity: batteryLevel < 20 ? [1, 0.5, 1] : 1,
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: batteryLevel < 20 ? Infinity : 0,
                        }}
                    />

                    {/* Shimmer effect */}
                    {batteryLevel > 0 && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                            animate={{
                                x: ["-100%", "200%"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    )}
                </div>

                {/* Warning text when battery is low */}
                {batteryLevel < 20 && (
                    <motion.p
                        className="text-xs text-red-400 mt-2 text-center font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        ⚠️ Find it fast before the battery dies!
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
}
