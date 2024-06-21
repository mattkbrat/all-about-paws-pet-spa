import React, { useEffect, useState } from "preact/compat";

import "../styles/header.css";

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

	const Nav = () => {
		return (
			<ul
				class={
					"flex bg-gray-dark sm:bg-transparent bg-opacity-80 sm:bg-opacity-100 absolute sm:relative pb-2 pl-2 top-12 sm:top-0 right-0 w-min lg:text-xl flex-col space-y-2 self-center text-right sm:flex-row md:w-full "
				}
			>
				<li class={"hidden"} />
				<li
					id="home"
					class={`nav_link sm:w-auto ${
						route === "/" ? "active" : "not-active"
					}`}
				>
					<a href="/" class="nav_link">
						Home
					</a>
				</li>

				<li
					id="packages"
					class={`nav_link h-full w-full sm:w-auto ${
						route.startsWith("/packages") ? "active" : "not-active"
					}`}
				>
					<a href="/packages">Packages</a>
				</li>
				<li
					id="faq"
					class={`nav_link h-full w-full sm:w-auto ${
						route.includes("faq") ? "active" : "not-active"
					}`}
				>
					<a href="/faq" class="nav_link">
						FAQ
					</a>
				</li>
			</ul>
		);
	};

	return (
		<div class="sticky flex mb-auto flex-row z-50">
			<nav id="main_nav" class={"w-full"}>
				<a href="/" class="flex w-full mb-auto">
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

				<div
					class={
						"hidden content-center items-end text-center sm:flex sm:w-full relative"
					}
				>
					<Nav />
				</div>

				<a
					class="nav_link self-center text-right"
					href={GOOGLE_DIRECTION_URL}
					target="_blank"
					referrerpolicy={"no-referrer"}
					rel="noreferrer"
				>
					Directions
				</a>

				<div id={"nav-mobile"} class={"flex flex-col text-white sm:hidden"}>
					<button
						className={
							"flex 2xl:hidden w-full flex-row items-end justify-end text-right sm:hidden"
						}
						onClick={() => setMenuOpen(!menuOpen)}
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

					{menuOpen && <Nav />}
				</div>
			</nav>
		</div>
	);
};

export default Header;
