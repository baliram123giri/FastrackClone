import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { sendChangeEmailPassLink, statusClear, userEmailSendOtp } from "../../../redux/actions";
import Loader from "../common/Loader";
export default function ForgotPass() {
  //state area
  const [email, setEmail] = useState("");

  //react-router
  const Navigate = useNavigate();
  //redux states
  const dispatch = useDispatch();
  const { loading, normalUser, success } = useSelector((state) => state.data);

  //useEffect
  useEffect(() => {
    if (normalUser) {
      Navigate("/");
    }
  }, []);
  //function area
  //email handler
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailPassLink = (e) => {
    // dispatch();
    //clear previous errors
    dispatch(statusClear())
    e.preventDefault()
    dispatch(sendChangeEmailPassLink({email}))
  };
  return (
    <div className="container my-md-5 my-3">
      {loading && <Loader/>}
      <div className="text-center">
        <NavLink className="navbar-brand  fw-bold text-uppercase" to="/">
          <span className="text-warning"> Giri</span>
          <span className="text-white">
            <span className="text-dark">Brand</span>
          </span>
        </NavLink>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 mx-auto ">
        {success ? <>
          <div className="bg-white p-4 text-center text-success shadow my-3">
            <h5>{success}</h5>
          </div>
        </> :   <form
            onSubmit={emailPassLink}
            className="bg-white shadow bg-white p-4 my-3"
          >
            <div className="text-center">
              <h5 className="my-3">FORGOT PASSWORD</h5>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
              <input
                value={email}
                required
                onChange={emailHandler}
                type="text"
                className="form-control"
                placeholder="Email *"
              />
            </div>
            
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-dark rounded-0"
              >
                Send Email
              </button>
            </div>
          </form>}
          <div className="text-center my-5">
            <h5>
              <span className="fw-normal">NEW USER?</span>{" "}
              <Link
                className="text-decoration-underline text-dark"
                to={"/signup"}
              >
                CREATE AN ACCOUNT
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
