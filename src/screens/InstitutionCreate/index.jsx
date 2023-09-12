import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import useForm from "../../hooks/userForm";
import { userContext } from "../../../userContext";
import { RELIGIONS_GET } from "../../../api";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Helper/Error";
import Loading from "../../components/Helper/Loading";

const InstitutionCreate = () => {
  const { user } = useContext(userContext);
  const [accountType, setAccountType] = useState("Conta Corrente");
  const { data, loading, error, request } = useFetch();
  const [religions, setReligions] = useState([]);
  const name = useForm();
  const avatar = useForm();
  const pixName = useForm();
  const pixBank = useForm();
  const pixKey = useForm();
  const accountBank = useForm();
  const accountAgency = useForm();
  const accountNumber = useForm();
  const accountName = useForm();
  const cep = useForm("cep");
  const street = useForm();
  const city = useForm();
  const state = useForm();
  const country = useForm();
  const lat = useForm();
  const long = useForm();
  const phonenumber = useForm("phonenumber");
  const whatsapp = useForm("phonenumber");
  const monday = useForm();
  const tuesday = useForm();
  const wednesday = useForm();
  const thursday = useForm();
  const friday = useForm();
  const saturday = useForm();
  const sunday = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name.raw);
    formData.append("manager", user.name.raw);
    formData.append("avatar", avatar.raw);
    formData.append("pix.owner", avatar.raw);
  }

  async function fetchReligions() {
    const { url, options } = RELIGIONS_GET();
    const { response, json } = await request(url, options);
    console.log(json);
    setReligions(json);
  }

  useEffect(() => {
    fetchReligions();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="animeLeft">
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            label="Nome da Instituição"
            type="text"
            name="name"
            {...name}
          />
          <Input label="Link da imagem" type="text" name="avatar" {...avatar} />
          <label className={styles.label}>Pix</label>
          <Input label="Nome" type="text" name="pixName" {...pixName} />
          <Input label="Banco" type="text" name="pixBank" {...pixBank} />
          <Input label="Chave" type="text" name="pixKey" {...pixKey} />
          <label className={styles.label}>Conta Bancária</label>
          <Input
            label="Titular da Conta"
            type="text"
            name="accountName"
            {...accountName}
          />
          <Input
            label="Banco"
            type="text"
            name="accountBank"
            {...accountBank}
          />
          <label className={styles.label}>Tipo da Conta</label>
          <select
            onChange={(text) => setAccountType(text.target.value)}
            name="accountType"
            className={styles.select}
          >
            <option value="Conta Corrente">Conta Corrente</option>
            <option value="Conta Poupança">Conta Poupança</option>
          </select>
          <Input
            label="Agência"
            type="text"
            name="accountAgency"
            {...accountAgency}
          />
          <Input
            label="Número da Conta"
            type="text"
            name="accountNumber"
            {...accountNumber}
          />

          <label className={styles.label}>Religião</label>
          <select
            onChange={(religion) => setAccountType(religion.target.value)}
            name="accountType"
            className={styles.select}
          >
            {religions.map((religion) => (
              <option key={religion.id} value={religion.name}>
                {religion.name}
              </option>
            ))}
          </select>
          <label className={styles.label}>Endereço</label>
          <Input label="CEP" type="text" name="cep" {...cep} />
          <Input label="Logradouro" type="text" name="street" {...street} />
          <Input label="Número" type="text" name="number" />
          <Input label="Cidade" type="text" name="city" {...city} />
          <Input label="Estado" type="text" name="state" {...state} />
          <Input label="País" type="text" name="country" {...country} />
          <Input label="Latitude" type="text" name="lat" {...lat} />
          <Input label="Longitude" type="text" name="long" {...long} />
          <label className={styles.label}>Informações</label>
          <Input
            label="Número de telefone"
            type="text"
            name="phonenumber"
            {...phonenumber}
          />
          <Input label="Whatsapp" type="text" name="whatsapp" {...whatsapp} />
          <Input label="Website" type="text" name="website" />
          <Input label="Instagram" type="text" name="instagram" />
          <Input label="Facebook" type="text" name="facebook" />

          <label className={styles.label}>Eventos Diários</label>
          <Input label="Segunda-feira" type="text" name="monday" {...monday} />
          <Input label="Terça-feira" type="text" name="tuesday" {...tuesday} />
          <Input
            label="Quarta-feira"
            type="text"
            name="wednesday"
            {...wednesday}
          />
          <Input
            label="Quinta-feira"
            type="text"
            name="thursday"
            {...thursday}
          />
          <Input label="Sexta-feira" type="text" name="friday" {...friday} />
          <Input label="Sábado" type="text" name="saturday" {...saturday} />
          <Input label="Domingo" type="text" name="sunday" {...sunday} />
          <Button>Cadastrar</Button>
        </form>
      </section>
    );
  else return null;
};

export default InstitutionCreate;
