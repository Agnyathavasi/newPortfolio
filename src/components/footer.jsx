import { Link } from "react-router-dom";
import {
  BarChart,
  ContactMail,
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  Person,
  Phone,
  Work,
} from "@material-ui/icons";
import "../css/footer.css";
import image from "../img/darkThemeLogo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 left content">
            <Link className="link" to="/newPortfolio/">
              <div className="top">
                <img src={image} alt="" width="22%" />
                <span className="name">ishwajith H H</span>
              </div>
            </Link>
            <p className="text">
              Below are the links to all my social platforms such as GitHub,
              LinkedIn, etc. Don't forget to check my works on Android on
              GitHub. Also, Contact me if you have any Queries.
            </p>
            <div className="socialLinks">
              <div className="link">
                <a href="https://www.instagram.com/vishwajith_h_h/?utm_medium=copy_link">
                  <Instagram fontSize="large" />
                </a>
              </div>
              <div className="link">
                <a href="https://github.com/Agnyathavasi">
                  <GitHub fontSize="large" />
                </a>
              </div>
              <div className="link">
                <a href="https://www.linkedin.com/in/vishwajith-h-h-045852207/">
                  <LinkedIn fontSize="large" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 center content">
            <h4 className="title">NAVIGATE TO</h4>
            <div className="navigastionLinks">
              <ul>

                <li className="listItem">
                  <Link to="/newPortfolio/about">
                    <Person fontSize="small" />
                    <span>About</span>
                  </Link>
                </li>
                <li className="listItem">
                  <Link to="/newPortfolio/portfolio">
                    <Work fontSize="small" />
                    <span>Portfolio</span>
                  </Link>
                </li>
                <li className="listItem">
                  <Link to="/newPortfolio/skills">
                    <BarChart fontSize="small" />
                    <span>Skills</span>
                  </Link>
                </li>
                <li className="listItem">
                  <Link to="/newPortfolio/contact">
                    <ContactMail fontSize="small" />
                    <span>Contact Me</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 center content">
            <h4 className="title">CONTACT</h4>
            <div className="navigastionLinks">
              <ul>
                <li className="listItem">
                  <a href="tel:+918277070162">
                    <Phone fontSize="small" />
                    <span>+91 827 707 0162</span>
                  </a>
                </li>
                <li className="listItem">
                  <a href="mailto:vishwajith.shastry@gmail.com">
                    <Email fontSize="small" />
                    <span>vishwajith.shastry@gmail.com</span>
                  </a>
                </li>
                <li className="listItem">
                  <a href="https://goo.gl/maps/EVUrNJFPKLEzCG7w9">
                    <LocationOn fontSize="small" />
                    <span>Bengaluru, India</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
