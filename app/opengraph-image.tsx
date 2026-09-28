import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { stats } from "@/lib/content"

export const alt = "Aayan, creator portfolio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Text-only OG for now (brief §5A). Swap for hero photo + text once photos land.
export default async function OG() {
  const font = await readFile(join(process.cwd(), "assets/archivo-expanded-black.ttf"))
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#F2EDE4",
          color: "#1B1814",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ fontSize: 190, lineHeight: 1, letterSpacing: "0.01em" }}>AAYAN</div>
        <div style={{ fontSize: 56, marginTop: 24, color: "#C23A1C" }}>{`${stats[0].value} reel views`}</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Archivo", data: font, weight: 900, style: "normal" }] }
  )
}
