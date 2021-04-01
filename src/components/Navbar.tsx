import React, { useEffect } from 'react';
import * as Icon from 'react-feather';
import { v4 } from 'uuid';
import halfmoon from 'halfmoon';
interface navLinks {
  name: string;
  href: string;
}
const navLinks: navLinks[] = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Contact me',
    href: '#',
  },
  {
    name: 'About me',
    href: '#',
  },
];

export default function Navbar() {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="btn btn-action btn-square d-flex align-items-center justify-content-center">
          <Icon.Menu size={18} />
        </button>
      </div>
      <a className="navbar-brand" href="#">
        TS Dashboard
      </a>

      <ul className="navbar-nav d-none d-md-flex">
        {navLinks.map((link) => (
          <li className="nav-item" key={v4()}>
            <a href={link.href} className="nav-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="ml-auto">
        <button
          onClick={() => {
            halfmoon.toggleDarkMode();
          }}
          className="btn d-flex align-items-center justify-content-center btn-square"
        >
          <Icon.Moon size={18} />
        </button>
      </div>
      <div className="navbar-content d-md-none">
        <div className="dropdown with-arrow">
          <button
            className="btn d-flex align-items-center justify-content-center btn-square"
            data-toggle="dropdown"
          >
            <Icon.ChevronDown size={18} />
          </button>
          <div className="dropdown-menu dropdown-menu-right w-200">
            {navLinks.map((link) => (
              <a href={link.href} className="dropdown-item" key={v4()}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
