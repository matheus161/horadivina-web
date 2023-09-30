import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import useForm from "../../hooks/userForm";
import { RELIGIONS_GET, INSTITUTION_UPDATE } from "../../../api";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Helper/Error";
import Loading from "../../components/Helper/Loading";
import { useNavigate } from "react-router-dom";

function InstitutionFields() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("Conta Corrente");
  const { data, loading, error, request } = useFetch();
  const [religions, setReligions] = useState([]);
  const [selectedReligion, setSelectedReligion] = useState("");
  const [institution, setInstitution] = useState("");
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
  const houseNumber = useForm("number");
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
      religion: [selectedReligion],
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
        email: email.value,
        website: website.value,
        instagram: instagram.value,
        facebook: facebook.value,
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

    const { url, options } = INSTITUTION_UPDATE(
      formData,
      institution._id,
      token
    );
    await request(url, options);

    navigate("/main");
  }

  async function fetchReligions() {
    const { url, options } = RELIGIONS_GET();
    const { response, json } = await request(url, options);
    setReligions(json);
  }

  function fetchInstitutionFromLocalStorage() {
    const storedInstitution = JSON.parse(
      window.localStorage.getItem("INSTITUTION")
    );

    setInstitution(storedInstitution);
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
      houseNumber.setValue(storedInstitution.address.number);
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
    }
  }

  useEffect(() => {
    fetchReligions();
    fetchInstitutionFromLocalStorage();
  }, [request]);

  useEffect(() => {
    if (institution && institution.religion) {
      const selectedReligionId = institution?.religion[0]?._id;
      const selectedReligionObject = religions.find(
        (religion) => religion._id === selectedReligionId
      );

      if (selectedReligionObject) {
        setSelectedReligion(selectedReligionObject);
      }
    }
  }, [institution, religions]);

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
            onChange={(religion) => setSelectedReligion(religion.target.value)}
            name="selectedReligion"
            className={styles.select}
            value={selectedReligion._id}
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
          <Input label="Email" type="text" name="email" {...email} />
          <Input label="Website" type="text" name="website" {...website} />
          <Input
            label="Instagram"
            type="text"
            name="instagram"
            {...instagram}
          />
          <Input label="Facebook" type="text" name="facebook" {...facebook} />
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
          <Button>Atualizar</Button>
        </form>
      </section>
    );
  else return null;
}

export default InstitutionFields;
