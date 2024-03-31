import { useState } from "react";
import WeatherAPI from "./WeatherAPI";
function ToDoList() {

    const [tasks, setTasks] = useState([
        {
            "Name": "Run",
            "Difficult": "3",
            "Type": "Soul"
        }
    ])

    const [inputName, setInputName] = useState("");
    const [inputDifficult, setInputDifficult] = useState("");
    const [inputType, setInputType] = useState("");

    const sendForm = (event: any) => {
        event.preventDefault();
        addTask();
    }

    const deleteTask = (index: number) => {
        const newListTasks = [...tasks];
        newListTasks.splice(index, 1);
        setTasks(newListTasks);
    };

    const addTask = () => {
        const taskName = inputName;
        const taskDifficult = inputDifficult;
        const taskType = inputType;

        const newTask = {
            "Name": taskName,
            "Difficult": taskDifficult,
            "Type": taskType
        }

        const newListTasks = [...tasks];
        if(!newListTasks.includes(newTask)){
            newListTasks.push(newTask);
            setTasks(newListTasks);
        }
        setInputDifficult("");
        setInputName("");
        setInputType("");
    };

    const deleteRandomTask = () => {
        const indice = Math.floor(Math.random() * tasks.length);
        deleteTask(indice);
    };

    return (
        <div>
            <form onSubmit={sendForm}>

                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        placeholder="Write your name"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Difficult: </label>
                    <select value={inputDifficult} onChange={(e) => setInputDifficult(e.target.value)}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div>
                    <label>Type: </label>
                    <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
                        <option></option>
                        <option>Soul</option>
                        <option>Mind</option>
                        <option>Body</option>
                    </select>

                </div>
                <div>
                    <input
                        type="submit"
                        value="Send"
                    />
                </div>
            </form>
            <div>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div>
                            <label>Name: </label>
                            {task.Name}
                        </div>
                        <div>
                            <label>Difficult: </label>
                            {task.Difficult}
                        </div>
                        <div>
                            <label>Type: </label>
                            {task.Type}
                        </div>
                        <div>
                            <label>City: </label>
                            <div>
                                <WeatherAPI/>
                            </div>
                            
                        </div>
                        <div>
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </div>
            <button onClick={deleteRandomTask}>Delete Random Task</button>
        </div>
    )
}

export default ToDoList;