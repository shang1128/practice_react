import './style.css';
import Profile from './Profile';

const Nav = () =>{
	return(
		<div>
			<Profile />
		<nav>
			<ul className="nav-ul">
				<li className="nav-li">Profile</li>
				<li className="nav-li">Newsfeed</li>
				<li className="nav-li">Store</li>
				<li className="nav-li">Notification</li>
				
			</ul>
		</nav>
		</div>
	)
}
export default Nav;