import { ImageResponse } from "next/og";
import { COVER, CoverCard } from "../_social/cards";
import { loadFonts } from "../_social/tokens";

/**
 * LinkedIn banners are uploaded by hand rather than scraped, so this one is
 * served as a downloadable PNG at /linkedin-cover.png instead of going
 * through a metadata file convention.
 *
 * Nothing here varies per request, so it is prerendered at build time —
 * `GET` handlers have defaulted to dynamic since Next 15.
 */
export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(<CoverCard />, {
    ...COVER,
    fonts: await loadFonts(),
  });
}
