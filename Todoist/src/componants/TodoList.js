import { useState } from "react";
import TodoistInput from "./TodoistInput";
import TodoistItem from "./TodoistItem";
import './TodoistList.css';

function TodoistList() {
  const [Todoists, setTodoists] = useState([]);
  return (
    <div className="Todoist-list-cintainer">
      <h1>My Todoistsssss</h1>
      <TodoistInput Todoists={Todoists} setTodoists={setTodoists} />
      <div className="Todoist-items-wrapper">
       {Todoists.map((item, index,)=>{
        return(<TodoistItem key={item.id} CTodoist={item} index={index +1}/>)
       })}
      </div>
    </div>
  );
}
export default TodoistList;
