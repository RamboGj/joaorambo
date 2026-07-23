import { ImageResponse } from "next/og";
import { Monogram } from "./_social/cards";
import { loadDisplayFont } from "./_social/tokens";

/**
 * Browser-tab favicon: the lime JR tile on a transparent ground, so the
 * rounded corners read against both light and dark tab strips.
 *
 * Next cannot generate a `favicon.ico` — the `icon` convention is the
 * code-generated equivalent, and emits `<link rel="icon" href="/icon">`.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    // Corner radius and type scale follow the nav's 34px mark, stepped down.
    <Monogram size={size.width} radius={8} fontSize={13} />,
    { ...size, fonts: await loadDisplayFont() },
  );
}
