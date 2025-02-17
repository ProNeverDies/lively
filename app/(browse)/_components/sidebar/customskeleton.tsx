import React from "react";
import { cn } from "@/lib/utils";

export const CustomSkeleton = () => {
  return (
    <div className="flex items-center space-x-4 animate-pulse">
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};