import React from "react";
import { AdUnit } from "../ads/AdUnit";

interface ContentWithAdsProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showBanner?: boolean;
}

export const ContentWithAds: React.FC<ContentWithAdsProps> = ({
  children,
  showSidebar = true,
  showBanner = true,
}) => {
  return (
    <div className="relative w-full">
      {showBanner && (
        <div className="w-full mb-4">
          <AdUnit type="banner" />
        </div>
      )}

      <div className="flex gap-8">
        <div className="flex-1">
          {React.Children.map(children, (child, index) => {
            // Insert in-content ads every 3 sections
            const content = (
              <>
                {child}
                {index > 0 && (index + 1) % 3 === 0 && (
                  <AdUnit type="in-content" />
                )}
              </>
            );
            return content;
          })}
        </div>

        {showSidebar && (
          <div className="hidden lg:block">
            <AdUnit type="sidebar" />
          </div>
        )}
      </div>
    </div>
  );
};
