import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { userContext } from "../../../userContext";
import InstitutionNavigation from "../InstitutionNavigation";

function InstitutionDetailHeader() {
  const { data } = useContext(userContext);
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    console.log(data);
    const { pathname } = location;
    switch (pathname) {
      case "/institution/news":
        setTitle("Notícias");
        break;
      case "/institution/events":
        setTitle("Eventos");
        break;
      case "/institution/update":
        setTitle("Altere as insformações");
        break;
      default:
        setTitle("Altere as informações do(a) " + data.name);
    }
  });

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <InstitutionNavigation />
    </header>
  );
}

export default InstitutionDetailHeader;
