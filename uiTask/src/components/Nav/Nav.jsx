// src/components/Navbar.js
import React, { useEffect } from "react";
import { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import "./Nav.css";
//link and dropdown
import { AnimatePresence, motion } from "framer-motion";

import { TECollapse, TERipple } from "tw-elements-react";
//nav icons
import NavIcons from "./NavIcons";

//Asidefor screen <=md
import Aside from "./Aside/Aside";

const Navbar = () => {
  //link pressed state
  const [linkId, setLinkId] = useState("");

  //handle collapsable drop
  const setDropLink = (id) => {
    setLinkId(id);
  };
  const unsetDropLink = () => {
    setLinkId("");
  };

  //assure linkId state mutation
  useEffect(() => console.log(`nav link ${linkId} clicked`), [linkId]);

  //list of nav links
  const links = [
    { id: "1", name: "Shop by Category" },
    { id: "2", name: "Shop by Device" },
    { id: "3", name: "Collections" },
    { id: "4", name: "Blog" },
  ];

  //Aside toggle action
  const [isToggled, setToggle] = useState(false);
  useEffect(() => console.log("toggled"), [isToggled]);
  const asideContainer = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <div className="absolute left-0 top-0 w-full pl-0 flex-column h-[200px]">
      {/*Aside nav */}
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="aside"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={asideContainer}
          >
            <Aside />
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="absolute left-0 top-0 px-4 flex-row text-white w-full">
        {/* left icons for screens <= md  */}

        <div className="left-icons lg:hidden flex basis-1/4">
          <a
            onClick={() => setToggle(!isToggled)}
            className=" navbar-burger self-center lg:hidden mr-1 "
            href="#"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 18L20 18"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M4 12L20 12"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M4 6L20 6"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          </a>

          <a className="self-center lg:hidden ml-1 flex" href="#">
            <svg
              width="20px"
              height="20uiTaskpx"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>

        {/* Logo  */}
        <div className="lg:flex relative left-0 pl-[25px] basis-1/4 mr-auto space-x-2 md:mx-auto bases-1/2 sm:w-[100px] bases-1/2 mx-auto">
          <a
            className="text-3xl font-bold font-heading relative left-0"
            href="#"
          >
            <img
              className="h-5"
              src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/logo-focal.png?v=1630492228&width=200"
              alt="logo"
              style={{ minWidth: "100px" }}
            />
          </a>
        </div>

        {/* Nav middle Links */}
        <ul
          style={{
            justifyContent: "center",
            height: "12vh",
            alignItems: "center",
          }}
          className="hidden lg:flex ml-0 font-semibold font-heading basis-1/2  menu"
          onMouseLeave={unsetDropLink}
        >
          {links.map((x) => (
            <li
              className="li"
              key={x.id}
              onMouseEnter={() => setDropLink(x.id)}
            >
              <FlyoutLink href="#" FlyoutContent={PricingContent}>
                {x.name}
              </FlyoutLink>
            </li>
          ))}
        </ul>

        {/* Header right Icons */}

        <div className="flex-row place-items-center px-0 ml-0 font-semibold font-heading basis-1/4">
          <NavIcons />
        </div>
      </nav>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-auto h-auto"
      style={{
        display: "inline",
      }}
    >
      <a href={href} className="relative text-white">
        {children}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{
              position: "absolute",
              opacity: 1,
              left: "-50%",

              scaleX: 0,
            }}
            animate={{
              position: "absolute",
              opacity: 1,
              left: 0,

              scaleX: 1,
            }}
            exit={{
              position: "absolute",
              opacity: 1,
              right: 0,
              translateX: "50%",
              scaleX: 0,
            }}
            style={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-0 top-3 w-[90%] text-black pl-2"
          >
            <div
              style={{
                minHeight: "1px",
                background: "white",
              }}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            style={{
              position: "fixed",
              top: "12vh",
              height: "auto",
              left: 0,
              width: "100%",
              zIndex: "-1000",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 top-3  text-black"
            initial={{ opacity: 0, scaleY: 0, y: "-50%" }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0, y: "-50%" }}
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="mt-0 left-0 w-[100vw] bg-white p-0 shadow-xl">
      <Dropdown />
    </div>
  );
};

export default Navbar;
