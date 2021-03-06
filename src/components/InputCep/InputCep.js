import { MdSearch } from "react-icons/md";
import { api } from "../../services/api";

import { Container } from "./styles";

export function InputCep(props) {
  async function handleSearch() {
    if (props.data === "") {
      return alert("Deve informar um cep para pesquisar.");
    }

    try {
      const response = await api.get(`${props.data}/json`);
      const data = response.data;

      props.onSetInput("");
      props.onSetAddress(data);
    } catch {
      alert("Erro na consultar do cep");
    }
  }

  return (
    <Container className="containerInput">
      <input
        type="text"
        placeholder="Digite o cep..."
        value={props.data}
        onChange={(event) => props.onSetInput(event.target.value)}
      />

      <button
        className="buttonSearch"
        onClick={async () => await handleSearch()}
      >
        <MdSearch size={25} color="#fff" />
      </button>
    </Container>
  );
}
