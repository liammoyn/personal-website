import { useState, useRef } from "react";

interface CitationProps {
  number: number;
  citations: Array<{ name: string; href: string }>;
}

export default function Citation({ number, citations }: CitationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const citation = citations[number - 1];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  return (
    <span className="relative inline">
      <a
        href={citation.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-blue-600 hover:text-blue-800 text-xs cursor-pointer transition-colors no-underline"
      >
        <sup>[{number}]</sup>
      </a>
      {isVisible && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border-gray-300 border text-sm px-3 py-2 rounded-lg shadow-lg z-50 whitespace-nowrap"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={citation.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 transition-colors"
          >
            {citation.name}
          </a>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900" />
        </div>
      )}
    </span>
  );
}
