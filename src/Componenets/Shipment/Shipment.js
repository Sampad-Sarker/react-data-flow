import React from 'react';
import './Shipment.css'

const Shipment = (props) => {

    const num = props.num;
    const homeCount=props.homeCount;

    const shipmentCount = props.shipmentCount;
    const setShipmentCount =props.setShipmentCount;
    return (
        <div className="styleShipment">
            <h1>This is shipment page </h1>

            <h3>state coming from header component and its value :{num}</h3>
            <h3>state coming from home component and its value :{homeCount}</h3>

            <div className="higherOrderStateStyle">
                <h2>Higher order state</h2>
                <button onClick={()=>setShipmentCount(shipmentCount+1)}>+</button>
                    {shipmentCount}
                <button onClick={()=>setShipmentCount(shipmentCount-1)}>-</button>
            </div>


            
        </div>
    );
};

export default Shipment;