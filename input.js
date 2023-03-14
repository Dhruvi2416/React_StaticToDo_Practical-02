import React from "react";
import image from "./image.png";
import image1 from "./image2.png";

export default function Input() {
  return (
    <>
      <div className="input">
        <div className="completed-task d-flex">
          <div className="complete">
            <p>Buy new sweatshirt</p>
          </div>
          <div className="image">
            <img src={image} />
          </div>
        </div>

        <div className="completed-task d-flex">
          <div className="complete">
            <p>Begin React practice</p>
          </div>
          <div className="image">
            <img src={image} />
          </div>
        </div>

        <div className="incomplete-task d-flex">
          <div className="complete">
            <p>Read an article</p>
          </div>
          <div className="image">
            <img src={image1} />
          </div>
        </div>
        <div className="incomplete-task d-flex">
          <div className="complete">
            <p>Try not to fall asleep</p>
          </div>
          <div className="image">
            <img src={image1} />
          </div>
        </div>
        <div className="incomplete-task d-flex">
          <div className="complete">
            <p>Watch 'Sherlock'</p>
          </div>
          <div className="image">
            <img src={image1} />
          </div>
        </div>
        <div className="incomplete-task d-flex">
          <div className="complete">
            <p>Begin onboarding</p>
          </div>
          <div className="image">
            <img src={image1} />
          </div>
        </div>
        <div className="incomplete-task d-flex">
          <div className="complete">
            <p>Go for a walk</p>
          </div>
          <div className="image">
            <img src={image1} />
          </div>
        </div>
      </div>
    </>
  );
}
