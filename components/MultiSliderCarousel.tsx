"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Slider } from "react-tech-slider";
import { techStack, foodBrands, sportBrands } from "@/lib/data";

interface Props {
  borderWidth: number;
  borderColor: string;
  backgroundColor: string;
  iconWidth?: number;
  isPlay: boolean;
  pauseOnHoverActive: boolean;
  durationMs: number;
}

const brandLists = [techStack, foodBrands, sportBrands];
const categoryLabels = ["Tech", "Food", "Sport"];

export default function MultiSliderCarousel({
  borderWidth,
  borderColor,
  backgroundColor,
  iconWidth,
  isPlay,
  pauseOnHoverActive,
  durationMs,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {brandLists.map((list, index) => (
            <div className="min-w-full px-2" key={index}>
              <Slider
                brandsList={list}
                borderWidth={borderWidth}
                borderColor={borderColor}
                backgroundColor={backgroundColor}
                iconWidth={iconWidth}
                isPlay={isPlay}
                pauseOnHoverActive={pauseOnHoverActive}
                durationMs={durationMs}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-4">
        {brandLists.map((_, index) => (
            <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`px-4 py-1 text-sm rounded-full transition-colors duration-200 ${
                selectedIndex === index
                ? "bg-purple-600 text-white font-semibold shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            >
            {categoryLabels[index]}
            </button>
        ))}
        </div>
    </div>
  );
}
