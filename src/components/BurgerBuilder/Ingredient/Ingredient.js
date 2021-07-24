import React from 'react';
import './Ingredient.css'

import BreadTop from '../../../assets/top.png';
import BreadBottom from '../../../assets/bottom.png';
import Meat from '../../../assets/meat.png';
import Salad from '../../../assets/salad.png';
import Cheese from '../../../assets/cheese.png';

const Ingredient = props => {
    let ingredient = null;

    switch(props.type) {

        case 'bread-top':
            ingredient = <div><img src={BreadTop} alt="BreadTop" /></div>
            break;

        case 'bread-bottom':
            ingredient = <div><img src={BreadBottom} alt="BreadBottom" /></div>
            break;

        case 'meat':
            ingredient = <div><img src={Meat} alt="Meat" /></div>
            break;

        case 'salad':
            ingredient = <div><img src={Salad} alt="Salad" /></div>
            break;
    
        case 'cheese':
            ingredient = <div><img src={Cheese} alt="Cheese" /></div>
            break;
        default: 
            ingredient = null;
    }
    return ( 
        <div className="Ingredient">
            {ingredient}
        </div>
     );
}
 
export default Ingredient;