import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';

function App() {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
