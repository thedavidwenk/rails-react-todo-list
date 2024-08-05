import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React on Rails To-Do-List</h1>
        <p>find this application layout in react-frontend/src/app.jsx </p>
        <ToDoList></ToDoList>
      </div>
    </>
  );
}

export default App;
