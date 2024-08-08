import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { RAILS_API_URL } from "../../constants";
import "./ToDoDetails.css";

const ToDoDetails = () => {
  const [todo, setTodo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentTodo = async () => {
      try {
        const response = await fetch(`${RAILS_API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setTodo(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log("error ...", e);
      }
    };

    fetchCurrentTodo();
  }, [id]); // Dependency array ensures the effect runs when `id` changes

  if (!todo) return <h2> Loading ...</h2>;

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
      <Link to="/"> Back to List</Link>
    </div>
  ) 
};

export default ToDoDetails;

