import React, { createContext, useContext, useReducer } from "react";
import todosReducer, { Action } from "./todosReducer";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const initialTodos: Todo[] = [
  {
    id: 1,
    text: "Learn Typescript",
    done: false,
  },
  {
    id: 2,
    text: "Build Ecommerce App",
    done: false,
  },
  {
    id: 3,
    text: "Use typescript with react",
    done: false,
  },
];

const TodosContext = createContext<typeof initialTodos | null>(null);
const TodosDispatchContext = createContext<React.Dispatch<Action>>(() => null);

export function TodosProvider({
  children,
}: {
  children: React.ReactElement[];
}) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export const useTodos = () => useContext(TodosContext);
export const useDispatch = () => useContext(TodosDispatchContext);
