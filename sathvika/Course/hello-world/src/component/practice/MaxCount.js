import { useEffect, useState } from "react";

export default function MaxCount() {
    const [count, setCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);

    
    useEffect(()=>{
        let timer;
        if(timeLeft>0){
            timer=setTimeout(() => {
                setTimeLeft(timeLeft-1);
            }, 1000);
        }    
    },[timeLeft]);

    const handleCount = () => {
        if(timeLeft>0){
            setCount(prev=>prev+1);
        }      
    };


    return (
        <div >
            <h1>Count - {count}</h1>
            <h2>Time left :{timeLeft}</h2>
            {timeLeft>0 &&<button onClick={handleCount}>+</button>}
        
        </div >
    );
    
}