import "../styles/header.css";
import { useScroll } from "./nav/use-scroll";
import { DesktopNav } from "./nav/desktop";
import { MobileNav } from "./nav/mobile";

export const Nav = ({ route }: { route: string }) => {
	useScroll();

	return (
		<>
			<div className="lg:flex hidden">
				<DesktopNav route={route} />
			</div>
			<div className="flex lg:hidden">
				<MobileNav route={route} />
			</div>
		</>
	);
};
