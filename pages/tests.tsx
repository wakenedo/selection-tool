import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Box, Button } from '@mui/material'

const Tests: NextPage = () => {
    const [counter, setCounter] = useState(0)

    const handleCounterIteration = () => setCounter(counter + 1)

    useEffect(() => {
        document.title = 'This counter result' + counter + '!'
    })


    return (
        <Box
            margin={2}
            width={300} 
            textAlign='center'
        >
            <h1>Lets Count <span>{counter}</span></h1>
            <Box
                display='flex'
                flexDirection='column'
            >
                <Button  variant='outlined' onClick={e => setCounter(0)}>Reset</Button>
                <Button variant='outlined' onClick={handleCounterIteration}>Iterate</Button>
            </Box>
        </Box>
    )
}
export default Tests