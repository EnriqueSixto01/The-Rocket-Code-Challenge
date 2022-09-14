import React, { useState } from 'react';
// import Chat from './Chat';
import validateName from './validation.js';

function FormName() {
const [errors, setErrors] = useState({});
const [inputName, setInputName] = useState({
    name:"",
    surname:"",
    paternalSurname:"",
    maternalSurname:""
})
// console.log(errors)



const handleOnChange = (e) =>{
    const {name, value} = e.target
    setInputName({...inputName, [name]:value });
}

const handleBlur =(e) =>{
    handleOnChange(e)
    setErrors(validateName(inputName))
}

    return (
        <div>   
            <div>
                <h5>¿Cuál es tu nombre?</h5>
            </div>
            
               <div>
                
               <input
                    type='text'
                    name={'name'}
                    value={inputName.name}
                    placeholder= 'Nombre'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </div>
                    {errors.name && <p>{errors.name}</p>}
               <div>
               <input
                    type='text'
                    name={'surname'}
                    value={inputName.surname}
                    placeholder= 'Segundo Nombre'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </div>
               <div>
               <input
                    type='text'
                    name={'paternalSurname'} 
                    value={inputName.paternalSurname}
                    placeholder= 'Apellido Paterno'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </div>
               {errors.paternalSurname && <p>{errors.paternalSurname}</p>}
               <div>
               <input
                    type='text'
                    name={'maternalSurname'}
                    value={inputName.maternalSurname}
                    placeholder= 'Apellido Materno'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </div>
               {errors.maternalSurname && <p>{errors.maternalSurname}</p>}
             <div>
                {Object.keys(errors).length ? <span></span> : <span>{inputName.name} </span>}
                {Object.keys(errors).length ? <span></span> : <span>{inputName.surname} </span>}
                {Object.keys(errors).length ? <span></span> : <span>{inputName.paternalSurname} </span>}
                {Object.keys(errors).length ? <span></span> : <span>{inputName.maternalSurname} </span>}
             </div>
        </div>
    );
}

export default FormName;