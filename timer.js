import React, { useState, useRef } from 'react';

export const Timer = (props) => {
    const [second, setsecond] = useState(0)
    const [minutes, setminutes] = useState(0)
    const [houres, sethoures] = useState(0)
    const timeout=useRef(null)
    timeout.current=setTimeout(() => {
        setsecond(second + 1) //counter++
        if(second==59){
            setsecond(0)
            setminutes(minutes + 1) //counter++
        }
        if(minutes==59){
            setminutes(0)
            sethoures(houres + 1) //counter++
        }     
    }, 1000)
    // const restart = () => {
    // clearTimeout(timeout.current)
    // setsecond(0)
    // setminutes(0)
    // sethoures(0)
    // }
    return (
        <div style={{ margin: '10%' }}>
            <h1> Timer:</h1>
            <h2> {houres}:{minutes}:{second}</h2>
            <br />
            {/* <button outClick={restart}>restart</button> */}
        </div>
    )
}