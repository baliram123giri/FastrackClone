import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { changePass } from "../../../redux/actions";
import Loader from "../common/Loader";
export default function ChangePass() {
  //state area
  const [password, setPassword] = useState({});

  //react-router
  const { id, key } = useParams();
  const Navigate = useNavigate()

  //redux states
  const dispatch = useDispatch()
  const{loading, normalUser} = useSelector(state=>state.data)

  //useEffect
  useEffect(()=>{
      if(normalUser){
          Navigate("/")
      }
  },[])
  //function area
  //password handler
  const passHandler = (e) => {
    const { value, name } = e.target;
    setPassword({ ...password, [name]: value });
  };
 
  //change pass submit
  const changePassSubmit = (e) => {
    e.preventDefault();

    var data = { password: password.password, id: id, link: key };
    if (password.password === password.cpassword) {
      dispatch(changePass(data, Navigate))

    } else {
      swal("Opps!", "New password & Confirm password are not matched!", "error");
    }
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
          <form
            onSubmit={changePassSubmit}
            className="bg-white shadow bg-white p-4 my-3"
          >
            <div className="text-center">
              <h5 className="my-3">CHANGE PASSWORD</h5>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                New Password <span className="text-danger">*</span>
              </label>
              <input
                name="password"
                value={password.password || ""}
                required
                onChange={passHandler}
                type="password"
                className="form-control"
                placeholder="New Password *"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cpassword">
                Confirm New Password <span className="text-danger">*</span>
              </label>
              <input
                name="cpassword"
                value={password.cpassword || ""}
                required
                onChange={passHandler}
                type="password"
                className="form-control"
                placeholder="Confirm New Password *"
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-dark rounded-0">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
