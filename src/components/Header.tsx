export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md py-4 px-6">
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Pranx Basic</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a
              href="/"
              className="text-white hover:text-indigo-200 transition-colors font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white hover:text-indigo-200 transition-colors font-medium"
            >
              About
            </a>
          </li>
          {["1", "2", "3"].map((id) => (
            <li key={id}>
              <a
                href={`/product/${id}`}
                className="text-white hover:text-indigo-200 transition-colors font-medium"
              >
                Product {id}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/not-found"
              className="text-red-400 hover:text-indigo-200 transition-colors font-medium"
            >
              404
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
