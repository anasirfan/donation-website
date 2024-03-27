import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FcGoogle } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/router";

import cogoToast from "cogo-toast";
const SignupModal = ({ show, onHide, createLogin }) => {
  // Add your authentication logic and state here
  const [formData, setFormData] = useState({

  });
  const router = useRouter();
  const [loginError, setloginError] = useState("");
  const [error, setError] = useState({
    errorEmail: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the email
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const isValidEmail = emailRegex.test(email);

    // if (!isValidEmail) {
    //   cogoToast.error("Invalid Email!");
    //   setError({
    //     errorEmail: "Please enter a valid email address",
    //   });
    //   return; // Stop further execution if email is invalid
    // }

    // Your logic for handling the form submission goes here

    router.push('/dashboard');
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
                "/assets/images/register/register.jpg"
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
                Palestine Fund
              </p>
            </div>
            <p className="error-p">
              {/* {error.errorEmail && <p>{error.errorEmail}</p>} */}
            </p>
            <form onSubmit={handleSubmit}>

              <div className="form-group my-1">

                <input
                  value={formData?.lastName}

                  onChange={handleInputChange}
                  className="form-control"
                  name="lastName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group my-1">

                <input
                  value={formData?.lastName}

                  onChange={handleInputChange}
                  className="form-control"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group my-1">

                <input
                  value={formData?.email}
                  onChange={handleInputChange}
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group my-1">

                <input
                  value={formData?.password}
                  onChange={handleInputChange}
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group my-1">

                <input
                  value={formData?.confirmPassword}
                  onChange={handleInputChange}
                  className="form-control"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
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

            <div className="login-sell-div">
              <span>
                <u onClick={() => createLogin()}>Login</u>
              </span>
              <span className="line-span px-2">|</span>
              <span>
                <a href="/" className="text-black">
                  <u>Our Mission</u>
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
