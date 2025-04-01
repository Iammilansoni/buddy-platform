import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "BUDDY - Academic Marketplace",
    template: "%s | BUDDY",
  },
  description: "Connect with tutors and get help with your academic assignments",
  keywords: ["education", "tutoring", "academic help", "homework", "assignments"],
  authors: [{ name: "BUDDY Team" }],
  creator: "BUDDY",
  publisher: "BUDDY Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buddy-platform.vercel.app",
    title: "BUDDY - Academic Marketplace",
    description: "Connect with tutors and get help with your academic assignments",
    siteName: "BUDDY",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BUDDY - Academic Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUDDY - Academic Marketplace",
    description: "Connect with tutors and get help with your academic assignments",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1 flex-col md:flex-row">
              <Sidebar />
              <main className="flex-1 bg-gray-50 overflow-x-hidden">{children}</main>
            </div>
          </div>
          <Toaster />
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'