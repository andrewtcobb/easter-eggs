import { useState, useEffect } from "react";

function useEasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const [pressedKeys, setPressedKeys] = useState(new Set());

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      const newPressedKeys = new Set(pressedKeys);
      newPressedKeys.add(event.key.toLowerCase());
      console.log(newPressedKeys);

      if (
        newPressedKeys.has("e") &&
        newPressedKeys.has("shift") &&
        newPressedKeys.has("control")
      ) {
        setIsVisible(!isVisible);
        newPressedKeys.clear(); // Clear the set after toggling visibility
      }

      setPressedKeys(newPressedKeys);
    };

    const handleKeyUp = (event: { key: string }) => {
      const newPressedKeys = new Set(pressedKeys);
      newPressedKeys.delete(event.key.toLowerCase());
      setPressedKeys(newPressedKeys);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [pressedKeys, isVisible]);

  return isVisible;
}

export { useEasterEgg };
