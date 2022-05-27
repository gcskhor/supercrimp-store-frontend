import { Box, Typography } from "@mui/material";

export default function Price({ product }) {
	const promoPrice = product.usualPrice !== product.currentPrice;

	return (
		<Box my={1}>
			<Typography variant="h5" fontWeight="bold" color={promoPrice && "red"}>
				S${product.currentPrice}
			</Typography>
			{promoPrice && (
				<Typography variant="h6" color="text.secondary">
					(Usual price: S${product.usualPrice})
				</Typography>
			)}
		</Box>
	);
}
