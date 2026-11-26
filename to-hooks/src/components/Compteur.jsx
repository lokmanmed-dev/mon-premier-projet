import { useState, useEffect } from "react";

export default function Compteur() {

  const [valeur, setValeur] = useState(0);

  function incrementer() {
    setValeur(valeur + 1);
  }

  function decrementer() {
    setValeur(valeur - 1);
  }

  useEffect(() => {
    console.log(valeur);
  });

  return (
    <div>
      <h1>Compteur : {valeur}</h1>

      <input
        type="button"
        value="Incrementer"
        onClick={incrementer}
      />

      <input
        type="button"
        value="Decrementer"
        onClick={decrementer}
      />
    </div>
  );
}
