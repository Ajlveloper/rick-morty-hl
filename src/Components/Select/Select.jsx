import React from "react";
import styles from "./styles.module.css";
import { CLASS_DEFAULT_TYPES } from "../../Common/types";

const Select = ({ label, items, onChangeSelect }) => {
  return (
    <div className={styles.selectContainer}>
      <div
        className={`${styles.selectContainerSelect} ${CLASS_DEFAULT_TYPES.select}`}>
        <select onChange={onChangeSelect}>
          <option className={styles.selectContainerLabel}>{label}</option>
          {items &&
            items.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
