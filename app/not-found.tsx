import Link from "next/link"

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-[1160px] flex-col justify-center px-4 sm:px-5">
      <p className="mono text-muted">404</p>
      <h1 className="display mt-4 text-[56px] sm:text-[96px]">Nothing here.</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist.</p>
      <Link href="/" className="btn btn-primary mt-8 self-start">Back to Aayan</Link>
    </main>
  )
}
