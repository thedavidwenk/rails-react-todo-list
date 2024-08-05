import React, { useState, useEffect } from "react";
import { RAILS_API_URL } from "../constants";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="post-container">
          <h2>{todo.title}</h2>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
