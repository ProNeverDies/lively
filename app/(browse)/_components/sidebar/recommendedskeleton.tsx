import React from "react";
import { cn } from "@/lib/utils";

export const RecommendedSkeleton = () => {
  return (
    <div className="space-y-2 px-2">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="h-6 bg-gray-300 rounded animate-pulse"></div>
      ))}
    </div>
  );
};