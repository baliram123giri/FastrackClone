import React, { useState } from "react";
import Welcome from "../common/Welcome";
import{useDispatch} from "react-redux"
import { addNewBrand, addNewCategory } from "../../../redux/actions";
export default function Features() {
  //state area
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("")
  //redux states
  const dispatch = useDispatch()
  //function area
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const brandHandler = (e) => {
    setBrand(e.target.value);
  };

  //submitCategory
  const categorySubmit = (e) => {
    e.preventDefault();
    dispatch(addNewCategory({category}))
  };
  //submitBrand
  const brandSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBrand({brand}))
  };

  return (
    <>
      <Welcome>
        <div className="page-header">
          <h3 className="page-title">Add Features</h3>
        </div>
        {/* .fetures start  */}
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Category</h4>
                <form onSubmit={categorySubmit} className="forms-sample">
                  <div className="form-group">
                    <label>Category Name</label>
                    <input
                      required
                      value={category}
                      onChange={categoryHandler}
                      type="text"
                      className="form-control"
                      placeholder="Category Name"
                    />
                  </div>
                  <button className="btn btn-primary mr-1">Add Category</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Brand</h4>
                <form onSubmit={brandSubmit} className="forms-sample">
                  <div className="form-group">
                    <label>Brand Name</label>
                    <input
                     value={brand}
                     required
                     onChange={brandHandler}
                      type="text"
                      className="form-control"
                      placeholder="Brand Name"
                    />
                  </div>
                  <button  className="btn btn-primary mr-1">
                    Add Brand
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Welcome>
    </>
  );
}
