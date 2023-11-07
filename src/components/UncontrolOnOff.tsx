import React, {useState} from 'react';

export const UncontrolOnOff = () => {
    let [on, setOn] = useState<boolean>(false)

    const switchContainer = {
        margin: '20px',
        display: 'flex',
        gap: '10px'
    }
    const onStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer'
    }
    const ofStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: !on ? 'red' : 'white',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red',
        cursor: 'pointer'
    }

    const onHandler = () => setOn(true)
    const offHandler = () => setOn(false)
    const onOffHandler = () => setOn(on ? on=false : on=true)

    return (
        <div style={switchContainer}>
            <div style={onStyle} onClick={onHandler}>On</div>
            <div style={ofStyle} onClick={offHandler}>Off</div>
            <div style={indicatorStyle} onClick={onOffHandler}></div>
        </div>
    );
};

