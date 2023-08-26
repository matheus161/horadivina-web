import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import styles from "./styles.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/userForm";
import { userContext } from "../../../userContext";
import Error from "../Helper/Error";

const LoginForm = () => {
  const email = useForm("email");
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(userContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Acessar o Sistema</h1>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="nope">
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.reset} to="/login/reset">
        Esqueceu sua senha?
      </Link>
    </section>
  );
};

export default LoginForm;
