import React from "react";

const Cloud: React.FC<{}> = () => {
  return (
    <svg width={300} height={200} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#e6e6e6", stopOpacity: 1 }}
          />
        </linearGradient>

        <filter id="cloudShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="cloudTexture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <path
        d="M50 80 Q75 50 100 80 T150 80 T200 80 T250 80 Q275 80 275 100 T250 120 L50 120 Q25 120 25 100 T50 80Z"
        fill="url(#cloudGradient)"
        filter="url(#cloudShadow) url(#cloudTexture)"
      />
    </svg>
  );
};

export default Cloud;
