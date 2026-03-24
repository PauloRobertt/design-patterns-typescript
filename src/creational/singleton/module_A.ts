import { MyDatabaseClassic } from "./db/my-database-classic";
import { myDatabaseClassic as MyDatabaseClassicModuleB } from "./module_B";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.addUser({ name: "Paulo", age: 22 });
myDatabaseClassic.addUser({ name: "Roberto", age: 23 });
MyDatabaseClassicModuleB.showUser();
