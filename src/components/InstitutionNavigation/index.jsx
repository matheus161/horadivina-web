import React, { useEffect, useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { userContext } from "../../../userContext";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as News } from "../../assets/news.svg";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import styles from "./styles.module.css";
import useMedia from "../../hooks/userMedia";

const InstitutionNavigation = () => {
  const { userLogout } = useContext(userContext);
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
        <NavLink to="/institution/update" end>
          <Edit /> {mobile && "Instituição"}
        </NavLink>
        <NavLink to="/institution/news" end>
          <News /> {mobile && "Notícias da Instituição"}
        </NavLink>
        <NavLink to="/institution/events" end>
          <Calendar /> {mobile && "Eventos da Instituição"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default InstitutionNavigation;
