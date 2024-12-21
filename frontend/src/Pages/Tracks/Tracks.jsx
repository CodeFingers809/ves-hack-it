import React from "react";
import "./Tracks.css";

const Tracks = () => {
  return (
    <div className="wrapper h-[200vh]">
      <div className="software">
        <div className="planet-container">
          <div className="mars">
            <div className="curved-bottom-text">
              <svg viewBox="0 0 500 100" className="curved-text">
                <path
                  id="mars-curve"
                  d="M10,50 A 90,90 0 0,0 490,50"
                  fill="none"
                />
                <text className="planet-text">
                  <textPath href="#mars-curve" startOffset="50%">
                    SOFTWARE TRACK
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="planet-container">
          <div className="jupiter">
            <div className="curved-bottom-text">
              <svg viewBox="0 0 500 100" className="curved-text">
                <path
                  id="jupiter-curve"
                  d="M10,50 A 90,90 0 0,0 490,50"
                  fill="none"
                />
                <text className="planet-text">
                  <textPath href="#jupiter-curve" startOffset="50%">
                    HARDWARE TRACK
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="planet-container">
          <div className="mercury">
            <div className="curved-bottom-text">
              <svg viewBox="0 0 500 100" className="curved-text">
                <path
                  id="mercury-curve"
                  d="M10,50 A 90,90 0 0,0 490,50"
                  fill="none"
                />
                <text className="planet-text">
                  <textPath href="#mercury-curve" startOffset="50%">
                    ROBOTICS TRACK
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
