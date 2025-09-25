import { mount } from "pranx/client";
import App from "./App";
import "./styles/styles.css";

const $root = document.querySelector("#app-root");

if (!$root) {
  throw new Error("#app-root element do not exits");
}

mount(<App />, $root);
