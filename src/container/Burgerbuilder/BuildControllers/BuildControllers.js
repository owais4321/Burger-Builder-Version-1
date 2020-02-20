import React from 'react';
import './BuildControllers.css';
import BuildController from '../BuildControler/BuildController'
const buildControllers=(props)=>{
    let controls=[{
        label:'Cheese',
        type:'Cheese'
    },
    {
        label:'Salad',
        type:'Salad'
    },
    {
        label:'Bacon',
        type:'Bacon'
    },
    {
        label:'Meat',
        type:'Meat'
    }

]
return(
<div className='BuildControls'>
<p style={{'text-align':'center'}}>Price {props.price.toFixed(2)}</p>
{controls.map(ctrl=><BuildController 
removed={()=>{props.removeItem(ctrl.type)}}
added={()=>{props.addItem(ctrl.type)}} 
label={ctrl.label} 
disable={props.disabledInfo[ctrl.label]}
key={ctrl.label}/>)}
<button 
className='OrderButton' 
onClick={props.purchasing}
disabled={!props.purchaseble}>Order Now</button>
</div>)
}
export default buildControllers