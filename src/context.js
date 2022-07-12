import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TodosContext = React.createContext();

const TodosProvider = TodosContext.Provider;
// const TodosConsumer = TodosContext.Consumer

class MyContext extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return <TodosProvider value="todos data">{children}</TodosProvider>;
  }
}

export { TodosContext, MyContext };

MyContext.defaultProps = {
  children: null,
};
MyContext.propTypes = {
  children: PropTypes.string,
};
