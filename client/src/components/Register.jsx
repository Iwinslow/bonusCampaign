import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

import FormInput from "../commons/FormInput";
import FormButton from "../commons/FormButton";

import { createClientByInvitation } from "../services/registerServices";

import styles from "../styles/Register.module.css";

function Register() {
  //declaracion de variables de estados locales
  const navigate = useNavigate();
  let { link } = useParams();
  const [btnDisabled, setBtnDisabled] = useState(false);
  //declaracion de variables de estados relacionadas al formulario y sus inputs
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    address: "",
    gender: "",
    link,
  });

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
      pattern: "^.{8,}$",
      errorMessage: "Ingrese una dirección valida",
      required: true,
    },
  ];

  //useEffect controla que todos los campos del formulario este completos correctamente y habilita el boton submit
  useEffect(() => {
    const checkFieldAreNotEmpty = Object.values(values).every((x) => x !== "");
    checkFieldAreNotEmpty &&
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email) &&
    /^([a-zA-Z]+[',.-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[',.-]?[a-zA-Z ]+)+$/.test(
      values.fullName
    ) &&
    values.gender !== "" &&
    /^.{6,}$/.test(values.address)
      ? setBtnDisabled(false)
      : setBtnDisabled(true);
  }, [values]);

  //Funciones manejadoras de eventos relacionados al formulario(cambios en Inputs/Submit del form)
  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("values en form", values);
    const newUser = await createClientByInvitation(values);
    if (newUser.message) {
      swal({
        text: newUser.message,
        icon: "error",
        timer: 1500,
        buttons: false,
      });
    } else {
      swal({
        text: "¡Se ha registrado exitosamente! Ha obtenido $5000 CLP.",
        icon: "success",
        timer: 2200,
        buttons: false,
      });
      navigate("/");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Formulario de registro</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {inputs.map((input, i) => (
            <FormInput
              key={i}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <select name="gender" onChange={onChange} className={styles.select}>
            <option selected hidden>
              Sexo
            </option>
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
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
