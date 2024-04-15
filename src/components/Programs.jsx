import React from "react";
import Title from "./Title";
import { programs } from "../constants";

const Programs = () => {
  return (
    <div id="program">
      <Title subtitle="What we offer" title="Our Programs" />
      <div className="flex gap-2 flex-wrap">
        {programs.map((program) => (
          <div
            key={program.name}
            className="collapse collapse-plus bg-base-200 px-[10%]"
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium ">
              {program.name}
            </div>
            <div className="collapse-content ">{program.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
