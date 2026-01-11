"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Star,
  Check,
  MapPin,
  Bluetooth,
  Share2,
  Lock,
  Signal,
  Clock,
  Search,
  Users,
  LogIn,
  LockOpen,
  FileText,
} from "lucide-react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { FeatureSteps } from "@/components/ui/feature-steps";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { FeatureSection } from "@/components/ui/feature-section";
import FAQSection from "@/components/ui/faq-section";
import { structuredData } from "./structured-data";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const testimonials = [
    {
      text: "The accuracy of this app is insane… I found my ring in a yoga mat bag. Would never have looked there.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "FABIOLA M.",
      role: "Nov 29, 2025",
      highlight: "Much better than the official app finder",
    },
    {
      text: "Encontró el anillo de mi esposa que había tirado a la basura.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "La única que funcionó",
      role: "Jun 26, 2025",
      highlight: "Me salvó",
    },
    {
      text: "Thought it went down the drain. This app showed it near the washing machine—it was in a basket of clean clothes!",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Derly1",
      role: "Nov 28, 2025",
      highlight: "Found it in the laundry room",
    },
    {
      text: "Helped me find the ring in no time!",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "ojsan",
      role: "Nov 28, 2025",
      highlight: "Just amazing!",
    },
    {
      text: "Lost my ring at the gym. This app pinpointed it to the locker room floor drain area. Staff helped me retrieve it!",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Sarah K.",
      role: "Dec 1, 2025",
      highlight: "Saved my wedding ring",
    },
    {
      text: "I thought I'd never see it again after my dog knocked it off the counter. Found it behind the fridge in minutes.",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "Mike R.",
      role: "Nov 30, 2025",
      highlight: "Life saver!",
    },
    {
      text: "The proximity tracker is incredibly precise. Led me straight to my ring in a pile of dirty laundry.",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      name: "Emma T.",
      role: "Nov 27, 2025",
      highlight: "So accurate!",
    },
    {
      text: "Misplaced it at a hotel. The GPS history showed exactly where I left it. Hotel staff found it waiting for me!",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      name: "David L.",
      role: "Dec 2, 2025",
      highlight: "Better than I expected",
    },
    {
      text: "Works perfectly even when the ring isn't paired. Found mine under the car seat after a week of searching.",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
      name: "Jessica P.",
      role: "Nov 26, 2025",
      highlight: "No pairing needed!",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const appFeatures = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "Bluetooth Proximity Tracking",
      description: "Find your ring by signal strength — even if it isn't paired. Our app scans for nearby Bluetooth signals and shows how close you are to your ring as you move.",
      problem: "It says it's here but it isn't… the signal keeps jumping around. Lost it in my car and tore everything apart.",
      whyItMatters: "Bluetooth proximity helps you narrow the search — especially in cars, garages, couches, bags, and pockets where rings often disappear.",
      image: "https://images.unsplash.com/photo-1621570074981-f63e1ca4a0c0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "GPS Location History",
      description: "See the last place your ring was detected near you. View the most recent location where your phone detected the ring before the connection was lost.",
      problem: "The app only shows my home from the day before. I don't even know where to start looking.",
      whyItMatters: "When the ring is no longer connecting, the last known location gives you a starting point instead of guessing blindly.",
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Remote Friend Finder",
      description: "Lost your ring at a friend's house, car, or even in another city? Your friend can help locate it using their phone — even when you're not there.",
      problem: "I lost it at my friend's place. I'm back home now and can't search for it myself.",
      whyItMatters: "If your ring is out of your range or you're not nearby, someone else can help detect it — dramatically increasing recovery chances.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <LogIn className="w-5 h-5" />,
      title: "No Login. No Account. No Setup.",
      description: "Start searching immediately. Open the app and begin scanning — no emails, passwords, or sign-ups required.",
      problem: "I'm already stressed — I just want to find it now.",
      whyItMatters: "When a ring is lost, every minute counts. Delays reduce recovery chances.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <LockOpen className="w-5 h-5" />,
      title: "Works With Paired & Unpaired Rings",
      description: "Find rings even if they were never connected to your phone. Our app detects nearby rings without requiring prior pairing.",
      problem: "It wasn't connected when I lost it. The app won't connect anymore.",
      whyItMatters: "Many rings are lost while charging, traveling, or sitting in bags — often unpaired at the time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Location & Detection History",
      description: "Track where and when your ring was last seen. Review detection history to understand movement patterns and narrow your search area.",
      problem: "The ring shows different places — I don't know what to trust. Is the battery level changing because it's near me?",
      whyItMatters: "History helps you make sense of inconsistent signals and focus on realistic locations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#2d2d2d]" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo and App Name */}
          <div className="flex items-center gap-4">
            <img
              src="https://ucarecdn.com/4cea285a-102d-4f27-8466-0bf7eced35c7/"
              alt="Our Ring Finder"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl"
            />
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white">Our Ring Finder</div>
              <div className="text-base sm:text-lg text-[#8b95a5]">App</div>
            </div>
          </div>

          {/* App Store Button */}
          <a
            href="https://apps.apple.com/us/app/our-ring-finder/id6444858466"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-105"
          >
            <img
              src="https://ucarecdn.com/045d55dc-a52e-4cea-96c2-5a96e6635087/-/format/auto/"
              alt="Download on the App Store"
              className="h-10 w-auto"
            />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-4" aria-labelledby="hero-title">
          {/* Floating decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-96 h-96 bg-gradient-to-r from-[#6b7280]/20 to-[#4a5568]/20 rounded-full blur-3xl"
              style={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating ring shapes */}
            <motion.div
              className="absolute w-32 h-32 border-2 border-[#6b7280]/20 rounded-full"
              style={{ left: "10%", top: "20%" }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-24 h-24 border-2 border-[#8b95a5]/20 rounded-full"
              style={{ right: "15%", top: "30%" }}
              animate={{
                y: [0, 30, 0],
                rotate: [360, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-40 h-40 border border-[#4a5568]/20 rounded-full"
              style={{ left: "20%", bottom: "20%" }}
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            className="relative z-10 text-center max-w-6xl w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <motion.h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-1 tracking-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Lost your Oura Ring?
            </motion.h1>

            {/* Bold Subtitle */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Find it before the battery runs out.
            </motion.h2>

            {/* Phone + Ring Image */}
            <motion.div
              className="relative flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.img
                src="/hero-ring-phone.png"
                alt="Our Ring Finder app interface showing Bluetooth signal strength to locate Oura Ring with precise proximity tracking"
                className="w-full max-w-xs sm:max-w-sm h-auto object-contain"
                width="384"
                height="600"
                loading="eager"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Trust Badge - Laurel Wreath Style */}
            <motion.div
              className="flex items-center justify-center gap-2 sm:gap-3 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Left Laurel */}
              <svg width="40" height="64" viewBox="0 0 40 64" className="text-[#6b7280] w-6 h-10 sm:w-8 sm:h-14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M25 58C18 50 12 35 15 10" />
                <path d="M21 52L10 50" />
                <path d="M19 42L8 38" />
                <path d="M17 32L6 26" />
                <path d="M16 22L5 14" />
                <path d="M15 10L12 2" />
              </svg>

              <div className="flex flex-col items-center">
                <span className="text-[#8b95a5] text-[7px] sm:text-[9px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">TRUSTED BY</span>
                <span className="text-white text-xl sm:text-3xl font-bold leading-none my-1 tracking-tight">THOUSANDS</span>
                <span className="text-[#8b95a5] text-[7px] sm:text-[9px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">OF OURA RING OWNERS</span>
              </div>

              {/* Right Laurel */}
              <svg width="40" height="64" viewBox="0 0 40 64" className="text-[#6b7280] w-6 h-10 sm:w-8 sm:h-14 scale-x-[-1]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M25 58C18 50 12 35 15 10" />
                <path d="M21 52L10 50" />
                <path d="M19 42L8 38" />
                <path d="M17 32L6 26" />
                <path d="M16 22L5 14" />
                <path d="M15 10L12 2" />
              </svg>
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="text-sm sm:text-base text-[#a0aec0] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Works even with unpaired rings. No account needed.
            </motion.p>

            {/* CTA Button - App Store Badge */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="https://apps.apple.com/us/app/our-ring-finder/id6444858466"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block transition-all duration-300 hover:scale-105"
              >
                <img
                  src="https://ucarecdn.com/045d55dc-a52e-4cea-96c2-5a96e6635087/-/format/auto/"
                  alt="Download on the App Store"
                  className="h-10 sm:h-12 w-auto"
                />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Social Proof Section */}
        <section className="relative py-12 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] overflow-hidden" aria-labelledby="social-proof-title">
          {/* Background floating elements */}
          <motion.div
            className="absolute w-24 h-24 border border-[#6b7280]/10 rounded-full"
            style={{ left: "8%", top: "30%" }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-32 h-32 border-2 border-[#8b95a5]/10 rounded-full"
            style={{ right: "12%", bottom: "20%" }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <div className="max-w-7xl mx-auto">
            {/* Headline */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block px-4 py-2 mb-6 rounded-full bg-[#1a1a1a] border border-[#2d2d2d]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-base sm:text-lg font-semibold text-[#8b95a5] uppercase tracking-wider">
                  ⚠️ The Reality
                </span>
              </motion.div>

              <h2 id="social-proof-title" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">Thousands of Oura users</span>
                <br />
                <span className="text-[#8b95a5]">lose their rings every month</span>
              </h2>

              <p className="text-lg sm:text-xl text-[#a0aec0] max-w-3xl mx-auto leading-relaxed">
                In cars, airports, gyms, grocery stores, parks, dumpsters, lakes —
                <br className="hidden sm:block" />
                and even inside their own homes.
              </p>
            </motion.div>

            {/* Interactive Testimonial Carousel */}
            <div className="relative mt-12">
              <StaggerTestimonials />
            </div>

            {/* Bottom CTA - Highlighted */}
            <motion.div
              className="text-center mt-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border-2 border-red-500/20">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  Don't let this be you.
                </p>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Features Section */}
        <section className="relative py-24 px-4 sm:px-6 md:px-12 bg-[#0a0a0a]" aria-labelledby="features-title">
          {/* Solution Label */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2d2d2d]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-base sm:text-lg font-semibold text-[#8b95a5] uppercase tracking-wider">
                ✅ The Solution
              </span>
            </motion.div>
          </div>

          <FeatureSection
            features={appFeatures}
            title="From Lost to Found – Here's How Our App Works"
            titleId="features-title"
            autoPlayInterval={8000}
          />


        </section>

        {/* Reviews Section */}
        <section className="relative py-20 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] overflow-hidden" aria-labelledby="testimonials-title">
          {/* Floating elements */}
          <motion.div
            className="absolute w-16 h-16 border-2 border-[#8b95a5]/10 rounded-full"
            style={{ left: "5%", top: "25%" }}
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          < div className="max-w-7xl mx-auto" >
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="testimonials-title" className="text-4xl sm:text-5xl font-bold mb-3">
                Success experiences
              </h2>
              <p className="text-xl text-[#a0aec0]">
                from other real Oura Ring users like you:
              </p>
            </motion.div>

            <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn
                testimonials={secondColumn}
                className="hidden md:block"
                duration={19}
              />
              <TestimonialsColumn
                testimonials={thirdColumn}
                className="hidden lg:block"
                duration={17}
              />
            </div>
          </div >
        </section >

        {/* FAQ Section */}
        <FAQSection />

        {/* Download CTA Section */}
        < section className="relative py-20 px-4 sm:px-6 md:px-12 bg-[#0a0a0a]" aria-labelledby="cta-title" >
          {/* Floating elements */}
          < motion.div
            className="absolute w-36 h-36 border-2 border-[#6b7280]/10 rounded-full"
            style={{ left: "15%", top: "10%" }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />

          < motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="cta-title" className="text-4xl sm:text-5xl font-bold mb-6">
              Ready when you need it most.
            </h2>
            <p className="text-xl text-[#a0aec0] mb-10">
              Don't waste time searching — find your ring before its battery dies.
            </p>

            <motion.a
              href="https://apps.apple.com/us/app/our-ring-finder/id6444858466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="https://ucarecdn.com/045d55dc-a52e-4cea-96c2-5a96e6635087/-/format/auto/"
                alt="Download on the App Store"
                className="h-14 sm:h-16 w-auto mx-auto"
              />
            </motion.a>
          </motion.div >
        </section>
      </main>

      {/* Footer */}
      < footer className="bg-[#0a0a0a] border-t border-[#2d2d2d] py-12 px-4 sm:px-6 md:px-12" role="contentinfo" >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Logo and Brief */}
            <div className="flex flex-col items-start">
              <img
                src="https://ucarecdn.com/4cea285a-102d-4f27-8466-0bf7eced35c7/"
                alt="Our Ring Finder"
                className="w-12 h-12 rounded-lg mb-4"
              />
              <p className="text-sm text-[#6b7280]">
                Find your ring fast, powered by precision.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="#"
                className="text-[#a0aec0] hover:text-white transition-colors"
              >
                Support
              </a>
              <a
                href="#"
                className="text-[#a0aec0] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#a0aec0] hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-sm text-[#6b7280]">
                © 2026 Our Ring Finder. All rights reserved.
              </p>
            </div>
          </div>

          <div className="border-t border-[#2d2d2d] pt-8 text-center text-xs text-[#4a5568]">
            <p>
              Built for Ring Owners Like You
            </p>
          </div>
        </div>
      </footer >

      {/* Global Animations */}
      < style jsx global > {`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #0a0a0a;
        }
      `}</style >
    </div >
  );
}
