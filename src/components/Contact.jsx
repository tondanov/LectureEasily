import React from "react";
import Title from "./Title";
import { message } from "../assets";

const Contact = () => {
  return (
    <>
      <Title subtitle="Get in Touch" title="Contact us" />
      <div
        className=" my-20 mx-auto max-w-[90%] md:flex md:justify-between px-[10%] block"
        id="contact"
      >
        <div className=" basis-[48%] text-[#676767]">
          <h3 className="text-[#000F38] font-medium text-[25px] flex items-center mb-5">
            Send us a message
            <img src={message} alt="mess" className=" w-9 ml-[10px]" />
          </h3>
          <p className="max-w-[450px] leading-5">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, adn suggestions are
            important to us as we strive to provide exceptional service to our
            customers
          </p>
          <ul className="flex flex-col">
            <li className=" mt-5 flex items-center mx-0 my-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className=" w-6 h-6 mr-[10px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
              Conact@LectureEasily.dev
            </li>
            <li className=" mt-4 flex items-center mx-0 my-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className=" w-6 h-6 mr-[10px]"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              +420 726 546 789
            </li>
            <li className=" mt-4 flex items-center mx-0 my-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className=" w-6 h-6 mr-[10px]"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              Náměstí Svobody 456
              <br /> Praha 5, 123 45
            </li>
          </ul>
        </div>
        <div className="basis-[48%] text-[#676767] p-5 md:p-2 ">
          <form>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className=" block w-full bg-[#ebecfe] p-4 mb-[15px] mt-[5px] resize-none"
            />
            <label>Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              className=" block w-full bg-[#ebecfe] p-4 mb-[15px] mt-[5px] resize-none"
            />
            <label>Write your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className=" block w-full bg-[#ebecfe] p-4 mb-[15px] mt-[5px] resize-none"
            ></textarea>
            <button className="btn btn-neutral ml-2">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
