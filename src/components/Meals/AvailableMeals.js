import React, {  useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const GET_MEAL_URL =
  "https://food-app-46961-default-rtdb.europe-west1.firebasedatabase.app/meals.json";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {

      try {
        
        setError(null);
  
        const response = await fetch(GET_MEAL_URL);
  
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
  
        const data = await response.json();
  
        const loadedMeals = [];
  
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
  
          console.log("loadedMeals", loadedMeals);
          setIsLoading(false);
        }
        setMeals(loadedMeals);
      } catch (error) {
        setIsLoading(false);
        setError(error.message)

      }
    };
    
      fetchMeals()
    
  }, []);

  let content;

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }
  if (error) {
    content = <section className={classes["error-text"]}>
    <p>{error}</p>
  </section>;
  }

  if (meals.length > 0) {
    content = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      />
    ));
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
