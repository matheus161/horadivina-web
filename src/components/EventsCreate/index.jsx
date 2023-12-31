import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import useForm from "../../hooks/userForm";
import useFetch from "../../hooks/useFetch";
import { EVENTS_POST, NOTIFY_USERS } from "../../../api";
import { useLocation, useNavigate } from "react-router-dom";

function EventsCreate() {
  const title = useForm();
  const informations = useForm();
  const description = useForm();
  const [img, setImg] = useState("");
  const { data, error, loading, request } = useFetch();
  const location = useLocation();
  const { institution } = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/institution/events");
  }, [data, navigate]);

  async function notifyUsers(token) {
    const { url, options } = NOTIFY_USERS(
      {
        usersId: institution.favorited,
        subject: title.value,
        text: description.value,
      },
      token
    );
    await request(url, options);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const institutionId = institution._id;
    const token = window.localStorage.getItem("TOKEN");

    const { url, options } = EVENTS_POST(
      {
        title: title.value,
        description: description.value,
        informations: informations.value,
        image: img,
        institution: institutionId,
      },
      token
    );
    request(url, options);

    notifyUsers(token);
  }

  function handleImgChange(event) {
    const imageUrl = event.target.value;
    setImg(imageUrl);
  }

  return (
    <section className={"animeLeft"}>
      <header className={styles.header}>
        <h1 className="title">Cadastre um evento</h1>
      </header>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Input label="Título" type="text" name="title" {...title} />
        <div className={styles.wrapper}>
          <label className={styles.label}>Link da Imagem</label>
          <input
            label="Link da Imagem"
            type="text"
            name="image"
            className={styles.input}
            onChange={handleImgChange}
          />
        </div>
        <Input
          label="Informações Adicionais"
          type="text"
          name="informations"
          {...informations}
        />
        <div className={styles.wrapper}>
          <label className={styles.label}>Descrição</label>
          <textarea
            label="Descrição"
            name="description"
            className={styles.textarea}
            {...description}
          />
        </div>
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button className={styles.button}>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url("${img}")` }}
          ></div>
        )}
      </div>
    </section>
  );
}

export default EventsCreate;
