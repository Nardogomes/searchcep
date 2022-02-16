export function Card(props) {
  return (
    <main className="main">
      <h2>CEP: {props.address.cep}</h2>

      <span>Rua: {props.address.logradouro}</span>
      <span>Complemento: {props.address.complemento}</span>
      <span>Bairro: {props.address.bairro}</span>
      <span>
        {props.address.localidade} - {props.address.uf}
      </span>
    </main>
  );
}
