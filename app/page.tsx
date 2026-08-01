import { Hero } from "@/components/home/Hero";
import { StartHere } from "@/components/home/StartHere";
import { NextEventTeaser } from "@/components/home/NextEventTeaser";
import { PhotoSplash } from "@/components/home/PhotoSplash";
import { CommunityBand } from "@/components/home/CommunityBand";

export default function Home() {
  return (
    <>
      <Hero />
      <StartHere />
      <NextEventTeaser />
      <PhotoSplash />
      <CommunityBand />
    </>
  );
}
