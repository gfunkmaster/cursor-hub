import React from "react";
import Script from "next/script";

interface AdUnitProps {
  type: "sidebar" | "in-content" | "banner";
  className?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ type, className = "" }) => {
  // You can configure different ad sizes and placements based on type
  const adConfig = {
    sidebar: {
      className: "w-[300px] h-[600px] sticky top-4",
      id: "sidebar-ad",
    },
    "in-content": {
      className: "w-full h-[250px] my-8",
      id: "in-content-ad",
    },
    banner: {
      className: "w-full h-[90px] sticky top-0",
      id: "banner-ad",
    },
  }[type];

  return (
    <div className={`ad-container ${adConfig.className} ${className}`}>
      <div
        id={adConfig.id}
        className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
      >
        {/* Replace this placeholder with your actual ad code */}
        <p className="text-gray-400 text-sm">Advertisement</p>
      </div>
    </div>
  );
};
