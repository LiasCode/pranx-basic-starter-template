import { Link } from "pranx/client";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="shadow-md py-4 px-6">
      <h1 className="text-3xl font-bold mb-2">Pranx Basic</h1>
      <nav>
        <ul className="flex gap-6">
          {[
            { to: "/", label: "Home" },
            {
              to: "/about",
              label: "About",
            },
            {
              to: "/user/pedro",
              label: "User Details",
            },
            {
              to: "/product",
              label: "Products",
            },
            {
              to: "/not-found",
              label: "404",
            },
          ].map((l) => {
            return (
              <li>
                <Button
                  asChild
                  variant="link"
                >
                  <Link to={l.to}>{l.label}</Link>
                </Button>
              </li>
            );
          })}

          <Button
            variant="ghost"
            onClick={() => {
              document.body.classList.toggle("dark");
            }}
          >
            Toggle theme
          </Button>
        </ul>
      </nav>
    </header>
  );
}
