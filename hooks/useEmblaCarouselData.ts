import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export const useEmblaCarouselData = () => {
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

    return { emblaRef, selectedIndex, scrollTo }
}