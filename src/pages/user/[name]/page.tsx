import type { GetServerSidePropsFunction } from "pranx";
import { Header } from "src/components/Header";

export default function UserDetails(props: { name: string }) {
  console.log(props);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div class="flex flex-col gap-4 p-6 max-w-3xl mx-auto">
        <h1 class="text-3xl">User Details Page</h1>
        <div class="w-fit flex flex-row gap-2">
          <span class="font-bold capitalize">name: </span>
          <h1 class="text-orange-400">{props.name}</h1>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSidePropsFunction<{ name: string }> = async ({
  event,
}) => {
  return {
    name: event.context.params!.name,
  };
};
