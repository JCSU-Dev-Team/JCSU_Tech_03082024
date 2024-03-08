import CardNewsItem from "./CardNewsItem";
import "./FrameComponent1.css";
const FrameComponent1 = () => {
  return (
    <div className="frame-container">
      <div className="titletitlecenteralign-group">
        <div className="titletitlecenteralign2">
          <div className="titlecenteralign2">
            <h1 className="quisque-ut-metus1">What's The Update?</h1>
            <div className="active-indicator2" />
          </div>
        </div>
        <h3 className="vestibulum-sit-amet">
          We look into the NFL lineup and see what each players brings to the
          championship run next season
        </h3>
      </div>
      <div className="card-news-item2">
        <div className="newsitem1">
          <div className="rectangle-wrapper">
            <div className="rectangle3">
              <div className="wrapper-title-center-align">
                <img
                  className="title-center-align"
                  loading="lazy"
                  alt=""
                  src="/fastestPlayer.jpg"
                />
              </div>
              <div className="sedimperdieteniml">
                <div className="rectangle4" />
                <div className="headline">Headline</div>
                <h2 className="sed-imperdiet-enim1">{`Who’s the fastest player in the NFL? `}</h2>
                <b className="read-more1">Read more</b>
              </div>
            </div>
          </div>
        </div>
        <div className="card-news-item3">
          <CardNewsItem
            newsFrame="/ezekieleliot.webp"
            // image under what's update
            sedImperdietEnimL="Get to know Ezekiel Elliot, running back for the Dallas Cowboys."
          />
          <CardNewsItem
            newsFrame="/playersicon.webp"
            sedImperdietEnimL="28 players from HBCUs started the season on NFL rosters. How many can you name?"
          />
        </div>
      </div>
    </div>
  );
};
export default FrameComponent1;
