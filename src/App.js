import './App.css';
import React, { useEffect, useState } from "react";

import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import TodoSort from './Components/TodoSort';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || [];
  });
  const [editId, setEditId] = useState(0);
  const [sortState, setSortState] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);

      const updatedTodos = todos.map((t) =>
        todo !== "" && (t.id === editTodo.id)
          ? (t = { id: t.id, todo, completed: t.completed })
          : { id: t.id, todo: t.todo, completed: t.completed }
      );

      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");

      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo, completed: false }, ...todos]);
      setTodo("");
    }

  }

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  }
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  }

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);

  }
  const handleSort = (state) => {
    setSortState(state);
  }

  const filteredTodos = todos.filter(t => {
    if (sortState === "Completed") return t.completed;
    if (sortState === "Not Completed") return !t.completed;
    if (!t.todo.toLowerCase().includes(searchQuery)) return false;
    return true;
  });

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
        />

        <TodoSort
          handleSort={handleSort}
          handleSearch={handleSearch}
        />

        <TodoList
          todos={filteredTodos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </div>
    </div>
  );
}

export default App;
