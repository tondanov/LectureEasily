import React from "react";
import PlanCard from "./PlanCard";
import Title from "./Title";

const Pricing = () => {
  return (
    <div id="pricing">
      <Title title="Pricing" subtitle="Our prices" />
      <div className="flex flex-col items-center p-4" id="pricing">
        <div className="flex flex-col gap-8 p-10 xl:flex-row">
          <PlanCard
            color="#78E3FC"
            name="Basic"
            description="Get started with the basic plan"
            features={["1 Lecturer", "1 Projects", "1 Video/h"]}
            btnText="Start Free Plan"
          />
          <PlanCard
            color="#7AD6FD"
            name="Pro"
            description="Get more advanced"
            price="7"
            features={["2 Lecturers", "3 Projects", "3 Video/h"]}
            btnText="Start Pro Plan"
          />
          <PlanCard
            color="#7AE4FC"
            name="Ultra"
            description="Ultra plan for greatness"
            price="24"
            features={["All Lectures", "5 Projects", "Unlimited watching"]}
            btnText="Start Ultra Plan"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
