import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos, handleChangeProps, deleteTodoProps,
}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </div>
  );
}

TodosList.defaultProps = {
  todos: [],
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};
TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo: PropTypes.string,
    }),
  ),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};

export default TodosList;
