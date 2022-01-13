import "../css/homeBody.css";
import home_1 from "../img/home_1.png";
import home_2 from "../img/home_2.png";
import home_3 from "../img/home_3.png";
import home_4 from "../img/home_4.png";
import Roundblue from "./roundblue";

function HomeBody() {
  return (
    <div className="homeBody">
      <div className="blues">
        <Roundblue top={"-650px"} left={"-120px"} />
        <Roundblue top={"540px"} right={"-750px"} />
        <Roundblue top={"2040px"} left={"-750px"} />
      </div>
      <div className="row component_row">
        <div className="col-md-6 main">
          <h1 className="main_text">Welcome to my WebSite</h1>
          <p className="para_text">
            A successful website does three things: It attracts the right kinds
            of visitors. Guides them to the main services or product you offer.
            Collect Contact details for future ongoing relation.
          </p>
        </div>
        <div className="col-md-6 sideImg">
          <img src={home_1} width="100%" alt="" />
        </div>
      </div>
      <div className="row component_row">
        <div className="col-md-6 sideImg">
          <img src={home_2} width="100%" alt="" />
        </div>
        <div className="col-md-6 main">
          <h1 className="main_text">
            Web designing is difficult. Hence it’s fun
          </h1>
          <p className="para_text">
            A perfect UI design is like a joke. If you have to explain it, it’s
            not that good.
          </p>
        </div>
      </div>
      <div className="row component_row">
        <div className="col-md-6 main">
          <h1 className="main_text">
            It’s not a bug. It’s an undocumented feature!
          </h1>
          <p className="para_text">
            The problem is there are no simple 'right' answers for most Web
            design questions. What works is good, integrated design that fills a
            need carefully thought out, well-executed, and tested.
          </p>
        </div>
        <div className="col-md-6 sideImg">
          <img src={home_3} width="100%" alt="" />
        </div>
      </div>
      <div className="row component_row">
        <div className="col-md-6 sideImg">
          <img src={home_4} width="100%" alt="" />
        </div>
        <div className="col-md-6 main">
          <h1 className="main_text">
          Websites promote you 24/7: No employee will do that.
          </h1>
          <p className="para_text">
            If there’s one thing you learn by working on a lot of different Web
            sites, it’s that almost any design idea–no matter how appallingly
            bad–can be made usable in the right circumstances, with enough
            effort.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
