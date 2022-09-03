import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://api.nidhitex.com/api/Category/LoadCategoryList?CategoryID=0&WildcardSearch="
      )
      .then((res) => {
        const {
          data: { HasError, ResponseMessage, Data },
        } = res;
        setCategory(Data);
      });
  }, []);

  return (
    <section class="category">
      <h1 class="heading">
        Shop by <span>Category</span>
      </h1>

      <div class="box-container">
        {category.map(i => {
          return (
            <a href={`/products/?id=${i.CategoryID}`} class="box" key={i.CategoryID}>
              <img src={i.CategoryImagePath} alt={i.CategoryName} width="100%" height={200} />
              <div class="content">
                <h3>{i.CategoryName}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Category;
