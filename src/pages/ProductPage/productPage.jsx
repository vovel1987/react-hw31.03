import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/product";
import SearchBy from "../../components/SearchBy/searchBy";
import { resetFilter } from "../../store/productReducer/productReducer";
import styles from './prodContainer.module.css'

export default function ProductPage() {
  const data = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFilter());
  }, []);
  return (
    <div>
      <div>
        <SearchBy />
      </div>

      <div className={styles.container}>
        {data.length !== 0 ? (
          <div>
            {data
              .filter(({ show }) => show)
              .map((elem) => (
                <Product key={elem.id} {...elem} data={data.length} />
              ))}
          </div>
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </div>
  );
}
