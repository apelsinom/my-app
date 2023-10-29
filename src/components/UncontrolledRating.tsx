import React, {useState} from "react";

export function UncontrolledRating() {

    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {

    let [value, setValue] = useState(false)

    const onClickValue = () => {
        setValue(!value)
    }
    return <>
        {value && <span onClick={() => onClickValue()}><b>star </b></span>}
        {!value && <span onClick={() => onClickValue()}>star </span>}
    </>
}