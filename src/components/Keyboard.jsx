import React from "react";
import Key from "./Key";

export default function Keyboard() {
    let keyValues = ['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];
    let keys = keyValues.map((keyValue, index) => <Key keyValue={keyValue} key={`${index}`.repeat(2)}/>);

    return <div>{keys}</div>;
}