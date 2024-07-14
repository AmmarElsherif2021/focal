//css module
import "./Hero.css";

//pics
import pic1 from "../../assets/slide-pic1.jpeg";
import pic2 from "../../assets/slide-pic2.jpeg";
import pic3 from "../../assets/slide-pic3.jpeg";
import pic4 from "../../assets/slide-pic4.jpeg";
//react
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
// required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide/Slide";
// Swiper styles
import "swiper/css";

export default function Hero() {
  const [slides, setSlides] = useState([
    {
      index: 0,
      title: "THE HERITAGE COLLECTION",
      subTitle: "PREMIUM COLLECTION",
      imgSrc: pic1,
      btnTxt1: "SHOP",
      btnTxt2: "LEARN MORE",
      textAlign: "left",
      isActive: "true",
    },
    {
      index: 1,
      title: "SAGE COLLECTION",
      subTitle: "MEET THE",
      imgSrc: pic2,
      btnTxt1: "LEARN MORE",
      btnTxt2: "",
      textAlign: "center",
      isActive: "false",
    },
    {
      index: 2,
      title: "NATIVE UNION TOM X DIXON",
      subTitle: "COLLABORATION",
      imgSrc: pic3,
      btnTxt1: "LEARN MORE",
      btnTxt2: "",
      textAlign: "left",
      isActive: "false",
    },
    {
      index: 3,
      title: "TIHE MAISON KITSUNE' COLLLAB",
      subTitle: "NEW IN",
      imgSrc: pic4,
      btnTxt1: "LEARN MORE",
      btnTxt2: "",
      textAlign: "left",
      isActive: "false",
    },
  ]);
  const activeSlideIndexRef = useRef(0); // Use a ref for active index

  const handleSlideChange = (swiper) => {
    activeSlideIndexRef.current = swiper.activeIndex; // Update ref on slide change
  };

  useEffect(() => {
    setSlides((prevSlides) =>
      prevSlides.map((slide) => ({
        ...slide,
        isActive: slide.index === activeSlideIndexRef.current,
      }))
    );
  }, [activeSlideIndexRef.current]); // Update slides based on ref

  return (
    <div className="hero">
      <h1>{activeSlideIndexRef.current}</h1> {/* Display active index */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          handleSlideChange(swiper);
          setSlides((prevSlides) =>
            prevSlides.map((slide) => ({
              ...slide,
              isActive: slide.index === activeSlideIndexRef.current,
            }))
          );
        }}
      >
        {slides.map((x) => (
          <SwiperSlide key={x.index}>
            <Slide
              title={x.title}
              subTitle={x.subTitle}
              imgSrc={x.imgSrc}
              btnTxt1={x.btnTxt1}
              btnTxt2={x.btnTxt2}
              textAlign={x.textAlign}
              isActive={x.index === activeSlideIndexRef.current}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
