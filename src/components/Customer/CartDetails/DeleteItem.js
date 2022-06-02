import { IconButton } from "@mui/material";
import { DeleteOutlineRounded } from "@mui/icons-material";
import { useCartContext } from "../CartContext.js";
import { useSnackbarContext } from "../SnackbarContext.js";

export default function DeleteItem({ item }) {
	const {
		cartDispatch,
		dispatchHelpers: [, , , , removeItemFromCart],
	} = useCartContext();
	const { enableSnackBar } = useSnackbarContext();

	const handleDeleteItem = () => {
		cartDispatch(removeItemFromCart(item.productId, item.colourId));
		enableSnackBar("Item has been removed from cart")();
	};

	return (
		<IconButton onClick={handleDeleteItem} color="error" size="small">
			<DeleteOutlineRounded />
		</IconButton>
	);
}
