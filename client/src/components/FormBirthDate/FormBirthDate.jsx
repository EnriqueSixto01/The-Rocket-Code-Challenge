import React, { useState } from 'react';
import FormContact from '../FormContact/FormContact.jsx';
import validateDate from './validation.js';
import styled from 'styled-components';
function FormBirthDate({name, setName}) {
const [errors, setErrors] = useState({})
const [date, setDate] = useState({
    day: "",
    month: "",
    year: ""
})

// console.log(errors)

const handleOnChange = (e) =>{
    const {name, value} = e.target
    setDate({...date, [name]:value })
}

const handleBlur =(e) =>{
    handleOnChange(e)
    setErrors(validateDate(date))
}


    return (
        <>          
            <FormDate>
            <p>
                <h5>¿Cuál es tu fecha de nacimiento?</h5>
            </p>
               <p>
                   {errors.day && <Errors>{errors.day}</Errors>}
               <input
                    type='text'
                    name='day'
                    value={date.day}
                    placeholder= 'Dia'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </p>
               <p>
                {errors.month && <Errors>{errors.month}</Errors>}
               <input
                    type='text'
                    name='month'
                    value={date.month}
                    placeholder= 'Mes'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </p>
               <p>
                 {errors.year && <Errors>{errors.year}</Errors>}
               <input
                    type='text'
                    name='year'
                    value={date.year}
                    placeholder= 'Año'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </p>
               </FormDate>
               
               {Object.keys(errors).length || date.month ==="" || date.year === "" ? <span></span> : <Result>{date.day} {date.month} {date.year}</Result>}
            
             <FormContact
                name={name}
                setName={setName}
                date={date}
                setDate={setDate}/>

        </>
    );
}

export default FormBirthDate;


const FormDate = styled.div`
    background-color: #e7e7e7;
    width: 75%;
    margin: 0 auto;
    height: 176px;
    border-radius: 9px;
    margin-top: 2rem;
    position: static;
`
const Result = styled.div`
    background-color: pink;
    width: 72%;
    position: static;
    margin: 0 auto;
    padding: 1rem;

`
const Errors = styled.p`
color: red;
font-size: 10px;
margin: 0;
`