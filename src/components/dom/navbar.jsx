"use client";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import { cn } from "@/helpers/cn";
export default function Navbar() {
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <motion.nav
        variants={{
          initial: {
            y: 0,
          },
          animate: {
            y: -20,
          },
        }}
        initial="initial"
        animate={isScrolled ? "animate" : "initial"}
        transition={{ duration: 0.2, ease: [0.3, 0.28, 0.2, 1] }}
        className="w-full text-black h-16 mt-4 flex items-center"
      >
        <motion.div
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
          initial="initial"
          animate={isScrolled ? "animate" : "initial"}
          transition={{ duration: 0.2, ease: [0.3, 0.28, 0.2, 1] }}
          className="absolute size-full inset-0 bg-white/80 border-b-black/10 border-b-[.1rem] border-solid backdrop-blur-[10px] z-0"
        ></motion.div>
        <div className="relative z-10 flex flex-row justify-between w-full">
          <div className="">
            <Link href="/">
              <h1 className="text-3xl leading-none font-semibold">Reed</h1>
            </Link>
          </div>
          <NavLinks />
        </div>
      </motion.nav>
    </div>
  );
}

function NavLinks({}) {
  const router = useRouter();
  const navLinks = [
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Vision",
      href: "/vision",
    },
    {
      label: "Journal",
      href: "/journal",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="flex flex-row items-center gap-10 group">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={cn(
            "font-semibold relative leading-none text-md text-black opacity-100"
          )}
        >
          {link.label}
          {router.pathname === link.href && (
            <motion.span
              layoutId="nav_underline"
              className="absolute w-full h-[2px] bg-black left-0 bottom-0"
              style={{ originY: "0px" }}
            ></motion.span>
          )}
        </Link>
      ))}
    </div>
  );
}
