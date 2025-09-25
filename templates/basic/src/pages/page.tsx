import type { GetStaticPropsFunction, InferStaticProps } from "pranx";

export default function HomePage(props: InferStaticProps<typeof getStaticProps>) {
  return (
    <div>
      <div>
        <h1>Home Page</h1>

        <h1>Title {props.title}</h1>
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
