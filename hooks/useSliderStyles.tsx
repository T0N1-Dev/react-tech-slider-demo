import { useEffect, useState } from "react";

export const useSliderStyles = (selectedIndex: number) => {
    const [borderWidth, setBorderWidth] = useState(1);
    const [borderColor, setBorderColor] = useState("#7c05d8");
    const [backgroundColor, setBackgroundColor] = useState("#f1f5f9");

    useEffect(() => {
      switch (selectedIndex) {
        case 0:
          setBorderWidth(1);
          setBorderColor("#7c05d8");
          setBackgroundColor("#f1f5f9");
          break;
        case 1:
          setBorderWidth(2);
          setBorderColor("#e1ff00");
          setBackgroundColor("#d52b1e");
          break;
        default:
          setBorderWidth(1);
          setBorderColor("#000000");
          setBackgroundColor("#ffffff");
      }
      }, [selectedIndex]);

      return { borderWidth, borderColor, backgroundColor, setBorderWidth, setBorderColor, setBackgroundColor };
}