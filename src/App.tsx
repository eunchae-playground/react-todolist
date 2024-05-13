import "./App.css";
import Clock from "./Clock";
import Timer from "./Timer";
import Todolist from "./Todolist";

function App() {
  return (
    <div className="App">
      <Todolist />
      <Clock />
      <Timer />
    </div>
  );
}

export default App;
