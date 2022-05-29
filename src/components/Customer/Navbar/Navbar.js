import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div
			style={{
				backgroundColor: "yellow",
				display: "flex",
				justifyContent: "space-evenly",
			}}
		>
			(Temp navbar)
			<Link to="/">Home</Link>
			<Link to="/cart">Cart</Link>
		</div>
	);
}
