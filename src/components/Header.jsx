import React from "react";
import { NavLink } from 'react-router-dom'


const links = [
  { name: "Card", path: "/card" },
  { name: "Favorite Questions", path: "/FavoriteQuestions" },
  { name: "Contact", path: "/contact" },
];
export default function Header() {
  return (
    <header>
      <div className="container bg-slate-500 h-16 mx-auto flex items-center justify-center">
        <nav>
          <ul className="flex gap-4">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path}
                  className="font-semibold text-3xl hover:text-yellow-500"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
