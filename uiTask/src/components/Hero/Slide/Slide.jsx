//css
import "./Slide.css";
//react
import React from "react";

//Framer motion

export default function Slide({
  index,
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
      <img src={imgSrc} className="slide-img" />

      <div className="slide-content" style={{ textAlign: textAlign }}>
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
              ? "animate-txt1  albert-sans-titlefont slide-title"
              : "albert-sans-titlefont slide-title"
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
            className="animate-txt bg-yellow-400 px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-black hover:bg-yellow-300 hover:border-none"
            style={{ borderRadius: "0" }}
          >
            {btnTxt1}
          </button>
          {btnTxt2 && (
            <button
              type="button"
              className="animate-txt bg-yellow-400 px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal hover:border-none text-black hover:bg-yellow-300  ml-2"
              style={{ borderRadius: "0" }}
            >
              {btnTxt2}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
