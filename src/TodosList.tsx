import React from "react";
import { useDispatch, useTodos } from "./TodosProvider";
import { Todo } from "./TodosProvider";

export default function TodosList() {
  const todos = useTodos();
  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoElement todo={todo} />
        </li>
      ))}
    </ul>
  );
}

type TodoProp = {
  todo: Todo;
};

function TodoElement({ todo }: TodoProp) {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="checkbox"
        name={`${todo.text}`}
        id={`${todo.text}`}
        checked={todo.done}
        onChange={(e) => {
          dispatch({
            type: "change",
            todo: {
              ...todo,
              done: e.target.checked,
            },
          });
        }}
      />
      {todo.text}
      <button
        onClick={() => {
          dispatch({ type: "remove", id: todo.id });
        }}
      >
        X
      </button>
    </>
  );
}
