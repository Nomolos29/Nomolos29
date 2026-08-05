"use client"


import Image from "next/image";
import React from "react";
// import { gsap } from "gsap";

const topImages = [
  { src: "/IntegrationsMarqueeIcons/marquee1.svg", alt: "Slack" },
  { src: "/IntegrationsMarqueeIcons/marquee2.svg", alt: "Google Drive" },
  { src: "/IntegrationsMarqueeIcons/marquee3.svg", alt: "Jira" },
  { src: "/IntegrationsMarqueeIcons/marquee4.svg", alt: "Slack" },
  { src: "/IntegrationsMarqueeIcons/marquee5.svg", alt: "Google Drive" },
  { src: "/IntegrationsMarqueeIcons/marquee1.svg", alt: "Jira" },
  { src: "/IntegrationsMarqueeIcons/marquee2.svg", alt: "Slack" },
  { src: "/IntegrationsMarqueeIcons/marquee3.svg", alt: "Google Drive" },
  { src: "/IntegrationsMarqueeIcons/marquee4.svg", alt: "Jira" },
  { src: "/IntegrationsMarqueeIcons/marquee5.svg", alt: "Slack" },
  { src: "/IntegrationsMarqueeIcons/marquee1.svg", alt: "Google Drive" },
  { src: "/IntegrationsMarqueeIcons/marquee2.svg", alt: "Jira" }
];

const Tools = () => {
//   const marqueeLeftRef = useRef(null);
//   const marqueeRightRef = useRef(null);

//   useEffect(() => {
//     const marqueeLeft = marqueeLeftRef.current;
//     const marqueeRight = marqueeRightRef.current;

//     gsap.to(marqueeLeft, {
//       xPercent: -100,
//       repeat: -1,
//       duration: 20,
//       ease: "linear",
//       modifiers: {
//         xPercent: gsap.utils.wrap(-100, 0),
//       },
//     });

//     gsap.to(marqueeRight, {
//       xPercent: 100,
//       repeat: -1,
//       duration: 20,
//       ease: "linear",
//       modifiers: {
//         xPercent: gsap.utils.wrap(0, 100),
//       },
//     });
//   }, []);

  return (
    <div className="p-4 border border-[#D5D5D5] shadow-[2px_2px_32px_5px_#00000026] bg-[#FCFCFC] rounded-lg flex flex-col overflow-hidden w-full relative">
      <div className="flex flex-col items-center space-y-6">
        {/* Top Row - Marquee Left */}
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div
            // ref={marqueeLeftRef}
            className="flex justify-center items-center space-x-8 animate-marquee-left"
          >
            {topImages.concat(topImages).map((image, index) => (
              <Image
                width={200}
                height={100}
                key={index}
                src={image.src}
                alt={image.alt}
                className="h-16"
              />
            ))}
          </div>
        </div>

        {/* Bottom Row - Marquee Right */}
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div
            // ref={marqueeRightRef}
            className="flex justify-center items-center space-x-8 animate-marquee-right"
          >
            {topImages
              .concat(topImages)
              .reverse()
              .map((image, index) => (
                <Image
                  width={200}
                  height={100}
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="h-16"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;