import React,{useState} from 'react';
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const s1={
        name:"Bhargavi",
        class:"3rd"
    }
    const [state,setState]=useState(s1);

    const update=(()=>{
        setTimeout(()=>{
            setState({
                "name":"Bhargavi Madam",
                "class":"3rd B"
            })
        },2000)
    })
    
return(
    <NoteContext.Provider value={{state,update}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;