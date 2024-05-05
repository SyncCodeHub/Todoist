import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import "./TodoistItems.css";

function TodoistItem({ CTodoist, index }) {
  return (
    <div className="Todoist-item-wrapper">
      <div className="Todoist-item-text">
        <div>{index} .</div>
        <div>{CTodoist.name}</div>
      </div>
      <div className="Todoist-item-button">
        <button className="pencil-button">
          <PencilIcon />
        </button>
        <button className="trash-button">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}
export default TodoistItem;
