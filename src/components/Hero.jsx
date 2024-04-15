import React from "react";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto flex items-center justify-center text-white"
      id="home"
    >
      <div className=" text-center max-w-[800px]">
        <h1 className={`${styles.heroHeadText} text-white`}>
          We are ready to help you to be a better lecturer
        </h1>
      </div>
    </section>
  );
};

export default Hero;
