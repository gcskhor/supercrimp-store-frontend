import { Box } from "@mui/material";
import BannerCarousel from "./BannerCarousel/BannerCarousel.js";
import AllProducts from "./AllProducts/AllProducts.js";

export default function Home() {
	return (
		<>
			<BannerCarousel />
			<Box mb={5}>
				<AllProducts />
			</Box>
		</>
	);
}
