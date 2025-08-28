import "github-markdown-css";
import { mount, StartApp } from "pranx/client";
import "./styles/styles.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
mount(<StartApp />, document.querySelector("#app")!);
