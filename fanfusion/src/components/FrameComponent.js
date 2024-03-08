import "./FrameComponent.css";
const FrameComponent = () => {
  return (
    <div className="parent-frame-inner">
      <div className="left-button-parent">
        <div className="ellipse-node">
          <div className="frame-text" />
          <b className="right-button-frame">1</b>
        </div>
        <div className="left-button-frame1">
          <b className="b">2</b>
        </div>
        <div className="left-button-frame2">
          <b className="b1">3</b>
        </div>
        <div className="left-button-frame3">
          <b className="b2">4</b>
        </div>
        <img
          className="right-button-icon"
          loading="lazy"
          alt=""
          src="/rightarrow.png"
        />
      </div>
    </div>
  );
};
export default FrameComponent;
