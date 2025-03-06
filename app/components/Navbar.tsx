"use client";

import Link from 'next/link'
import Image from "next/image";

const navItems = {
  '/About': {
    name: 'About',
  },
  '/Work': {
    name: 'Work',
  },
  '/Testimonials': {
    name: 'Testimonials',
  },
  '/contact': {
    name: 'Contact',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'Download CV',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px]  tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row relative px-0 pb-0 fade md:overflow-automd:relative direction:rtl"
          id="nav"
        >
          <div className='flex flex-row relative w-full justify-end'>
            <div className='fixed top-0 left-0  flex flex-col justify-between items-top flex-wrap shadow-md z-10 p-2' style={{height:"100vh", maxWidth:"4%"}}>
              <Image className="w-12" src="/assests/wordmark.svg" alt="Wordmark Logo" width={48} height={48} />
              <div className='rotate-270 text-center h-auto w-full text-nowrap content-center justify-center flex-wrap flex flex-col align-center'>
                <h1 className='text-2xl font-bold tracking-tighter'>WILLIAM HANKEY</h1>
                <p className='text-sm'>PRODUCT DESIGNER</p>
              </div>
              <Image className="w-12" src="/assests/wordmark.svg" alt="Wordmark Logo" width={48} height={48} />
            </div>
            
            <div className="flex flex-row space-x-0 p-3 fixed shadow-md w-full justify-end bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </div>
          
        </nav>
      </div>
    </aside>
  )
}
