import React, { useRef, useState } from "react";
// Import Swiper React components
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import {
//   Autoplay,
//   Keyboard,
//   Mousewheel,
//   Navigation,
//   Pagination,
//   Scrollbar,
// } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import "./Glimpse.css";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// import glimpse1 from "./GlimpsesPhotos/glimpse1.jpg";
// import glimpse10 from "./GlimpsesPhotos/glimpse10.jpg";
// import glimpse2 from "./GlimpsesPhotos/glimpse2.jpg";
// import glimpse3 from "./GlimpsesPhotos/glimpse3.jpg";
// import glimpse4 from "./GlimpsesPhotos/glimpse4.jpg";
// import glimpse5 from "./GlimpsesPhotos/glimpse5.jpg";
// import glimpse6 from "./GlimpsesPhotos/glimpse6.jpg";
// import glimpse7 from "./GlimpsesPhotos/glimpse7.jpg";
// import glimpse8 from "./GlimpsesPhotos/glimpse8.jpg";
// import glimpse9 from "./GlimpsesPhotos/glimpse9.jpg";

const Glimpse = (props) => {
  return (
    <>
      <section className=" flex flex-col justify-center pb-28 ">
        <div className="text-white font-bold text-[50px] md:text-[72px] text-center  mb-[50px] ">
          <span className="text-RoyalPurple">REVA HACK 2022</span> Glimpse
        </div>

        <div className="splide-container">
          <Splide
            hasTrack={false}
            options={{
              drag: "free",
              perPage: 3.5,
              breakpoints: {
                600: {
                  perPage: 1,
                },
                1200: {
                  perPage: 3,
                },
                1000: {
                  perPage: 2,
                },
              },
              perMove: 1,
              width: "100%",
              type: "loop",
              gap: "2rem",
              autoplay: true,
              interval: 3000,
              arrows: false,
              classes: {
                // Add classes for arrows.
                // Add classes for pagination.
                pagination: "splide__pagination glimpses__pagination", // container
                page: "splide__pagination__page glimpses__pagination__page", // each button
              },
            }}
          >
            <SplideTrack>
              <SplideSlide className="glimpse-slide">
                <img src={""}></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img src="./GlimpsesPhotos/glimpse2.JPG"></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img src="./GlimpsesPhotos/glimpse3.JPG"></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img src="./GlimpsesPhotos/glimpse4.JPG"></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img src="./GlimpsesPhotos/glimpse5.JPG"></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img src="./GlimpsesPhotos/glimpse6.JPG"></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img src="./GlimpsesPhotos/glimpse7.JPG"></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img src="./GlimpsesPhotos/glimpse8.JPG"></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img src="./GlimpsesPhotos/glimpse9.JPG"></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img src="./GlimpsesPhotos/glimpse10.JPG"></img>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </section>
    </>
  );
};

export default Glimpse;
