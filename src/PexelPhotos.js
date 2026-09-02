import React from "react";

export default function PexelPhotos({ photos }) {
  if (photos) {
    return (
      <div className="PexelPhotos ">
        <img
          src={photos[0].src.landscape}
          alt="word-image"
          className="rounded-3 border border-secondary-subtle shadow img-fluid m-sm-0 d-block m-auto "
          width="300px"
        />
      </div>
    );
  } else {
    return;
  }
}
