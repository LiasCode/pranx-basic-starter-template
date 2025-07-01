import { useSignal } from "@preact/signals";
import type { MetaFunction } from "pranx";
import { useEffect } from "preact/compat";
import { Layout } from "../layout/layout";
import Docs from "./docs.md";
import "./home.scss";

export const meta: MetaFunction = async () => {
  return (
    <>
      <meta charset="utf-8" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <title>Home | Pranx Basic Template</title>

      <link
        rel="icon"
        type="image/svg+xml"
        href="/favicon.svg"
      />

      <meta
        name="color-scheme"
        content="light dark"
      />
      <meta
        name="theme-color"
        content="#ffffff"
      />

      <meta
        name="author"
        content="LiasCode"
      />
    </>
  );
};

export default function HomePage() {
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
        <div class="separator-horizontal"></div>
        <Docs />
      </div>
    </Layout>
  );
}
