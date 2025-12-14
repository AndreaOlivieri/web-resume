import React from "react";

interface TagsProps {
  items: string[];
  className?: string; // Allow overriding the container styles if needed
  size?: "sm" | "xs"; // Optional: size prop for future flexibility, defaulting to xs as per current usage
}

export const Tags: React.FC<TagsProps> = ({
  items,
  className = "",
  size = "xs",
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  const textSize = size === "sm" ? "text-sm" : "text-xs";
  const padding = size === "sm" ? "px-2.5 py-1" : "px-2 py-0.5"; // Keeping the previous padding for the 'xs' equivalent

  return (
    <div className={`flex flex-wrap gap-1.5 mt-2 ${className}`}>
      {items.map((tech, index) => (
        <span
          key={index}
          className={`${textSize} bg-gray-50 text-gray-700 ${padding} rounded-full border border-gray-200 font-medium`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
