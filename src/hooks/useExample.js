import { useState } from "react";

export const useExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return { count, increment };
};
