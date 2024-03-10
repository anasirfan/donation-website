import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterTwo = ({ footerBgClass }) => {
  return (
    <footer
      className={clsx("space-pt--50 space-pb--20 bg-clr")}
    >
      <Container className="wide">
        <Col className="main-footer">
          <Col className="footer-single-widget space-mb--20">
            {/* logo */}
            <div className="logo space-mb--20">
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


          <Row className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">FOLLOW US ON</h5>
            <nav className="footer-single-widget__nav footer-single-widget__nav--social">
              <ul className="footer-ul">
                <li className="footer-li">
                  <a href="https://www.twitter.com">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li className="footer-li">

                  <a href="https://www.facebook.com">
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li className="footer-li">

                  <a href="https://www.instagram.com">
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li className="footer-li">

                  <a href="https://www.youtube.com">
                    <FaYoutube /> Youtube
                  </a>
                </li>
              </ul>
            </nav>
          </Row>
        </Col>
      </Container>
    </footer>
  );
};

export default FooterTwo;
