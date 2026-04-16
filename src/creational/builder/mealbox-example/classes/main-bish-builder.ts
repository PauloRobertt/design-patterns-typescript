import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meal";
import { MealBox } from "./meal-box";

export class MainDishBuilder implements MealBuilderProtocol {
  private readonly mealBox: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 5);
    const meat = new Meat("Carne", 5);
    this.mealBox.addMeal(rice, beans, meat);

    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage("beverage", 10);
    this.mealBox.addMeal(beverage);

    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert("dessert", 15);
    this.mealBox.addMeal(dessert);

    return this;
  }

  getMeal(): MealBox {
    return this.mealBox;
  }
}
