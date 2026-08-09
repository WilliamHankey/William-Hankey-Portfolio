"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteData } from "@/lib/use-site-data";

type NavItem = {
  href: string;
  name: string;
  isCta?: boolean;
};

// Fallback used until siteSettings.cvUrl is set in Sanity.
const DEFAULT_CV_URL =
  "https://drive.google.com/uc?export=download&id=1zSE7aTNEI1nnSe23QChZzNKGYJFB5nCR";

const baseNavItems: NavItem[] = [
  { href: "/#about", name: "About" },
  { href: "/#work", name: "Work" },
  { href: "/#testimonials", name: "Testimonials" },
  { href: "/#contact", name: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = useSiteData();
  const cvUrl = data?.profile?.cvUrl || DEFAULT_CV_URL;
  const navItems: NavItem[] = [
    ...baseNavItems,
    { href: cvUrl, name: "Download CV", isCta: true },
  ];

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleDownload = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "William_Hankey_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Image
          className="w-12"
          src="/assets/wordmark.svg"
          alt="Wordmark Logo"
          width={48}
          height={48}
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div
        className="hidden lg:flex fixed top-0 left-0 flex-col justify-between items-top flex-wrap shadow-md z-10 p-2"
        style={{ height: "100vh", maxWidth: "4%" }}
      >
        <Image
          className="w-12"
          src="/assets/wordmark.svg"
          alt="Wordmark Logo"
          width={48}
          height={48}
        />
        <div className="-rotate-90 text-center h-auto w-full text-nowrap content-center justify-center flex-wrap flex flex-col align-center">
          <h1 className="text-2xl font-bold tracking-tighter">WILLIAM HANKEY</h1>
          <p className="text-sm">PRODUCT ENGINNEER</p>
        </div>
        <Image
          className="w-12"
          src="/assets/wordmark.svg"
          alt="Wordmark Logo"
          width={48}
          height={48}
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-row space-x-0 p-3 fixed shadow-md w-full justify-end bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        {navItems.map(({ href, name, isCta = false }) => {
          const isInternal = href.startsWith("/#");
          return isInternal ? (
            <a
              key={href}
              href={href}
              onClick={(e) => handleScroll(e, href.replace("/#", ""))}
              className="transition-all hover:text-[#2C2B3E] flex align-middle relative py-1 px-2 m-1 cursor-pointer"
            >
              {name}
            </a>
          ) : (
            <a
              key={href}
              href={href}
              onClick={handleDownload}
              className={`transition-all flex align-middle relative py-1 px-2 m-1 ${
                isCta
                  ? "bg-[#2C2B3E] text-white rounded-md hover:bg-[#2C2B3E]/90"
                  : "hover:text-[#2C2B3E]"
              }`}
            >
              {name}
            </a>
          );
        })}
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-3">
                    <Image
                      className="w-8"
                      src="/assets/wordmark.svg"
                      alt="Wordmark Logo"
                      width={32}
                      height={32}
                    />
                    <div>
                      <h1 className="text-sm font-bold tracking-tighter">
                        WILLIAM HANKEY
                      </h1>
                      <p className="text-xs text-gray-500">PRODUCT ENGINEER</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 p-4 space-y-4">
                  {navItems.map(({ href, name, isCta }) => {
                    const isInternal = href.startsWith("/#");
                    return isInternal ? (
                      <a
                        key={href}
                        href={href}
                        onClick={(e) => handleScroll(e, href.replace("/#", ""))}
                        className="transition-all hover:text-[#2C2B3E] py-2 px-4 block"
                      >
                        {name}
                      </a>
                    ) : (
                      <a
                        key={href}
                        href={href}
                        onClick={handleDownload}
                        className={`transition-all py-2 px-4 block ${
                          isCta
                            ? "bg-[#2C2B3E] text-white rounded-md hover:bg-[#2C2B3E]/90"
                            : "hover:text-[#2C2B3E]"
                        }`}
                      >
                        {name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}