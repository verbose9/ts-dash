import React, {useEffect} from "../../_snowpack/pkg/react.js";
import * as Icon from "../../_snowpack/pkg/react-feather.js";
import {v4} from "../../_snowpack/pkg/uuid.js";
import halfmoon from "../../_snowpack/pkg/halfmoon.js";
const navLinks = [
  {
    name: "Home",
    href: "#"
  },
  {
    name: "Contact me",
    href: "#"
  },
  {
    name: "About me",
    href: "#"
  }
];
export default function Navbar() {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);
  return /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-content"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-action btn-square d-flex align-items-center justify-content-center"
  }, /* @__PURE__ */ React.createElement(Icon.Menu, {
    size: 18
  }))), /* @__PURE__ */ React.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "TS Dashboard"), /* @__PURE__ */ React.createElement("ul", {
    className: "navbar-nav d-none d-md-flex"
  }, navLinks.map((link) => /* @__PURE__ */ React.createElement("li", {
    className: "nav-item",
    key: v4()
  }, /* @__PURE__ */ React.createElement("a", {
    href: link.href,
    className: "nav-link"
  }, link.name)))), /* @__PURE__ */ React.createElement("div", {
    className: "ml-auto"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      halfmoon.toggleDarkMode();
    },
    className: "btn d-flex align-items-center justify-content-center btn-square"
  }, /* @__PURE__ */ React.createElement(Icon.Moon, {
    size: 18
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-content d-md-none"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dropdown with-arrow"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn d-flex align-items-center justify-content-center btn-square",
    "data-toggle": "dropdown"
  }, /* @__PURE__ */ React.createElement(Icon.ChevronDown, {
    size: 18
  })), /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-menu dropdown-menu-right w-200"
  }, navLinks.map((link) => /* @__PURE__ */ React.createElement("a", {
    href: link.href,
    className: "dropdown-item",
    key: v4()
  }, link.name))))));
}
