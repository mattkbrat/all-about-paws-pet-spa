import React, { useEffect, useState } from "preact/compat";

import "../styles/header.css";

const Header = ({ GOOGLE_DIRECTION_URL }: { GOOGLE_DIRECTION_URL: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [route, setRoute] = useState("/");

  const [scrolled, setScrolled] = useState(false);

  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setRoute(window.location.pathname);
  }, [route]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsSmall(window.innerWidth < 640);

    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });

    window.addEventListener("resize", () => {
      setIsSmall(window.innerWidth < 640);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScrolled(window.scrollY > 50);
      });
      window.removeEventListener("resize", () => {
        setIsSmall(window.innerWidth < 640);
      });
    };
  }, []);

  useEffect(() => {
    const nav = document.getElementById("main_nav");
    if (scrolled) {
      if (!nav || nav.classList.contains("nav_scrolled")) return;
      nav.classList.add("nav_scrolled");
    } else {
      if (!nav || !nav.classList.contains("nav_scrolled")) return;
      nav.classList.remove("nav_scrolled");
    }
  }, [scrolled]);

  const Nav = () => {
    return (
      <ul
        class={
          "flex w-min flex-col space-y-2 self-center text-right sm:flex-row md:w-full"
        }
      >
        <li class={"hidden"} />
        <li
          id="home"
          class={`nav_link w-full sm:w-auto ${route === "/" ? "active" : ""} `}
        >
          <a href="/" class="nav_link">
            Home
          </a>
        </li>

        <li
          id="packages"
          class={`nav_link h-full w-full sm:w-auto ${
            route === "/packages" ? "active" : ""
          } `}
        >
          <a href="/packages" class="nav_link">
            Packages
          </a>
        </li>
        <li
          id="faq"
          class={`nav_link w-full sm:w-auto ${
            route === "/faq" ? "active" : ""
          } `}
        >
          <a href="/faq" class="nav_link">
            FAQ
          </a>
        </li>
        <li
          id="about"
          class={`nav_link w-full sm:w-auto ${
            route === "/about" ? "active" : ""
          } `}
        >
          <a href="/about" class="nav_link">
            About
          </a>
        </li>
      </ul>
    );
  };

  return (
    <div class="sticky top-0 flex flex-row">
      <nav id="main_nav" class={"w-full"}>
        <a href="/" class="flex w-full">
          <img
            src="/assets/images/aap_favicon.png"
            alt="Logo"
            class={"logo h-12 w-12"}
          />
          <div class={"w-full"}>
            <h1 class={"w-full"}>All About Paws Pet Spa, LLC.</h1>
            <p class="w-full text-sm font-light">Fort Morgan Grooming</p>
          </div>
        </a>

        {/*clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;*/}
        <div
          style={{
            background: menuOpen ? "rgba(0,0,0,0.6)" : "transparent",
          }}
          id={"nav-mobile"}
          class={"flex flex-col text-white sm:hidden"}
        >
          {isSmall && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              class={
                "flex flex-row items-center justify-end text-right sm:hidden"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-menu-2"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke={menuOpen ? "white" : "black"}
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          )}

          {menuOpen && <Nav />}
        </div>

        <div
          class={
            "hidden content-center items-end text-center sm:flex sm:w-full"
          }
        >
          <Nav />
        </div>

        <a
          class="nav_link hidden content-center items-center text-center text-sm sm:flex"
          href={GOOGLE_DIRECTION_URL}
          target="_blank"
          referrerpolicy={"no-referrer"}
        >
          Get Directions
        </a>
      </nav>
    </div>
  );
};

export default Header;
