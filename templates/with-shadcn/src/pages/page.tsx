import type { GetStaticPropsFunction, InferStaticProps } from "pranx";
import { useState } from "preact/hooks";
import { Header } from "src/components/Header";
import { Button } from "src/components/ui/button";
import Docs from "../components/Docs.md";

export default function HomePage(props: InferStaticProps<typeof getStaticProps>) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div class="flex flex-col gap-4 p-6 max-w-3xl mx-auto">
        <h1 class="text-3xl">Home Page</h1>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Counter +1: {count}
        </Button>

        <h1>Title {props.title}</h1>

        <div class="markdown-body p-4 rounded-2xl">
          <Docs />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticPropsFunction<{ title: string }> = async () => {
  return {
    props: {
      title: "hola",
    },
  };
};
