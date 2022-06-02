import { Box, Typography } from "@mui/material";

export default function Price({ product }) {
	const promoPrice = product.usualPrice !== product.currentPrice;

	return (
		<Box my={1}>
			<Typography variant="currentPrice" color={promoPrice && "error"}>
				S${product.currentPrice}
			</Typography>
			{promoPrice && (
				<Typography variant="usualPrice">
					(Usual price: S${product.usualPrice})
				</Typography>
			)}
		</Box>
	);
}
