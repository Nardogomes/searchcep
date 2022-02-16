import { Main } from "./styles.js";

export function Card(props) {
  return (
    <Main className="main">
      <h2>CEP: {props.address.cep}</h2>

      <span>Rua: {props.address.logradouro}</span>
      <span>Complemento: {props.address.complemento}</span>
      <span>Bairro: {props.address.bairro}</span>
      <span>
        {props.address.localidade} - {props.address.uf}
      </span>
    </Main>
  );
}
