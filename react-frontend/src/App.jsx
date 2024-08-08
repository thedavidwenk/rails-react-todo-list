import "./App.css";
// import ToDoList from "./components/ToDoList";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./components/AppRoutes/AppRoutes";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <div>
          <Navbar/>
        </div>
        <div>
          <AppRoutes/>
        </div>
      </>
    </Router>
  );
}

export default App;
