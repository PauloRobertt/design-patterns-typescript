import { MyDatabaseClassic } from "./db/my-database-classic";

export const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.addUser({ name: "Ana", age: 19 });
myDatabaseClassic.addUser({ name: "Beatriz", age: 28 });
myDatabaseClassic.showUser();
