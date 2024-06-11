import React, { useState, FormEvent } from "react";
import List from "./List";

interface MyFormProps {}

const MyForm: React.FC<MyFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>([]);

  const [atribuicao, setAtribuicao] = useState<string>("");
  const [atribuicaos, setAtribuicaos] = useState<string[]>([]);

  const [data, setData] = useState<string>("");
  const [datas, setDatas] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name.trim() !== "" && atribuicao.trim() !== "" && data.trim() !== "") {
      setNames([...names, name]);
      setAtribuicaos([...atribuicaos, atribuicao]);
      setDatas([...datas, data]);

      setName("");
      setAtribuicao("");
      setData("");
    }
  };

  const handleDelete = (index: number) => {
    const newNames = names.filter((_, i) => i !== index);
    const newAtribuicaos = atribuicaos.filter((_, i) => i !== index);
    const newDatas = datas.filter((_, i) => i !== index);

    setNames(newNames);
    setAtribuicaos(newAtribuicaos);
    setDatas(newDatas);
  };

  const handleEdit = (index: number) => {
    const newName = prompt("Edite nome da tarefa:", names[index]);
    const newAtribuicao = prompt("Edite a atribuição:", atribuicaos[index]);
    const newData = prompt("Edite a data (AAAA-MM-DD):", datas[index]);
    if (newName !== null && newName.trim() !== "" && newAtribuicao !== null && newAtribuicao.trim() !== "" && newData !== null && newData.trim() !== "") {
      const newNames = names.map((name, i) => (i === index ? newName : name));
      const newAtribuicaos = atribuicaos.map((atribuicao, i) => (i === index ? newAtribuicao : atribuicao));
      const newDatas = datas.map((data, i) => (i === index ? newData : data));

      setNames(newNames);
      setAtribuicaos(newAtribuicaos);
      setDatas(newDatas);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Digite a sua tarefa:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label> Atribuído a:
          <input
            type="text"
            value={atribuicao}
            onChange={(e) => setAtribuicao(e.target.value)}
          />
        </label>
        <br />
        <label> Data:
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
      <List nomes={names} atribuicaos={atribuicaos} datas={datas} delete={handleDelete} editar={handleEdit} />
    </>
  );
}

export default MyForm;
