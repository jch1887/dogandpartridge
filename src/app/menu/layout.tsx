import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Dog & Partridge Sheffield",
  description: "Home cooked menu including Irish classics like Spice Bags, Coddle & Chicken Fillet Rolls. View our full menu including sandwiches, snacks, burgers and chips.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

