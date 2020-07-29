import React from "react";
import './header.css';

import logo from '../../assets/images/logo-songbird.svg';

const Header = () => {
  return <header>
    <div className="top-header">
      <img src={logo} alt="logo"/>
      <span className="point-counter">Score: 11</span>
    </div>

    <div className="category-questions">
      <span className="category-questions__item category-questions__item--active">Разминка</span>
      <span className="category-questions__item">Воробьиные</span>
      <span className="category-questions__item">Лесные птицы</span>
      <span className="category-questions__item">Певчие птицы</span>
      <span className="category-questions__item">Хищные птицы</span>
      <span className="category-questions__item">Морские птицы</span>
    </div>

  </header>
}

export default Header;