import React, { useState } from 'react';
// import Chat from './Chat';
import validateDate from './validation.js';

function FormBirthDate() {
const [errors, setErrors] = useState({})
const [date, setDate] = useState({
    day: "",
    month: "",
    year: ""
})

console.log(errors)

const handleOnChange = (e) =>{
    const {name, value} = e.target
    setDate({...date, [name]:value })
}

const handleBlur =(e) =>{
    handleOnChange(e)
    setErrors(validateDate(date))
}


    return (
        <div>
            <div>
                <h5>¿Cuál es tu fecha de nacimiento?</h5>
            </div>
               <div>
               <input
                    type='text'
                    name='day'
                    value={date.day}
                    placeholder= 'Dia'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </div>
               {errors.day && <p>{errors.day}</p>}
               <div>
               <input
                    type='text'
                    name='month'
                    value={date.month}
                    placeholder= 'Mes'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </div>
               {errors.month && <p>{errors.month}</p>}
               <div>
               <input
                    type='text'
                    name='year'
                    value={date.year}
                    placeholder= 'Año'
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    />
               </div>
               {errors.year && <p>{errors.year}</p>}
               <div>
               {Object.keys(errors).length || date.month ==="" || date.year === "" ? <span></span> : <span>{date.day} </span>}
               {Object.keys(errors).length ? <span></span> : <span>{date.month} </span>}
               {Object.keys(errors).length ? <span></span> : <span>{date.year} </span>}
               </div>

        </div>
    );
}

export default FormBirthDate;