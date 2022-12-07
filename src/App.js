import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header/Header.jsx'
import { Home } from './components/Home/Home';
import { Share } from './components/Share/Share';

const Index = () => (
	<>
		<Header />
		<Home />
	</>
)

function App() {

	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='/result' element={<Share />} />
		</Routes>
	);
}



export default App;
