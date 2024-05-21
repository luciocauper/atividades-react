import React from "react";

function Atv(props) {
  return (
    <li>
      {props.nome}
      <button onClick={() => props.editar(props.index)}>Editar</button>
      <button onClick={() => props.delete(props.index)}>Delete</button>
    </li>
  );
}

function List(props) {
  return (
    <>
      <ul>
        {props.nomes.map((nome, index) => (
          <Atv
            key={index}
            index={index}
            nome={nome}
            delete={props.delete}
            editar={props.editar}
          />
        ))}
      </ul>
    </>
  );
}

export default List;
