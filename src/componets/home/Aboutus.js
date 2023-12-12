import React from "react";
import myimg from "../../assits/images/kkps-removebg-preview (1).png"

function Aboutus() {
  return (
    <div className="Homepagemainsection">
      <div className="homepagemypic">
        <img src={myimg} />
      </div>
      <div className="homepageaboutmetext">
        <h1>Hello ! I' M kabeer</h1>
        <p>I am a dedicated DevOps engineer and a passionate ML/AI enthusiast with a goal of contributing my technical skills and expertise in an organization that fosters both professional and personal growth</p>
      </div>
    </div>
  );
}

export default Aboutus;
