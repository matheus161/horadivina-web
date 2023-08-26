import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../LoginForm";
import LoginPasswordReset from "../LoginPasswordReset";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
