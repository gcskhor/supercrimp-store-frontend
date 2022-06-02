import { Box, Tooltip, Button } from "@mui/material";
import { useCartContext } from "../CartContext.js";
import { useSnackbarContext } from "../../SnackbarContext.js";

export default function AddToCartButton({
	productDetails,
	selectedColour,
	setSelectedColour,
}) {
	const {
		cartDispatch,
		dispatchHelpers: [, addItemToCart],
	} = useCartContext();

	const { enableSnackBar } = useSnackbarContext();

	const handleAddToCart = () => {
		if (selectedColour) {
			cartDispatch(addItemToCart(productDetails, selectedColour.id, 1));
			setSelectedColour(null);
			enableSnackBar("Item has been added to cart")();
		} else {
			enableSnackBar("Please select a colour before adding to cart")();
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
