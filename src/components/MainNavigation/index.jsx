import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { userContext } from "../../../userContext";
import { ReactComponent as Home } from "../../assets/feed.svg";
import { ReactComponent as Adicionar } from "../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import styles from "./styles.module.css";
import useMedia from "../../hooks/userMedia";

const MainNavigation = () => {
  const { userLogout } = React.useContext(userContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(null);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/main" end>
          <Home /> {mobile && "Página Inicial"}
        </NavLink>
        <NavLink to="/main/criar" end>
          <Adicionar /> {mobile && "Criar Instituição"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default MainNavigation;
