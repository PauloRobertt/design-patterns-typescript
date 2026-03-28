import { User } from "../interfaces/user";

export const MyDatabaseModule = (function () {
  const users: User[] = [];
  return {
    addUser(user: User): void {
      users.push(user);
    },

    removerUser(index: number): void {
      users.splice(index, 1);
    },

    showUser() {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();
