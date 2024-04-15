import React from "react";

const PlanCard = ({
  name,
  description,
  price,
  features,
  color,
  btnText = "Start Trial",
}) => {
  return (
    <div
      className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8"
      style={{ backgroundColor: color }}
    >
      <h2 className="mb-5 text-xl font-medium">{name}</h2>
      <div className="mb-5 flex items-end text-6xl font-black">
        {price ? (
          <>
            <div>${price}</div>
          </>
        ) : (
          "Free"
        )}
      </div>
      <p className="mb-5">{description}</p>
      <ul className="mb-10 flex flex-col gap-y-2">
        {features.map((feature) => (
          <li className="flex items-center" key={feature}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 mr-3"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white">
        {btnText}
      </button>
    </div>
  );
};

export default PlanCard;
