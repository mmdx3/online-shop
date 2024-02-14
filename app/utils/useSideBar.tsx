"use client";
import { useState } from "react";

const useSideBar = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleopen = () => {
    setIsopen(!isOpen);
  };
  return { isOpen, setIsopen, handleopen };
};

export default useSideBar;
