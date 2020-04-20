import React, { useState } from 'react';
import './Header.css'
import Info from '../Info/Info';

const Header = (props) => {

    console.log({props});
    const {num,setNum} = props;
    console.log("num =",num,"setNum :",setNum);

    const number = props.num;
    const setNumber = props.setNum;

    const homeCount=props.homeCount;

    const shipmentCount= props.shipmentCount;
    
    const [count,setCount] = useState(0);  //local state

    return (
        <div className="styleHeader">
            <h1>This is header component</h1>
            <h3>state coming from home component and its value :{homeCount}</h3>
            <h3>state coming from shipment component and its value :{shipmentCount}</h3>

            <div className="higherOrderStateStyle">
                <h2>Higher order state</h2>
                <button onClick={()=>setNumber(number+1)}>+</button>{number}
                <button onClick={()=>setNumber(number-1)}>-</button>
            </div>

            <div className="localStateStyle">
                <h2>Local state</h2>
                <p>value not be negative</p>
                <button onClick={()=>setCount(count+1)}>+</button>
                    {count}
                <button onClick={()=>setCount(count>1? count-1: count)}>-</button>
            </div>

            <Info count={count } number={number} homeCount={homeCount} shipmentCount={shipmentCount}></Info>
            
        </div>
    );
};

export default Header;