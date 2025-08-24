import type { GetStaticPathsFunction, GetStaticPropsFunction, InferStaticProps } from "pranx";
import { Header } from "src/components/Header";

export default function ProductDetailsPage(props: InferStaticProps<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div class="flex flex-col gap-4 p-6 max-w-3xl mx-auto">
        <h1 class="text-3xl">Product Page - ID: {props.id}</h1>
        <p>This is the product page for product with ID: {props.id}</p>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticPropsFunction<{ id: string }> = async (context) => {
  const { id } = context.params;

  return {
    props: {
      id,
    },
  };
};

export const getStaticPaths: GetStaticPathsFunction<{ id: string }> = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }, { params: { id: "3" } }],
    fallback: false,
  };
};
