"use client";
import { Particles } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    // carrega o preset "links" corretamente
    await loadLinksPreset(engine);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="w-full h-full"
        options={{
          preset: "links",
          particles: {
            color: { value: "#FFD700" },
            links: {
              color: "#FFD700",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              value: 60,
              density: { enable: true, area: 800 } as any,
            },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 4 } },
          },
        }}
      />
    </div>
  );
}
