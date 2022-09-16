import { createContext, useContext, useState } from "react";

export const UIcontext=createContext()
export const ContexUi=()=>useContext(UIcontext)
export const UIprovider=({children})=>{
 
    const [drawer,setdrawer]=useState(false);
    const [searchBox, setSearchBox] = useState(false)
   const value={
        drawer,
        setdrawer,
        searchBox, setSearchBox
    };


    return(<UIcontext.Provider value={value}>{children}</UIcontext.Provider>
        
    )
}