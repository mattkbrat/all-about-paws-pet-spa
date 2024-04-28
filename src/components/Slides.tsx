import React, { useEffect } from "preact/compat";
import ImageGallery from "react-image-gallery";

const originals = `
https://i.postimg.cc/4NWhdjVR/bowling-01.png
https://i.postimg.cc/dVDZTnjk/bowling-02.png
https://i.postimg.cc/5tCHs0Gf/bowling-03.png
https://i.postimg.cc/W1KFmr59/bowling-04.png
https://i.postimg.cc/yYpkBcCV/bowling-05.png
https://i.postimg.cc/0Q1zFvRD/bowling-06.png
https://i.postimg.cc/Y9NvwPMV/bowling-07.png
https://i.postimg.cc/1X9fRKzz/bowling-08.png
https://i.postimg.cc/CxZdK5wb/bowling-09.png
https://i.postimg.cc/ZnV0Wy9x/bowling-10.png
https://i.postimg.cc/t4LJnbgw/bowling-11.png
https://i.postimg.cc/8kH7Kxyf/bowling-12.png
https://i.postimg.cc/MKpvht4P/bowling-13.png
`.split("\n");

const thumbs = `
https://i.postimg.cc/d1nJ6cqq/bowling-01.png
https://i.postimg.cc/mkDB6pD7/bowling-02.png
https://i.postimg.cc/MZPWjwP5/bowling-03.png
https://i.postimg.cc/Kv1mPWC2/bowling-04.png
https://i.postimg.cc/GmYrNycg/bowling-05.png
https://i.postimg.cc/BQR4MgG1/bowling-06.png
https://i.postimg.cc/xd2YS18f/bowling-07.png
https://i.postimg.cc/x84nrGJh/bowling-08.png
https://i.postimg.cc/nLGxVf9v/bowling-09.png
https://i.postimg.cc/76PkftSj/bowling-10.png
https://i.postimg.cc/V67cM9Rv/bowling-11.png
https://i.postimg.cc/KjRh5KqN/bowling-12.png
https://i.postimg.cc/rs3XZ87L/bowling-13.png
`.split("\n");

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
