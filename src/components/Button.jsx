import React from "react";

export default function Button(props) {
    let keyValue = props.keyValue;
    
    return (
        <div className="calculator__key-container">
            <button className="calculator__key" value={keyValue} tabIndex="-1">{keyValue}</button>
        </div>
    );
}