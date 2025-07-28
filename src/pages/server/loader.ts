import type { GetServerSideProps } from "pranx";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    msg: "Hello from the server props",
  };
};
