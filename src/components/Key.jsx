import React from "react";

export default function Key(props) {
    let keyValue = props.keyValue;
    
    return (
        <div>
            <button>{keyValue}</button>
        </div>
    );
}