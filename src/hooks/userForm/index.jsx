import React, { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  number: {
    regex: /^\d+$/,
    message: "Utile apenas números",
  },
  cep: {
    regex: /^[\d]{5}-[\d]{3}/,
    message: "Digite um CEP válido",
  },
  phonenumber: {
    regex: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
    message: "Digite um número de telefone válido",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (type == false) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    }

    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
