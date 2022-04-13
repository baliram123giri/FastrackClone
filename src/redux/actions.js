import axios from "axios";
import swal from "sweetalert";
import * as types from "./action-types";
const config = require("../config.json");
const CryptoJS = require("crypto-js");

//create the actions
//navigate action

//logout
const logout = () => {
  return {
    type: types.LOGOUT,
  };
};
//User Signup
const userSignup = () => {
  return {
    type: types.USER_SIGNUP,
  };
};

const loginUser = (data) => {
  return {
    type: types.LOGIN_USER,
    payload: data,
  };
};

//error handling
export const errorHandler = (data) => {
  return {
    type: types.ERROR,
    payload: data,
  };
};
//error clear
export const statusClear = () => (dispatch) => {
  dispatch(successHandler(null));
  dispatch(errorHandler(null));
};
//Success handling
export const successHandler = (data) => {
  return {
    type: types.SUCCESS,
    payload: data,
  };
};
//Loader handling
export const loaderHandler = () => {
  return {
    type: types.LOADER,
  };
};
//productsHomepage handling
const productsHomepageHandler = (data) => {
  return {
    type: types.PRODUCTS_HOMEPAGE,
    payload: data,
  };
};
//SingleProductId handling
const singleProductId = (data) => {
  return {
    type: types.PRODUCT_VIEW_ID,
    payload: data,
  };
};
//user create
export const userCreate = (data) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.post(`${config.URL}/user`, data);
    if (result.status === 200) {
      swal("Good Job!", result.data.msg, "success");
      dispatch(userSignup());
    }
  } catch (error) {
    swal("Opps!", error.response.data.msg, "error");
    dispatch(userSignup());
  }
};
//user email send otp
export const userEmailSendOtp = (email) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.post(`${config.URL}/useremailotp/send`, email);
    if (result.status === 200) {
      swal("Good Job!", result.data.msg, "success");
      dispatch(loginUser(null));
      dispatch(successHandler(result.data.msg));
    }
  } catch (error) {
    if (error.response) {
        console.log(error)
      swal("Opps!", error.response.data.msg, "error");
      dispatch(loginUser(null));
      dispatch(errorHandler(error.response.data.msg));
    }
  }
};
//user email otp login
export const userEmailMatchingOtp = (data, nav) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.post(
      `${config.URL}/useremailotp/matching`,
      data
    );
    if (result.status === 200) {
      dispatch(loginUser(result.data));
      let encrypted = CryptoJS.AES.encrypt(
        JSON.stringify(result.data),
        config.Key
      ).toString();
      localStorage.setItem("normal", encrypted);
      nav("/");
    }
  } catch (error) {
    if (error.response) {
      swal("Opps!", error.response.data.msg, "error");
      dispatch(loginUser(null));
    }
  }
};
//user login
export const loginUserData = (data, nav) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.post(`${config.URL}/user/login`, data);
    if (result.status === 200) {
      dispatch(loginUser(result.data));
      let encrypted = CryptoJS.AES.encrypt(
        JSON.stringify(result.data),
        config.Key
      ).toString();
      localStorage.setItem("normal", encrypted);
      nav("/");
    }
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      swal("Opps!", error.response.data.msg, "error");
      dispatch(loginUser(null));
    }
  }
};
//sendChangePass link 
export const sendChangeEmailPassLink = (email)=> async(dispatch)=>{
  dispatch(loaderHandler())
  try {
      const result = await axios.post(`${config.URL}/user/changepass/link/send`, email)
      if(result.status===200){
          dispatch(successHandler(result.data.msg))
      }
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      swal("Opps!", error.response.data.msg, "error");
      dispatch(loginUser(null));
    }
  }
}
//change password
export const changePass = (data, nav) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.put(
      `${config.URL}/user/changepass/link`,
      data
    );
    if (result.status === 200) {
      swal("Good Job!", result.data.msg, "success");
      nav("/user");
      dispatch({ type: types.CHANGE_PASS });
    }
  } catch (error) {
    if (error.response) {
      swal("Opps!", error.response.data.msg, "error");
      dispatch({ type: types.CHANGE_PASS });
    }
  }
};
//user logout
export const logoutUser = () => {
  return function (dispatch) {
    dispatch(loaderHandler());
    localStorage.removeItem("normal");
    if (!localStorage.removeItem("normal")) {
      dispatch(logout());
    }
  };
};

//Home Product data getting
export const productsHome = () => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.get(`${config.URL}/product`);
    const checkStock = result.data.filter((ele) => {
      return ele.stock !== 0;
    });
    dispatch(productsHomepageHandler(checkStock));
  } catch (error) {
    console.log(error);
  }
};

//Home Single Product data getting
export const productIdData = (id) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.get(`${config.URL}/product/${id}`);
    dispatch(singleProductId(result.data));
  } catch (error) {
    console.log(error.response);
  }
};

//Add category
export const addNewCategory = (data) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.post(`${config.URL}/category`, data);
    dispatch(errorHandler(null));
    if (result.status === 200) {
      swal("Good Job!", result.data.msg, "success")
    }
  } catch (error) {
    dispatch(errorHandler(error.response.data.msg));
    swal("Opps!", error.response.data.msg, "error");
  }
};

//Get category
export const getCategory = () => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.get(`${config.URL}/category`);
    dispatch(errorHandler(null));
    if (result.status === 200) {
      dispatch({ type: types.GET_CATEGORY, payload: result.data });
    }
  } catch (error) {
    dispatch(errorHandler(error.response.data.msg));
  }
};

//Add category
export const addNewBrand = (data) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.post(`${config.URL}/brand`, data);
    dispatch(errorHandler(null));
    if (result.status === 200) {
      swal("Good Job!", result.data.msg, "success")
    }
  } catch (error) {
    dispatch(errorHandler(error.response.data.msg));
    swal("Opps!", error.response.data.msg, "error");
  }
};

//Get category
export const getBrand = () => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.get(`${config.URL}/brand`);
    dispatch(errorHandler(null));
    if (result.status === 200) {
      dispatch({ type: types.GET_BRAND, payload: result.data });
    }
  } catch (error) {
    dispatch(errorHandler(error.response.data.msg));
  }
};

//Add new Product
export const addProduct = (data) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.post(`${config.URL}/addproduct`, data);
    if (result.status === 200) {
      dispatch(successHandler(result.data.msg));
      swal("Good job!", result.data.msg, "success");
    }
  } catch (error) {
    swal("Opps!", error.response.data.msg, "error");
  }
};
