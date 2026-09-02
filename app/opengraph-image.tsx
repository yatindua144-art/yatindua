import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Yatin Dua - Policy, Research and Programs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4efe6",
          color: "#151515",
          padding: "72px 82px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 2 }}>
          <span>YATIN DUA</span>
          <span>VANCOUVER, BC</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 82, lineHeight: 1.02, maxWidth: 930, fontWeight: 700 }}>
            I do not trust the first explanation.
          </div>
          <div style={{ fontSize: 30, maxWidth: 950, lineHeight: 1.35 }}>
            Policy, research, program delivery, evaluation, and public-interest writing.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 22 }}>
          <span>POLICY</span><span>•</span><span>RESEARCH</span><span>•</span><span>PROGRAMS</span><span>•</span><span>WRITING</span>
        </div>
      </div>
    ),
    size,
  );
}
