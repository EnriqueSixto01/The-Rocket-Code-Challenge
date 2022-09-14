import React, { useState } from 'react';

import validateContact from './validation';

function FormContact(props) {
const [errors, setErrors] = useState({})
const [contact, setContact] = useState({
    email: "",
    phoneNumber: ""
})

console.log(errors)
const handleOnChange = (e) =>{
    const {name, value} = e.target
    setContact({...contact, [name]:value });
}

const handleBlur = (e) =>{
    handleOnChange(e)
    setErrors(validateContact(contact))
}

    return (
        <div>
            <div>
                <h5>Datos de contacto</h5>
            </div>
               <div>
               <input
                    type='text'
                    name='email'
                    value={contact.email}
                    placeholder= 'correo electrónico'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </div>
               {errors.email && <p>{errors.email}</p>}
               <div>
               <input
                    type='text'
                    name='phoneNumber'
                    value={contact.phoneNumber}
                    placeholder= 'Telefono celular'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </div>
               {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
               <div>
               {Object.keys(errors).length || contact.phoneNumber === "" ? <span></span> : <span>{contact.email} </span>}
               {Object.keys(errors).length  ? <span></span> : <span>{contact.phoneNumber} </span>}
               </div>
        </div>
    );
}

export default FormContact;