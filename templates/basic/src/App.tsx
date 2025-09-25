import { PranxRouter } from "pranx/client";
import { Fragment, type PropsWithChildren } from "preact/compat";

export default function App(props: PropsWithChildren) {
  return (
    <Fragment>
      <PranxRouter mode="spa" />
      {props.children}
    </Fragment>
  );
}
