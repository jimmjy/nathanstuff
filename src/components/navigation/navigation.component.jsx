import React from 'react';

import './navigation.styles.scss';

//components
import LeftSideNav from '../leftSideNav/leftSideNav.component';
import RightSideNav from '../rightSideNav/rightSideNav.component';

const Navigation = () => <nav className='nav-bar'>
    <LeftSideNav />
    <RightSideNav />
</nav>

export default Navigation;