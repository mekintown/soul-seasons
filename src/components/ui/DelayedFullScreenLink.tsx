"use client";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";

interface DelayedFullScreenLinkProps {
  href: string;
  delay: number; // Delay in milliseconds
}

const DelayedFullScreenLink = ({ href, delay }: DelayedFullScreenLinkProps) => {
  const [clickable, setClickable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setClickable(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Link href={clickable ? href : "#"}>
      <div
        className={`fixed inset-0 bg-transparent ${
          clickable ? "cursor-pointer" : "cursor-default"
        }`}
      />
    </Link>
  );
};

export default DelayedFullScreenLink;
