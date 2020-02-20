import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../component/Burger/Burger";
import BuildControllers from "./BuildControllers/BuildControllers";
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/OrderSummary/OrderSummary'
import Button from '../../component/UI/Button/Button'
const INGREDIENTS_PRICE = {
  Salad: 0.4,
  Bacon: 0.6,
  Meat: 1.4,
  Cheese: 1
};
class Burgerbuilder extends Component {
  state = {
    ingredients: {
      Meat: 0,
      Cheese: 0,
      Bacon: 0,
      Salad: 0
    },
    price: 4,
    purchaseble:false,
    purchasing:false,
  };
  addHandler = igId => {
    let beforeCount = this.state.ingredients[igId];
    let afterCount = beforeCount + 1;
    let beforeObject = { ...this.state.ingredients };
    beforeObject[igId] = afterCount;
    let Newprice = INGREDIENTS_PRICE[igId] + this.state.price;
    this.setState({ ingredients: beforeObject, price: Newprice });
    this.purchaseble(beforeObject)
  };
  removeHandler = igId => {
    let beforeCount = this.state.ingredients[igId];
    if (beforeCount <= 0) {
      return;
    }
    let afterCount = beforeCount - 1;
    let beforeObject = { ...this.state.ingredients };
    beforeObject[igId] = afterCount;
    let Newprice = this.state.price - INGREDIENTS_PRICE[igId];
    this.setState({ ingredients: beforeObject, price: Newprice });
    this.purchaseble(beforeObject)
  };
  purchaseble = ingredients => {
    const sum=Object.keys(ingredients)
    .map((value,key)=>{
      return ingredients[value]
    }).reduce((sum,el)=>{
      return sum+el;
    },0);
    this.setState({purchaseble:sum>0});
  };
  purchaseHandler=()=>{
    this.setState({purchasing:true});
  }
  cancelHandler=()=>{
    this.setState({purchasing:false});
  }
  continueHandle=()=>{
    alert('you continued')
  }
  render() {
    const disableinfo = {
      ...this.state.ingredients
    };
    for (let key in disableinfo) {
      disableinfo[key] = disableinfo[key] <= 0;
    }
    
    return (

      <Aux>
        <div>
        <Modal
        cancelled={this.cancelHandler}
        show={this.state.purchasing}
        >
      <h2>Your Order</h2>
      <p>Your Burger contains following ingredients</p>    
      <OrderSummary ingredientsummary={this.state.ingredients}/>
      <p><strong>Total Price {this.state.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button className='Button Success' clicked={this.continueHandle}>Continue</Button>
      <Button className='Button Danger' clicked={this.cancelHandler}>Cancel</Button>

    </Modal> 
          <Burger
            ingredients={this.state.ingredients} 
          />
        </div>
        <BuildControllers
          price={this.state.price}
          addItem={this.addHandler}
          removeItem={this.removeHandler}
          disabledInfo={disableinfo}
          purchaseble={this.state.purchaseble}
          purchasing={this.purchaseHandler}

        />
      </Aux>
    );
  }
}
export default Burgerbuilder;
