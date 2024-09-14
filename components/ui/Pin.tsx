"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%, -50%) scale(1.03)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%, -50%) scale(1)");
  };

  return (
    <div
      className={cn("relative", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          // remove  bg-black
          className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl shadow-[0_4px_8px_rgb(255_255_255/0.2)] border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
    </div>
  );
};
