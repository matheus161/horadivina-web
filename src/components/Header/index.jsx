import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { userContext } from "../../../userContext";
import { ReactComponent as Pray } from "../../assets/pray.svg";

const Header = () => {
  const { data, userLogout } = React.useContext(userContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/main">
          {/* <img src="../../assets/rezar.png" /> */}
          <Pray />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            Olá, {data.name}
            {/* <button onClick={userLogout}>Sair</button> */}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
