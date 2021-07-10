import React from 'react';



const Footer =()=>{
    let date1=new Date().getFullYear();
return(
    <>
    <footer>
        Copyright © {date1}
    </footer>
    </>
    );
};

export default Footer;
