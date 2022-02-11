import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { api } from "./services/api";

import "./styles.css";

export function App() {
  const [input, setInput] = useState("");
  const [address, setAddress] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Deve informar um cep para pesquisar.");
    }

    try {
      const response = await api.get(`${input}/json`);
      const data = response.data;

      setInput("");
      setAddress(data);
    } catch {
      alert("Erro na consultar do cep");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o cep..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <MdSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: {address.cep}</h2>

        <span>Rua: {address.logradouro}</span>
        <span>Complemento: {address.complemento}</span>
        <span>Bairro: {address.bairro}</span>
        <span>
          {address.localidade} - {address.uf}
        </span>
      </main>
    </div>
  );
}
