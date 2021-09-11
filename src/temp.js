import React from "react";
import { useState } from "react";

const Temp = () => {
    const [count, setCount] = useState(0);
    const incNum = () => {
        setCount(count+1);
    }
    return (
        <div>
            <button onClick={incNum}>
                click me {count}
            </button>
        </div>
    )
}

export default Temp