import { randomUUID } from "node:crypto";
import type { GetStaticPropsFunction, InferStaticProps } from "pranx";
import { Header } from "src/components/Header";

export default function ProductsPage(props: InferStaticProps<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div class="flex flex-col gap-4 p-6 max-w-3xl mx-auto">
        <h1 class="text-3xl">Product List</h1>
        {props.products.map((p) => (
          <div class={"flex flex-col gap-2"}>
            <div class="w-fit flex flex-row gap-2">
              <span class="font-bold capitalize">Product Id: </span>
              <h1 class="text-orange-400">{p.id}</h1>
            </div>
            <div class="w-fit flex flex-row gap-2">
              <span class="font-bold capitalize">Name: </span>
              <h1 class="text-orange-400">{p.name}</h1>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

type Products = { id: string; name: string };

export const getStaticProps: GetStaticPropsFunction<{ products: Products[] }> = async () => {
  const products: Products[] = [
    {
      id: randomUUID(),
      name: "Jugo de Limon",
    },
    {
      id: randomUUID(),
      name: "Jugo de Pera",
    },
    {
      id: randomUUID(),
      name: "Jugo de Mango",
    },
  ];

  return {
    props: {
      products,
    },
  };
};
