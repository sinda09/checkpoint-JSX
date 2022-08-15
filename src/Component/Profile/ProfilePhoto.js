import React from "react";
import image from "./index.jpeg";

const ProfilePhoto = () => {
  return (
    <center>
      <img
        style={{
          width: "150px",
          height: "200px",
        }}
        src={image}
      ></img>
    </center>
  );
};

export default ProfilePhoto;
