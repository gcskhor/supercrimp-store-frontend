import { Box, Tooltip, Button } from "@mui/material";
import { useCartContext } from "../CartContext.js";

export default function AddToCartButton({
	productDetails,
	selectedColour,
	setSelectedColour,
}) {
	const {
		cartDispatch,
		dispatchHelpers: [, addItemToCart],
	} = useCartContext();

	const handleAddToCart = () => {
		if (selectedColour) {
			cartDispatch(addItemToCart(productDetails, selectedColour.id, 1));
			setSelectedColour(null);
		}
	};

	return (
		<Box my={1}>
			<Tooltip
				title={selectedColour ? "" : "Select a colour first"}
				placement="right"
			>
				<Button variant="contained" onClick={handleAddToCart}>
					Add to Cart
				</Button>
			</Tooltip>
		</Box>
	);
}
