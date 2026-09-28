import type { Metadata, Viewport } from "next"
import { Instrument_Sans, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { site } from "@/lib/content"
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
        {/* ...and plays the intro loader once per session (skipped under reduced motion) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&!sessionStorage.getItem('intro')){d.classList.add('intro');sessionStorage.setItem('intro','1')}}catch(e){}",
          }}
        />
      </head>
      <body>
        <div className="loader" aria-hidden>
          <div className="mono flex justify-between text-[11px] opacity-70">
            <span>{site.handle}</span>
            <span>Delhi / Jammu</span>
          </div>
          <div>
            <div className="display loader-word text-[19vw] lg:text-[16vw]">
              {"AAYAN".split("").map((c, i) => (
                <span key={i} style={{ "--i": i } as React.CSSProperties}>{c}</span>
              ))}
            </div>
            <div className="mt-4 flex items-end justify-between gap-6">
              <div className="loader-bar flex-1" />
              <span className="display loader-count num text-[40px] leading-none" />
            </div>
          </div>
        </div>
        <div className="grain" aria-hidden />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
