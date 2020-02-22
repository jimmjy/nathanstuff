import React from 'react';
import './leftSideNav.styles.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/rabbitCleenup.svg';

const LeftSideNav = () => <div className="leftNav">
    <Link to='/'>
        <Logo className='nav-logo' />
    </Link>

</div>


export default LeftSideNav;