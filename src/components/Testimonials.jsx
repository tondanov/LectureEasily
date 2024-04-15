import React from "react";
import { testimonial1, testimonial2 } from "../assets";
import { testimonials } from "../constants";
import "boxicons";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "./Title";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <div id="testimonial">
      <Title subtitle="What our customers say" title="Testimonials" />
      <div className=" w-full h-full flex items-center justify-center">
        <div className="max-w-[900px] relative w-full py-[50px] px-0">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <div className="flex items-center justify-center flex-col gap-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-[170px] w-[170px] object-cover rounded-[50%]"
                  />
                  <p className="py-0 px-[160px] text-center text-[14px] font-normal text-[#333]">
                    {testimonial.description}
                  </p>
                  <i className="bx bxs-quote-alt-left text-[#4070f4] text-[30px]"></i>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[14px] font-medium">
                      {testimonial.name}
                    </span>
                    <span className="text-[12px] font-normal">
                      {testimonial.school}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
