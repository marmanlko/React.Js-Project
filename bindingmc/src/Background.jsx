import React , {useState} from 'react';


const Background=()=>

{
    const red="red";
    const [ccolor, CColor]=useState(red);
    const Ccolor=()=>
        {
            let newRed="blue";
            CColor(newRed);
        }

    return(
        <>
            <div style={{backgroundColor:ccolor}}>
                <button onClick={Ccolor} className="btn btn-secondry">Click to Change</button>
            </div>
        </>
    );

}
export default Background; 