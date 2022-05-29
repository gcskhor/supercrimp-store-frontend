import { Box, Grid, Typography } from "@mui/material";

export default function CartItem({ item }) {
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
			<Grid container>
				<Grid
					item
					xs={12}
					sm={3}
					sx={{
						px: { xs: 1, sm: 0 },
					}}
				>
					<Typography variant="button">{item.colour}</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sm={3}
					sx={{
						px: { xs: 1, sm: 2 },
						textAlign: { sm: "center" },
						borderLeft: { sm: "1px dotted #cacaca" },
						borderRight: { sm: "1px dotted #cacaca" },
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
						borderRight: { sm: "1px dotted #cacaca" },
					}}
				>
					<Typography variant="body1">Qty: {item.quantity}</Typography>
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
						Subtotal: S${item.subtotalCost}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}
