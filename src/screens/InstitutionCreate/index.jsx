import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import useForm from "../../hooks/userForm";
import { RELIGIONS_GET, INSTITUTION_POST } from "../../../api";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Helper/Error";
import Loading from "../../components/Helper/Loading";
import { useNavigate } from "react-router-dom";

const InstitutionCreate = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("Conta Corrente");
  const [religion, setReligion] = useState("");
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
  const houseNumber = useForm("number");
  const city = useForm();
  const state = useForm();
  const country = useForm();
  const lat = useForm();
  const long = useForm();
  const phonenumber = useForm("phonenumber");
  const whatsapp = useForm("phonenumber");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const monday = useForm();
  const tuesday = useForm();
  const wednesday = useForm();
  const thursday = useForm();
  const friday = useForm();
  const saturday = useForm();
  const sunday = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem("TOKEN");
    const adminStr = window.localStorage.getItem("ADMIN");
    const admin = JSON.parse(adminStr);
    const formData = {
      name: name.value,
      manager: admin.name,
      avatar: avatar.value,
      pix: {
        owner: pixName.value,
        bankName: pixBank.value,
        key: pixKey.value,
      },
      account: {
        bankName: accountBank.value,
        accountType: accountType,
        agency: accountAgency.value,
        accountNumber: accountNumber.value,
        owner: accountName.value,
      },
      religion: [religion],
      address: {
        cep: cep.value,
        street: street.value,
        number: houseNumber.value,
        city: city.value,
        state: state.value,
        country: country.value,
        lat: lat.value,
        long: long.value,
      },
      information: {
        number: phonenumber.value,
        whatsapp: whatsapp.value,
        email: email,
        website: website,
        instagram: instagram,
        facebook: facebook,
      },
      dailyEvents: {
        domingo: sunday.value,
        segunda: monday.value,
        terca: tuesday.value,
        quarta: wednesday.value,
        quinta: thursday.value,
        sexta: friday.value,
        sabado: saturday.value,
      },
    };
    console.log(formData);
    const { url, options } = INSTITUTION_POST(formData, token);
    const { response } = await request(url, options);
    if (response.status === 201) navigate("/main");
  }

  async function fetchReligions() {
    const { url, options } = RELIGIONS_GET();
    const { response, json } = await request(url, options);
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
            onChange={(religion) => setReligion(religion.target.value)}
            name="religion"
            className={styles.select}
          >
            {religions.map((religion) => (
              <option key={religion._id} value={religion._id}>
                {religion.name}
              </option>
            ))}
          </select>
          <label className={styles.label}>Endereço</label>
          <Input label="CEP" type="text" name="cep" {...cep} />
          <Input label="Logradouro" type="text" name="street" {...street} />
          <Input label="Número" type="text" name="number" {...houseNumber} />
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
          <Input
            label="Email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Instagram"
            type="text"
            name="instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <Input
            label="Facebook"
            type="text"
            name="facebook"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
          <Input
            label="Website"
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

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
          {/* {error && <p className={styles.error}>{error}</p>} */}
          <Button>Cadastrar</Button>
        </form>
      </section>
    );
  else return null;
};

export default InstitutionCreate;
