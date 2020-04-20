import React from 'react';
import './Home.css'


const Home = (props) => {

    const num =props.num;

    const homeCount = props.homeCount;
    const setHomeCount =props.setHomeCount;

    const shipmentCount=props.shipmentCount;
    return (
        <div className="styleHome">
            <h1>This is home page</h1>

            <h3>state coming from header component and its value :{num}</h3>
            <h3>state coming from shipment component and its value :{shipmentCount}</h3>

            
            <div className="higherOrderStateStyle">
                <h2>Higher order state</h2>
                <button onClick={()=>setHomeCount(homeCount+1)}>+</button>{homeCount}
                <button onClick={()=>setHomeCount(homeCount-1)}>-</button>
            
            </div>

            
        </div>
    );
};

export default Home;