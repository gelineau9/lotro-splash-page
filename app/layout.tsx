import type React from "react"
import "./globals.css"
import localFont from "next/font/local"
import type { Metadata } from "next"

const tolkienFont = localFont({
  src: "./fonts/Tolkien-Regular.ttf",
  display: "swap",
  variable: "--font-tolkien",
})

export const metadata: Metadata = {
  title: "The Brandy Hall Archives - Coming Summer/Fall 2025",
  description: "The chronicle to RP on Meriadoc - A new platform for writers, artists, and roleplayers",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

const FONT_LOADER_SCRIPT = `
(function() {
  try {
    const fontPreference = localStorage.getItem('brandy-hall-accessible-font');
    if (fontPreference === 'true') {
      document.documentElement.setAttribute('data-font-style', 'accessible');
    }
  } catch (e) {}
  document.body.classList.add('fonts-loaded');
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={tolkienFont.variable}>
      <body>
        {/* This script runs immediately, before children render */}
        <script dangerouslySetInnerHTML={{ __html: FONT_LOADER_SCRIPT }} />
        {children}
      </body>
    </html>
  )
}
