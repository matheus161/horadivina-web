import React from "react";
import styles from "./styles.module.css";

function InstitutionItem({ institution }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img className={styles.avatar} src={institution.avatar} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.name}>{institution.name}</div>
        <div className={styles.text}>
          {institution.address.street}, {institution.address.number}
        </div>
        <div className={styles.text}>
          {institution.address.city}, {institution.address.state}
        </div>
      </div>
    </div>
  );
}

export default InstitutionItem;
