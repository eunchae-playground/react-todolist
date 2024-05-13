import { useState } from "react";
import TodoDetailModal from "./TodoDetailModal";

export interface Todo {
  id: number;
  title: string;
  isChecked: boolean;
}

const Todolist = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "공부", isChecked: false },
    { id: 2, title: "운동", isChecked: false },
    { id: 3, title: "독서", isChecked: false },
  ]);
  const [newTodo, setNewTodo] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [modalTodo, setModalTodo] = useState<Todo>();

  const handleClickAddButton = () => {
    if (!newTodo) {
      alert("할 일을 입력해 주세요.");
      return;
    }

    setTodos([
      ...todos,
      { id: todos.length + 1, title: newTodo, isChecked: false },
    ]);
  };

  const handleCheckedChange = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const handleClickTodoTitle = (todo: Todo) => {
    setModalTodo(todo);
    setOpen(true);
  };

  const handleClickDeleteButton = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>오늘 할 일</h1>

      <div>
        <input
          type="text"
          placeholder="할 일 입력"
          style={{ marginRight: "4px" }}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button onClick={handleClickAddButton}>추가</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isChecked}
              onChange={() => handleCheckedChange(todo.id)}
            />
            {todo.isChecked ? (
              <del>{todo.title}</del>
            ) : (
              <span onClick={() => handleClickTodoTitle(todo)}>
                {todo.title}
              </span>
            )}
            <button
              onClick={() => handleClickDeleteButton(todo.id)}
              style={{ marginLeft: "4px" }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>

      <TodoDetailModal open={open} setOpen={setOpen} todo={modalTodo} />
    </div>
  );
};

export default Todolist;
