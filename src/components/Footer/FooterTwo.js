import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterTwo = ({ footerBgClass }) => {
  return (
    <footer
      className={clsx("space-pt--100 space-pb--50", footerBgClass ? footerBgClass : "bg-color--grey")}
    >
      <Container className="wide">
        <Row>
          <Col className="footer-single-widget space-mb--50">
            {/* logo */}
            <div className="logo space-mb--35">
              <img
                src={
                  process.env.PUBLIC_URL + footerBgClass ===
                  "bg-color--blue-two"
                    ? "/assets/images/logo-alt.png"
                    : "/assets/images/logo.png"
                }
                className="img-fluid"
                alt=""
              />
            </div>

            {/*=======  copyright text  =======*/}
            
          </Col>

          
          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">FOLLOW US ON</h5>
            <nav className="footer-single-widget__nav footer-single-widget__nav--social">
              <ul>
                <li>
                  <a href="https://www.twitter.com">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <FaYoutube /> Youtube
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterTwo;
