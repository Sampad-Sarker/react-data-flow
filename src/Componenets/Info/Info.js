import React from 'react';

const Info = (props) => {

    const{count, number, homeCount, shipmentCount} = props;

    return (
        <div>
            <h1>This is info page ,child of header component</h1>


            <h3>state coming from header component of local state and its value :{count}</h3>
            <h3>state coming from header component of higher order state and its value :{number}</h3>
            <h3>state coming from home component and its value :{homeCount}</h3>
            <h3>state coming from shipment component and its value :{shipmentCount}</h3>
        </div>
    );
};

export default Info;