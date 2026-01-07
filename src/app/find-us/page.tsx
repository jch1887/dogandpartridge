"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const drinkHours = [
  { day: "Monday", hours: "4-11pm" },
  { day: "Tuesday-Wednesday", hours: "12-11pm" },
  { day: "Thursday", hours: "12-11.30pm" },
  { day: "Friday & Saturday", hours: "12-Midnight" },
  { day: "Sunday", hours: "12-11.30pm" },
];

const foodHours = [
  { day: "Tuesday & Wednesday", hours: "5-8pm" },
  { day: "Thursday & Friday", hours: "12-2pm, 5-8pm" },
  { day: "Saturday & Sunday", hours: "12-6pm" },
];

export default function FindUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Image
              src="/logo.png"
              alt="Dog & Partridge Logo"
              width={80}
              height={80}
              className="mx-auto"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl"
          >
            Find Us
          </motion.h1>
        </div>
      </section>

      {/* Main Content - Map Left, Info Right */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Map */}
            <FadeIn>
              <div className="aspect-square lg:aspect-[4/5] w-full overflow-hidden bg-background-secondary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.8876!2d-1.4745!3d53.3815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48797882c7e5e3f1%3A0x8a5e5b5b5b5b5b5b!2s56%20Trippet%20Ln%2C%20Sheffield%20S1%204EL%2C%20UK!5e0!3m2!1sen!2suk!4v1704200000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dog & Partridge Location - 56 Trippet Lane, Sheffield"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </FadeIn>

            {/* Right Column - Info */}
            <div className="flex flex-col justify-center">
              <FadeIn delay={0.1}>
                <div className="mb-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground-subtle mb-3">
                    Address
                  </p>
                  <address className="not-italic">
                    <p className="heading-display text-2xl md:text-3xl mb-1">
                      56 Trippet Lane
                    </p>
                    <p className="text-foreground-muted">
                      Sheffield S1 4EL
                    </p>
                  </address>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="mb-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground-subtle mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:thedogsheffield@gmail.com"
                    className="text-foreground hover:text-accent-copper transition-colors"
                  >
                    thedogsheffield@gmail.com
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mb-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground-subtle mb-3">
                    Parking
                  </p>
                  <p className="text-foreground-muted text-sm">
                    Street parking available nearby.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=56+Trippet+Lane+Sheffield+S1+4EL+UK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-xs uppercase tracking-wider hover:bg-foreground/90 transition-colors"
                  >
                    Get Directions
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="bg-foreground text-background py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="heading-display text-3xl md:text-4xl text-center mb-12">
              Opening Hours
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Drinks Hours */}
            <FadeIn delay={0.1}>
              <div className="border border-background/20 p-6 md:p-8">
                <h3 className="text-xs uppercase tracking-[0.2em] text-background/50 mb-6">
                  Drinks
                </h3>
                <ul className="space-y-3">
                  {drinkHours.map((item) => (
                    <li key={item.day} className="flex justify-between items-baseline gap-4 text-sm">
                      <span className="text-background/70">{item.day}</span>
                      <span className="text-background">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Food Hours */}
            <FadeIn delay={0.15}>
              <div className="border border-background/20 p-6 md:p-8">
                <h3 className="text-xs uppercase tracking-[0.2em] text-background/50 mb-6">
                  Food Served
                </h3>
                <ul className="space-y-3">
                  {foodHours.map((item) => (
                    <li key={item.day} className="flex justify-between items-baseline gap-4 text-sm">
                      <span className="text-background/70">{item.day}</span>
                      <span className="text-background">{item.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-4 border-t border-background/20 text-xs text-background/50">
                  No food served on Mondays.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
