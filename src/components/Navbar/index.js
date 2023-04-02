import React from 'react';
import {
Nav,
NavLink,
// Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
return (
	<>
	<Nav>
		

		<NavMenu>
		<NavLink exact to='/about' activeStyle>
			About
		</NavLink>
		<NavLink exact to='/events' activeStyle>
			Events
		</NavLink>
		<NavLink exact to='/annual' activeStyle>
			Annual Report
		</NavLink>
		<NavLink exact to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink exact to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink exact to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		<NavLink exact to='/demoone' activeStyle>
			Demo one component
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink exact to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;



// The activeStyle prop is also used to style the selected <NavLink> . 
// However, instead of providing a class to apply when the <NavLink> is selected, 
// the CSS style properties can be provided inline: <NavLink to="/user" 
// activeStyle={{ background: 'red', color: 'white' }}> User</NavLink>