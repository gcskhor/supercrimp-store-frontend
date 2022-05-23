import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import BannerCarousel from './components/BannerCarousel/BannerCarousel.js';
import ProductListing from './components/ProductListing/ProductListing.js';

function App() {
	return (
		<div>
			<Navbar />
			<BannerCarousel />
			<ProductListing />
		</div>
	);
}

export default App;
