import type { Metadata } from "next"
import Link from "next/link"
import { gallery, site } from "@/lib/content"
import { Nav } from "@/components/nav"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal"
import { Fx } from "@/components/fx"

const wrap = "mx-auto w-full max-w-[1160px] px-4 sm:px-5"
const photos = gallery.filter((g) => g.src)

export const metadata: Metadata = {
  title: "Gallery | Aayan",
  description: `Fits, shoots and travel: ${photos.length} photos of Aayan (${site.handle}).`,
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery", title: "Gallery | Aayan" },
}

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <section id="top" aria-labelledby="gallery-title" className={`${wrap} pt-[calc(var(--nav-h)+32px)] lg:pt-[calc(var(--nav-h)+64px)]`}>
          <Link href="/" className="enter nudge mono inline-flex min-h-[44px] items-center gap-2 text-muted hover:text-ink">
            <span aria-hidden className="arr">←</span> Back to home
          </Link>
          <p className="enter mono mt-6 flex items-center gap-3 text-muted" style={{ "--d": "80ms" } as React.CSSProperties}>
            <span aria-hidden className="h-px w-8 bg-ink" />
            Gallery · {photos.length} photos
          </p>
          <h1 id="gallery-title" className="enter display mt-4 max-w-[14ch] text-[clamp(44px,13vw,64px)] sm:text-[96px] lg:text-[120px]" style={{ "--d": "160ms" } as React.CSSProperties}>
            Fits, shoots &amp; travel
          </h1>
        </section>

        <section aria-label="Photos" className={`${wrap} reveal py-12 sm:py-16`}>
          <Gallery items={photos} />
        </section>

        <section aria-label="Work with Aayan" className={`${wrap} pb-16 sm:pb-24`}>
          <div className="flex flex-col items-start gap-6 border-t border-ink pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="display max-w-[16ch] text-[32px] sm:text-[44px]">Want this look on your brand?</p>
            <Link href="/#contact" className="btn btn-primary" data-magnetic>
              Work with me <span aria-hidden className="arr">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <RevealObserver />
      <Fx />
    </>
  )
}
