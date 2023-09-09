import React, { useEffect, useState, useContext } from "react";
import MainNavigation from "../MainNavigation";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { userContext } from "../../../userContext";

const MainHeader = () => {
  const { data } = useContext(userContext);
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/main/criar":
        setTitle("Cadastrar Instituição");
        break;
      default:
        setTitle("Olá, " + data.name);
    }
  });

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <MainNavigation />
    </header>
  );
};

export default MainHeader;
