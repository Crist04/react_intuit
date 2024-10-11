import React, { useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

function DocTitleTwo() {
    const [count, setcount]=useState(0)

    useDocumentTitle(count)
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>count - {count}</button>
        </div>
    )
}

export default DocTitleTwo;