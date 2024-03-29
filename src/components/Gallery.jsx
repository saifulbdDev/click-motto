import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { categories } from "@/data/categoryList";
import { useGetDataListQuery } from "@/features/photos/api";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./ui/Loader";

const Gallery = () => {
  const [category, setCategory] = useState("All");

  const { data, isFetching } = useGetDataListQuery(category);

  console.log(data?.photos, "data");

  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".gallery-nav", {
        scrollTrigger: {
          trigger: ".gallery-nav",
          start: "top 100%"
        },
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power3.inOut"
      });
      gsap.to(".gallery-img", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".gallery-img",
          start: "top 100%"
        }
      });
    },
    {
      scope: container
    }
  );
  return (
    <div className="py-0 px-8" ref={container}>
      <nav className="flex justify-between items-center mt-5 gallery-nav opacity-0 translate-y-[50px]">
        <ul className="flex gap-3 items-center m-0 p-0 text-xl font-medium mr-5 cursor-pointer text-[#707070]">
          {categories.map((item) => (
            <li
              key={item?.id}
              className={
                item?.name === category ? `text-black` : `text-gray-600`
              }
              onClick={(e) => setCategory(item?.name)}>
              {item?.name}
            </li>
          ))}
        </ul>
        <div className="relative group">
          <p className="m-0 text-black text-xl font-medium cursor-pointer hidden md:flex items-center gap-2  ">
            Recommended <AiOutlineCaretDown className="text-xs " />
          </p>
          <div>
            <ul className="absolute group:hover-block top-6 right-0 bg-white w-52 pt-4 pb-2 hidden  font-normal text-lg text-end  ">
              <li className="hover:bg-[#dfdfdf] hover:text-black cursor-pointer">
                Most Recent
              </li>
              <li className="hover:bg-[#dfdfdf] hover:text-black cursor-pointer">
                Most Viewed
              </li>
              <li className="hover:bg-[#dfdfdf] hover:text-black cursor-pointer">
                Most Downloaded
              </li>
              <li className="hover:bg-[#dfdfdf] hover:text-black cursor-pointer">
                Most Appreciated
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="my-5 gallery-img opacity-0 translate-y-[100px]">
        {isFetching ? (
          <div className="mx-auto h-screen flex items-center flex-col justify-center fixed inset-0">
            <Loader />
          </div>
        ) : data?.photos?.length ? (
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter="15px">
              {data?.photos?.map((image) => (
                <div className="w-full overflow-hidden" key={image.id}>
                  <img
                    src={image?.src?.large}
                    srcSet={`${image?.src?.tiny} 280w,
              ${image?.src?.small} 130w,
              ${image?.src?.medium} 350w,
              ${image?.src?.large} 940w,
              ${image?.src?.large2x} 1880w`}
                    sizes="(max-width: 600px) 280px,   /* for small screens */
           (max-width: 960px) 130px,   /* for medium screens */
           (max-width: 1280px) 350px,  /* for large screens */
           940px" /* default size for larger screens */
                    style={{ width: "100%" }}
                    alt="gallery_img"
                    className="hover:scale-125 duration-700"
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Gallery;
