import "./src/public/css/style.css";
import { App } from "./src/js/app.js";

const app = App();

document.querySelector("#app").innerHTML = app;
