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

const images = [
	{
		url: "/images/tri-hard/trihard_6.jpeg",
		title: "SUPER CRIMP",
		subtitle: "Super charge your crimp game!",
	},
	{
		url: "/images/mini-hangboard/mini_4.jpeg",
		title: "Lightweight and portable",
		subtitle: "Perfect for on-the-go hangboard training",
	},
];

export default function BannerCarousel() {
	return (
		<Box mb={5}>
			<Carousel
				wrapAround
				dragging="false"
				renderCenterLeftControls={({ previousSlide }) => (
					<IconButton onClick={previousSlide} size="large">
						<ArrowBackIosRounded />
					</IconButton>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<IconButton onClick={nextSlide} size="large">
						<ArrowForwardIosRounded />
					</IconButton>
				)}
			>
				{images.map((img) => (
					<Card
						sx={{
							backgroundImage: `url(${img.url})`,
							height: { xs: "50vh", sm: "70vh" },
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					>
						<CardContent
							sx={{
								backgroundColor: "rgba(255,255,255,0.4)",
								height: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Stack spacing={2} sx={{ width: "50%" }}>
								<Typography variant="h3" align="center" fontWeight="bold">
									{img.title}
								</Typography>
								<Typography variant="h5" align="center">
									{img.subtitle}
								</Typography>
							</Stack>
						</CardContent>
					</Card>
				))}
			</Carousel>
		</Box>
	);
}
