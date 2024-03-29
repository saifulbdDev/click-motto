
import {categoryList} from "@/data/categoryList.js";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const SliderPage = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".title", {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power3.inOut",
      });
      gsap.to(".slider-items", {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: 0.1,
      });
      gsap.to(".slick-arrow", {
        duration: 1.5,
        opacity: 1,
        ease: "power3.inOut",
        delay: 0.2,
      });
    },
    { scope: container }
  );
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white -mt-[100px] p-4" ref={container}>
      <h2 className="title pl-4 text-2xl font-semibold text-black mb-3 opacity-0 translate-y-[100px]">
        Top Categories
      </h2>
      <Slider {...settings}>
        {categoryList.map(element => (
          <div
            className="py-0 px-4 opacity-0 translate-y-[100px] slider-items"
            key={element.id}
            style={{ backgroundImage: "url(" + element.url + ")" }}>
            <div className="overflow-hidden">
              <div
                className="h-28 bg-cover bg-center flex justify-center items-center bg-[#00000066] bg-blend-overlay hover:scale-110 duration-300 relative"
                style={{ backgroundImage: "url(" + element.url + ")" }}>
                <h2 className="m-0 text-white text-2xl font-medium p-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  {element.category}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPage;