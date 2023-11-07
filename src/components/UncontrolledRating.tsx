import React, {useState} from "react";

export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} onClickValue={()=>setValue(1)} />
            <Star selected={value > 1} onClickValue={()=>setValue(2)} />
            <Star selected={value > 2} onClickValue={()=>setValue(3)} />
            <Star selected={value > 3} onClickValue={()=>setValue(4)} />
            <Star selected={value > 4} onClickValue={()=>setValue(5)} />
        </div>
    )
}

type PropsType = {
    selected: boolean
    onClickValue: () => void
}

function Star(props: PropsType) {

    return (
        <span onClick={props.onClickValue}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}