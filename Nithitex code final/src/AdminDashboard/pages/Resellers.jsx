import React, { useEffect, useState } from "react";
import Table from "../components/table/Table";
import axios from "axios";

const customerTableHead = [
  "Name",
  "Email",
  "Phone Number",
  "Status",
  "Options",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => {
  return (
    <tr key={index}>
      <td>
      {item.FullName} 
      </td>
      <td>{item.Email}</td>
      <td>{item.Mobile}</td>
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

const Resellers = () => {
  const [categoryList, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://api.nidhitex.com/api/UserAccount/LoadUserAccountList?UserAccountID=2`
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
      <h2 className="page-header">Resellers</h2>
      <div className="row">
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

export default Resellers;
