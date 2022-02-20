import React from "react";

export default function Button(props) {
    let keyValue = props.keyValue;
    
    return (
        <div>
            <button value={keyValue} tabIndex="-1">{keyValue}</button>
        </div>
    );
}