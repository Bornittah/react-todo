import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillPlusCircle } from 'react-icons/ai';

function InputTodo({ addTodoProps }) {
  const [inputText, setInputText] = useState({ title: '' });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(inputText.title);
    setInputText({ title: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        <AiFillPlusCircle className="icon" />
      </button>
    </form>
  );
}

InputTodo.defaultProps = {
  addTodoProps: PropTypes.func,
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

export default InputTodo;
