import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo'
import DrawerButton from '../Navigation/Sidedrawer/DrawerButton/DrawerButton'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
const toolbar= props =>(
<div className='Toolbar'>
<DrawerButton buttonClick={props.clicked}/>
<Logo/>
<nav className='DesktopOnly'>
<NavigationItems/>
</nav>
</div>
);
export default toolbar;