import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Dashboard from "./components/Dashboard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import About from "./components/About";
import Ourwork from "./components/Ourwork";
import Ourevents from "./components/Ourevents";
import OurTeam from "./components/Ourteam";
AOS.init({
	duration: 1000,
	easing: "ease-in-out",
	once: true,
	mirror: false
});
function App() {
	return (
		<>
			<BrowserRouter>
				
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/our-work" element={<Ourwork />} />
					<Route path="/our-events" element={<Ourevents />} />
					<Route path="/our-team" element={<OurTeam />} />					
				</Routes>
				
			</BrowserRouter>
		</>
	);
}

export default App;
