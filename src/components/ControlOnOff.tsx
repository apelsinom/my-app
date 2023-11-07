import React from 'react';
import styled from "styled-components";

type PropsType = {
    on: boolean
    setOn:(t:boolean)=>void
}
export const ControlOnOff = (props:PropsType) => {

    const onStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white',
        cursor: 'pointer'
    }
    const ofStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: !props.on ? 'red' : 'white',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'red',
        cursor: 'pointer'
    }

    const onHandler = () => props.setOn(true)
    const offHandler = () => props.setOn(false)
    const onOffHandler = () => props.setOn(props.on ? props.on=false : props.on=true)

    return (
        <SwitchContainer>
            <div style={onStyle} onClick={onHandler}>On</div>
            <div style={ofStyle} onClick={offHandler}>Off</div>
            <div style={indicatorStyle} onClick={onOffHandler}></div>
        </SwitchContainer>
    );
};
const SwitchContainer = styled.div`
  margin: 20px;
  display: flex;
  gap: 10px;
`