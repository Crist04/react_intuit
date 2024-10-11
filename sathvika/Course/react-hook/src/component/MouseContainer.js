import React, { useState, useEffect } from 'react'
import EffectTwo from './EffectTwo';

function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
           <button onClick={()=>setDisplay(!display)}>Toggle Button </button>
            {display && <EffectTwo/>}
        </div>
    )
}

export default MouseContainer;