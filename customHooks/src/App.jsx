import React, { useEffect } from 'react';
import useCounter from './useCounter';
import useLocalStorage from './useLocalStorage';

function App() {
    const { count, increment, decrement, reset } = useCounter(8);
    const [name, setName] = useLocalStorage("name", "mayank");

    useEffect(() => {
        const id = setTimeout(() => {
            setName("mankulaal"); // Update the name after 2 seconds
        }, 2000);
        return () => clearTimeout(id); // Use clearTimeout
    }, []);

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <p>Name: {name}</p> {/* Display the name */}
        </>
    );
}

export default App;
