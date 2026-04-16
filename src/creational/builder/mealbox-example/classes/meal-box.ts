import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealBox implements MealCompositeProtocol {
  private readonly _childrens: MealCompositeProtocol[] = [];

  addMeal(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => {
      this._childrens.push(item);
    });
  }

  getPrice(): number {
    return this._childrens.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }
}
