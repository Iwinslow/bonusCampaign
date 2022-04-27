import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import FormInput from "../commons/FormInput";
import FormButton from "../commons/FormButton";

import { createClientByInvitation } from "../services/registerServices";

function Register() {
  let { link } = useParams();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    address: "",
    gender: "",
    link,
  });
  //Check if all field of the form are completed
  useEffect(() => {
    const checkFieldAreNotEmpty = Object.values(values).every((x) => x !== "");
    checkFieldAreNotEmpty ? setBtnDisabled(false) : setBtnDisabled(true);
  }, [values]);

  const inputs = [
    {
      name: "fullName",
      type: "text",
      placeholder: "Nombre completo",
      errorMessage: "Debe ingresar su nombre y apellido",
      pattern:
        "^([a-zA-Z]+[',.-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[',.-]?[a-zA-Z ]+)+$",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Ingresar tu email",
      errorMessage: "Ingrese un email valido!",
      required: true,
    },
    {
      name: "address",
      type: "text",
      placeholder: "Dirección",
      required: true,
    },
  ];

  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("values en form", values);
    createClientByInvitation(values);
    navigate("/invite");
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="register__container">
        <h2 className="register__title">Formulario de registro</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          {inputs.map((input, i) => (
            <FormInput
              key={i}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <select name="gender" onChange={onChange}>
            <option selected hidden>
              Sexo
            </option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
          <FormButton type="submit" isDisabled={btnDisabled}>
            REGISTRARSE
          </FormButton>
        </form>
      </div>
    </>
  );
}

export default Register;
