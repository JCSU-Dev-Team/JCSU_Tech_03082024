import FrameComponent4 from "./FrameComponent4";
import Whatareyouwaiting from "./Whatareyouwaiting";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import WaitPrompt from "./WaitPrompt";
import FrameComponent from "./FrameComponent";

import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing">
      
      <header className="landing-child" />
      <div className="title-card">
        <div className="frame-content">
          <div className="counter-frame">
            <img
              className="db3b4fe2-b3d9-4399-adeb-acd4bc-icon"
              loading="lazy"
              alt=""
              src="/logo.jpeg"
              // logo is here
            />
          </div>
          <div className="fanfusion-parent">
            <h1 className="fanfusion">FanFusion</h1>
            <div className="group">
              <b className="home">Home</b>
            </div>
          </div>
          {/* This code affects the header */}
          <div className="stars">
            <div className="category">Category</div>
          </div>
          <div className="stars1">
            <div className="trending-news">Trending News</div>
          </div>
          <div className="stars2">
            <div className="recent-news">Recent News</div>
          </div>
          <div className="stars3">
            <div className="clubs-ranking">Clubs Ranking</div>
          </div>
          <div className="stars4">
            <div className="sports-article">Sports Article</div>
          </div>
          <div className="nav-list-item-wrapper">
            
              <img
                className="title-title-center-align"
                alt=""
                src="/search.png"
              />
          </div>
        </div>
      </div>
      <div className="basketball-sport-icon-in-minim" />
      
      <main className="card-news-item">
        <section className="texttestimonial">
          <FrameComponent4 />
          <Whatareyouwaiting />
          <FrameComponent3 />
          <FrameComponent2 />
        </section>
      </main>
      <div className="card-frame">
        <div className="parent-frame">
          <FrameComponent1 />
          <WaitPrompt />
          <FrameComponent />
        </div>
      </div>
    </div>
  );
};
export default Landing;