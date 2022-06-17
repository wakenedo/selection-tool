import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {Button} from '@mui/material'

const Tests: NextPage = () => {
    const [counter, setCounter] = useState(0)

    const handleCounterIteration = () => setCounter(counter + 1)

    useEffect(() => {
        document.title = 'This counter result' + counter + '!'
    })


    return (
        <div>
            <h1>Lets Count <span>{counter}</span></h1>
            <div>
                <Button onClick={e => setCounter(0)}>Reset</Button>
                <Button onClick={handleCounterIteration}>Iterate</Button>
            </div>
        </div>
    )
}
export default Tests