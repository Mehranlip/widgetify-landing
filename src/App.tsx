import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Donate from './pages/Donate'
import Home from './pages/Home'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/donate" element={<Donate />} />
			</Routes>
		</BrowserRouter>
	)
}
