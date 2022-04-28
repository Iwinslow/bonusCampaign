import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import swal from "sweetalert";

import FormInput from "../commons/FormInput";
import FormButton from "../commons/FormButton";

import { generateInvitationLink } from "../services/invitationServices";

function Invite() {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [link, setLink] = useState("");
  const [values, setValues] = useState({
    email: "",
    fullName: "",
  });
  //Check if all field of the form are completed
  useEffect(() => {
    const checkFieldAreNotEmpty = Object.values(values).every((x) => x !== "");
    checkFieldAreNotEmpty ? setBtnDisabled(false) : setBtnDisabled(true);
  }, [values]);

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
        timer: 1500,
        buttons: false,
      });
    } else {
      setLink(`http://localhost:3000/register/invite/${generatedLink}`);
    }
  };
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <>
      <div className="invite__container">
        <h2 className="invite__title">Invita a un colega</h2>
        <form className="invite__form" onSubmit={handleSubmit}>
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
          <div className="invite__link">
            <a href={link}>{link}</a>
            <button className="invite__copyButton" onClick={copyToClipBoard}>
              <FaCopy />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Invite;
