import { IconButton } from "@mui/material";
import { DeleteOutlineRounded } from "@mui/icons-material";
import { useCartContext } from "../CartContext.js";

export default function DeleteItem({ item }) {
	const {
		cartDispatch,
		dispatchHelpers: [, , , , removeItemFromCart],
	} = useCartContext();

	const handleDeleteItem = () => {
		cartDispatch(removeItemFromCart(item.productId, item.colourId));
	};

	return (
		<IconButton onClick={handleDeleteItem} color="warning" size="small">
			<DeleteOutlineRounded />
		</IconButton>
	);
}
