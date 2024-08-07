// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { RAILS_API_URL } from "../constants";
import Checkbox from "./Checkbox";


function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch todos from server
  useEffect(() => {
    async function loadTodos() {
      try {
        const response = await fetch(RAILS_API_URL);
        if (response.ok) {
          const json = await response.json();
          setTodos(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occurred while fetching the data.");
        console.log("Error:", e);
      } finally {
        setLoading(false);
      }
    }

    loadTodos();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  // update todo on click
  const handleCheckboxClick = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);

    const updatedTodo = updatedTodos.find((todo) => todo.id === id);
    const jsonData = { todo: { done: updatedTodo.done } };

    // Send data to the backend via PATCH
    fetch(`${RAILS_API_URL}/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div>
      {todos.map((todo) => (
        <form key={todo.id}>
          <div className="todo-container">
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
            <Checkbox
              checked={todo.done}
              onClick={() => handleCheckboxClick(todo.id)}
            />
          </div>
        </form>
      ))}
    </div>
  );
}

export default ToDoList;
