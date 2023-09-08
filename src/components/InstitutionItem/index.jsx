import React from "react";
import styles from "./styles.module.css";

function InstitutionItem({ institution }) {
  const dailyEvents = institution.dailyEvents;

  // Filtrar chaves que não são "_id"
  const filteredKeys = Object.keys(dailyEvents).filter((key) => key !== "_id");

  // Criar uma matriz de objetos { dia, evento } a partir das chaves filtradas
  const eventsArray = filteredKeys.map((dia) => ({
    dia,
    evento: dailyEvents[dia],
  }));

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
        <div className={styles.text}>
          {eventsArray.map((item) => (
            <div key={item.dia} className={styles.text}>
              <strong>{item.dia}:</strong> {item.evento}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstitutionItem;
