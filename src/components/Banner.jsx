import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
// import aileronFont from "@/app/utils/localFont";

const Banner = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.to(container.current.children, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
      stagger: 0.1,
    });
  });

  return (
    <section className="px-0 md:px-10 mt-16">
      <div className="bg-[url('https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-[659px] w-full bg-cover bg-center flex justify-center items-center bg-[#00000033] bg-blend-overlay">
        <div
          ref={container}
          className="max-w-4xl text-white px-7 xl:px-0">
          <h2
            className={`text-3xl md:text-5xl  text-center md:text-left pr-15 pl-5 mb-6 opacity-0 translate-y-[100px] `}>
            {" "}
            Your local source of high quality images and videos directly from
            their creators
          </h2>
          <div className="relative opacity-0 translate-y-[100px] ">
            <input
              type="text"
              placeholder="Search photos and videos"
              className="text-black w-full h-14 bg-white rounded-3xl border-none text-lg md:text-2xl pl-8 placeholder:text-black focus:outline-none"
            />
            <BiSearchAlt2 className="absolute top-5 right-6 text-black text-2xl" />
          </div>
          <p className="  pl-14 mb-0 mt-6 opacity-0 translate-y-[100px]">
            <b>Recommended: </b>
            <span className="opacity-70">
              {" "}
              Summer, Food, Covid-19, Real State, Love
            </span>
          </p>
          <p className="opacity-0 translate-y-[-200px] text-right mt-40 hidden md:block">
            Photo of the day <span className="opacity-70">by</span>{" "}
            <span className="underline">John Doe</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;