import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimFeTurbulence = animated('feTurbulence');
const AnimFeDisplacementMap = animated('feDisplacementMap');
function AvatarIcon() {
  const [open, toggle] = useState(false);
  // This is used to control the start and end state of the water animation
  const [{ freq, factor, scale, opacity }] = useSpring(() => ({
    reverse: open,
    from: { factor: 100, opacity: 0, scale: 0.9, freq: '0.1, 0.1' },
    to: { factor: 350, opacity: 1, scale: 1.1, freq: '0.0, 0.0' },
    config: { duration: 5000 },
  }));

  return (
    <div onClick={() => toggle(!open)}>
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1080 1080"
        style={{ scale, opacity }}
      >
        <defs>
          <filter
            id="filter"
            width="140%"
            height="140%"
            x="-20%"
            y="-20%"
            colorInterpolationFilters="linearRGB"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
          >
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="20 20"
              result="morphology"
            ></feMorphology>
            <feFlood
              floodColor="#fff"
              floodOpacity="1"
              result="flood"
            ></feFlood>
            <feComposite
              in="flood"
              in2="morphology"
              operator="in"
              result="composite"
            ></feComposite>
            <feMerge result="merge">
              <feMergeNode in="composite"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          {/* water effect filter */}
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="2"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <g fill="#fff">
            <g
              fillRule="evenodd"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <animated.path
                stroke="#000"
                strokeWidth="24"
                d="M532 379c132.548 0 240 107.452 240 240s-47.452 280-180 280c-99.44 0-218.524-82.99-271.81-180.415A80.647 80.647 0 01312 719c-44.183 0-80-35.817-80-80 0-39.865 29.159-72.92 67.312-79C325.6 455.98 419.81 379 532 379zM295.859 624.545l8.282 30.91"
              ></animated.path>
            </g>
          </g>
          <g>
            <g
              fill="none"
              fillRule="evenodd"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <animated.path
                stroke="#000"
                strokeWidth="16"
                d="M649 600c20 6.667 30 20 30 40s-10 33.333-30 40"
              ></animated.path>
            </g>
          </g>
          <g>
            <g
              fill="none"
              fillRule="evenodd"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <animated.path
                stroke="#000"
                strokeWidth="16"
                d="M549 759c27.33 6.667 50.664 10 70 10s36.003-3.333 50-10"
              ></animated.path>
            </g>
          </g>
          <g>
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <animated.path
                fill="#000"
                d="M570 516c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm138 0c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z"
              ></animated.path>
            </g>
          </g>
          <g>
            <g
              fill="none"
              fillRule="evenodd"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <g stroke="#000" strokeWidth="16" transform="translate(525 492)">
                <animated.path d="M0 16C12.889 5.333 27.889 0 45 0s32.111 5.333 45 16M138 16c12.889-10.667 27.889-16 45-16s32.111 5.333 45 16"></animated.path>
              </g>
            </g>
          </g>
          <g>
            <g
              fill="none"
              fillRule="evenodd"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <g stroke="#000" transform="translate(289 500)">
                <animated.path
                  fill="#000"
                  strokeWidth="4"
                  d="M339.818 40.211c-1.744 2.697-2.956 7.683-3.636 14.959h-8.727C324.545 28.1 305.394 14.092 270 13.142c-29.576-1.9-47.273 9.973-53.09 35.617h-11.637L190 33.8V10.293c32.485-8.073 59.152-11.397 80-9.972 15.225 1.04 33.26 4.817 54.627 9.612l7.918 1.785c3.67.83 9.488 1.78 17.455 2.85l2.074-.283c6.91-.956 12.037-1.811 15.38-2.567l8.888-2.003c20.944-4.69 38.663-8.37 53.658-9.394 20.64-1.41 46.982 1.833 79.027 9.731l.973.241V33.8l-15.273 14.959h-11.636C477.273 23.115 459.576 11.243 430 13.142c-35.04.94-54.16 14.68-57.362 41.22l-.093.808h-8.727l-.088-.898c-.694-6.79-1.877-11.476-3.548-14.061-1.7-2.628-4.965-4.724-9.797-6.289L350 33.8c-5.044 1.577-8.438 3.714-10.182 6.411z"
                ></animated.path>
                <animated.path
                  strokeWidth="6"
                  d="M216.91 48.438C216.91 85.48 234.605 104 270 104c35.394 0 54.545-16.384 57.455-49.15M483.09 48.438C483.09 85.48 465.395 104 430 104c-35.394 0-54.545-16.384-57.455-49.15"
                ></animated.path>
                <animated.path
                  fill="#000"
                  strokeWidth="4"
                  d="M199 9L4 41 0 50 199 30z"
                ></animated.path>
              </g>
            </g>
          </g>
          <g>
            <g
              fill="none"
              fillRule="evenodd"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <animated.path
                fill="#000"
                stroke="#000"
                strokeWidth="12"
                d="M623 264c78.81 34.151 113.674 80.124 118 115 2.959 23.855-2.708 49.189-17 76-58-6.667-103.667-3-137 11-66.18 27.796-134.18 26.13-204-5 8.198 33.978 16 61 12 98-2.667 24.667-10.667 62.333-24 113-24.328-54.806-39.661-86.473-46-95-6.339-8.527-19.006-14.527-38-18-15.365-57.078-28-84-18-128s46.913-92.708 89-106c4.715-1.489-1.952-10.822-20-28 50.267-14.962 86.375-23.588 108.326-25.878 7.729-.807 4.954-10.847-8.326-30.122 70.793-7.434 132.46.233 185 23z"
              ></animated.path>
            </g>
          </g>
        </g>
      </animated.svg>
    </div>
  );
}

export default AvatarIcon;
