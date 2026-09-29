import type { Metadata, Viewport } from "next"
import { Instrument_Sans, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { site } from "@/lib/content"
import { SocialDock } from "@/components/social-dock"
import { siteUrl as url } from "@/lib/site-url"

// Static Archivo instance (wdth 125, wght 900, latin): ~14KB vs ~89KB for the variable file — LCP.
const archivo = localFont({ src: "./fonts/archivo-expanded-900.woff2", weight: "900", variable: "--font-archivo", display: "swap" })
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains", display: "swap", preload: false })


export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Aayan",
    title: site.title,
    description: site.description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2EDE4" },
    { media: "(prefers-color-scheme: dark)", color: "#15130F" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Before paint: enables reveal-hiding only when JS runs (content stays visible without JS) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <div className="grain" aria-hidden />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <SocialDock />
      </body>
    </html>
  )
}
