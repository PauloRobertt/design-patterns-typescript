import { UseConfig } from "./class/useConfig";

const user = new UseConfig("Tema-Claro", "PT-BR", { notif: "APP" });
const user2 = user.clone();

user.idioma = "Ingles";
user.notificacoes.notif = "ALTERADO";

user2.tema = "Tema-Escuro";

console.log(user);
console.log(user2);
