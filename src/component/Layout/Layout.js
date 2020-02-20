import React ,{ Component } from 'react';
import Aux from '../../hoc/Auxilary';
import './Layout.css';
import Toolbar from '../UI/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/Sidedrawer/Sidedrawer';
class Layout extends Component{
    state={
        showBackdrop:false,
    }
    cancelHandler=()=>{
        this.setState({showBackdrop:false});
    }
    sideDrawerToggleHandler=()=>{
        console.log('clicked')
        this.setState((prevState)=>{
            return({showBackdrop:true});
        })
    }
    render(){
        return(    
            <Aux>
            <Toolbar clicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showBackdrop}
            cancelHandle={this.cancelHandler}
            />
            <main className='main'>
            {this.props.children}
            </main>
        </Aux>
    )
    }
}

export default Layout;