import React, { useEffect, useMemo, useState } from "preact/compat";

import "../styles/header.css";
import { NavLinks } from "./NavLinks";

const Header = ({ GOOGLE_DIRECTION_URL }: { GOOGLE_DIRECTION_URL: string }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const [route, setRoute] = useState("/");

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;
		setRoute(window.location.pathname);
		console.log({ route });
	}, [route]);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const getHasScrolled = () => setScrolled(window.scrollY > 50);

		window.addEventListener("scroll", getHasScrolled);

		return () => {
			window.removeEventListener("scroll", getHasScrolled);
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

	const selected = useMemo(() => {
		return route === "/"
			? "home"
			: route.startsWith("/packages")
				? "packages"
				: "faq";
	}, [route]);

	const Nav = () => {
		return (
			<>
				<ul
					class={"grid-cols-3 gap-x-0 flex-1 border-b-2 hidden lg:grid text-xl"}
				>
					<NavLinks selected={selected} />
				</ul>
				<ul
					class={
						"flex lg:hidden lg:px-4 grid-cols-3 gap-x-0 flex-1 border-b-2  flex-col bg-gray-800 absolute top-16 right-6 text-right "
					}
				>
					<NavLinks selected={selected} />
				</ul>
			</>
		);
	};

	return (
		<div class="sticky flex flex-row z-50 text-lg  lg:text-left md:text-current ">
			<nav id="main_nav" class={"font-bold px-4 w-full"}>
				<a href="/" class="flex py-4 mr-auto">
					<img
						src="/assets/images/aap_favicon.png"
						alt="Logo"
						class={"logo h-12 w-12"}
					/>
					<div class={""}>
						<h1>All About Paws Pet Spa, LLC.</h1>
						<p class="text-sm font-light">Fort Morgan Grooming</p>
					</div>
				</a>

				<div
					class={
						"hidden lg:flex content-center items-end text-center w-full relative max-w-[50dvw] "
					}
				>
					<Nav />
				</div>
				<div class={"flex lg:hidden  "}>{menuOpen && <Nav />}</div>

				<div class={"flex flex-wrap-reverse xs:contents ml-auto"}>
					<a
						class="self-center mr-2 text-lg uppercase leading-tight text-right my-auto lg:my-0 lg:mt-auto grid"
						href={GOOGLE_DIRECTION_URL}
						target="_blank"
						referrerpolicy={"no-referrer"}
						rel="noreferrer"
					>
						Get
						<br />
						Directions
					</a>
					<div
						id={"nav-mobile"}
						class={"flex flex-col text-white my-auto lg:hidden "}
					>
						<button
							className={
								"flex lg:hidden w-full flex-row items-end justify-end text-right"
							}
							onClick={() => setMenuOpen(!menuOpen)}
							type="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-menu-2"
								width="44"
								height="44"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke={menuOpen ? "gray" : "black"}
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Nav Menu Toggle</title>
								<path stroke="none" d="M0 0h24v24H0z" />
								<line x1="4" y1="6" x2="20" y2="6" />
								<line x1="4" y1="12" x2="20" y2="12" />
								<line x1="4" y1="18" x2="20" y2="18" />
							</svg>
						</button>

						{menuOpen && <Nav />}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
