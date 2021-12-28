import React, { Fragment } from "react";

// import baner obrazku
import mealsImg from "../../assets/food4.jpg";
// import stylu
import classes from "./Header.module.css";
// import component button
import HeaderCartComponent from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>No Hungry Anymore</h1>
        <HeaderCartComponent onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
