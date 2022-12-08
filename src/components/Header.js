import React from 'react';

function Header() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '2em',
  };
  return (
    <header style={headerStyle}>
      <h1 className="heading">
        Todos
      </h1>
    </header>
  );
}

export default Header;
