import React from "react";
import './header.css';

import logo from '../../assets/images/logo-songbird.svg';

const Header = (props) => {
  const {
    categories,
    currenCategory,
    score
  } = props;
  // console.log(currenCategory)

  return <header>
    <div className="top-header">
      <img src={logo} alt="logo"/>
<span className="point-counter">Score: {score}</span>
    </div>

    <div className="category-questions">
      {categories.map((category, id) => {
        
        const activeClass = currenCategory === id ? ` category-questions__item--active` : ``;

        return <span 
            className={`category-questions__item` + activeClass}
            key={id}>
            {category}
          </span>})
      }
    </div>

  </header>
}

export default Header;