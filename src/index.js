import { useState } from "react";
import ReactDOM from 'react-dom/client';
import List from "./List";
import './style.css';

function MyForm() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== ""){
        setNames([...names, name]);
        setName("");
    }
  };

  const handleDelete = (index) => {
    const newNames = names.filter((_, i) => i !== index);
    setNames(newNames);
  };

  const handleEdit = (index) => {
    const newName = prompt("Edite nome da tarefa:", names[index]);
    if (newName !== null && newName.trim() !== "") {
      const newNames = names.map((name, i) => (i === index ? newName : name));
      setNames(newNames);
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
        <input type="submit" />
      </form>
      <List nomes={names} delete={handleDelete} editar={handleEdit} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);