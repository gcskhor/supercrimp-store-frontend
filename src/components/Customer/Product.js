import { useParams } from 'react-router-dom';

export default function Product() {
	let params = useParams();

	return <div>product: {parseInt(params.productId, 10)}</div>;
}
