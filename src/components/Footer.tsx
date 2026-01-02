import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="heading-display text-2xl mb-2">
            Dog & Partridge ☘️
          </h3>
          <p className="text-background/50 text-xs tracking-[0.2em] uppercase">
            Irish Pub · Sheffield
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <Link
            href="/"
            className="text-background/50 hover:text-background transition-colors text-xs tracking-[0.15em] uppercase"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-background/50 hover:text-background transition-colors text-xs tracking-[0.15em] uppercase"
          >
            Menu
          </Link>
          <Link
            href="/find-us"
            className="text-background/50 hover:text-background transition-colors text-xs tracking-[0.15em] uppercase"
          >
            Find Us
          </Link>
        </div>

        <div className="text-center mb-12">
          <p className="text-background/70 text-sm mb-1">56 Trippet Lane</p>
          <p className="text-background/70 text-sm mb-4">Sheffield S1 4EL, UK</p>
          <a
            href="mailto:thedogsheffield@gmail.com"
            className="text-background/50 hover:text-background transition-colors text-sm"
          >
            thedogsheffield@gmail.com
          </a>
        </div>

        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/30 text-xs mb-2">
            18 years & over only after 6pm.
          </p>
          <p className="text-background/30 text-xs">
            © {new Date().getFullYear()} Dog & Partridge
          </p>
        </div>
      </div>
    </footer>
  );
}
