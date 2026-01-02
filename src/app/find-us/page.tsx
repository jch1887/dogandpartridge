"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const drinkHours = [
  { day: "Monday", hours: "4-11pm" },
  { day: "Tuesday-Wednesday", hours: "12-11pm" },
  { day: "Thursday", hours: "12-11.30pm" },
  { day: "Friday & Saturday", hours: "12-Midnight" },
  { day: "Sunday", hours: "12-11.30ppm" },
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-background-secondary">
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.2em] text-foreground-subtle mb-4"
          >
            Sheffield City Centre
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Find Us
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Address & Contact */}
            <div>
              <FadeIn>
                <div className="mb-12">
                  <h2 className="text-sm uppercase tracking-[0.15em] text-foreground-subtle mb-4">
                    Address
                  </h2>
                  <address className="not-italic">
                    <p className="heading-display text-3xl md:text-4xl mb-2">
                      56 Trippet Lane
                    </p>
                    <p className="text-xl text-foreground-muted">
                      Sheffield S1 4EL, UK
                    </p>
                  </address>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="mb-12">
                  <h2 className="text-sm uppercase tracking-[0.15em] text-foreground-subtle mb-4">
                    Email
                  </h2>
                  <a
                    href="mailto:thedogsheffield@gmail.com"
                    className="text-foreground text-lg hover:text-accent-copper transition-colors underline underline-offset-4"
                  >
                    thedogsheffield@gmail.com
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mb-12">
                  <h2 className="text-sm uppercase tracking-[0.15em] text-foreground-subtle mb-4">
                    Parking
                  </h2>
                  <p className="text-foreground-muted">
                    Should you be arriving by car, street parking is available.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="p-6 bg-background-accent">
                  <p className="text-foreground font-medium">
                    Walk-ins Only
                  </p>
                  <p className="text-foreground-muted text-sm mt-1">
                    Drinking & Eating — No bookings needed.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mt-8">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=56+Trippet+Lane+Sheffield+S1+4EL+UK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors"
                  >
                    Open in Google Maps
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

            {/* Right Column - Opening Hours */}
            <div>
              <FadeIn delay={0.1}>
                <div className="bg-foreground text-background p-8 md:p-10 mb-8">
                  <h2 className="text-sm uppercase tracking-[0.15em] text-background/50 mb-6 pb-4 border-b border-background/20">
                    Drinks
                  </h2>
                  <ul className="space-y-4">
                    {drinkHours.map((item) => (
                      <li key={item.day} className="flex justify-between items-baseline gap-4">
                        <span className="text-background/70">{item.day}</span>
                        <span className="text-background font-medium">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-background-accent p-8 md:p-10">
                  <h2 className="text-sm uppercase tracking-[0.15em] text-foreground-subtle mb-6 pb-4 border-b border-border">
                    Food Served
                  </h2>
                  <ul className="space-y-4">
                    {foodHours.map((item) => (
                      <li key={item.day} className="flex justify-between items-baseline gap-4">
                        <span className="text-foreground-muted">{item.day}</span>
                        <span className="text-foreground font-medium">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 pt-4 border-t border-border text-sm text-foreground-subtle">
                    No food served on Mondays.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 p-4 border-l-4 border-accent-copper">
                  <p className="text-foreground-muted text-sm">
                    18 years & over only after 6pm.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <FadeIn>
        <section className="px-6 pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video md:aspect-[21/9] w-full overflow-hidden">
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
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

