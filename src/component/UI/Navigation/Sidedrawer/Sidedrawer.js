import React from 'react';
import './Sidedrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../Logo/Logo';
import Aux from '../../../../hoc/Auxilary'
import Backdrop from '../../Backdrop/Backdrop';
const sideDrawer=(props)=>{
    //....
    let classesList='SideDrawer close';
    if (props.open){
        classesList='SideDrawer open'
    }
    return(
    <Aux>
    <Backdrop show={props.open} cancel={props.cancelHandle} />
    <div className={classesList}>
        <div style={{height:'11%', margin:'20px 0px'}}>
        <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </div>
    </Aux>
    );
}
export default sideDrawer