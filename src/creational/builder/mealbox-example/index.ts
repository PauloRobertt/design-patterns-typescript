//Cliente

import { MainDishBuilder } from "./classes/main-bish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage();
console.log(mainDishBuilder.getMeal());
