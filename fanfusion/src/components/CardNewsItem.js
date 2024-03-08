import "./CardNewsItem.css";
const CardNewsItem = ({ newsFrame, sedImperdietEnimL }) => {
  return (
    <div className="cardnewsitem">
      <div className="newsitem">
        <textarea className="header-text" rows={10} cols={30} />
        <div className="wrapper-news-frame">
          <img
            className="news-frame-icon"
            loading="lazy"
            alt=""
            src={newsFrame}
          />
        </div>
        <div className="rectangle-shape">
          <div className="news">News</div>
          <div className="sed-imperdiet-enim">{sedImperdietEnimL}</div>
          <div className="read-more">Read more</div>
        </div>
      </div>
    </div>
  );
};
export default CardNewsItem;