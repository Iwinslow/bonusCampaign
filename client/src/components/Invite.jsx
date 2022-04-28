import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import swal from "sweetalert";

import FormInput from "../commons/FormInput";
import FormButton from "../commons/FormButton";

import { generateInvitationLink } from "../services/invitationServices";

import styles from "../styles/Invite.module.css";

function Invite() {
  //declaracion de variables de estados locales
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [link, setLink] = useState("");
  //declaracion de variables de estados relacionadas al formulario y sus inputs
  const [values, setValues] = useState({
    email: "",
    fullName: "",
  });

  const inputs = [
    {
      name: "email",
      type: "email",
      placeholder: "Ingresar tu email",
      errorMessage: "Ingrese un email valido!",
      required: true,
    },
    {
      name: "fullName",
      type: "text",
      placeholder: "Nombre completo",
      errorMessage: "Debe ingresar su nombre y apellido",
      pattern:
        "^([a-zA-Z]+[',.-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[',.-]?[a-zA-Z ]+)+$",
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
    )
      ? setBtnDisabled(false)
      : setBtnDisabled(true);
  }, [values]);

  //Funciones manejadoras de eventos relacionados al formulario(cambios en Inputs/Submit del form/copiar link de invitación)
  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const generatedLink = await generateInvitationLink(values);
    if (generatedLink.message) {
      console.log(generatedLink);
      swal({
        text: generatedLink.message,
        icon: "error",
        timer: 1700,
        buttons: false,
      });
    } else {
      setLink(`http://localhost:3000/register/invite/${generatedLink}`);
      swal({
        text: "Ha generado un link de invitación de forma exitosa. ¡Envielo a un colega y ambos recibiran $5000 CLP!",
        icon: "success",
      });
      setValues({ email: "", fullName: "" });
    }
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Invita a un colega</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {inputs.map((input, i) => (
            <FormInput
              key={i}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <hr></hr>
          <FormButton type="submit" isDisabled={btnDisabled}>
            COMPARTIR
          </FormButton>
        </form>
        {link && (
          <div className={styles.link}>
            <a href={link}>{link}</a>
            <button
              className={styles.link__copyButton}
              onClick={copyToClipBoard}
            >
              <FaCopy />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Invite;
