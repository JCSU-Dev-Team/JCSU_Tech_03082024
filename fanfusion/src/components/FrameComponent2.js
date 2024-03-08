import React from 'react';
import "./FrameComponent2.css"; // Import CSS file if needed

const FrameComponent2 = () => {
  return (
    <div className="testimonial-frame">
      <div className="testimonial-item">
        <div className="picture-frame">
          {/* First image */}
          <img className="testimonial-picture" src="/GhanaPlayer.png" alt="Testimonial" />
        </div>
        <div className="testimonial-text">
          {/* First testimonial text */}
          <p>"I would recommend FanFusion for anyone trying to get the most out of their NFL+ subscription" - Jeremiah Owusu-Koramoah</p>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="picture-frame">
          {/* Second image */}
          <img className="testimonial-picture" src="/TaylorSwift.png" alt="Testimonial" />
        </div>
        <div className="testimonial-text">
          {/* Second testimonial text */}
          <p>"Hey #Swifties join me in my “Road to the Superbowl” vlog here on FanFusion" - Taylor Swift</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
