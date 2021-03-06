import React, { useState } from "react";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

export default function App() {
    const [expression, setExpression] = useState('');
    const [calculationResult, setCalculationResult] = useState('');

    // Функция добавления символа в выражение
    let complementExpression = (newValue) => {
        setExpression(expression + newValue);
    };

    // Функция расчета итогового значения
    let calculateResult = () => {
        let potentialResult = '';

        try {
            potentialResult = `${+eval(expression).toFixed(7)}`;
        } catch (error) {
            console.log(`${error.name}: ${error.message}`);
            potentialResult = 'error';
        }

        if (potentialResult !== 'error') {
            setExpression('');
        }

        setCalculationResult(potentialResult);
    };

    // Функция сброса состояния
    let dropState = () => {
        setExpression('');
        setCalculationResult('');
    };

    let classes = ["calculator"].join(' ');

    return (
        <div className={classes}>
            <div className="calculator__content-container">
                <Display
                    expression={expression}
                    setExpression={setExpression}
                    calculationResult={calculationResult}
                    calculateResult={calculateResult}
                    dropState={dropState}
                />
                <Keyboard 
                    complementExpression={complementExpression}
                    calculateResult={calculateResult}
                    dropState={dropState}
                />
            </div>
        </div>
    );
}