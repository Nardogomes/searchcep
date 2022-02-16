import { useState } from "react";
import { InputCep } from "./components/InputCep/InputCep.js";
import { Card } from "./components/Card/Card.js";

import "./styles.css";

export function App() {
  const [input, setInput] = useState("");
  const [address, setAddress] = useState({});

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>

      <InputCep data={input} onSetInput={setInput} onSetAddress={setAddress} />

      <Card address={address} />
    </div>
  );
}
