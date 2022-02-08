import { MdSearch } from "react-icons/md";

import "./styles.css";

export function App() {
  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite o cep..." />

        <button className="buttonSearch">
          <MdSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 60000-000</h2>

        <span>Rua: descrição da rua</span>
        <span>Complemento: descrição do complemento</span>
        <span>Bairro: descrição do bairro</span>
        <span>Fortalez - CE</span>
      </main>
    </div>
  );
}
