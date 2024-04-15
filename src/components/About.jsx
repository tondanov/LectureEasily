import React from "react";
import { lecturer, test1 } from "../assets";
import { styles } from "../styles";
import Title from "./Title";

const About = () => {
  return (
    <div id="about">
      <Title subtitle="Introduction" title="About us" />
      <div
        className=" mt-[100px] mx-auto flex-col items-center justify-between w-[90%] px-[10%] lg:flex-row flex"
        id="about"
      >
        <div className="lg:basis-[40%] lg:m-5 order-2">
          <img src={test1} alt="test" className=" w-full rounded-xl" />
        </div>
        <div className="lg:basis-[56%] mb-8">
          <h3 className={`${styles.sectionHeadText} text-[#212EA0]`}>
            About us
          </h3>
          <p className="mb-4">
            Welcome to LectureEasily, your partner in teacher professional
            development. At LectureEasily, we're committed to empowering
            educators with the knowledge and skills they need to create engaging
            and impactful learning experiences.
          </p>
          <p className="mb-4">
            Through our innovative programs and personalized coaching, we equip
            teachers with effective teaching strategies, classroom management
            techniques, and assessment practices. Our mission is to inspire
            teaching excellence and foster student success.
          </p>
          <p>
            Join us on a journey of professional growth and collaboration as we
            work together to transform education and empower the next generation
            of learners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
