import { useEffect, useState } from "preact/hooks";

export const useScroll = () => {
	const [scrolled, setScrolled] = useState(false);

	const [isBigScreen, setIsBigScreen] = useState(false);

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
		console.log({ nav });
		if (scrolled) {
			if (!nav || nav.classList.contains("nav_scrolled")) return;
			nav.classList.add("nav_scrolled");
		} else {
			if (!nav || !nav.classList.contains("nav_scrolled")) return;
			nav.classList.remove("nav_scrolled");
		}
	}, [scrolled]);

	return { scrolled };
};
