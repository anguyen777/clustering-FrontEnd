import React from 'react';
import Header from './Header';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
        <Header/>
		<NavMenu>
        <NavLink to='/Home' activeStyle={{ color: 'white' }}>
			Home
		</NavLink>
		<NavLink to='/About' activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			About
		</NavLink>
        <NavLink to='/OpenProject' activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			Projects
		</NavLink>
		<NavLink to='/Settings' activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			Settings
		</NavLink>
		<NavLink to='/UserManual' activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			User Manual
		</NavLink>
		{/* Second Nav */}
		{/*<NavBtnLink to='/Login'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Login' activeStyle={{ color: 'white' }} >LOGIN</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;


