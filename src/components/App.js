import React from 'react';
import Header from "./Header";



export default ({children}) => {
    return(
        <div>
            <Header/>
            {children}
            Hi Im the App
        </div>
    );
}