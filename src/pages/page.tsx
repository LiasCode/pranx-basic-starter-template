import { useSignal } from "@preact/signals";
import { useEffect } from "preact/compat";
import { Layout } from "../layout/layout";
import Docs from "./docs.md";
import "./home.scss";

export default function HomePage(props: { msg: string }) {
  const count = useSignal(0);

  useEffect(() => {
    console.log("Hello World");
  }, []);

  return (
    <Layout>
      <div id="home-page">
        <h1>Pranx Basic Template</h1>
        <button
          onClick={() => {
            count.value = count.value + 1;
            console.log(count.value);
          }}
        >
          Preact signals also works {"->"} {count.value}
        </button>

        <span>{props.msg}</span>

        <div class="separator-horizontal"></div>
        <Docs />
      </div>
    </Layout>
  );
}
