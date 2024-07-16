//css
import "./Slide.css";
//react
import React from "react";

//Framer motion

export default function Slide({
  title,
  subTitle,
  imgSrc,
  btnTxt1,
  btnTxt2,
  textAlign,
  isActive,
}) {
  return (
    <div className="slide">
      <div className="slide-imgs">
        {imgSrc.map((x) => (
          <img
            className="slide-img"
            style={{ minWidth: imgSrc.length > 1 ? "50%" : "100%" }}
            src={x}
          />
        ))}
      </div>

      <div
        className={
          textAlign == "left"
            ? "slide-content ml-[3vw]"
            : "slide-content items-center px-0 lg:ml-[4vw] md:ml-[10%] mr-auto w-[80%]  sm:ml-[5%] pl-[10px] mr-auto w-[90%]"
        }
        style={{
          textAlign: textAlign,
        }}
      >
        <p
          className={
            isActive
              ? "animate-txt subtitle-font slide-subtitle"
              : "subtitle-font slide-subtitle"
          }
        >
          {subTitle}
        </p>
        <h4
          className={
            isActive
              ? "animate-txt1 albert-sans-titlefont slide-title text-4xl lg:text-6xl"
              : "albert-sans-titlefont slide-title lg:text-[5em] md:text-[4em]"
          }
        >
          {title}
        </h4>

        <div
          className={
            isActive
              ? "animate-txt2  inline-block btn-block"
              : "inline-block btn-block"
          }
        >
          <button
            type="button"
            className="animate-txt subtitle-font slide-btn transition duration-300 bg-btn-color-p-300 hover:bg-btn-color-s-300  ml-2"
          >
            {btnTxt1}
          </button>
          {btnTxt2 && (
            <button
              type="button"
              className="animate-txt subtitle-font slide-btn transition duration-300 bg-btn-color-p-300 hover:bg-btn-color-s-300  ml-2"
            >
              {btnTxt2}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
