import * as React from "react";
import './header.css';
import {connect} from "react-redux";
import {getCategories} from "../../reducer/main/selectors";
import {getCurrenCategory} from "../../reducer/main/selectors";
import {getScore} from "../../reducer/main/selectors";

import logo from '../../assets/images/logo.png';

interface HeaderProps {
  categories: string[]
  currenCategory: number
  score: number
}

const Header = (props: HeaderProps) => {
  const {
    categories,
    currenCategory,
    score
  } = props;

  return (
    <header>
      <div className="top-header">
        <img src={logo} alt="logo"/>
        <span className="point-counter">Score: {score}</span>
      </div>

      <div className="category-questions">
        {categories.map((category, id) => (
          <span 
            className={`category-questions__item${currenCategory === id ? ' category-questions__item--active' : ''}`}
            key={id}>
            {category}
          </span>
        ))}
      </div>
    </header>
  )
}

const mapStateToProps = (state: any, ownProps: any) => Object.assign({}, ownProps, {
  categories: getCategories(state),
  currenCategory: getCurrenCategory(state),
  score: getScore(state),
});

export default connect(mapStateToProps)(Header);