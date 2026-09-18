import './index.css';
import { useState } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);
    function onIncrement()
    {
        /* setCount(count+1); */
        setCount(prevCount => prevCount+1);
        console.log(typeof(count));
    }
    function onDecrement()
    {
        /* setCount(count-1); */
        setCount(prevCount => prevCount-1);
    }
    function onReset()
    {
        setCount(0);
    }
    return (
        <div className="container">
            <h1 className="heading">Counter</h1>
            <p className="count">{count}</p>
            <div >
                <button onClick={onIncrement} className="button">Increment</button>
                <button onClick={onDecrement} className="button">Decrement</button>
            </div>
            <button className="button" onClick={onReset}>Reset Counter</button>
        </div>    
    )    
}
export default Counter;