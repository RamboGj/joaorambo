import { ImageResponse } from "next/og";
import { OG, OgCard } from "./_social/cards";
import { loadFonts } from "./_social/tokens";

export const alt =
  "João Rambo — fullstack software engineer. Looking for someone who ships?";
export const size = OG;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<OgCard />, { ...size, fonts: await loadFonts() });
}
