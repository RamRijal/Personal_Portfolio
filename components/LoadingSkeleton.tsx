"use client";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex items-center">
        <span className="bar h-5 w-[3px] bg-white/50 rounded animate-scale-up"></span>
        <span className="bar h-9 w-[3px] mx-2 bg-white/50 rounded animate-scale-up delay-[250ms]"></span>
        <span className="bar h-5 w-[3px] bg-white/50 rounded animate-scale-up delay-[500ms]"></span>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
