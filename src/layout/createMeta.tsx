import type { MetaFunction } from "pranx";
import type { VNode } from "preact";

export const createMeta =
  (nodes: VNode): MetaFunction =>
  async () => {
    return (
      <>
        <meta charset="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />

        <meta
          name="color-scheme"
          content="light dark"
        />

        <meta
          name="theme-color"
          content="#ffffff"
        />

        <meta
          name="author"
          content="LiasCode"
        />

        {nodes}
      </>
    );
  };
