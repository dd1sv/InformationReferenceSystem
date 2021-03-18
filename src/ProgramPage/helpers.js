import { useCallback, useState } from "react";

export const useCenteredTree = (defaultTranslate = { x: 1250, y: 150 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [translate, containerRef];
};
