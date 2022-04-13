import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getBrand, getCategory } from "../../../redux/actions";
import Welcome from "../common/Welcome";

export default function AddProduct() {
  //state area
  const [file, setFile] = useState()
  const[productData, setProductData]=useState({})
  const { category, brands } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getBrand());
  }, []);

  //function area
    //producctDataHandler
    const productDataHandler = (e)=>{
      const{value, name} = e.target
      setProductData({...productData, [name]:value})
      if(e.target.files){
        setFile(e.target.files[0])
      }
    }

    //productDataSubmit
    const productDataSubmit =(e)=>{
      e.preventDefault()
      const{title, brand, category, stock, price, description} = productData
      console.log(productData)
      const formData = new FormData()
           formData.append("title", title)
           formData.append("category", category)
           formData.append("brand", brand)
           formData.append("stock", stock)
           formData.append("price", price)
           formData.append("image", file)
           formData.append("description", description)
           setProductData({})
           setFile("")
      dispatch(addProduct(formData))
    }
  return (
    <>
      <Welcome>
        <div className="page-header">
          <h3 className="page-title">Add New Product</h3>
        </div>
        {/* Add Product start  */}
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add New Product</h4>
                <form onSubmit={productDataSubmit} className="forms-sample">
                  <div className="form-group">
                    <label>Select Category</label>
                    <select required name="category" value={productData.category || ""} onChange={productDataHandler} className="form-control">
                      <option value={""}>Select Category</option>
                      {category &&
                        category.map((data) => {
                          return (
                            <option key={data._id} value={data.category}>
                              {data.category}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Select Brand</label>
                    <select required name="brand" value={productData.brand || ""} onChange={productDataHandler} className="form-control">
                      <option value={""}>Select Brand</option>
                      {brands &&
                        brands.map((data) => {
                          return (
                            <option key={data._id} value={data.brand}>
                              {data.brand}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Product Title</label>
                    <input
                    required
                    name="title" value={productData.title || ""} onChange={productDataHandler}
                      type="text"
                      className="form-control"
                      placeholder="Product Title"
                    />
                  </div>
                  <div className="form-group">
                    <label>Product Price</label>
                    <input
                    required
                     name="price" value={productData.price || ""} onChange={productDataHandler}
                      type="number"
                      className="form-control"
                      placeholder="Rs."
                    />
                  </div>
                  <div className="form-group">
                    <label>Product Stock</label>
                    <input
                    required
                    name="stock" value={productData.stock || ""} onChange={productDataHandler}
                      type="number"
                      className="form-control"
                      placeholder="0"
                      
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Product Image
                      <span className="text-danger  fs-9">
                        Product image size must below 900kb
                      </span>
                    </label>
                    <input
                    required
                    value={productData.file || ""}
                    name="file"
                     onChange={productDataHandler}
                    type="file" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Product Descriptoin</label>
                    <textarea
                    required
                    name="description" value={productData.description || ""} onChange={productDataHandler}
                      className="form-control"
                      placeholder="Enter here product description"
                      rows={4}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
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
