import React from 'react';

type PropsType = {
    titleValue: string
    onClick: ()=>void
    AccordionCollapsed:boolean
}
export const ControlAccordion = (props:PropsType) => {
     return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {props.AccordionCollapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.onClick()
    }
    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}