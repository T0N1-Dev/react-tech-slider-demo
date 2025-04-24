export const usePercentage = (step: number, rangeMin: number, rangeMax: number) => {

    const percentage = ((step - rangeMin) / (rangeMax - rangeMin)) * 100;

    return { percentage };
}