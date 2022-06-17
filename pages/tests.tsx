import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Tests : NextPage = () => {
    const [counter , setCounter] = useState(0)

    const handleCounterIteration = () => setCounter(counter + 1)

    useEffect(() => {
        document.title = 'This counter result' + counter + '!'
     })


    return (
        <div>
            <h1>Lets Count <span>{counter}</span></h1>
            <button onClick={e => setCounter(0)}>Reset</button> 
            <button onClick={handleCounterIteration}>Iterate</button>
        </div>
    )
}
export default Tests