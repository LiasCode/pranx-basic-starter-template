import { Layout } from "../../layout/layout";

export default function ServerSidePage(props: { msg: string }) {
  return (
    <Layout>
      <div>
        <h1 class="text-2xl text-white my-4">Server Side Props</h1>

        <div class="w-full border-b border-b-white"></div>

        <pre class={"my-4"}>
          <code>Server Side Props: {JSON.stringify(props.msg, null, 4)}</code>
        </pre>

        <div class="w-full border-b border-b-white"></div>
      </div>
    </Layout>
  );
}
