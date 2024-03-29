/* eslint-disable react/prop-types */
import { useState } from "react";

const VideoGallery = ({ video }) => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <div
      key={video.id}
      className="w-full   overflow-hidden"
      onMouseEnter={() => setHoveredVideo(video)}
      onMouseLeave={() => setHoveredVideo(null)}>
      {hoveredVideo && hoveredVideo.id === video.id ? (
        <video
          className="h-full w-full hover:scale-125"
          autoPlay
          loop
          muted
          
          src={video.video_files[0].link}
        />
      ) : (
        <img
        
          alt="gallery_img"
          className="hover:scale-125 duration-700  w-full"
          src={video.image}
         
        />
      )}
    </div>
  );
};

export default VideoGallery;
