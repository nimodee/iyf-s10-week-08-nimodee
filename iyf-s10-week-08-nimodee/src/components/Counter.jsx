import { useState } from 'react';

function Counter() {
    // Declare state variable
    const [count, setCount] = useState(0);
    
    // count = current value
    // setCount = function to update it
    // 0 = initial value
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}

export default Counter