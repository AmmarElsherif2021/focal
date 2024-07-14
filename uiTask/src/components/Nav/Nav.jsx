// src/components/Navbar.js
import React, { useEffect } from "react";
import { useState } from "react";
import NavLink from "./LinkDrop";
import "./Nav.css";
// Initialization for ES Users
import { Collapse, initTWE } from "tw-elements";
import NavIcons from "./NavIcons";
import useWindowDimensions from "../../windowContext";

import toggleLogo from "../../assets/react.svg";

initTWE({ Collapse });
const Navbar = () => {
  //link pressed state
  const [linkName, setLinkName] = useState("");
  //handle collapsable drop
  const handleLinkClick = (e) => {
    if (e.target.id === linkName) {
      setLinkName("");
    }
    setLinkName(e.target.id);
  };
  //assure linkName state mutation
  useEffect(() => console.log(`nav link ${linkName} clicked`), [linkName]);

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
    <div>
      {/* follow me on twitter @asad_codes */}
      <div className="flex flex-wrap place-items-center h-screen nav">
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen ">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              {/* left icons for screens <= md  */}

              <div className="left-icons lg:hidden flex">
                <a
                  className=" navbar-burger self-center lg:hidden mr-1 "
                  href="#"
                >
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
              </div>

              {/* Logo  */}
              <div className="lg:flex left-0 items-center  space-x-2 md:mx-auto sm:mx-auto">
                <a className="text-3xl font-bold font-heading" href="#">
                  <img
                    className="h-5"
                    src="https://focal-theme-carbon.myshopify.com/cdn/shop/files/logo-focal.png?v=1630492228&width=200"
                    alt="logo"
                  />
                </a>
              </div>

              {/* Nav middle Links */}
              <ul className="hidden lg:flex px-4 mx-auto font-semibold font-heading space-x-5">
                {links.map((x) => {
                  return (
                    <li style={{ fontSize: "0.9rem", fontWeight: "300" }}>
                      <a
                        href="#"
                        className="group relative text-gray-200 hover:text-gray-300"
                      >
                        {x.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[0.7px] bg-blue-400 transition-all duration-100 group-hover:w-full  "></span>
                        <span className="absolute -bottom-1 right-0 w-0 h-[0.7px] bg-blue-400 transition-all delay-200 duration-300 group-hover:w-full "></span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Header right Icons */}
              <NavIcons />
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
/*
 

...........................

*/
