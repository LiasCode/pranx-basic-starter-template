import { PranxRouter } from "pranx/client";
import type { PropsWithChildren } from "preact/compat";

export default function App(props: PropsWithChildren) {
  return (
    <>
      <PranxRouter mode="spa" />
      {props.children}
    </>
  );
}
