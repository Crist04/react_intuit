import React, { useState, useEffect } from 'react'

function HookEffectOne() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count} times</button>
        </div>
    )
}

export default HookEffectOne;