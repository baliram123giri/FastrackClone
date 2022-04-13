import * as types from "./action-types";
const CryptoJS = require("crypto-js");
const config = require("../config.json");
//initial state
const currentUser = localStorage.getItem("normal")
  ? localStorage.getItem("normal")
  : [];
var userInfo = localStorage.getItem("normal")
  ? CryptoJS.AES.decrypt(currentUser, config.Key)
  : null;
userInfo = localStorage.getItem("normal")
  ? userInfo.toString(CryptoJS.enc.Utf8)
  : null;
userInfo = localStorage.getItem("normal") ? JSON.parse(userInfo) : null;
const initialState = {
  normalUser: userInfo,
  error: null,
  success: null,
  loading: false,
  homeFirstSlider: [],
  singleProduct: {},
  category: [],
  brands: [],
};

//user reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGOUT:
      return {
        ...state,
        normalUser: null,
        loading: false,
      };
    case types.LOGIN_USER:
      return {
        ...state,
        normalUser: action.payload,
        loading: false,
      };
    case types.CHANGE_PASS:
      return{
        ...state,
        loading:false
      }
    case types.USER_SIGNUP:
      return {
        ...state,
        loading: false,
      };

    case types.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.SUCCESS:
      return {
        ...state,
        success: action.payload,
        loading: false,
      };

    case types.LOADER:
      return {
        ...state,
        loading: true,
      };
    case types.PRODUCTS_HOMEPAGE:
      return {
        ...state,
        homeFirstSlider: action.payload,
        loading: false,
      };
    case types.PRODUCT_VIEW_ID:
      return {
        ...state,
        singleProduct: action.payload,
        loading: false,
      };

    case types.GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };

    case types.GET_BRAND:
      return {
        ...state,
        brands: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

