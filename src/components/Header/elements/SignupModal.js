import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FcGoogle } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/router";

import cogoToast from "cogo-toast";
const SignupModal = ({ show, onHide, createLogin }) => {
  // Add your authentication logic and state here
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [loginError, setloginError] = useState("");
  const [error, setError] = useState({
    errorEmail: "",
  });
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      cogoToast.error("Invalid Email!");
      setError({
        errorEmail: "Please enter a valid email address",
      });
      return; // Stop further execution if email is invalid
    }

    // Your logic for handling the form submission goes here

    router.push(`/signup?email=${encodeURIComponent(email)}`);
  };
  

  return (
    <Modal
      show={show}
      onHide={onHide}
      onClick={() => {
        setError("");
      }}
      size="lg"
      centered
    >
      <Modal.Body>
        <div className="d-flex">
          <div className="modal-banner-div">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/modal/signup-banner.jpg"
              }
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="modal-input-div">
            <div className="close-btn-div">
              <div className="close" onClick={onHide}>
                <IoCloseOutline />
              </div>
            </div>
            <div className="space-mb--10">
              <p>
                Signing up for elleways is fast and easy — no commitments or
                monthly fees.
              </p>
            </div>
            <p className="error-p">
              {error.errorEmail && <p>{error.errorEmail}</p>}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="space-mb--5">Email adddress</label>
                <input
                  value={email}
                  onChange={handleInputChange}
                  className="form-control"
                  type="email"
                  placeholder="Please input your email"
                />
              </div>
              <button
                type="submit"
                className="lezada-button lezada-button--large lezada-button--custom space-mt--10 sign-button"
                href=""
              >
                Sign up
              </button>
            </form>
            <div className="or-div">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <div className="google-sign-in-button space-mb--20">
              <button onClick={handleGoogleSignIn}>
                <span>
                  <FcGoogle />
                </span>
                Continue with Google
              </button>
            </div>
            <div className="terms-div">
              <p>
                By signing up you agree to our{" "}
                <a href="/terms-coditions">Terms of Service</a> and{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </div>
            <div className="login-sell-div">
              <span>
                <u onClick={() => createLogin()}>Login</u>
              </span>
              <span className="line-span">|</span>
              <span>
                <a href="https://projects.apexsol.us/elleways-new/seller-login/">
                  <u>Sell on elleways</u>
                </a>
              </span>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;
