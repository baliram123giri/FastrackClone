import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  loginUserData,
  statusClear,
  userEmailMatchingOtp,
  userEmailSendOtp,
} from "../../../redux/actions";
import Loader from "../common/Loader";

export default function User() {
  ///state area
  const [loginPass, setLoginPass] = useState({});
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  //router hoooks
  const Navigate = useNavigate();

  //redux states
  const dispatch = useDispatch();
  const { loading, success, normalUser } = useSelector((state) => state.data);

  //useEffect
  useEffect(() => {
    if (normalUser) {
      Navigate("/");
    }
    dispatch(statusClear());
  }, []);

  //function area
  //loginpassdata handler
  const loginPassHandler = (e) => {
    const { name, value } = e.target;
    setLoginPass({ ...loginPass, [name]: value });
  };
  //email handler
  const emailHandler = (e) => {
    setEmail(e.target.value);
    //first clear the status
    dispatch(statusClear());
  };
  //otp handler
  const otpHandler = (e) => {
    setOtp(e.target.value);
  };
  //resendhandler otp
  const resendHandler = () => {
    dispatch(userEmailSendOtp({ email }));
  };
  const emailOtpSubmit = (e) => {
    e.preventDefault();
    //first clear the status
    dispatch(statusClear());
    if (!success) {
      dispatch(userEmailSendOtp({ email }));
    } else {
      dispatch(userEmailMatchingOtp({ email, otp }, Navigate));
    }
  };
  //loginpassSubmit handler
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserData(loginPass, Navigate));
  };
  return (
    <div className="container my-5">
      {loading && <Loader />}
      <div className="text-center">
        <NavLink className="navbar-brand  fw-bold text-uppercase" to="/">
          <span className="text-warning"> Giri</span>
          <span className="text-white">
            <span className="text-dark">Brand</span>
          </span>
        </NavLink>
      </div>
      <div className="row my-5">
        <div className="col-12 col-md-6 border-end">
          <div className="login">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header " id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    LOGIN VIA OTP
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <form onSubmit={emailOtpSubmit}>
                      <div className="mb-3">
                        <label htmlFor="Email">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          value={email}
                          required
                          onChange={emailHandler}
                          type="email"
                          placeholder="Email *"
                          className="form-control"
                        />
                      </div>
                      {success && (
                        <div className="mb-3">
                          <label htmlFor="otp">
                            OTP <span className="text-danger">*</span>
                            <button
                              onClick={resendHandler}
                              className="btn fs-9 btn-sm btn-outline-primary rounded-0"
                            >
                              Resend Otp
                            </button>
                          </label>
                          <input
                            value={otp.value}
                            required
                            onChange={otpHandler}
                            type="text"
                            className="form-control"
                            placeholder="OTP *"
                          />
                        </div>
                      )}
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="btn btn-dark rounded-0 w-100"
                        >
                          {success ? "Login" : " Request OTP"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    LOGIN USING PASSWORD
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <form onSubmit={loginSubmitHandler}>
                      <div className="mb-3">
                        <label htmlFor="Email">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          required
                          name="email"
                          value={loginPass.email || ""}
                          onChange={loginPassHandler}
                          type="email"
                          placeholder="Email *"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          required
                          name="password"
                          value={loginPass.password || ""}
                          onChange={loginPassHandler}
                          type="password"
                          placeholder="Password *"
                          className="form-control"
                        />
                      </div>
                      <div className="text-end mb-3">
                        <Link
                          className="text-decoration-underline text-dark text-uppercase"
                          to={"/forgotpass"}
                        >
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="btn btn-dark rounded-0 w-100"
                        >
                          LOGIN
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="content p-4">
            <h5>
              <span className=" fw-normal"> NEW USER?</span> CREATE AN ACCOUNT
            </h5>
            <h5 className="mt-3">Benefits of Creating an New Account</h5>
            <ul>
              <li>
                You will get Benefits from our loyalty Program called Encircle
                Which entitles you to earn points for your Purchase which you
                can redeem in Subsequent Purchases
              </li>
              <li>
                You will get Special Previews to our Limited Collections and
                Sales.
              </li>
              <li>You will Receive offers tailor-made for you.</li>
            </ul>
            <div className="mt-3">
              <Link to={"/signup"} className="btn btn-dark rounded-0 w-100">
                SIGN UP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
