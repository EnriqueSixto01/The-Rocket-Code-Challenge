import React from 'react';
import { useState } from 'react';
import Profile from '../Profile/Profile';
import styled from 'styled-components'

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
        <Wraper> 
            <Verificate>
                Si tus datos son correctos
                por favor continuemos
            </Verificate>
            <Button disabled={
                name.name === "" ||
                name.paternalSurname ==="" ||
                name.maternalSurname ==="" ||
                date.day === "" ||
                date.month === "" ||
                date.year === "" ||
                contact.email === "" ||
                contact.phoneNumber === ""
            } 
                onClick={saveData}>Iniciar</Button>
           {savedDate && <Profile/>}
        </Wraper>
    );
}

export default Chat;

const Button = styled.button`
    background: #921a2e;
    border: none;
    border-radius: 5px;
    width: 10rem;
    height: 2rem;
    color: white;
    cursor: pointer;
    margin-top: 1rem;
`
const Wraper = styled.div`
    height: 4rem;
    width: 83%;
    margin: 4rem auto;

`
const Verificate = styled.div`
    background-color: #e7e7e7;
    height: 3rem;

`