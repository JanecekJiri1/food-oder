import React, { useEffect, useState } from "react";
// styly
import classes from "./AvailableMeals.module.css";
// background for 'menu'
import Card from "../UI/Card";

import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [meals2, setMeals2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://food-oder-port-default-rtdb.europe-west1.firebasedatabase.app/meals.json");

      if (!response.ok) {
        throw new Error("Someting went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);

      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    /////////////////////////////////////////////////////
    const feMeals2 = async () => {
      const response = await fetch("https://food-oder-port-default-rtdb.europe-west1.firebasedatabase.app/meals2.json");

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals2(loadedMeals);

      setIsLoading(false);
    };

    feMeals2().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    //////////////////////////////
  }, []);

  if (isLoading) {
    return <section className={classes.MealsLoading}>Loading...</section>;
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  const mealsList2 = meals2.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
  return (
    <section className={classes.meals}>
      <Card>
        <h2>Burgers</h2>
        <hr />
        <ul>{mealsList}</ul>

        <br />
        <h2>Sushi</h2>
        <hr />
        <ul>{mealsList2}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
