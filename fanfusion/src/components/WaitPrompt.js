import "./WaitPrompt.css";
const WaitPrompt = () => {
  return (
    <div className="wait-prompt">
      <h1 className="what-are-you">What are you waiting for? Download Now!</h1>
      <div className="left-button-frame">
        <img className="apple-icon" loading="lazy" alt="" src="/appstore.png" />
        <img
          className="google-icon"
          loading="lazy"
          alt=""
          src="/googlePlayStore.png"
        />
      </div>
      <div className="vector-shape">
        <div className="vector-shape-child" />
        <div className="frame-group1">
          <div className="become-part-of-the-fanfusion-n-parent">
            <h1 className="become-part-of">
              BECOME PART OF THE FANFUSION Network
            </h1>
            <div className="rectangle-group">
              <div className="rectangle-div" />
              <input
                className="frame-input"
                placeholder="smartperson.@gmail.com"
                type="text"
              />
              <div className="rectangle-container">
                <div className="frame-child1" />
                
              </div>
            </div>
          </div>
        </div>
        <div className="american-football-icon">
          <img
            className="american-football-player-posin-icon"
            loading="lazy"
            alt=""
            src="/GhanaPlayerNPO.png"
          />
        </div>
      </div>
    </div>
  );
};
export default WaitPrompt;
