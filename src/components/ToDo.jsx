import { useState } from "react";

function ToDo() {
    const [todos, setTodos] = useState([]);

    const[newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== "") {
          setTodos([...todos, { text: newTask, completed: false }]);
          setNewTask("");
        }
      };

    return(
        <>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Lista de Tarefa</h1>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}
             placeholder="Tarefa" style={{ padding: "8px", width: "50%", marginRight: "10px" }}/>
            <button onClick={addTask} style={{borderRadius: '8px', padding: '8px 10px', borderColor: '#ddd', cursor: "pointer"}}>Adicionar</button>

            <ul style={{listStyle: 'none', padding: '0'}}>
                {todos.map((todo, index) => (
                    <li key={index} style={{display: "flex", padding: "8px", margin: "8px 30px",
                        backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "4px",}}>
                        <span>{todo.text}</span>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ToDo