import React, { useEffect } from "preact/compat";
import ImageGallery from "react-image-gallery";

const originals = Array.from(new Array(15).keys()).map((i) => {
	return `
https://cdn.fortmorgangrooming.com/img${i}.png
`;
});

const thumbs = originals.map((n) => n.replace(".png", "-thumb.jpg"));

const images = originals
	.map((o, i) => {
		if (!o) return null;
		return {
			original: o,
			thumbnail: thumbs[i],
		};
	})
	.filter(Boolean);

const MyGallery = () => {
	console.log("image gallery");

	useEffect(() => {
		const element = document.getElementsByClassName(
			"image-gallery-right-nav",
		)[0] as HTMLButtonElement;

		element && element.click();
	}, []);

	// Show the gif on mobile and the slideshow on desktop
	return (
		<>
			<div class={"lg:flex lg:flex-col my-16 hidden"}>
				<ImageGallery autoPlay={true} infinite={true} items={images} />
			</div>
			<div class={"block lg:hidden"}>
				<img
					src={"https://i.postimg.cc/L4BPdJsX/bowling.gif"}
					alt="About All About Paws"
				/>
			</div>
		</>
	);
};

export default MyGallery;
