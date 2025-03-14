"use client";

import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SocialIcons isScrolled={isScrolled} />
      {children}
    </>
  );
}
