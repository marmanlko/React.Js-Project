import React, { useState } from 'react';

const Time=()=>
{

    
    const tTime=new Date().toLocaleTimeString()
    const [ctime, setCtime]=useState(tTime);
    const updateTime=()=>
    {
        const ntTime=new Date().toLocaleTimeString()
        setCtime(ntTime);
    }

    setInterval(updateTime, 1000);
return(
    <>
        <h2>Time is:{ctime}</h2>
        <button onClick={updateTime} className="btn btn-primary">Get Time</button>
    </>
);

};
export default Time;