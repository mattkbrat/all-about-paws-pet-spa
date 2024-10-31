export const NavLinks = ({
	selected,
}: { selected: "home" | "packages" | "faq" }) => {
	const selectClass =
		"text-white lg:bg-gray-900 border-r-4 border-accent-300 lg:border-r-0 hover:bg-gray-900 ";

	return (
		<>
			<a href="/" class={""}>
				<li
					id="home"
					class={`py-6 lg:py-0 hover:bg-gray-400 hover:text-gray-100 transition-colors h-full lg:pl-0 pl-1 ${selected === "home" ? selectClass : ""}`}
				>
					Home
				</li>
			</a>

			<a href="/packages" class={""}>
				<li
					id="packages"
					class={`py-6 lg:py-0 hover:bg-gray-400 hover:text-gray-100 transition-colors h-full lg:pl-0 pl-1 ${selected === "packages" ? selectClass : ""}`}
				>
					Packages
				</li>
			</a>
			<a href="/faq" class={""}>
				<li
					id="faq"
					class={`py-6 lg:py-0 hover:bg-gray-400 hover:text-gray-100 transition-colors h-full lg:pl-0 pl-1 ${selected === "faq" ? selectClass : ""}`}
				>
					FAQ
				</li>
			</a>
		</>
	);
};
