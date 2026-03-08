import OpenGraphTemplate from "@/components/open-graph-template";
import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

export const runtime = "nodejs";

// Image metadata
export const alt = "SG Tools";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const spaceFontFile = join(
    process.cwd(),
    "public/assets/SpaceGrotesk-Medium.ttf",
  );
  const interFontFile = join(
    process.cwd(),
    "public/assets/Inter_18pt-Regular.ttf",
  );
  const SpaceGrotesk = await readFile(spaceFontFile);
  const Inter = await readFile(interFontFile);

  return new ImageResponse(
    // ImageResponse JSX element
    <OpenGraphTemplate
      cta="Kupi online"
      title="Profesionalni alati nastali iz 30 godina iskustva"
      description="Nastali iza pulta, oblikovani stvarnim potrebama majstora i tehničara. SG Tools donosi pouzdanost, trajnost i ergonomiju — po cenama koje imaju smisla."
    />,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "SpaceGrotesk",
          data: SpaceGrotesk,
          style: "normal",
          weight: 500,
        },
        {
          name: "Inter",
          data: Inter,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
