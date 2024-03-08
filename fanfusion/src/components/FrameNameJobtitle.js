import { useMemo } from "react";
import "./FrameNameJobtitle.css";
const FrameNameJobtitle = ({
  star2,
  star3,
  star4,
  star5,
  star6,
  namejobtitlenamejobtitle,
  arleneMcCoy,
  presidentOfSales,
  logo5ff3c18e1,
  textTestimonial,
  propAlignSelf,
  propWidth,
  propPadding,
  propFlexWrap,
  propFlex,
  propMinWidth,
  propWidth1,
  propMarginRight,
  propWidth2,
}) => {
  const frameNameJobtitleStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propWidth, propPadding]);
  const starsStarStarStarStarStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);
  const frameTexttestimonialFrameStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth1,
    };
  }, [propFlex, propMinWidth, propWidth1]);
  const testimonialContainerStyle = useMemo(() => {
    return {
      marginRight: propMarginRight,
    };
  }, [propMarginRight]);
  const textTestimonialStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);
  return (
    <div className="frame-name-jobtitle" style={frameNameJobtitleStyle}>
      <div
        className="stars-star-star-star-star"
        style={starsStarStarStarStarStyle}
      >
        <div className="frame-frame-frame-star-star">
          <div className="stars5">
            <img className="stars-child" alt="" src={star2} />
            <img className="stars-item" alt="" src={star3} />
            <img className="stars-inner" alt="" src={star4} />
            <img className="star-icon" alt="" src={star5} />
            <img className="stars-child1" alt="" src={star6} />
          </div>
        </div>
        <div
          className="frame-texttestimonial-frame"
          style={frameTexttestimonialFrameStyle}
        >
          <div className="rectangle-rectangle-star-star">
            <img
              className="namejobtitlenamejobtitle-icon"
              loading="lazy"
              alt=""
              src={namejobtitlenamejobtitle}
            />
          </div>
          <div
            className="testimonial-container"
            style={testimonialContainerStyle}
          >
            <div className="namejob-title-parent">
              <div className="namejob-title">
                <div className="arlene-mccoy">{arleneMcCoy}</div>
                <div className="president-of-sales">{presidentOfSales}</div>
              </div>
              <img
                className="logo5ff3c18e-1-icon"
                loading="lazy"
                alt=""
                src={logo5ff3c18e1}
              />
            </div>
            <div className="text-testimonial" style={textTestimonialStyle}>
              {textTestimonial}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrameNameJobtitle;