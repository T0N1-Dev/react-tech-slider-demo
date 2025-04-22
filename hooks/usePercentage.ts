import { useState } from "react";

export const usePercentage = (speed: number, rangeMin: number, rangeMax: number) => {

    const speedPercentage = ((speed - rangeMin) / (rangeMax - rangeMin)) * 100;

    return { speedPercentage };
}