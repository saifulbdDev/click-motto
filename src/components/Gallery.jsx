import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { categories } from "@/data/categoryList";
import { useGetDataListQuery } from "@/features/photos/api";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./ui/Loader";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import Dropdown from "./ui/Dropdown";
const Gallery = () => {
  const [category, setCategory] = useState("All");

  const { data, isFetching } = useGetDataListQuery(category);

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
      <nav className="flex justify-between relative items-center mt-5 z-[9000] gallery-nav opacity-0 translate-y-[50px]">
        <ul className="flex gap-3 items-center m-0 p-0 text-xl font-medium mr-5 cursor-pointer text-[#707070]">
          {categories.map((item) => (
            <li
              key={item?.id}
              className={
                item?.name === category ? `text-black` : `text-gray-600`
              }
              onClick={() => setCategory(item?.name)}>
              {item?.name}
            </li>
          ))}
        </ul>

        <div className="relative group z-[9999]">
          <Dropdown>
            <Dropdown.Button>
              <p className="m-0 text-black text-xl font-medium cursor-pointer hidden md:flex items-center gap-2  ">
                Recommended <AiOutlineCaretDown className="text-xs " />
              </p>
            </Dropdown.Button>
            <Dropdown.Content dropdownClass="bg-white   lg:left-auto right-0 pr-3">
              <Dropdown.List className="text-right">
                <Dropdown.Item className="hover:bg-gray-300 text-base py-1 px-1  hover:text-black cursor-pointer">
                  Most Recent
                </Dropdown.Item>
                <Dropdown.Item className="hover:bg-gray-300 text-base py-1 px-1 hover:text-black cursor-pointer">
                  Most Viewed
                </Dropdown.Item>
                <Dropdown.Item className="hover:bg-gray-300 text-base py-1 px-1 hover:text-black cursor-pointer">
                  Most Downloaded
                </Dropdown.Item>
                <Dropdown.Item className="hover:bg-gray-300 text-base py-1 px-1 hover:text-black cursor-pointer">
                  Most Appreciated
                </Dropdown.Item>
              </Dropdown.List>
            </Dropdown.Content>
          </Dropdown>
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
                <ImageGallery key={image.id} image={image} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : data?.videos?.length ? (
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter="15px">
              {data?.videos?.map((video) => (
                <VideoGallery key={video.id} video={video} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
