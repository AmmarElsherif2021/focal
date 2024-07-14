import React from "react";
export default function LinkDrop(props) {
  const { linkName } = props;
  return (
    <div
      data-twe-collapse-item
      data-twe-collapse-horizontal
      id="collapsable"
      style={{ background: "#ffffff", zIndex: "10000" }}
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
