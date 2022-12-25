import { useEffect, useState } from "react";

const Calculate = () => {
    const [num1State, setNum1State] = useState(5);
    const [num2State, setNum2State] = useState(10);
    const [resultState, setResultState] = useState(NaN);

    const sum = () => {
        setResultState(parseInt(num1State) + parseInt(num2State));
    }

    const difference = () => {
        setResultState(parseInt(num1State) - parseInt(num2State));
    }

    const product = () => {
        setResultState(parseInt(num1State) * parseInt(num2State));
    }

    const divide = () => {
        setResultState(parseInt(num1State) / parseInt(num2State));
    }

    useEffect(() => {
        console.log('Hello world');
    }, []);

    return(
        <div>
            <p>{resultState}</p>
            <button onClick={() => difference()}>-</button>
            <button onClick={divide}>/</button>
            <input type="number" value={num1State} onChange={(e) => setNum1State(e.target.value)} />
            <input type="number" value={num2State} onChange={(e) => setNum2State(e.target.value)} />
            <button value='inc' onClick={sum}>+</button>
            <button onClick={product}>*</button>
        </div>
    )
}

export default Calculate