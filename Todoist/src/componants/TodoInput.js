import { useState } from "react";
//import Box from "@mui/material/Box";
//import TextField from "@mui/material/TextField";
import { PlusIcon } from "@heroicons/react/outline";
import './TodoistInput.css';

function TodoistInput({ Todoists, setTodoists }) {
  const [Todoist, setTodoist] = useState("");

  function handleClick() {
    //id,name, isComplete we need thies 3 data from one Todoist
    const newTodoist = {
      id: 1,
      name: Todoist,
      isComplete: false,
    };
    const newTodoists = [...Todoists, newTodoist];
    setTodoists(newTodoists);
    setTodoist("");
  }
  return (
    <div className="Todoist-input-wrapper">
      <input
        label="Add New Todoist"
        value={Todoist}
        onChange={(event) => {
          return setTodoist(event.target.value);
        }}
        placeholder="Enter your Todoist.."
      />

      <button onClick={handleClick}>
        <PlusIcon className="plus-icon" />
      </button>
    </div>
  );
}
export default TodoistInput;
