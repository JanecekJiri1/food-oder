import React, { Fragment } from "react";

// welcome info
import MealsSummary from "./MealsSummary";
// list of food
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
