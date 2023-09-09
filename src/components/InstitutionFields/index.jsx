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

function InstitutionFields() {
  const { user } = useContext(userContext);
  const [accountType, setAccountType] = useState("Conta Corrente");
  const { data, loading, error, request } = useFetch();
  const [religions, setReligions] = useState([]);
  const [selectedReligion, setSelectedReligion] = useState("");
  const name = useForm(null);
  const avatar = useForm(null);
  const pixName = useForm();
  const pixBank = useForm();
  const pixKey = useForm();
  const accountBank = useForm();
  const accountAgency = useForm();
  const accountNumber = useForm();
  const accountName = useForm();
  const cep = useForm("cep");
  const street = useForm();
  const number = useForm("number");
  const city = useForm();
  const state = useForm();
  const country = useForm();
  const lat = useForm();
  const long = useForm();
  const phonenumber = useForm("phonenumber");
  const whatsapp = useForm("phonenumber");
  const email = useForm(null);
  const website = useForm(null);
  const instagram = useForm(null);
  const facebook = useForm(null);
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

  function fetchInstitutionFromLocalStorage() {
    const storedInstitution = JSON.parse(
      window.localStorage.getItem("INSTITUTION")
    );
    console.log("STORED", storedInstitution);
    if (storedInstitution) {
      name.setValue(storedInstitution.name);
      avatar.setValue(storedInstitution.avatar);
      pixName.setValue(storedInstitution.pix.owner);
      pixBank.setValue(storedInstitution.pix.bankName);
      pixKey.setValue(storedInstitution.pix.key);
      accountBank.setValue(storedInstitution.account.bankName);
      accountAgency.setValue(storedInstitution.account.agency);
      accountNumber.setValue(storedInstitution.account.accountNumber);
      accountName.setValue(storedInstitution.account.owner);
      cep.setValue(storedInstitution.address.cep);
      street.setValue(storedInstitution.address.street);
      number.setValue(storedInstitution.address.number);
      city.setValue(storedInstitution.address.city);
      state.setValue(storedInstitution.address.state);
      country.setValue(storedInstitution.address.country);
      lat.setValue(storedInstitution.address.lat);
      long.setValue(storedInstitution.address.long);
      phonenumber.setValue(storedInstitution.information.number);
      whatsapp.setValue(storedInstitution.information.whatsapp);
      email.setValue(storedInstitution.information.email);
      website.setValue(storedInstitution.information.website);
      instagram.setValue(storedInstitution.information.instagram);
      facebook.setValue(storedInstitution.information.facebook);
      monday.setValue(storedInstitution.dailyEvents.segunda);
      tuesday.setValue(storedInstitution.dailyEvents.terca);
      wednesday.setValue(storedInstitution.dailyEvents.quarta);
      thursday.setValue(storedInstitution.dailyEvents.quinta);
      friday.setValue(storedInstitution.dailyEvents.sexta);
      saturday.setValue(storedInstitution.dailyEvents.sabado);
      sunday.setValue(storedInstitution.dailyEvents.domingo);
      if (storedInstitution && storedInstitution.religion) {
        const selectedReligionId = storedInstitution.religion;
        const selectedReligionObject = religions.find(
          (religion) => religion.id === selectedReligionId
        );

        if (selectedReligionObject) {
          setSelectedReligion(selectedReligionObject.name);
        }
      }
    }
  }

  useEffect(() => {
    fetchReligions();
    fetchInstitutionFromLocalStorage();
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
          <div className={styles.formDonation}>
            <Input label="Nome" type="text" name="pixName" {...pixName} />
            <Input label="Banco" type="text" name="pixBank" {...pixBank} />
            <Input label="Chave" type="text" name="pixKey" {...pixKey} />
          </div>
          <label className={styles.label}>Conta Bancária</label>
          <div className={styles.formDonation}>
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
          </div>
          <label className={styles.label}>Religião</label>
          <select
            onChange={(religion) => setSelectedReligion(religion.target.value)}
            name="accountType"
            className={styles.select}
            value={selectedReligion}
          >
            {religions.map((religion) => (
              <option key={religion._id} value={religion.name}>
                {religion.name}
              </option>
            ))}
          </select>

          <label className={styles.label}>Endereço</label>
          <div className={styles.formDonation}>
            <Input label="CEP" type="text" name="cep" {...cep} />
            <Input label="Logradouro" type="text" name="street" {...street} />
            <Input label="Número" type="text" name="number" />
            <Input label="Cidade" type="text" name="city" {...city} />
            <Input label="Estado" type="text" name="state" {...state} />
            <Input label="País" type="text" name="country" {...country} />
            <Input label="Latitude" type="text" name="lat" {...lat} />
            <Input label="Longitude" type="text" name="long" {...long} />
          </div>
          <label className={styles.label}>Informações</label>
          <div className={styles.formDonation}>
            <Input
              label="Número de telefone"
              type="text"
              name="phonenumber"
              {...phonenumber}
            />
            <Input label="Whatsapp" type="text" name="whatsapp" {...whatsapp} />
            <Input label="Email" type="text" name="email" {...email} />
            <Input label="Website" type="text" name="website" />
            <Input label="Instagram" type="text" name="instagram" />
            <Input label="Facebook" type="text" name="facebook" />
          </div>
          <label className={styles.label}>Eventos Diários</label>
          <div className={styles.formDonation}>
            <Input
              label="Segunda-feira"
              type="text"
              name="monday"
              {...monday}
            />
            <Input
              label="Terça-feira"
              type="text"
              name="tuesday"
              {...tuesday}
            />
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
          </div>
          <Button>Cadastrar</Button>
        </form>
      </section>
    );
  else return null;
}

export default InstitutionFields;
