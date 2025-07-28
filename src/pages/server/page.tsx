import { Layout } from "../../layout/layout";

export default function ServerSidePage(props: { msg: string }) {
  return (
    <Layout>
      <div class={"w-full overflow-auto pb-6"}>
        <h1 class="text-2xl text-white my-4">Server Side Props</h1>

        <div class="w-full border-b border-b-white"></div>

        <pre class={"my-4"}>
          <code>
            Server Side Props:{" "}
            <span class={"text-orange-300"}>{JSON.stringify(props.msg, null, 4)}</span>
          </code>
        </pre>

        <div class="w-full border-b border-b-white"></div>
      </div>
    </Layout>
  );
}
