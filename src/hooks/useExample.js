import { useState, useEffect } from "react";

export function useExample() {
  const [value, setValue] = useState("Hello from SDK!");

  useEffect(() => {
    console.log("useExample hook initialized");
  }, []);

  return value;
}
