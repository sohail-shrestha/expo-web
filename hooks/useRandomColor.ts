import { generateRandomColor } from "@/utils/Colors";
import { useEffect, useState } from "react";

const useRandomColor = () => {
    const [backgroundColor, setColor] = useState("white");

  useEffect(() => {
    setRandomBackgroundColor();
  }, []);

  const setRandomBackgroundColor = () => {
    setColor(generateRandomColor());
  };

  const changeBackgroundColor = () => {
    setRandomBackgroundColor();
  };

  return {changeBackgroundColor, backgroundColor}
}

export { useRandomColor };
