import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDecouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDecouncedValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
export default useDebounce;
