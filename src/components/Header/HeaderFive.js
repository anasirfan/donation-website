import { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import {
  IoIosSearch,
  IoMdPerson,
  IoIosHeartEmpty,
  IoIosCart,
  IoIosMenu,
  IoIosArrowDown,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube
} from "react-icons/io";
import Navigation from "./elements/Navigation";
import AboutOverlay from "./elements/AboutOverlay";
import MobileMenu from "./elements/MobileMenu";
import Anchor from "../anchor";

const HeaderFive = ({ aboutOverlay }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasAboutActive, setOffCanvasAboutActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
    false
  );

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop
      ? (document.body.style.paddingTop = `${headerHeight}px`)
      : (document.body.style.paddingTop = 0);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Fragment>
      <header
        className={`topbar-shadow header-bg ${scroll > headerTop ? "is-sticky" : ""}`}
      >
        {/* <div className="header-top-area border-bottom--grey space-pt--10 space-pb--10 d-none d-lg-block">
          <Container className="wide">
            <div className="header-top">
              <div className="header-top__left">

                <div className="order-online-text">
                 Call
                  <span className="number">(0123) 456789</span>
                </div>
              </div>
              <div className="header-top__right">
                <div className="signup-link">
                  <Anchor path="/other/login-register">
                    Signup / Login
                  </Anchor>
                </div>
                <span className="header-separator">|</span>
                <div className="top-social-icons">
                  <ul>
                    <li>
                      <a href="https://www.twitter.com" target="_blank">
                        <IoLogoTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com" target="_blank">
                        <IoLogoFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com" target="_blank">
                        <IoLogoInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com" target="_blank">
                        <IoLogoYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div> */}
        <div className="header-bottom-area">
          <Container className="wide">
            <div className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30">
              {/* logo */}
              <div className="header-content__logo space-pr--15">
                <Anchor path="/">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                      className="img-fluid"
                      alt=""
                    />
                </Anchor>
              </div>

              {/* navigation */}
              <Navigation />

              {/* icons */}
              <div className="header-content__icons space-pl--15">
                <ul className="d-none d-lg-block" style={{marginBottom:'0px'}} >
                  <li>
                    <Anchor path="/other/login-register">
                        <IoMdPerson />
                    </Anchor>
                  </li>
                </ul>
                <ul className="d-block d-lg-none">
                  <li>
                    <button onClick={() => setOffCanvasMobileMenuActive(true)}>
                      <IoIosMenu />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/* about overlay */}
      {aboutOverlay === false ? (
        ""
      ) : (
        <AboutOverlay
          activeStatus={offCanvasAboutActive}
          getActiveStatus={setOffCanvasAboutActive}
        />
      )}
      {/* Mobile Menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
    </Fragment>
  );
};

export default HeaderFive;
