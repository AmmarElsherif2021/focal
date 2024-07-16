import "./Dropdown.css";
import React from "react";
export default function Dropdown({ linkName }) {
  return (
    <div
      id="collapsable"
      style={{
        position: "fixed",
        top: "12vh",
        background: "#ffffff",
        zIndex: "10000",
      }}
    >
      <div>
        <h1>{linkName}</h1>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  );
}
