import { Todo } from "./Todolist";

const TodoDetailModal = ({
  open,
  setOpen,
  todo,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  todo?: Todo;
}) => {
  return (
    <dialog open={open}>
      <h1>투두 디테일 Modal</h1>
      <ul>
        <li>title: {todo?.title}</li>
      </ul>
      <button onClick={() => setOpen(false)}>닫기</button>
    </dialog>
  );
};

export default TodoDetailModal;
