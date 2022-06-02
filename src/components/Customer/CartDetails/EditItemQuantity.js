import {
	Button,
	ButtonGroup,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import {
	AddCircleOutlineRounded,
	RemoveCircleOutlineRounded,
} from "@mui/icons-material";
import { useCartContext } from "../CartContext.js";
import { useSnackbarContext } from "../../SnackbarContext.js";

export default function EditItemQuantity({ item, quantity, setQuantity }) {
	const {
		cartDispatch,
		dispatchHelpers: [, , , editItemQty, removeItemFromCart],
	} = useCartContext();
	const { enableSnackBar } = useSnackbarContext();

	const handleIncreaseQty = () => {
		const newQty = quantity + 1;
		setQuantity(newQty);
		cartDispatch(
			editItemQty(item.productId, item.colourId, item.currentPrice, newQty)
		);
		enableSnackBar("Item has been updated")();
	};

	const handleDecreaseQty = () => {
		if (quantity > 1) {
			const newQty = quantity - 1;
			setQuantity(newQty);
			cartDispatch(
				editItemQty(item.productId, item.colourId, item.currentPrice, newQty)
			);
			enableSnackBar("Item has been updated")();
		} else {
			cartDispatch(removeItemFromCart(item.productId, item.colourId));
			enableSnackBar("Item has been removed from cart")();
		}
	};
	return (
		<Stack
			justifyContent={{ xs: "left", sm: "center" }}
			alignItems={{ xs: "center", sm: "center" }}
			direction={{ xs: "row", sm: "column" }}
		>
			<Typography variant="cartItemQty">Qty: {quantity}</Typography>
			<ButtonGroup>
				<IconButton onClick={handleDecreaseQty} sx={{ color: "primary.light" }}>
					<RemoveCircleOutlineRounded fontSize="small" />
				</IconButton>
				<IconButton onClick={handleIncreaseQty} sx={{ color: "primary.light" }}>
					<AddCircleOutlineRounded fontSize="small" />
				</IconButton>
			</ButtonGroup>
		</Stack>
	);
}
