import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/productReducer/productReducer";
import styles from './form.module.css'

export default function Form() {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const { title, price, discount } = event.target;
    dispatch(addProduct(title.value, price.value, discount.value));
    
    title.value = "";
    price.value = "";
    discount.value = "";
  };
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <div className={styles.block}>

      <input  className={styles.font_text} type="text" name="title" placeholder="Title"  required/>
      <input className={styles.font_text} type="number" name="price" placeholder="Price" required />
      <input  className={styles.font_text}type="number" name="discount" id="" placeholder="discount" />
      <button className={styles.font_text}>Add</button>
      </div>
    </form>
  );
}
