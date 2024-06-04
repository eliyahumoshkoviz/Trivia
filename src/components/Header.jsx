import React from "react";

const links = ["Home", "About", "Contact"];
export default function Header() {
  return (
    <header>
      <div className="container bg-slate-500 h-16 mx-auto flex items-center justify-center">
        <nav>
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={link}>
                <a href="card" className="font-semibold text-3xl hover:text-yellow-500">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
