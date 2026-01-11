'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQSection() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How do I find my lost Oura ring?',
            answer: 'Our Ring Finder helps you locate your ring using Bluetooth proximity tracking and last known location data. As you move, the signal strength helps guide you closer to where the ring is.',
        },
        {
            id: 'item-2',
            question: 'Can I find my Oura ring if it’s not connected?',
            answer: 'Yes. Our Ring Finder can detect nearby rings even if they aren’t currently paired to your phone, helping you search in cars, homes, gyms, or bags.',
        },
        {
            id: 'item-3',
            question: 'Can someone else help me find my ring?',
            answer: 'Yes. You can let a friend search for your ring from their phone, which is especially useful if the ring was lost somewhere you’re not nearby.',
        },
        {
            id: 'item-4',
            question: 'What if my ring stopped connecting?',
            answer: 'If the ring is no longer connecting, you can still use the last known location and search nearby areas where it was recently detected. Starting your search early improves your chances.',
        },
        {
            id: 'item-5',
            question: 'Does this work if the ring battery is dead?',
            answer: 'Oura rings rely on Bluetooth to be detected. Once the battery is fully dead, the ring can no longer be located. Our Ring Finder helps you act quickly while the ring is still detectable.',
        },
    ]

    return (
        <section className="py-20 px-4 sm:px-6 md:px-12 bg-[#121212]">
            <div className="max-w-5xl mx-auto">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
                    <p className="text-[#a0aec0] text-lg">
                        Everything you need to know about finding your lost ring.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-t border-[#2d2d2d] last:border-b"
                            >
                                <AccordionTrigger className="text-lg sm:text-xl text-white hover:text-white/80 py-6">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base sm:text-lg text-[#a0aec0] leading-relaxed">
                                        {item.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
