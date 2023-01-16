import { NavLink } from 'react-router-dom';
const Menu = () => {
	return (
		<nav>
			<NavLink
				to='.'
				end
				className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
			>
				Home
			</NavLink>
			<NavLink
				to='about'
				className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
			>
				About
			</NavLink>
			<NavLink
				to='contacts'
				className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
			>
				Contacts
			</NavLink>
		</nav>
	);
};

export default Menu;
