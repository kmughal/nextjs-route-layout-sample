import { navLinks } from "./NavLinks";
import { Link } from "next";
export default function Header() {
  return (
    <header>
      <div className="brand">
        <h3>Example</h3>
      </div>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <ul>
              <li>
                <a key={index} href={link.path}>
                  {link.name}
                </a>
              </li>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}
