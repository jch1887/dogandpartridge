import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Us | Dog & Partridge Sheffield",
  description: "Find Dog & Partridge Irish Pub at 56 Trippet Lane, Sheffield S1 4EL. View our opening hours and get directions to Sheffield city centre's favourite Irish pub.",
};

export default function FindUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

