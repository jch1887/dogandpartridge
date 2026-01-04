"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  return (
    <>
      {/* Hero Section - Full screen with image */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/hero.jpg"
            alt="Dog & Partridge pub exterior with flower baskets and traditional signage"
            fill
          priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1] bg-black/60" />
        
        {/* Content */}
        <div className="relative z-[2] w-full text-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-2">
              Dog & Partridge
          </h1>
            <p className="heading-display text-xl md:text-2xl lg:text-3xl text-white/90 italic">
              Irish Pub ☘️
            </p>
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10"
          >
            Irish owned, cosy, dog friendly & Irish Free House in Sheffield city centre.
          </motion.p>

          {/* Accolades */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col gap-2"
          >
            <p className="text-white/90 text-sm md:text-base">
              Member of the inaugural Guinness Harp Guide 2026
            </p>
            <p className="text-white/90 text-sm md:text-base">
              Sunday Times Top 10 Pubs in Sheffield
            </p>
            <p className="text-white/90 text-sm md:text-base">
              Exposed Awards Best Traditional Pub 2024 & 2025
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-white/40"
          />
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="bg-background-secondary py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6"
          >
            &ldquo;Best Guinness in Sheffield - 10/10&rdquo;
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground-muted text-sm tracking-[0.2em] uppercase"
          >
            Girl Drinks Guinness
          </motion.p>
        </div>
      </section>

      {/* Holy Trinity Section */}
      <section className="bg-foreground text-background py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-display text-4xl md:text-5xl mb-12"
          >
            Home of the Holy Trinity
          </motion.h2>
          
          {/* Holy Trinity Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Image
              src="/holytrinity.jpg"
              alt="Beamish, Guinness and Murphy's - The Holy Trinity of Irish Stouts"
              width={600}
              height={400}
              className="mx-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-background/80 text-base md:text-lg max-w-xl mx-auto"
          >
            We also have a great selection of craft beers, cask ales, Irish whiskeys & spirits available
          </motion.p>
        </div>
      </section>

      {/* Walk-ins Section */}
      <section className="bg-background-secondary py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-foreground-muted text-xs tracking-[0.3em] uppercase mb-6"
          >
            Drinking & Eating
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Walk-ins Only
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground-muted"
          >
            No bookings required. Just pop in.
          </motion.p>
        </div>
      </section>

      {/* Hours Section */}
      <section className="bg-foreground text-background py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-display text-4xl md:text-5xl text-center mb-16"
          >
            Opening Hours
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-background/50 text-xs tracking-[0.3em] uppercase mb-6 pb-4 border-b border-background/20">
                Drinks
              </p>
              <ul className="space-y-4">
                {drinkHours.map((item) => (
                  <li key={item.day} className="flex justify-between text-sm">
                    <span className="text-background/70">{item.day}</span>
                    <span className="text-background">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-background/50 text-xs tracking-[0.3em] uppercase mb-6 pb-4 border-b border-background/20">
                Food Served
              </p>
              <ul className="space-y-4">
                {foodHours.map((item) => (
                  <li key={item.day} className="flex justify-between text-sm">
                    <span className="text-background/70">{item.day}</span>
                    <span className="text-background">{item.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-4 border-t border-background/20 text-xs text-background/50">
                No food served on Mondays.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="bg-background-accent py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-foreground-muted text-xs tracking-[0.3em] uppercase mb-6"
          >
            From the Kitchen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-3xl md:text-4xl text-foreground mb-6"
          >
            Home cooked menu including Irish classics like Spice Bags & Chicken Fillet Rolls.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground-muted mb-10"
          >
            Daily specials available.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/menu"
              className="inline-block px-8 py-4 bg-foreground text-background text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
            >
              View Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-foreground text-background py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-background/50 text-xs tracking-[0.3em] uppercase mb-6"
          >
            Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl mb-4"
          >
            56 Trippet Lane
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-background/70 mb-2"
          >
            Sheffield S1 4EL, UK
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-background/50 text-sm mb-10"
          >
            Should you be arriving by car, street parking is available.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/find-us"
              className="inline-block px-8 py-4 border border-background/30 text-background text-xs tracking-[0.2em] uppercase hover:bg-background hover:text-foreground transition-colors"
            >
              Get Directions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background-secondary py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-display text-3xl md:text-4xl mb-3"
          >
            Come say Howaya!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-foreground-muted text-lg italic"
          >
            Céad Míle Fáilte
          </motion.p>
    </div>
      </section>
    </>
  );
}
