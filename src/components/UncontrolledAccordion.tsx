import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
}
export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState<boolean>(false)

    let displayButton = 'expand'
    if(collapsed) displayButton = 'collapse'

    const collapsedHandler = () => setCollapsed(!collapsed)


        return <div>
            <AccordionTitle title={props.titleValue}/>
            {<button onClick={collapsedHandler}>{displayButton}</button>}
            {collapsed && <AccordionBody/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
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