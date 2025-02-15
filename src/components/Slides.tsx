import ImageGallery from "react-image-gallery";
import "./slides.css";

const originals = Array.from(new Array(15).keys()).map((i) => {
	return `https://cdn.fortmorgangrooming.com/img${i}.png`;
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
	return <ImageGallery autoPlay={true} infinite={true} items={images} />;
};

export default MyGallery;
