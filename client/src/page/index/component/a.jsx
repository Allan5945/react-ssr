import React,{ useState, useEffect } from 'react';

function Example(data) {
    const [count, setCount] = useState(10);
    useEffect(() => {
        console.log(data)
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example;
