import React from 'react';
import PropTypes from 'prop-types';
import './Burgeringredients.css';
const burgerIngredients=(props)=>{
    let ingredient=null;
    switch(props.type){
        case('Bread-Bottom'):
            ingredient=<div className='BreadBottom'></div>;
            break;
        case('Bread-Top'):
            ingredient=(
                <div className='BreadTop'>
                <div className='Seeds1'>
                </div>
                <div className='Seeds2'>
                </div>
                </div>
            );
            break;
            case('Meat'):
            ingredient=<div className='Meat'></div>;
            break;
            case('Cheese'):
            ingredient=<div className='Cheese'></div>;
            break;
            case('Bacon'):
            ingredient=<div className='Bacon'></div>;
            break;
            case('Salad'):
            ingredient=<div className='Salad'></div>;
            break;

            default:
                ingredient=<div>null ha</div>
                break;
    }
    return ingredient;
}

burgerIngredients.propTypes={
    type:PropTypes.string.isRequired
};

export default burgerIngredients