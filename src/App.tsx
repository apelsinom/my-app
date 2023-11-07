import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {UncontrolOnOff} from "./components/UncontrolOnOff";
import styled from "styled-components";
import {ControlledRating, RatingValueType} from "./components/ControlledRating";
import {ControlAccordion} from "./components/ControlAccordion";
import {ControlOnOff} from "./components/ControlOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [AccordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [on, setOn] = useState<boolean>(false)

    return (
        <Container>
            <PageTitle title={'This is component'}/>
            <PageTitle title={'My friends'}/>
            <ControlOnOff on={on} setOn={setOn}/>
            <ControlOnOff on={on} setOn={setOn}/>
            <ControlAccordion titleValue={'Menu'}
                              onClick={()=> {setAccordionCollapsed(!AccordionCollapsed)}}
                              AccordionCollapsed={AccordionCollapsed}/>
            <ControlAccordion titleValue={'Users'}
                              onClick={()=> {setAccordionCollapsed(!AccordionCollapsed)}}
                              AccordionCollapsed={AccordionCollapsed}/>
            <ControlledRating value={ratingValue}
                              onClick={setRatingValue}/>
            Article 1
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            Article 2
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolOnOff />
            <UncontrolOnOff />
        </Container>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;

const Container = styled.div`
  margin: 20px auto;
  width: 300px;
  text-align: center;
`