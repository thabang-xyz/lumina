"use client";

import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");

    // Set the initial state
    setHasMouse(mediaQuery.matches);

    // Update state if the media query changes
    const handler = (event) => setHasMouse(event.matches);
    mediaQuery.addEventListener("change", handler);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return hasMouse;
};

export default useDeviceType;
