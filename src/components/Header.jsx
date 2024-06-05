import React from "react";

const links = [
  { name: "Home", path: "/" },
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
                <a
                  href={link.path}
                  className="font-semibold text-3xl hover:text-yellow-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
