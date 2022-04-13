import HomePage from "../pages/Homepage/HomePage";
import Dashboard from "../../backend/dashboard/Dashboard";
import Features from "../../backend/Features/Features";
import AddProduct from "../../backend/Product/AddProduct";
import User from "../user/User";
import Signup from "../user/Signup";
import ForgotPass from "../user/ForgotPass";
import ChangePass from "../user/ChangePass";
import Error404 from "../common/Error404";
export const Routers = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Error404/>,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgotpass",
    element: <ForgotPass />,
  },
  {
    path: "/changepass/:id/:key",
    element: <ChangePass />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/features",
    element: <Features />,
  },
  {
    path: "/admin/product/add",
    element: <AddProduct />,
  },
];
