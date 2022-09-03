import React, { useEffect, useState } from "react";
import Table from "../components/table/Table";
import axios from "axios";

const customerTableHead = [
  "Image",
  "Name",
  "Added By",
  "Status",
  "Options",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => {
  return (
    <tr key={index}>
      <td>
        <img src={item.CategoryImagePath} />
      </td>
      <td>{item.CategoryName}</td>
      <td>{item.CreatedBy === 1 ? "Admin" : ""}</td>
      <td>
        {item.ActiveStatus ? "Active": "Inactive"}
      </td>
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

const Categories = () => {
  const [categoryList, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://api.nidhitex.com/api/Category/LoadCategoryList?CategoryID=0&WildcardSearch=${search}`
      )
      .then((res) => {
        const {
          data: { HasError, ResponseMessage, Data },
        } = res;
        if (!HasError) {
          setCategory(Data);
        }
      });
  }, [search]);
  return (
    <div>
      <h2 className="page-header">Categories</h2>
      <div className="row">
      
        <div className="col-12">   <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "10px",
            }}
            className="products-filter"
          >
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
                placeholder="Search"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div></div>
        <div className="col-12">
          <div className="card-admin">
            <div className="card__body">
              {categoryList.length ? (
                <Table
                  limit="10"
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={categoryList}
                  renderBody={(categoryList, index) => renderBody(categoryList, index)}
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

export default Categories;
