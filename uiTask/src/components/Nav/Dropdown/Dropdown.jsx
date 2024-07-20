// Dropdown.js

import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Dropdown.css";

import placeholderPhoto from "../../../assets/react.svg";

const Dropdown = ({ linkName }) => {
  const [isOpen, setIsOpen] = useState(false);
  //content column
  const contentColumns = [
    {
      header: "PROTECT & CARRY",
      paragraph: "",
      list: ["iPhone Cases", "AirPods Cases", "Sleeves", "Accessories"],
    },
    {
      header: "CABLES",
      paragraph: "",
      list: ["USB-A", "USB-C", "Lightning", "Apple Watch", "View All"],
    },
    {
      header: "IPHONE CASES",
      photo: placeholderPhoto,
      paragraph: "Explore all iPhone products, from cases to accessories",
      list: [],
    },
    {
      header: "CHARGERS",
      photo: placeholderPhoto,
      paragraph: "Explore all iPhone products, from cases to accessories",
      list: [],
    },
    {
      header: "BUNDLES",
      photo: placeholderPhoto,
      paragraph: "Explore all iPhone products, from cases to accessories",
      list: [],
    },
  ];

  const LIST_ITEM_VARIANTS = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: -150,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <div className={`dropdown-font collapsible ${isOpen ? "open" : ""}`}>
      <ul className="dropdown-font content">
        {contentColumns.map((x, idx) => (
          <motion.li
            className="dropdown-font content-column"
            variants={LIST_ITEM_VARIANTS}
            key={idx}
          >
            {x.photo && (
              <img
                src={x.photo}
                alt={x.header}
                style={{ background: "black" }}
                className="mb-5"
              />
            )}
            <strong
              className={x.list.length ? "text-left ml-0" : "text-center ml-0"}
            >
              {x.header}
            </strong>
            <p>{x.paragraph && x.paragraph}</p>
            <motion.ol className="text-left ml-0 pl-0">
              {x.list &&
                x.list.map((y, idx) => (
                  <li className="dropdown-font ">
                    <p className="mt-2">
                      <small>{y}</small>
                    </p>
                  </li>
                ))}
            </motion.ol>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
