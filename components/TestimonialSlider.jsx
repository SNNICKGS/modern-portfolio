import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "I recently had the pleasure of working with Dionis Markov, and I am thoroughly impressed with the experience. From the very beginning, Dionis demonstrated professionalism, attention to detail, and a genuine commitment to understanding my needs. The quality of service provided was exceptional, and Dionis's expertise and dedication truly stood out. I am delighted with the results and would highly recommend Dionis Markov to anyone looking for top-notch service. Thank you, Dionis, for exceeding my expectations",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "I had a wonderful experience working with Dionis Markov. From our first interaction, Dionis's professionalism and attention to detail were evident. He took the time to understand my needs and provided exceptional service throughout the entire process. The results exceeded my expectations, and I am extremely satisfied. I highly recommend Dionis Markov to anyone seeking outstanding service and expertise. Thank you, Dionis, for your dedication and hard work!",
  },
  {
    image: "/t-avt-3.png",
    name: "Alex Johnson",
    position: "Customer",
    message:
      "Dionis Markov provided an outstanding service experience. His professionalism, dedication, and attention to detail were apparent from the very start. He understood my requirements perfectly and delivered results that went above and beyond my expectations. The quality and commitment Dionis brings to his work are truly commendable. I would highly recommend his services to anyone in need of excellence and expertise. Thank you, Dionis, for your remarkable work!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
