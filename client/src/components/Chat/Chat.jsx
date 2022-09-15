import React from 'react';
import { useState } from 'react';
import Profile from '../Profile/Profile';

function Chat({name, setName, date, setDate, contact, setContact}) {
    const[savedDate, setSaveData] = useState(false)
    
    console.log(name)
    const saveData = (e)=>{
        e.preventDefault();
        localStorage.setItem("name", JSON.stringify(name))
        localStorage.setItem("date", JSON.stringify(date))
        localStorage.setItem("contact", JSON.stringify(contact))
        setSaveData(true)
        setName({name:"", surname:"", paternalSurname:"", maternalSurname:""})
        setDate({day:"", month:"", year:""})
        setContact({email:"", phoneNumber:""})
    }
    return (
        <div> 
            <div>
                datos correctos?
            </div>
            <button disabled={
                name.name === "" ||
                name.paternalSurname ==="" ||
                name.maternalSurname ==="" ||
                date.day === "" ||
                date.month === "" ||
                date.year === "" ||
                contact.email === "" ||
                contact.phoneNumber === ""
            } 
                onClick={saveData}>Iniciar</button>
           {savedDate && <Profile/>}
        </div>
    );
}

export default Chat;