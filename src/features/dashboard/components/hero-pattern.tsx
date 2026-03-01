import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <WavyBackground
        colors={[
          "#FDF2F8", // blush pink
          "#EDE9FE", // soft lavender
          "#FCE7F3", // light rose
          "#FEF3C7", // champagne
          "#F59E0B"  // soft gold accent
        ]}
        backgroundFill="hsl(0 0% 100%)"
        blur={4}
        speed="slow"
        waveOpacity={0.15}
        waveWidth={70}
        waveYOffset={250}
        containerClassName="h-full"
        className="hidden"
      />
    </div>
  );
}