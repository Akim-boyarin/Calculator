import React from "react";
import Button from "./Button";

export default function Keyboard(props) {
    const { complementExpression, calculateResult, dropState } = props;
    const keyValues = ['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];
    let calculatorButtonsList = keyValues.map((keyValue) => <Button keyValue={keyValue} key={'#' + keyValue}/>);

    let clickHandler = (event) => {
        if (event.target.tagName !== 'BUTTON') return;
        let currentValue = event.target.value;

        if (currentValue === 'C') {
            dropState();
        } else if (currentValue === '=') {
            calculateResult();
        } else {
            complementExpression(currentValue);
        }
    };

    return <div className="calculator__keyboard" onClick={clickHandler}>{calculatorButtonsList}</div>;
}