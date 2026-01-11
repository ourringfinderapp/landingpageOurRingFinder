"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const lostRingStories = [
    {
        tempId: 0,
        testimonial: "My ring flew into a dumpster — my apartment wouldn't let me retrieve it.",
        by: "Sarah, NYC",
        icon: "🗑️"
    },
    {
        tempId: 1,
        testimonial: "Lost mine at the airport. Someone picked it up and it traveled without me.",
        by: "Marcus, Chicago",
        icon: "✈️"
    },
    {
        tempId: 2,
        testimonial: "It slipped in my car. Took a week to find even though I tore the car apart.",
        by: "Jennifer, LA",
        icon: "🚗"
    },
    {
        tempId: 3,
        testimonial: "Put it in my pocket after groceries… gone forever.",
        by: "David, Seattle",
        icon: "🛒"
    },
    {
        tempId: 4,
        testimonial: "Dropped it in a lake — never found it.",
        by: "Emma, Minnesota",
        icon: "🌊"
    },
    {
        tempId: 5,
        testimonial: "Slipped off during a workout. Someone took it before I noticed.",
        by: "Chris, Miami",
        icon: "💪"
    },
    {
        tempId: 6,
        testimonial: "Took it off at night. Woke up and couldn't remember where.",
        by: "Rachel, Boston",
        icon: "🛏️"
    },
    {
        tempId: 7,
        testimonial: "Left it in a rental car. By the time I realized, it was long gone.",
        by: "Tom, Denver",
        icon: "🔑"
    },
    {
        tempId: 8,
        testimonial: "Fell off while I was gardening. Buried somewhere in the yard.",
        by: "Lisa, Portland",
        icon: "🌱"
    },
    {
        tempId: 9,
        testimonial: "It rolled under the couch. Found it 3 months later.",
        by: "Kevin, Austin",
        icon: "🛋️"
    }
];

const TestimonialCard = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 transition-all duration-500 ease-in-out rounded-3xl overflow-hidden",
                isCenter
                    ? "z-10 bg-gradient-to-br from-[#8b95a5] to-[#6b7280] text-[#0a0a0a] border-[#8b95a5] shadow-2xl"
                    : "z-0 bg-[#1a1a1a] text-[#cbd5e0] border-[#2d2d2d] hover:border-[#6b7280]"
            )}
            style={{
                width: cardSize,
                height: cardSize * 0.8, // Make height smaller than width for better proportions
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -50 : position % 2 ? 10 : -10}px)
          rotate(${isCenter ? 0 : position % 2 ? 1.5 : -1.5}deg)
        `,
                boxShadow: isCenter ? "0px 12px 30px rgba(139, 149, 165, 0.3)" : "0px 0px 0px 0px transparent"
            }}
        >
            <div className="p-6 h-full flex flex-col justify-between">
                <div>
                    <div className="mb-3 text-3xl">
                        {testimonial.icon}
                    </div>
                    <h3 className={cn(
                        "text-sm sm:text-base font-medium italic leading-relaxed",
                        isCenter ? "text-[#0a0a0a]" : "text-[#cbd5e0]"
                    )}>
                        "{testimonial.testimonial}"
                    </h3>
                </div>
                <p className={cn(
                    "text-xs mt-3",
                    isCenter ? "text-[#0a0a0a]/80" : "text-[#8b95a5]"
                )}>
                    - {testimonial.by}
                </p>
            </div>
        </div>
    );
};

export const StaggerTestimonials = () => {
    const [cardSize, setCardSize] = useState(300);
    const [testimonialsList, setTestimonialsList] = useState(lostRingStories);

    const handleMove = (steps) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    // Auto-play functionality
    useEffect(() => {
        const autoPlayInterval = setInterval(() => {
            handleMove(1);
        }, 4000); // Move to next card every 4 seconds

        return () => clearInterval(autoPlayInterval);
    }, [testimonialsList]); // Re-create interval when list changes

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 300 : 260);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden bg-transparent"
            style={{ height: 500 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full",
                        "bg-[#1a1a1a] border-2 border-[#2d2d2d] hover:bg-gradient-to-br hover:from-[#8b95a5] hover:to-[#6b7280] hover:text-[#0a0a0a] hover:border-[#8b95a5]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b95a5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full",
                        "bg-[#1a1a1a] border-2 border-[#2d2d2d] hover:bg-gradient-to-br hover:from-[#8b95a5] hover:to-[#6b7280] hover:text-[#0a0a0a] hover:border-[#8b95a5]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b95a5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};
