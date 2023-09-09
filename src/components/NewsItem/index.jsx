import React from "react";
import styles from "./styles.module.css";

function NewsItem({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img className={styles.image} src={item.image} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.text}>{item.title}</div>
      </div>
    </div>
  );
}

export default NewsItem;
