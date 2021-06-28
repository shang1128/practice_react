import './style.css'

// components
import Ads from "./Ads"
import Nav from "./Nav"
import Newsfeed from "./Newsfeed"

//react icons
import { AiFillMessage, BsMoon, MdAccountCircle } from 'react-icons/all'
import Footer from './footer'

const Home = () =>{
	return(
		<div>
			<div className="hm-icons">
				<AiFillMessage />
				<BsMoon />
				<MdAccountCircle />
			</div>

		<div className="hm">
			<Nav />
			<Newsfeed />
			<Ads />
		</div>

		<Footer />

		</div>
	)
}
export default Home;