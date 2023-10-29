import React from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {OnOff} from "./components/OnOff";

function App() {
    return (
        <div>
            <PageTitle title={'This is component'}/>
            <PageTitle title={'My friends'}/>
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
            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;