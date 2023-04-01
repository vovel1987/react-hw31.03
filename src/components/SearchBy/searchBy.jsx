import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchItem,
  sortItems,
  sortPrice,
} from "../../store/productReducer/productReducer";
import styles from "./search.module.css";

export default function SortBy() {
  const data = useSelector((state) => state.product);
  //   const [element, setElement] = useState("");

  //   const search = data.filter((elem) =>{
  //     return elem.title.toLowerCase().includes(element.toLowerCase())
  //   })
  // function search(array, name) {
  //   return array.filter(
  //     (elem) => elem.title.toLowerCase() === name.toLowerCase()
  //   );
  // }

  // console.log(search(data, "skeit"));

  const dispatch = useDispatch();
  // const onSearch = (event) => {
  //   event.preventDefault();
  //   const { title } = event.target;
  //   dispatch(searchItem(title.value));
  //   title.value = "";
  // };

  const filterItems = (event) => dispatch(searchItem(event.target.value));
  const sortChange = (event) => dispatch(sortItems(event.target.value));
  return (
    <div className={styles.container}>
      <form className={styles.form_block}>
        <input
          //   onChange={(event) => setElement(event.target.value)}
          type="text"
          name="title"
          id=""
          placeholder="Product Title"
          required
          onChange={filterItems}
        />
        <p>Search product</p>
      </form>
      {/* <form onSubmit={onSort}>
        <p>Sorting by : </p>
        <select name="sort" id="">
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
        <button>Sort</button>
      </form> */}
      <div className={styles.select_block}>
        <p className={styles.select_p}>Sorting by : </p>
        <select className={styles.select}  onChange={sortChange}>
          <option className={styles.option_select} value="1"> Price Min</option>
          <option  className={styles.option_select} value="-1">Price max</option>
        </select>
      </div>
    </div>
  );
}
