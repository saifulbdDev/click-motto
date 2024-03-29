/* eslint-disable react/prop-types */
const ImageGallery = ({ image }) => {
  return (
    <div className="w-full overflow-hidden">
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
  );
};

export default ImageGallery;
