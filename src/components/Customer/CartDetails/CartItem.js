import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useInventoryContext } from "../InventoryContext.js";
import EditItemColour from "./EditItemColour.js";
import EditItemQuantity from "./EditItemQuantity.js";

export default function CartItem({ item }) {
	const [selectedColour, setSelectedColour] = useState({ id: "", name: "" });
	const [quantity, setQuantity] = useState(item.quantity);
	const { products, availableColours } = useInventoryContext();

	useEffect(() => {
		const itemColour = availableColours.find(
			(colour) => colour.id === item.colourId
		);
		itemColour && setSelectedColour(itemColour);
	}, [item.colourId, availableColours]);

	useEffect(() => {
		setQuantity(item.quantity);
	}, [item.quantity]);

	const getProductDetails = (type) => {
		const result = products.find((product) => product.id === item.productId);
		switch (type) {
			case "name":
				return result && result.name;
			case "colours":
				return result && result.colours;
			case "usual price":
				return result && Number(result.usualPrice).toFixed(2);
			case "current price":
				return result && Number(result.currentPrice).toFixed(2);
			default:
				return null;
		}
	};

	item.name = getProductDetails("name");
	item.colours = getProductDetails("colours");
	item.usualPrice = getProductDetails("usual price");
	item.currentPrice = getProductDetails("current price");

	return (
		<Box
			sx={{
				px: 5,
				pt: 2,
				pb: 2,
				borderBottom: "1px dotted #cacaca",
			}}
		>
			<Typography variant="h6" mb={1}>
				{item.name}
			</Typography>
			<Grid container alignItems="center">
				<Grid
					item
					xs={12}
					sm={3}
					sx={{
						px: { xs: 1, sm: 0 },
					}}
				>
					{item && (
						<EditItemColour
							item={item}
							selectedColour={selectedColour}
							setSelectedColour={setSelectedColour}
						/>
					)}
				</Grid>
				<Grid
					item
					xs={12}
					sm={3}
					sx={{
						px: { xs: 1, sm: 2 },
						textAlign: { sm: "center" },
						// borderLeft: { sm: "1px dotted #cacaca" },
						// borderRight: { sm: "1px dotted #cacaca" },
					}}
				>
					{item.currentPrice === item.usualPrice ? (
						<Typography variant="body1">S${item.currentPrice}</Typography>
					) : (
						<>
							<Typography
								variant="body1"
								sx={{ textDecoration: "line-through" }}
							>
								S${item.usualPrice}
							</Typography>{" "}
							<Typography variant="body1" color="red">
								S${item.currentPrice}
							</Typography>
						</>
					)}
				</Grid>
				<Grid
					item
					xs={12}
					sm={2}
					sx={{
						px: { xs: 1, sm: 2 },
						textAlign: { sm: "center" },
						// borderRight: { sm: "1px dotted #cacaca" },
					}}
				>
					<EditItemQuantity
						item={item}
						quantity={quantity}
						setQuantity={setQuantity}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={4}
					sx={{
						px: { xs: 1, sm: 0 },
						textAlign: { sm: "right" },
					}}
				>
					<Typography
						variant="body1"
						sx={{ fontWeight: { xs: "bold", sm: "normal" } }}
					>
						Subtotal: S${Number(item.subtotalCost).toFixed(2)}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}
