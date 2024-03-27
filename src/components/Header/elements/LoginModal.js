import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FcGoogle } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import cogoToast from "cogo-toast";



const LoginModal = ({ show, onHide, createAccount }) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loginError, setloginError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    image: "",
    googleauth: false,
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     
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
                process.env.PUBLIC_URL + "/assets/images/modal/login-banner.jpg"
              }
              className="img-fluid"
              alt="Login Banner"
            />
          </div>
          <div className="modal-input-div login-div">
            <div className="close-btn-div">
              <div className="close">
                <IoCloseOutline onClick={onHide} />
              </div>
            </div>
            <h2>Welcome Back</h2>
            <p className="error-p">{error && <p>{error}</p>}</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group space-mt--20">
                <label className="space-mb--5">Email adddress</label>
                <input
                  value={form.email}
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Please input your email"
                />
              </div>
              <div className="form-group space-mt--20">
                <label className="space-mb--5">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Please enter your password"
                />
              </div>
              <div className="forget-div">
                <a href="#"><span>Forgot Password?</span></a>
              </div>
              <button
                type="submit"
                className="lezada-button lezada-button--large lezada-button--custom space-mt--10 sign-button"
                href=""
              >
                Login
              </button>
            </form>
            
            <div className="login-sell-div">
              <span>
                <u onClick={() => createAccount()}>Create New Account</u>
              </span>
              
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
