"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button onClick={scrollToTop} aria-label="Ir arriba" className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-accent-500 hover:bg-accent-600 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 animate-[fadeIn_0.3s_ease-out]">
      <ArrowUp size={20} />
    </button>
  );
}