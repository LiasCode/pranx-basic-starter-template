import "github-markdown-css";
import { mount, StartApp } from "pranx/client";
import "./styles/styles.css";

const $root = document.querySelector("#app-root");

if (!$root) {
  throw new Error("#app-root element do not exits");
}

mount(<StartApp />, $root);
