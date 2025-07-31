import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { ExtensionErrorSuppressor } from "@/components/extension-error-suppressor"
import { MobileGetStartedFab } from "@/components/mobile-get-started-fab"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Maya Care",
  description: "Find trusted care, for peace of mind.",
  generator: "v0.dev",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} h-full`} suppressHydrationWarning={true}>
        <ExtensionErrorSuppressor />
        <div className="min-h-screen bg-background">
          <Header />
          {children}
          <MobileGetStartedFab />
        </div>
      </body>
    </html>
  )
}
