import React, { useState, useEffect } from 'react'

function EffectTwo() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition=e=>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    //[] is added so that console.log is called only
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition)

        //to remove event handling using useEffect
        return ()=>{
            console.log('Component unmounting code');
            window.removeEventListener('mousemove',logMousePosition);
        }
    },[])


    return (
        <div>
            Hook X-{x}  Y-{y}
        </div>
    )
}

export default EffectTwo;