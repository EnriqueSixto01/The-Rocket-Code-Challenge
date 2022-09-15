import React, { useState } from 'react';
import Chat from '../Chat/Chat';
import validateContact from './validation';
import styled from 'styled-components';
function FormContact({name, setName, date, setDate}) {
const [errors, setErrors] = useState({})
const [contact, setContact] = useState({
    email: "",
    phoneNumber: ""
})

// console.log(errors)
const handleOnChange = (e) =>{
    const {name, value} = e.target
    setContact({...contact, [name]:value });
}

const handleBlur = (e) =>{
    handleOnChange(e)
    setErrors(validateContact(contact))
}

    return (
        <>  
            <Contact>
            <p>
                <h5>Datos de contacto</h5>
            </p>
               <p>
                {errors.email && <Errors>{errors.email}</Errors>}
               <input
                    type='text'
                    name='email'
                    value={contact.email}
                    placeholder= 'correo electrónico'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </p>
               <p>
                {errors.phoneNumber && <Errors>{errors.phoneNumber}</Errors>}
               <input
                    type='text'
                    name='phoneNumber'
                    value={contact.phoneNumber}
                    placeholder= 'Telefono celular'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </p>
               <div>
               </div>
               {Object.keys(errors).length || contact.phoneNumber === "" ? <span></span> : <Result><p>{contact.email}</p> <p>{contact.phoneNumber}</p></Result>}
               </Contact>
              <Chat
                name={name}
                setName={setName}
                date={date}
                setDate={setDate}
                contact={contact}
                setContact={setContact}/>
        </>
    );
}

export default FormContact;

const Contact = styled.div`
    background-color: #e7e7e7;
    width: 75%;
    margin: 0 auto;
    height: 170px;
    border-radius: 9px;
`

const Result = styled.div`
    background-color: pink;
    width: 100%;
    height: 4rem;
    margin-top: 4rem;
`
const Errors = styled.p`
color: red;
font-size: 10px;
margin: 0;
`