export default function validateDate(value){
    let error = {}
    const regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

   if(value.day < 0 || value.day > 31) error.day = "*Dia no valido"
   else if(isNaN(value.day)) error.day = "*Solo numeros"
   else if(value.day === "") error.day = "*Completa este campo"

   if(!value.month.trim()) error.month = "*Completa este campo";
   else if(!regName.test(value.month.trim())) error.month = "*Solo letras"
    
   if(value.year.length > 4) error.year = "*Año invalido"
   else if(!value.year.trim()) error.year = "*Completa este campo"
   else if(isNaN(value.year)) error.year = "*Solo numeros"

    return error;
}