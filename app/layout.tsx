import { Metadata } from "next"
import Footer from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { unstable_ViewTransition as ViewTransition } from "react"

export const metadata: Metadata = {

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
    >
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/tabs.js"></script>
      </head>
      <body suppressHydrationWarning={true} className="antialiased w-full mx-4 lg:mx-auto">
        <main className="flex-auto min-w-0  flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
         
          <Footer />
        </main>
      </body>
    </html>
  )
}
