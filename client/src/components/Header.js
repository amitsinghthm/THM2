import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-dark-green shadow-md h-32 sm:h-24 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-4 sm:py-6">
        <Link to="/">
          <h1 className="font-didot text-sm sm:text-2xl">
            <span className="text-slate-100 border-2 border-white p-2">
              TheHealthyMinds
            </span>
          </h1>
        </Link>

        <ul className="flex gap-4 ml-auto">
          <Link to="/">
            <li className="hidden font-didot sm:inline text-neon-green hover:underline text-base sm:text-lg">
              Home
            </li>
          </Link>
          <Link to="/services">
            <li className="hidden font-didot sm:inline text-neon-green hover:underline text-base sm:text-lg">
              Offerings
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden font-didot sm:inline text-neon-green hover:underline text-base sm:text-lg">
              About
            </li>
          </Link>
          <Link to="/blog">
            <li className="hidden font-didot sm:inline text-neon-green hover:underline text-base sm:text-lg">
              Blog
            </li>
          </Link>
          <Link to="/contact">
            <li className="hidden font-didot sm:inline text-neon-green hover:underline text-base sm:text-lg">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
