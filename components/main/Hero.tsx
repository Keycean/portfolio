import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full " id="about-me" >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[-2] object-cover  "
      >
        <source src="/redhole1.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;