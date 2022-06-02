import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function AddProductButton() {
	return (
		<Button
			fullWidth
			variant="contained"
			component={Link}
			to={`/admin/product/add`}
			sx={{ mt: 3 }}
		>
			Add Product
		</Button>
	);
}
