import React, { useEffect, useState } from "react";
import Table from "../components/table/Table";
import axios from "axios";
import Button from '@mui/material/Button';


const customerTableHead = [
  "Image",
  "Name",
  "SKU",
  "Added By",
  "Info",
  "Total stock",
  "Options",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => {
  return (
    <tr key={index}>
      <td>
        <img src={item.ProductImagePath} />
      </td>
      <td>{item.ProductName}</td>
      <td>{item.SKUNo}</td>
      <td>{item.CreatedBy === 1 ? "Admin" : ""}</td>
      <td>
        {item.ProductDescription}
        <br /> Color :{" "}
        <span class="dot" style={{ backgroundColor: item.ProductColor }}></span>
      </td>
      <td>{item.Quantity}</td>
      <td>
        <a class="add" title="Edit" data-toggle="tooltip">
          <i class="fa fa-edit"></i>
        </a>
        &nbsp;&nbsp;
        <a class="delete" title="Delete" data-toggle="tooltip">
          <i class="fa fa-trash"></i>
        </a>
      </td>
    </tr>
  );
};

const Products = () => {
  const [productList, setProducts] = useState([]);
  const [categoryList, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen ] = useState(false)
  useEffect(() => {
    axios
      .get(
        `http://api.nidhitex.com/api/Product/LoadProductList?CategoryID=${categoryId}&ProductID=0&WildcardSearch=${search}`
      )
      .then((res) => {
        const {
          data: { HasError, ResponseMessage, Data },
        } = res;
        if (!HasError) {
          setProducts(Data);
        }
      });
    axios
      .get(
        "http://api.nidhitex.com/api/Category/LoadCategoryList?CategoryID=0&WildcardSearch="
      )
      .then((res) => {
        const {
          data: { HasError, ResponseMessage, Data },
        } = res;
        if (!HasError) {
          setCategory(Data);
        }
      });
  }, [categoryId, search]);
  const openNewModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <h2 className="page-header">Products</h2>
      <div class="row" id="filter">
        <div className="col-12">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "10px",
              justifyContent: "space-evenly",
            }}
            className="products-filter"
          >
            <div class="form-group col-sm-3 col-xs-6">
              <select
                data-filter="make"
                style={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  margin: "0 auto",

                  fontFamily:
                    "'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif",
                  fontSize: "18px",
                  color: "#60666d",
                }}
                class="filter-make filter form-control "
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="">Category</option>
                {categoryList.map((i, j) => {
                  return (
                    <>
                      <option key={j} value={i.CategoryID}>
                        {i.CategoryName}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <div class="form-group col-sm-3 col-xs-6">
              <input
                type="text"
                value={search}
                style={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  margin: "0 auto",

                  fontFamily:
                    "'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif",
                  fontSize: "18px",
                  color: "#60666d",
                }}
                name="search"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="col-sm-3">
          <Button variant="contained" onClick={() => openNewModal()}>Add Product</Button>
          </div>
          </div>
     
        </div>
      
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card-admin">
            <div className="card__body">
              {productList.length ? (
                <Table
                  limit="10"
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={productList}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              ) : (
                <div style={{ margin: "auto" }}>No Data Available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
