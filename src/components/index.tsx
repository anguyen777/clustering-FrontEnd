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
			HOME
		</NavLink>
		<NavLink to='/About' activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			ABOUT
		</NavLink>
        <NavLink to='/OpenProject' activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			PROJECTS
		</NavLink>
		<NavLink to='/Settings' activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			SETTINGS
		</NavLink>
		<NavLink to='/UserManual' activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			USER MANUAL
		</NavLink>
		{/* Second Nav */}
		{/*<NavBtnLink to='/Login'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Login' activeStyle={{ color: 'white' }} >LOG OUT</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;


