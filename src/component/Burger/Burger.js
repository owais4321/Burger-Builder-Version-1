import React from 'react';
import './Burger.css'
import BurgerIngredients from './BurgerIngredients/Burgeringredients'
const burger=(props)=>{
    let transformedIngredients=Object.keys(props.ingredients)
    .map((igKey)=>{
        return [...Array(props.ingredients[igKey])]
        .map((_,i)=>
            <BurgerIngredients key={igKey+i} type={igKey} />
        );
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Add some ingredients</p>
    }
    return(
    <div className='Burger'>
    <BurgerIngredients type='Bread-Top'/>
    {transformedIngredients}
    <BurgerIngredients type='Bread-Bottom'/>
    </div>
)}

export default burger