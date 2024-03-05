import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FcGoogle } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { loginForm } from "../../../services/api";
import { signIn } from "next-auth/react";
import cogoToast from "cogo-toast";
import { useAuth } from "../../../context/AuthContext";
import SignupModal from './SignupModal';

const LoginModal = ({ show, onHide, createAccount }) => {
  const router = useRouter();
  const { login } = useAuth();


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

    if (!form.email || !form.password) {
      setError("Please fill in both email and password.");
      return;
    }
    try {
 
      const response = await loginForm(form);
      if (response && response.data) {
        login();

        const username =
          response.data[0].firstname + " " + response.data[0].lastname;
        const email = response.data[0].email;
        const telephone =
          response && response.data[0] ? response.data[0].telephone : "";
        const image =
          response && response.data[0] ? response.data[0].image : "";
        const headquarter =
          response && response.data[0] ? response.data[0].headquarter : "";
        window?.localStorage.setItem(
          "customer_id",
          response.data[0].customer_id
        );
        window?.localStorage.setItem("username", username);
        window?.localStorage.setItem("email", email);
        window?.localStorage.setItem("firstname", response.data[0].firstname);
        window?.localStorage.setItem("lastname", response.data[0].lastname);
        window?.localStorage.setItem(
          "phone_country",
          response.data[0].phone_country
        );
        window?.localStorage.setItem("telephone", telephone);
        window?.localStorage.setItem("image", image);
        window?.localStorage.setItem("headquarter", headquarter);
        window?.localStorage.setItem("brand", response.data[0].brand);
        window?.localStorage.setItem(
          "registration_no",
          response.data[0].registration_no
        );
        window?.localStorage.setItem("tax_no", response.data[0].tax_no);
        window?.localStorage.setItem(
          "established_year",
          response.data[0].established_year
        );
        window?.localStorage.setItem(
          "physical_stores",
          response.data[0].physical_stores
        );
        window?.localStorage.setItem(
          "annual_sales",
          response.data[0].annual_sales
        );
        window?.localStorage.setItem(
          "website_url",
          response.data[0].website_url
        );
        window?.localStorage.setItem("tiktok_url", response.data[0].tiktok_url);
        window?.localStorage.setItem(
          "instagram_url",
          response.data[0].instagram_url
        );
        window?.localStorage.setItem(
          "facebook_url",
          response.data[0].facebook_url
        );
        window?.localStorage.setItem(
          "whatsapp_url",
          response.data[0].whatsapp_url
        );
        window?.localStorage.setItem("other_url", response.data[0].other_url);
        window?.localStorage.setItem("categories", response.data[0].categories);
        window?.localStorage.setItem("value", response.data[0].value);
        window?.localStorage.setItem("storeType", response.data[0].store_type);

        router.push("/");
        cogoToast.success("Logged In Successfully!")
      } else if (response && response.error) {
        // setError(response.error);
        cogoToast.error("Login Failed!")

      }
    } catch (error) {
      cogoToast.error("Login Failed!")
      // console.error("Error submitting form:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const signInResponse = await signIn("google", {
        callbackUrl: "/redirect",
      });
      login()

      if (signInResponse?.error) {
        cogoToast.error("Error during sign-in");
        // console.error("Error during Google sign-in:", signInResponse.error);
        return;
      }
    } catch (error) {
      // console.error("Error during Google sign-in:", error);
    }
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

            <div className="or-div">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <div className="google-sign-in-button space-mb--20">
              <button className="" onClick={handleGoogleSignIn}>
                <span>
                  <FcGoogle />
                </span>
                Continue with Gooogle
              </button>
            </div>
            <div className="login-sell-div">
              <span>
                <u onClick={() => createAccount()}>Create New Account</u>
              </span>
              <span className="line-span">|</span>
              <span>
                <a href="https://projects.apexsol.us/elleways-new/seller-login/">
                  <u>
                    Login on Brand
                  </u>
                </a>
              </span>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
