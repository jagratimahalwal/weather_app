import React from "react";

const Arrow: React.FC<{}> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-10"
      style={{
        transform: "perspective(500px) rotateY(15deg)",
        transformStyle: "preserve-3d",
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default Arrow;
