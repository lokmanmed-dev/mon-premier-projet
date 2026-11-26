import { useState } from "react";

export default function AutreMessage() {

  const [message, setMessage] = useState("Bienvenue visiteur");

  const [btnMessage, setBtnMessage] = useState("Inscription");

  function inscription() {
    setMessage("Votre inscription est effectuée");
    setBtnMessage("Merci");
  }

  return (
    <div>
      <h2>{message}</h2>

      <button onClick={inscription}>
        {btnMessage}
      </button>
    </div>
  );
}