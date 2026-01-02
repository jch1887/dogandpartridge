"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface MenuItem {
  name: string;
  irishName?: string;
  description?: string;
  price?: string;
  note?: string;
}

interface MenuSection {
  title: string;
  irishTitle?: string;
  note?: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: "Dublin Spice Bag",
    irishTitle: "Mála Spíosraí Átha Cliath",
    items: [
      {
        name: "Spice Bag",
        description:
          "Invented by Chinese takeaways in Dublin and now taking the world by storm. Choose either Chicken Tenders, Squid or Vegan Nuggets (Vg) with chips, peppers, onions and fresh Chilli, in a \"Salt & Chilli\" style seasoning, with old-school Curry Sauce for lubrication.",
        price: "R/ £8.3, L/ £12.9",
      },
    ],
  },
  {
    title: "Sandwiches",
    irishTitle: "Ceapairí",
    note: "*Chips included **Add Chips for £2",
    items: [
      {
        name: "Chicken Fillet Roll",
        irishName: "Rollóg Sicín",
        description:
          "Breaded chicken mini fillets, lettuce, tomato, house-pickled pink onions and your choice of Mayo, Piri-Piri Mayo or Garlic Mayo. In a baguette. Can be made with Vegan Fillets and Vegan Mayo, just ask!",
        price: "£7.9",
        note: "**",
      },
      {
        name: "Ham & Cheese Melt Baguette",
        irishName: "Liamhás agus Cáis leáite",
        description: "Chunks of baked Ham and melty cheese.",
        price: "£6.3",
        note: "**",
      },
      {
        name: "Fish Fillet Sandwich",
        irishName: "Fillead Éisc",
        description: "Battered Cod Fillet with tartare sauce and lettuce in white bread.",
        price: "£6.9",
        note: "**",
      },
      {
        name: "Cheesesteak",
        irishName: "Cáis-Stéig",
        note: "**",
      },
    ],
  },
  {
    title: "Snacks",
    irishTitle: "Béilí Beaga",
    items: [
      {
        name: "Chicken Wings",
        irishName: "Sciathán Sicín",
        description:
          "Six Breaded wing pieces, tossed in your choice of Buffalo, Hot Honey or BBQ sauces.",
        price: "£6.9",
      },
      {
        name: "Sausage Roll",
        irishName: "Rollóg Ispíní",
        description:
          "Choose Pork & Leek or Vegan. Served with Guinness Mustard and house pickled pink onions.",
        price: "£3.5",
      },
      {
        name: "Whitebait",
        irishName: "Bánóg",
        description: "Served with Tartare and Lemon.",
        price: "£4.3",
      },
      {
        name: "Onion Rings",
        irishName: "Fáinní Oinniún",
        description: "Beer Battered and served with your choice of dip.",
        price: "£3.5",
      },
    ],
  },
  {
    title: "Burgers",
    items: [
      {
        name: "Beef & Guinness Burger",
        irishName: "Borgaire Mairteola agus Guinness",
        description:
          "In a brioche Bun with burger sauce, lettuce and tomato, and topped with grilled onions, mustard and cheese.",
        price: "£11.9",
        note: "*",
      },
      {
        name: "Lamb Burger",
        irishName: "Borgaire Uan",
        description:
          "Flavoured with garlic and rosemary, in a Brioche Bun with mint yoghurt, lettuce, tomato and our pink pickled onions. Yum!",
        price: "£10.9",
        note: "*",
      },
    ],
  },
  {
    title: "Chips",
    irishTitle: "Sceallóga agus Rudaí",
    note: "A basket of spudsticks topped your way. *Comes with your choice of dip",
    items: [
      {
        name: "Chips of Doom",
        irishName: "Sceallóga an Bháis",
        description: "Claim your free survivor badge if you finish. T's & C's apply.",
        price: "£5.9",
      },
      {
        name: "Sweet Potato",
        irishName: "Prataí Milse",
        price: "£5.5",
        note: "*",
      },
      {
        name: "With Cheese",
        irishName: "Le Cáis",
        price: "£5.5",
        note: "*",
      },
      {
        name: "Curry Sauce",
        irishName: "Anlann Curái",
        price: "£5.5",
      },
      {
        name: "Spice Bag, no protein",
        irishName: "Mála Spiosraí gan Prótéin",
        price: "£5.7",
      },
      {
        name: "Ham & Cheese",
        irishName: "Stíl Luimneach",
        price: "£6.3",
        note: "*",
      },
      {
        name: "Smashed Burger",
        irishName: "Borgaire Briste",
        description: "With burger sauce and pickled onions.",
        price: "£9.9",
      },
      {
        name: "Truffle Oil & Parmesan",
        irishName: "Milliúinai Mullach Íde",
        price: "£7.2",
      },
    ],
  },
  {
    title: "Extras",
    items: [
      {
        name: "DIY Tayto",
        irishName: "Déan é Féin Tayto",
        description: "Two slices of buttered bread and your choice of Tayto.",
        price: "£2",
      },
    ],
  },
];

export default function MenuPage() {
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
            From Our Kitchen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Menu
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <p className="text-foreground-muted">
              Please place your order at the Bar, and notify us of any allergies. Check out our Specials Board too!!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Daily Specials Notice */}
          <FadeIn>
            <div className="bg-background-accent border-l-4 border-accent-gold p-6 mb-16">
              <p className="text-foreground font-medium">Daily specials available.</p>
              <p className="text-foreground-muted text-sm mt-1">
                Ask at the bar for today&apos;s offerings.
              </p>
            </div>
          </FadeIn>

          {menuSections.map((section, sectionIndex) => (
            <FadeIn key={section.title} delay={0.1 * sectionIndex}>
              <div className="mb-16 last:mb-0">
                {/* Section Header */}
                <div className="border-b-2 border-foreground pb-4 mb-8">
                  <h2 className="heading-display text-3xl md:text-4xl">
                    {section.title}
                  </h2>
                  {section.irishTitle && (
                    <p className="text-foreground-subtle italic mt-1">
                      {section.irishTitle}
                    </p>
                  )}
                  {section.note && (
                    <p className="text-foreground-muted text-sm mt-3">
                      {section.note}
                    </p>
                  )}
                </div>

                {/* Items */}
                <ul className="space-y-8">
                  {section.items.map((item) => (
                    <li key={item.name} className="group">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="text-lg font-medium text-foreground">
                          {item.name}
                          {item.note && (
                            <span className="text-foreground-subtle text-sm ml-1">
                              {item.note}
                            </span>
                          )}
                        </h3>
                        {item.price && (
                          <span className="text-foreground font-medium tabular-nums">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {item.irishName && (
                        <p className="text-foreground-subtle text-sm italic mb-2">
                          {item.irishName}
                        </p>
                      )}
                      {item.description && (
                        <p className="text-foreground-muted text-sm leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}

          {/* Footer Note */}
          <FadeIn delay={0.3}>
            <div className="mt-16 pt-8 border-t border-border text-center">
              <p className="text-foreground-subtle text-sm">
                Home cooked menu including Irish classics like Spice Bags, Coddle & Chicken Fillet Rolls.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

