import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const initCode = "## Hello";
  const [code, setCode] = useState(() => {
    return JSON.parse(localStorage.getItem("code")) || initCode;
  });

  useEffect(() => {
    localStorage.setItem("code", JSON.stringify(code));
  }, [code]);
  return [code, setCode];
};
