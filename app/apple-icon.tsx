import { ImageResponse } from "next/og";
import { Monogram } from "./_social/cards";
import { loadDisplayFont } from "./_social/tokens";

/**
 * Home-screen icon. Full-bleed and opaque with square corners — iOS applies
 * its own rounded mask, so rounding it here would double up and transparency
 * would render black. The glyph is kept a little smaller than the tile's
 * proportions elsewhere to stay clear of that mask.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    <Monogram size={size.width} radius={0} fontSize={72} />,
    { ...size, fonts: await loadDisplayFont() },
  );
}
