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
      imgSrc: [
        "https://focal-theme-carbon.myshopify.com/cdn/shop/files/heritage-lp-3.jpg?v=1630492874&width=1400",
      ],
      btnTxt1: "SHOP",
      btnTxt2: "LEARN MORE",
      textAlign: "left",
      isActive: "true",
    },
    {
      index: 1,
      title: "SAGE COLLECTION",
      subTitle: "MEET THE",
      imgSrc: [
        "https://focal-theme-carbon.myshopify.com/cdn/shop/files/sage1-desktop.jpg?v=1630492840&width=700",
        "https://focal-theme-carbon.myshopify.com/cdn/shop/files/sage2-desktop.jpg?v=1630492847&width=700",
      ],
      btnTxt1: "LEARN MORE",
      btnTxt2: "",
      textAlign: "center",
      isActive: "false",
    },
    {
      index: 2,
      title: "NATIVE UNION TOM X DIXON",
      subTitle: "COLLABORATION",
      imgSrc: [
        "https://focal-theme-carbon.myshopify.com/cdn/shop/files/tom-dixon-lp-tile-1.jpg?v=1630492908&width=1400",
      ],
      btnTxt1: "LEARN MORE",
      btnTxt2: "",
      textAlign: "left",
      isActive: "false",
    },
    {
      index: 3,
      title: "TIHE MAISON KITSUNE' COLLLAB",
      subTitle: "NEW IN",
      imgSrc: [
        "https://focal-theme-carbon.myshopify.com/cdn/shop/files/mk-lp-tile-1.jpg?v=1630493139&width=1400",
      ],
      btnTxt1: "LEARN MORE",
      btnTxt2: "",
      textAlign: "left",
      isActive: "false",
    },
  ]);
  const activeSlideIndexRef = useRef(0); // Use a ref for active index

  const handleSlideChange = (swiper) => {
    activeSlideIndexRef.current = swiper.activeIndex;
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
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          //el: ".swiper-pagination",
          type: "bullets",
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-width": "80px",
          "--swiper-pagination-bullet-height": "2px",
          "--swiper-pagination-bullet-border-radius": "0",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
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
          <SwiperSlide>
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
