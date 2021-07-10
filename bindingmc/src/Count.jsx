import React, { useEffect, useState } from "react";



const Count=()=>
{

// const state = useState();
// console.log(state);
const [count, setCount] = useState(0);
const IncNum=()=>{
    setCount(count+1);
    
};

    return(
        <>  
            <h2>{count}</h2>
            <button onClick={IncNum} className="btn btn-danger">Click Here</button>
        </>

    );
};

export default Count;