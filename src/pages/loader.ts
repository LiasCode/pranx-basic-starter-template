import type { GetStaticProps } from "pranx";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      msg: "Hello from the static prop",
    },
  };
};
