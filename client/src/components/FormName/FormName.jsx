import React, { useState } from 'react';
import validateName from './validation.js';
import FormBirthDate from '../FormBirthDate/FormBirthDate.jsx';
import styled from 'styled-components';
import s from '../FormName/formName.module.css'
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
        <div className={s.container}>  
            <Header>
                <h5 className={s.textFrom}>Formulario </h5>
            </Header> 
            <Name>
            <p>
                <h5 style={{margin:"4px"}}>¿Cuál es tu nombre?</h5>
            </p>
               <p style={{margin:"2px"}}>     
               {errors.name && <Errors>{errors.name}</Errors>}
               <input
                    type='text'
                    name={'name'}
                    value={inputName.name}
                    placeholder= 'Nombre'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </p>
               <p style={{margin:"2px"}}>
               {errors.surname && <Errors>{errors.surname}</Errors>}
               <input
                    type='text'
                    name={'surname'}
                    value={inputName.surname}
                    placeholder= 'Segundo Nombre'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </p>
               <p style={{margin:"2px"}}>
                {errors.paternalSurname && <Errors>{errors.paternalSurname}</Errors>}
               <input
                    type='text'
                    name={'paternalSurname'} 
                    value={inputName.paternalSurname}
                    placeholder= 'Apellido Paterno'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </p>
               <p style={{margin:"2px"}}>
                {errors.maternalSurname && <Errors>{errors.maternalSurname}</Errors>}
               <input
                    type='text'
                    name={'maternalSurname'}
                    value={inputName.maternalSurname}
                    placeholder= 'Apellido Materno'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </p>
             
                {Object.keys(errors).length || inputName.name === "" || inputName.surname ==="" || inputName.paternalSurname ==="" || inputName.maternalSurname === ""
                ? <div style={{background:"white"}}></div> : <Result>{inputName.name} {inputName.surname} {inputName.paternalSurname} {inputName.maternalSurname}</Result>}
            
             </Name>
            <FormBirthDate
                name={inputName}
                setName={setInputName}/>
        </div>
    );
}

export default FormName;



const Header = styled.div`
    background-color: #df82c0;
    width: 100%;
    height: 8rem;
    margin: 0 auto;

`
const Name = styled.div`
    background-color: #e7e7e7;
    width: 75%;
    margin: 0 auto;
    height: 182px;
    border-radius: 9px;
`
const Result = styled.div`
    background-color: pink;
    width: 100%;
    height: 3rem;
    position: static;
    margin-top: 44px;
`
const Errors = styled.p`
color: red;
font-size: 10px;
margin: 0;
`
