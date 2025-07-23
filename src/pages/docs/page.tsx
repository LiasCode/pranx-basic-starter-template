import { Layout } from "../../layout/layout";
import docsStyles from "./docs.module.css";

export default function DocsPage() {
  return (
    <Layout>
      <div>
        <h1 class={docsStyles.title}>Docs</h1>
      </div>
    </Layout>
  );
}
