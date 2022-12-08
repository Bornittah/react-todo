import React from 'react';
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';

function TodoItem({
  todo, handleChangeProps, deleteTodoProps,
}) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = todo;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button type="button" onClick={() => deleteTodoProps(id)}>
        <AiFillDelete className="del-icon icon" />
      </button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
}

export default TodoItem;
TodoItem.defaultProps = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    completed: PropTypes.bool,
    title: PropTypes.string,
  }),
  handleChangeProps: null,
  deleteTodoProps: null,
};
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    completed: PropTypes.bool,
    title: PropTypes.string,
  }),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};
