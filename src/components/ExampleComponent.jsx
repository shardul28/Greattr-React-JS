import React from "react";
import { useExample } from "../hooks/useExample";

export function ExampleComponent() {
  const value = useExample();

  return <div>{value}</div>;
}
