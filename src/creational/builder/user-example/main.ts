import { UserBuilder } from "./build/userBuilder";

const userBuilder = new UserBuilder("Paulo", "paulorobert@hotmail.com");
const user = userBuilder.build();
console.log(user);
