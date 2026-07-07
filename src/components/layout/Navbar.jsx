import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Tournaments", path: "/tournaments" },
  { name: "Profile", path: "/profile" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-cyan-400 font-semibold"
        : "text-gray-300 hover:text-cyan-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Game<span className="text-cyan-400">Verse</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button 
  onClick={() => navigate("/tournaments")} className="hidden rounded-xl bg-cyan-400 px-5 py-2 font-semibold text-black transition hover:bg-cyan-300 md:block">
          Join Now
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#0B1020]/95 px-6 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-300 hover:text-cyan-400"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <button 
  onClick={() => navigate("/tournaments")} className="mt-2 rounded-xl bg-cyan-400 py-3 font-semibold text-black transition hover:bg-cyan-300">
              Join Now
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;