import { backdrop, color, font, profile } from "./tokens";

/*
 * Every element below sets `display: flex` explicitly and lays out with
 * flexbox only — Satori (the renderer behind `ImageResponse`) supports no
 * other display mode, and treats a multi-child element without it as an error.
 */

/** Open Graph / Twitter card dimensions. */
export const OG = { width: 1200, height: 630 } as const;
/** LinkedIn banner dimensions. */
export const COVER = { width: 1584, height: 396 } as const;

/** Four-point sparkle used as a separator in the OG footer. */
function Sparkle({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color.lime}>
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" />
    </svg>
  );
}

/**
 * Lime monogram tile — the brand mark. Shared with the favicon and Apple
 * touch icon so the mark is identical everywhere it appears.
 */
export function Monogram({ size, radius, fontSize }: { size: number; radius: number; fontSize: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: radius,
        background: color.lime,
        color: color.ink,
        fontFamily: font.display,
        fontWeight: 700,
        fontSize,
      }}
    >
      {profile.initials}
    </div>
  );
}

/** Outlined availability pill with a lime status dot. */
function StatusPill({ label, fontSize, padding }: { label: string; fontSize: number; padding: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        fontFamily: font.mono,
        fontSize,
        color: color.paper60,
        border: `1px solid ${color.hairline}`,
        borderRadius: 100,
        padding,
      }}
    >
      <div style={{ display: "flex", width: 8, height: 8, borderRadius: 4, background: color.lime }} />
      {label}
    </div>
  );
}

const frame: React.CSSProperties = {
  position: "relative",
  display: "flex",
  width: "100%",
  height: "100%",
  background: color.ink,
  color: color.paper,
  overflow: "hidden",
  fontFamily: font.body,
};

/** Open Graph / Twitter card — 1200×630. */
export function OgCard() {
  return (
    <div style={frame}>
      {/* Satori rasterizes raw <img> only — next/image has no meaning here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        width={OG.width}
        height={OG.height}
        style={{ position: "absolute", left: 0, top: 0 }}
        src={backdrop({
          ...OG,
          mask: { rx: 0.85, ry: 0.75, cx: 0.3, cy: 0.45, stop: 0.78 },
          // right:-120 / top:-120 in the design, resolved from the left edge.
          glow: { x: OG.width - 520 + 120, y: -120, size: 520, alpha: 0.16 },
        })}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Monogram size={52} radius={13} fontSize={22} />
          <div
            style={{
              display: "flex",
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: -0.48,
            }}
          >
            {profile.name}
          </div>
          <div style={{ display: "flex", marginLeft: 6 }}>
            <StatusPill label="Open to Senior roles" fontSize={13} padding="7px 15px" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: font.mono,
              fontSize: 16,
              color: color.lime,
              marginBottom: 18,
            }}
          >
            {"// fullstack software engineer"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: 86,
              lineHeight: 0.94,
              letterSpacing: -3.01,
              marginBottom: 26,
            }}
          >
            <div style={{ display: "flex" }}>Looking for someone</div>
            <div style={{ display: "flex" }}>
              who ships<span style={{ color: color.lime }}>?</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 500,
              lineHeight: 1.45,
              color: color.paper70,
              maxWidth: 780,
            }}
          >
            Fintech · Web3 · AI — architecture to production, end to end. 5+ years shipping.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontFamily: font.mono,
            fontSize: 16,
            color: color.paper55,
          }}
        >
          <div style={{ display: "flex" }}>{profile.email}</div>
          <Sparkle size={13} />
          <div style={{ display: "flex" }}>{profile.github}</div>
          <Sparkle size={13} />
          <div style={{ display: "flex" }}>Blumenau · Brazil</div>
        </div>
      </div>
    </div>
  );
}

/** LinkedIn banner — 1584×396. */
export function CoverCard() {
  return (
    <div style={frame}>
      {/* Satori rasterizes raw <img> only — next/image has no meaning here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        width={COVER.width}
        height={COVER.height}
        style={{ position: "absolute", left: 0, top: 0 }}
        src={backdrop({
          ...COVER,
          mask: { rx: 0.7, ry: 0.9, cx: 0.7, cy: 0.5, stop: 0.8 },
          // left:-100 / bottom:-160 in the design, resolved from the top edge.
          glow: { x: -100, y: COVER.height - 460 + 160, size: 460, alpha: 0.14 },
        })}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "0 96px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <Monogram size={46} radius={12} fontSize={19} />
            <StatusPill label="Open to Senior roles · remote" fontSize={14} padding="7px 16px" />
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: 64,
              lineHeight: 0.96,
              letterSpacing: -2.24,
              marginBottom: 18,
            }}
          >
            Fullstack Software Engineer<span style={{ color: color.lime }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 500,
              lineHeight: 1.4,
              color: color.paper68,
            }}
          >
            Fintech · Web3 · AI — from architecture to production, shipping end to end.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontFamily: font.mono,
            fontSize: 15,
            lineHeight: 2,
            color: color.paper50,
          }}
        >
          <div style={{ display: "flex", color: color.lime, fontWeight: 600, marginBottom: 4 }}>
            {"// let's talk"}
          </div>
          <div style={{ display: "flex" }}>{profile.email}</div>
          <div style={{ display: "flex" }}>{profile.github}</div>
          <div style={{ display: "flex" }}>Blumenau · SC · Brazil</div>
        </div>
      </div>
    </div>
  );
}
