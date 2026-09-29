import { useState, useEffect } from "react";

export function useCustom(name, array) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(name);
    return stored ? JSON.parse(stored) : array;
  });

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  return [value, setValue];
}
