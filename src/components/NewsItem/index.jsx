import React from "react";
import styles from "./styles.module.css";
import { formatWithOptions } from "date-fns/fp";
import { ptBR } from "date-fns/locale";
import { parseISO } from "date-fns";

function NewsItem({ item }) {
  const dateObject = parseISO(item.date);

  if (isNaN(dateObject)) {
    return <div className={styles.text}>Invalid Date</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img className={styles.image} src={item.image} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.text}>
          {formatWithOptions(
            { locale: ptBR },
            "d 'de' MMMM',' yyyy",
            dateObject
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
