import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

function TodoContainer() {
  function getTodos() {
    const todoList = JSON.parse(localStorage.getItem('todos'));
    return todoList || [];
  }

  const [todos, setTodos] = useState(getTodos());

  const handleChange = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        const updatedTodo = todo;
        if (todo.id === id) {
          updatedTodo.title = updatedTitle;
        }
        return updatedTodo;
      }),
    );
  };

  useEffect(() => {
    // storing todos items
    const todoList = JSON.stringify(todos);
    localStorage.setItem('todos', todoList);
  }, [todos]);

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
}
export default TodoContainer;
