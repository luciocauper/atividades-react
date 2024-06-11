import React from "react";

function Atv(props) {
  const btn = {
    marginLeft: "10px",
    marginRight: "10px",
    color: "white",
    borderRadius: "10px",
    width: "auto",
    height: "auto",
    padding: "5px",
    border: "3px transparent",
  };
  return (
    <li>
      Atividade: {props.nome}<br></br>
      Atribuído a: {props.atribuicao}<br></br>
      Data: {props.data}<br></br>
      <button style={{ ...btn, backgroundColor: "green" }} onClick={() => props.editar(props.index)}>Editar</button>
      <button style={{ ...btn, backgroundColor: "#ff0000" }} onClick={() => props.delete(props.index)}>Delete</button>
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
            atribuicao={props.atribuicaos[index]}
            data={props.datas[index]}
            delete={props.delete}
            editar={props.editar}
          />
        ))}
      </ul>
    </>
  );
}

export default List;
