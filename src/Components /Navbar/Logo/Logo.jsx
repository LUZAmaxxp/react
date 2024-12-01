import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="h-14 w-14"
    >
      {/* Outer Circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="#0f172a"
        stroke="#8b5cf6"
        strokeWidth="5"
      />

      {/* Inner Triangle */}
      <polygon points="50,20 80,75 20,75" fill="#f1f5f9" />
    </svg>
  );
}

export default Logo;
