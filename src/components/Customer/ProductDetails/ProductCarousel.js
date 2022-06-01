import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { CardMedia, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import {
	KeyboardArrowLeftRounded,
	KeyboardArrowRightRounded,
} from "@mui/icons-material";

const triHardImages = [
	"/images/tri-hard/trihard_1.jpeg",
	"/images/tri-hard/trihard_2.jpeg",
	"/images/tri-hard/trihard_3.jpeg",
	"/images/tri-hard/trihard_4.jpeg",
	"/images/tri-hard/trihard_6.jpeg",
	"/images/tri-hard/trihard_7.jpeg",
	"/images/tri-hard/trihard_8.jpeg",
];

const miniHangboardImages = [
	"/images/mini-hangboard/mini_1.jpeg",
	"/images/mini-hangboard/mini_2.jpeg",
	"/images/mini-hangboard/mini_3.jpeg",
	"/images/mini-hangboard/mini_4.jpeg",
	"/images/mini-hangboard/mini_5.jpeg",
];

export default function ProductCarousel({ product }) {
	const [images, setImages] = useState([]);

	useEffect(() => {
		switch (product.name) {
			case "Tri-hard":
				setImages(triHardImages);
				break;
			case "Mini-hangboard":
				setImages(miniHangboardImages);
				break;
			default:
				break;
		}
	}, [product.name]);

	return (
		<AliceCarousel
			infinite
			mouseTracking
			responsive={{ 0: { items: 1 } }}
			controlsStrategy="alternate"
			renderPrevButton={({ isDisabled }) => (
				<IconButton size="small">
					<KeyboardArrowLeftRounded />
				</IconButton>
			)}
			renderNextButton={({ isDisabled }) => (
				<IconButton size="small">
					<KeyboardArrowRightRounded />
				</IconButton>
			)}
		>
			{images.map((img) => (
				<CardMedia component="img" image={img} alt="" />
			))}
		</AliceCarousel>
	);
}
