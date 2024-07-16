// src/components/Navbar.js
import React, { useEffect } from "react";
import { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import "./Nav.css";
// Initialization for ES Users
import { Collapse, initTWE } from "tw-elements";
import NavIcons from "./NavIcons";
import useWindowDimensions from "../../windowContext";

import toggleLogo from "../../assets/react.svg";

initTWE({ Collapse });
const Navbar = () => {
  //link pressed state
  const [linkId, setLinkId] = useState("");
  //handle collapsable drop
  const handleLinkHover = (e) => {
    setLinkId(e.target.key);
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

  const { width, height } = useWindowDimensions();
  const [toggled, setToggeled] = useState(false);

  return (
    <div className="absolute left-0 top-0 w-full pl-0 flex-column h-[200px]">
      <nav className="absolute left-0 top-0 pl-0 flex-row text-white w-full">
        {/* left icons for screens <= md  */}

        <div className="left-icons lg:hidden flex basis-1/4">
          <a className=" navbar-burger self-center lg:hidden mr-1 " href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
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
          style={{ justifyContent: "center" }}
          className="hidden lg:flex ml-0 font-semibold font-heading basis-1/2 "
        >
          {links.map((x) => (
            <li key={x.id} style={{ fontSize: "0.9rem", fontWeight: "400" }}>
              <a
                href="#"
                className="group relative text-white-800 mx-[25px] bg-orange h-[50px] w-[150px]"
                onMouseEnter={() => setLinkId(x.id)}
                onMouseLeave={() => setLinkId("")}
              >
                {x.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[0.7px] bg-white transition-all duration-100 group-hover:w-full"></span>
                <span className="absolute -bottom-1 right-0 w-0 h-[0.7px] bg-white transition-all delay-100 duration-200 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Header right Icons */}

        <div className="flex-row place-items-center px-0 ml-0 font-semibold font-heading basis-1/4">
          <NavIcons />
        </div>
      </nav>
      {linkId && <div></div>}
      {linkId && (
        <div className="dropdown-content ">
          <Dropdown linkName={links.filter((x) => x.id == linkId)[0].name} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
/*
 

...........................

*/
