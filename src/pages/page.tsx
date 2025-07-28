import { useSignal } from "@preact/signals";
import "github-markdown-css";
import { useEffect } from "preact/compat";
import Docs from "../data/docs.md";
import { Layout } from "../layout/layout";

export default function HomePage(props: { msg: string }) {
  const count = useSignal(0);

  useEffect(() => {
    console.log("Hello Pranx World");
  }, []);

  return (
    <Layout>
      <div className="flex flex-col gap-2 py-4">
        <h1 class="text-2xl text-white">Pranx Basic Template</h1>
        <button
          class="inline-flex max-w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none bg-gray-700 text-white hover:bg-gray-600 transition-all shadow-sm h-9 px-4 py-2"
          onClick={() => (count.value = count.value + 1)}
        >
          Preact signals also works {"->"} {count.value}
        </button>

        <div class="w-full border-b border-b-white"></div>

        <pre class={"my-4"}>
          <code>Static Props: {JSON.stringify(props.msg, null, 4)}</code>
        </pre>

        <div class="w-full border-b border-b-white"></div>

        <h1 class="text-2xl text-white">Rendering Markdown:</h1>

        <div class="markdown-body">
          <Docs />
        </div>
      </div>
    </Layout>
  );
}
