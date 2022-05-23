import { Box, Checkbox, Tooltip } from '@mui/material';
import { CircleTwoTone, CircleRounded } from '@mui/icons-material';

export default function AvailableColourDisplay({ productId, colours }) {
	function AvailableColours() {
		return colours.map((colour) => (
			<Tooltip title={colour.name} key={`${productId}-${colour.name}`}>
				<Checkbox
					value={colour.name}
					icon={<CircleTwoTone />}
					checkedIcon={<CircleRounded />}
					disabled={!colour.available}
					sx={{
						color: colour.code,
						'&.Mui-checked': {
							color: colour.code,
						},
					}}
				/>
			</Tooltip>
		));
	}

	return (
		// <Box
		// 	sx={{
		// 		backgroundColor: '#eee',
		// 	}}
		// >
		<AvailableColours />
		// </Box>
	);
}
