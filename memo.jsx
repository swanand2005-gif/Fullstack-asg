import { useState } from "react";
function ExpensiveCalculation() {
    const [count, setcount] = useState(0);
    const [dark, setDark] = useState([false]);
    const expensiveResult = useMemo(() => {
        console.log("Computing...");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += count * 2;
        }
        return result;
    }, [Count]);
    const theme = {
        backgroundColor: dark ? "back" : "White",
        color: dark ? "White" : "black"
    };
    return (
        <div style={theme} className="memoHookDiv">
            <p>Result: {expensiveResult}</p>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </div>
    )
}

