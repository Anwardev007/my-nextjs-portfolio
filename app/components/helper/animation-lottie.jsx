"use client";

import dynamic from "next/dynamic";

// Dynamically load lottie-react ONLY in the browser to prevent "document is not defined"
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath, // Uses the string path "/lottie/study.json" we set earlier
    style: {
      width: "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;