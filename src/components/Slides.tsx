import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const originals = Array.from(new Array(15).keys()).map((i) => {
	return `https://cdn.fortmorgangrooming.com/img${i}.png`;
});

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		// slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		// slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		// slidesToSlide: 1, // optional, default to 1.
	},
};

const MyGallery = () => {
	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			autoPlay
			autoPlaySpeed={3000}
			removeArrowOnDeviceType={["tablet", "mobile"]}
			className="max-w-[90dvw]"
		>
			{originals.map((i) => {
				return (
					<div key={i} id={"image"}>
						<img
							src={i}
							alt={""}
							width={800}
							height={450}
							class={"w-fit h-auto"}
						/>
					</div>
				);
			})}
		</Carousel>
	);
};

export default MyGallery;
