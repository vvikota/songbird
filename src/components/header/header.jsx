import React from "react";

const Header = () => {
  return <header>
    <div className="top-header">
      <img src="#" alt="logo"/>
      <span className="point-counter">Score: 11</span>
    </div>

    <div className="current-question">
      <span>Разминка</span>
      <span>Воробьиные</span>
      <span>Лесные птицы</span>
      <span>Певчие птицы</span>
      <span>Хищные птицы</span>
      <span>Морские птицы</span>
    </div>

  </header>
}

export default Header;