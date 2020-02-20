import React from 'react';
import Aux from '../../hoc/Auxilary';
const orderSummary= (props) => {
    const ordersummary=Object.keys(props.ingredientsummary)
    .map((igId)=>
        <li key={igId}>
            {igId} : {props.ingredientsummary[igId]}
        </li>
    );
return(
<Aux>
    <ul>
        {ordersummary}
    </ul>
</Aux>
)};

export default orderSummary;
