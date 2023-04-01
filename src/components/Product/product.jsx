import React from "react";
import { useDispatch } from "react-redux";
import { reset, resetFilter } from "../../store/productReducer/productReducer";
import styles from "./product.module.css";

export default function Product({ id, title, price, discount, data }) {
  const disc = price - (price * discount) / 100;

  function noDiscount(discount) {
    if (!discount) {
      return <p className={styles.text}>No Discount</p>;
    } else {
      return (
        <div className={styles.price1}>
          <p className={styles.text}>New Price :</p>
          <p className={styles.text}> {disc}</p>
        </div>
      );
    }
  }
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <p className={styles.text}> {title}</p>
      <div className={styles.price1}>
        <p className={styles.text}>Price : </p>
        <p className={styles.text}> {price}</p>
      </div>

      {noDiscount(discount)}
      {/* <p>Discount : {discount} %</p> */}
      {/* <div className={styles.price1}>
        <p className={styles.text}>New Price :</p>
        <p className={styles.text}> {disc}</p>
      </div> */}
    </div>
  );
}
