
import {  createContext, useEffect, useState } from "react";

export const WindowSize= createContext(null);

export default function WindoContext({children}) {
    const [windowSize,setWindowSize] =useState(window.innerWidth);
    useEffect(() =>{
       function setWindoWidth(){
        setWindowSize(window.innerWidth)
       }
       window.addEventListener('resize',setWindoWidth);
         
      return ()  => {
        window.removeEventListener("resize" ,setWindoWidth)
      }
    },[])
    return ( 
    <WindowSize.Provider value={{windowSize,setWindowSize}}>
        {children}
    </WindowSize.Provider>
    );

}

