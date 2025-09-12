import { ServerEntryProps } from "pranx";
import { Meta, Scripts } from "pranx/server";

export default function ServerEntry({ children }: ServerEntryProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Pranx Basic Template</title>

        <meta
          name="color-scheme"
          content="light dark"
        />
        <meta
          name="theme-color"
          content="#ffffff"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
        <Meta />
      </head>
      <body class="dark text-foreground group/body overscroll-none font-sans antialiased">
        <div id="app-root">{children}</div>
        <Scripts />
      </body>
    </html>
  );
}
