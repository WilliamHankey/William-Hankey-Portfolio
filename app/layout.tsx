import { Metadata } from "next"
import Footer from "./components/Footer"
import { unstable_ViewTransition as ViewTransition } from "react"

export const metadata: Metadata = {
  icons: {
    icon: '/assets/wordmark.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/tabs.js"></script>
      </head>
      <body suppressHydrationWarning={true} className="antialiased w-full lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
