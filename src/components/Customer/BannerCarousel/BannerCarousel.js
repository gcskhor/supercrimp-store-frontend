import {
	Box,
	Typography,
	Card,
	CardContent,
	IconButton,
	Stack,
} from "@mui/material";
import {
	ArrowBackIosRounded,
	ArrowForwardIosRounded,
} from "@mui/icons-material";
import Carousel from "nuka-carousel";
import images from "./images.js";

export default function BannerCarousel() {
	const leftControl = ({ previousSlide }) => (
		<IconButton onClick={previousSlide} size="large">
			<ArrowBackIosRounded />
		</IconButton>
	);

	const rightControl = ({ nextSlide }) => (
		<IconButton onClick={nextSlide} size="large">
			<ArrowForwardIosRounded />
		</IconButton>
	);

	function Banner({ img }) {
		return (
			<Card
				sx={{
					backgroundImage: `url(${img.url})`,
					height: { xs: "60vh", sm: "70vh" },
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<CardContent
					sx={{
						backgroundColor: "rgba(255,255,255,0.5)",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Stack
						spacing={2}
						alignItems="center"
						sx={{ width: "50%", mt: 3, mb: 5 }}
					>
						<Typography variant="bannerTitle" align="center" fontWeight="bold">
							{img.title}
						</Typography>
						<Typography variant="bannerSubtitle" align="center">
							{img.subtitle}
						</Typography>
					</Stack>
				</CardContent>
			</Card>
		);
	}

	return (
		<Box mb={5}>
			<Carousel
				wrapAround
				dragging="false"
				renderCenterLeftControls={leftControl}
				renderCenterRightControls={rightControl}
			>
				{images.map((img) => (
					<Banner img={img} />
				))}
			</Carousel>
		</Box>
	);
}
