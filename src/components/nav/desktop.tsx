import clsx from "clsx";
import { navItems } from "./items";

export const DesktopNav = ({ route }: { route: string }) => {
	return (
		<ul className="flex items-end flex-wrap">
			{Object.entries(navItems).map(([k, v]) => {
				const isSelected = v === route;
				return (
					<a
						href={v}
						key={k}
						className={clsx(
							"flex-1 min-w-25 w-max text-center px-4 pb-1 border-b-2",
							isSelected
								? "bg-gray-900 text-white border-b-transparent"
								: "border-b-black hover:bg-gray-900/25 ",
						)}
					>
						<li className="leading-6 tacking-loose">{k}</li>
					</a>
				);
			})}
		</ul>
	);
};
