import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userCreate } from "../../../redux/actions";
import swal from 'sweetalert';
import Loader from "../common/Loader"
import { useDispatch, useSelector } from "react-redux";
export default function Signup() {
  //state area
  const [userData, setUserData] = useState({});
 
  //react-router
  const Navigate = useNavigate()
  //redux states
  const{loading, normalUser} = useSelector(state=>state.data)
 
  //useEffect
  useEffect(()=>{
    if(normalUser){
     Navigate("/")
    }
  },[])
 
  //redux statement
  const dispatch = useDispatch()
  //function area
  //userdata creating
  const userDataHandler = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };
 
  //userform submit
  const userFormSubmit = (e) => {
    e.preventDefault();
    const{fname, lname, email, mobile, cpassword,password} = userData
    if(cpassword===password ){
      const data = {name:fname+ " "+ lname, email:email, mobile:mobile, password:password}
      dispatch( userCreate(data))

    }else{

      swal("Opps!", "Password are not matched! ", "error")
    }
  };
  return (
  
    <>
    {loading && <Loader/>}
    <div className="container my-md-5 my-3">
      <div className="text-center">
        <NavLink className="navbar-brand  fw-bold text-uppercase" to="/">
          <span className="text-warning"> Giri</span>
          <span className="text-white">
            <span className="text-dark">Brand</span>
          </span>
        </NavLink>
      </div>
      <div className="row">
        
        <div className="col-12 col-md-6 mx-auto">
          <form onSubmit={userFormSubmit} className="bg-white p-4 shadow my-3">
            <div className="text-center">
              <h5 className="my-3">SIGNUP</h5>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="FirstName">
                    FIRST NAME <span className="text-danger">*</span>
                  </label>
                  <input
                    required
                    name="fname"
                    value={userData.fname || ""}
                    onChange={userDataHandler}
                    type="text"
                    placeholder=" FIRST NAME *"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="mb-3">
                  <label htmlFor="Last">
                    LAST NAME <span className="text-danger">*</span>
                  </label>
                  <input
                    required
                    name="lname"
                    value={userData.lname || ""}
                    onChange={userDataHandler}
                    type="text"
                    placeholder=" LAST NAME *"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="mb-3">
                  <label htmlFor="mobile">
                    MOBILE NUMBER <span className="text-danger">*</span>
                  </label>
                  <input
                    required
                    name="mobile"
                    value={userData.mobile || ""}
                    onChange={userDataHandler}
                    type="number"
                    placeholder=" MOBILE NUMBER *"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="mb-3">
                  <label htmlFor="Email">
                    EMAIL<span className="text-danger">*</span>
                  </label>
                  <input
                    required
                    name="email"
                    value={userData.email || ""}
                    onChange={userDataHandler}
                    type="email"
                    placeholder=" EMAIL *"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="mb-3">
                  <label htmlFor="password">
                    PASSWORD <span className="text-danger">*</span>
                  </label>
                  <input
                    required
                    name="password"
                    value={userData.password || ""}
                    onChange={userDataHandler}
                    type="password"
                    placeholder=" PASSWORD *"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="mb-3">
                  <label htmlFor="cpassword">
                    CONFIRM PASSWORD <span className="text-danger">*</span>
                  </label>
                  <input
                    required
                    name="cpassword"
                    value={userData.cpassword || ""}
                    onChange={userDataHandler}
                    type="password"
                    placeholder="CONFIRM PASSWORD *"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-dark rounded-0 w-100">
                SIGNUP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
