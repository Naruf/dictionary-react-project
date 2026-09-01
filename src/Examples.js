import React from "react";

export default function Examples({ example }) {
  if (example) {
    return (
      <div className="Example text-success">
        <span className=" ">example.</span> - <span>{example}</span>
      </div>
    );
  } else {
    return null;
  }
}
