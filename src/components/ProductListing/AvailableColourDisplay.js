import { Checkbox, Tooltip } from '@mui/material';
import { CircleTwoTone, CircleRounded } from '@mui/icons-material';

export default function AvailableColourDisplay({ productId, colours }) {
	// TODO: axios.get all available colours & compare product colours vs available colours
	// eg if red, black and yellow are available, but this product only has red and black. should show all 3 colours but with yellow disabled

	function AvailableColours() {
		return colours.map((colour) => {
			console.log(colour);
			return (
				<Tooltip title={colour.name} key={`${productId}-${colour.name}`}>
					<Checkbox
						value={colour.name}
						icon={<CircleTwoTone />}
						checkedIcon={<CircleRounded />}
						sx={{
							color: colour.code,
							'&.Mui-checked': {
								color: colour.code,
							},
						}}
					/>
				</Tooltip>
			);
		});
	}

	return <AvailableColours />;
}
