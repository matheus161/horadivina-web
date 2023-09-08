import React from "react";
import InstitutionItem from "../InstitutionItem";
import { Link } from "react-router-dom";

function InstitutionsList() {
  const paginatedResults = [
    {
      subscribed: false,
      favorited: ["646bfa6804ca5000327f818c", "64e179d5a0039800346abc40"],
      religion: ["64a035022cd23000322927a6"],
      _id: "64aa3d31c90d8400324a553b",
      name: "Igreja Nosas Senhora de Fátima",
      manager: "Diocese de Estância",
      avatar:
        "https://drive.google.com/uc?export=view&id=1HWek6RdngrCtDtliAUnEzxTEfM6zpTv_",
      address: {
        _id: "64aa3d80c90d8400324a5551",
        cep: "49200-000",
        street: "Rua Raimundo Silveira Souza",
        number: 1,
        city: "Estância",
        state: "Sergipe",
        country: "Brasil",
        lat: "-11.259854121944114",
        long: "-37.43676868651101",
      },
      information: {
        _id: "64aa3d80c90d8400324a5552",
        number: "",
        whatsapp: "",
        email: "",
        website: "",
        instagram: "https://www.instagram.com/catedraldeestancia/",
        facebook: "",
      },
      dailyEvents: {
        _id: "64dbeb4eef462c00336ef6be",
        domingo: "06:30 - 10:00 - 17:00 - 19:00",
        segunda: "06:30 - 19:00",
        terca: "06:30 - 19:00",
        quarta: "06:30 - 19:00",
        quinta: "06:30 - 17:00 - 19:00",
        sexta: "06:30 - 19:00",
        sabado: "06:30 - 19:00",
      },
      __v: 0,
      distancia: "1.90 Km",
      favorite: true,
    },
    {
      subscribed: false,
      favorited: ["646d492c9fe46207984ec182"],
      religion: ["646e869d26e731106074a25b"],
      _id: "64aafcdea2c40c00328a9525",
      name: "Igreja Nosas Senhora do Rosário",
      manager: "Diocese de Estância",
      avatar:
        "https://drive.google.com/uc?export=view&id=1HWek6RdngrCtDtliAUnEzxTEfM6zpTv_",
      address: {
        _id: "64cf26c5ce16b3003396621e",
        cep: "49200-000",
        street: "Rua Raimundo Silveira Souza",
        number: 301,
        city: "Estância",
        state: "Sergipe",
        country: "Brasil",
        lat: "-11.259854121944114",
        long: "-37.43676868651101",
      },
      information: {
        _id: "64cf26c5ce16b3003396621f",
        number: "7999987-4321",
        hatsapp: "7999987-4321",
        email: "catedralestancia@email.com",
        website: "catedralestancia.com.br",
        nstagram: "https://www.instagram.com/catedraldeestancia/",
        facebook: "faceboon.com/catedralestancia",
      },
      dailyEvents: {
        _id: "64dbeb4eef462c00336ef6be",
        domingo: "06:30 - 10:00 - 17:00 - 19:00",
        segunda: "06:30 - 19:00",
        terca: "06:30 - 19:00",
        quarta: "06:30 - 19:00",
        quinta: "06:30 - 17:00 - 19:00",
        sexta: "06:30 - 19:00",
        sabado: "06:30 - 19:00",
      },
      __v: 0,
      distancia: "1.90 Km",
      favorite: false,
    },
    {
      subscribed: false,
      favorited: ["646bfa6804ca5000327f818c", "64e179d5a0039800346abc40"],
      religion: ["64a035022cd23000322927a6"],
      _id: "64aac8ac1bc84d0033c1af6c",
      name: "Paróquia da Natividade do Senhor",
      manager: "Diocese de Estância",
      avatar:
        "https://drive.google.com/uc?export=view&id=1D2frnKU-F5nNyloCRZnoyxEGPF_FKn8W",
      address: {
        _id: "64aac8ac1bc84d0033c1af6d",
        cep: "49200-000",
        street: "Estrada Porto do Mato",
        number: 1,
        city: "Porto do Mato",
        state: "Sergipe",
        country: "Brasil",
        lat: "-11.403602060041578",
        long: "-37.345453921210606",
      },
      information: {
        _id: "64aac8ac1bc84d0033c1af6e",
        number: "",
        hatsapp: "",
        email: "",
        website: "",
        nstagram: "https://www.instagram.com/catedraldeestancia/",
        facebook: "",
      },
      dailyEvents: {
        _id: "64dbeb4eef462c00336ef6be",
        domingo: "06:30 - 10:00 - 17:00 - 19:00",
        segunda: "06:30 - 19:00",
        terca: "06:30 - 19:00",
        quarta: "06:30 - 19:00",
        quinta: "06:30 - 17:00 - 19:00",
        sexta: "06:30 - 19:00",
        sabado: "06:30 - 19:00",
      },
      __v: 0,
      distancia: "17.85 Km",
      favorite: true,
    },
    {
      subscribed: false,
      favorited: ["646bfa6804ca5000327f818c", "64e179d5a0039800346abc40"],
      religion: ["64a035022cd23000322927a6"],
      _id: "64aac8ac1bc84d0033c1af6c",
      name: "Paróquia da Natividade do Senhor",
      manager: "Diocese de Estância",
      avatar:
        "https://drive.google.com/uc?export=view&id=1D2frnKU-F5nNyloCRZnoyxEGPF_FKn8W",
      address: {
        _id: "64aac8ac1bc84d0033c1af6d",
        cep: "49200-000",
        street: "Estrada Porto do Mato",
        number: 1,
        city: "Porto do Mato",
        state: "Sergipe",
        country: "Brasil",
        lat: "-11.403602060041578",
        long: "-37.345453921210606",
      },
      information: {
        _id: "64aac8ac1bc84d0033c1af6e",
        number: "",
        hatsapp: "",
        email: "",
        website: "",
        nstagram: "https://www.instagram.com/catedraldeestancia/",
        facebook: "",
      },
      dailyEvents: {
        _id: "64dbeb4eef462c00336ef6be",
        domingo: "06:30 - 10:00 - 17:00 - 19:00",
        segunda: "06:30 - 19:00",
        terca: "06:30 - 19:00",
        quarta: "06:30 - 19:00",
        quinta: "06:30 - 17:00 - 19:00",
        sexta: "06:30 - 19:00",
        sabado: "06:30 - 19:00",
      },
      __v: 0,
      distancia: "17.85 Km",
      favorite: true,
    },
    {
      subscribed: false,
      favorited: ["646bfa6804ca5000327f818c", "64e179d5a0039800346abc40"],
      religion: ["64a035022cd23000322927a6"],
      _id: "64aac8ac1bc84d0033c1af6c",
      name: "Paróquia da Natividade do Senhor",
      manager: "Diocese de Estância",
      avatar:
        "https://drive.google.com/uc?export=view&id=1D2frnKU-F5nNyloCRZnoyxEGPF_FKn8W",
      address: {
        _id: "64aac8ac1bc84d0033c1af6d",
        cep: "49200-000",
        street: "Estrada Porto do Mato",
        number: 1,
        city: "Porto do Mato",
        state: "Sergipe",
        country: "Brasil",
        lat: "-11.403602060041578",
        long: "-37.345453921210606",
      },
      information: {
        _id: "64aac8ac1bc84d0033c1af6e",
        number: "",
        hatsapp: "",
        email: "",
        website: "",
        nstagram: "https://www.instagram.com/catedraldeestancia/",
        facebook: "",
      },
      dailyEvents: {
        _id: "64dbeb4eef462c00336ef6be",
        domingo: "06:30 - 10:00 - 17:00 - 19:00",
        segunda: "06:30 - 19:00",
        terca: "06:30 - 19:00",
        quarta: "06:30 - 19:00",
        quinta: "06:30 - 17:00 - 19:00",
        sexta: "06:30 - 19:00",
        sabado: "06:30 - 19:00",
      },
      __v: 0,
      distancia: "17.85 Km",
      favorite: true,
    },
  ];

  return (
    <>
      <h1>Minhas Instituições</h1>
      <ul>
        {paginatedResults.map((data) => (
          <Link to={`/institution`} key={data.id}>
            <InstitutionItem institution={data} />
          </Link>
        ))}
      </ul>
    </>
  );
}

export default InstitutionsList;
