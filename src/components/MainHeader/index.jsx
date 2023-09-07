import React, { useEffect, useState } from "react";
import MainNavigation from "../MainNavigation";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

const MainHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/main/criar":
        setTitle("Cadastrar Instituição");
        break;
      default:
        setTitle("Diocese de Estância");
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
