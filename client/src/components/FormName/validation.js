export default function validateName(value){
    const regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let error = {}
        if(!value.name.trim()) error.name = "*Completa este campo";
        else if(value.name.length > 15) error.name = "*No mas de 15 caracteres"
        else if(!regName.test(value.name.trim())) error.name = "*Solo letras"

        if(value.surname){
        if(value.surname.length > 15) error.surname = "No mas de 15 caracteres"
        else if(!regName.test(value.surname.trim())) error.surname = "*Solo letras"
        }
        if(!value.paternalSurname.trim()) error.paternalSurname = "*Completa este campo";
        else if(value.paternalSurname.length > 15) error.paternalSurname = "*No mas de 15 caracteres"
        else if(!regName.test(value.paternalSurname.trim())) error.paternalSurname = "*Solo letras"

        if(!value.maternalSurname.trim()) error.maternalSurname = "*Completa este campo";
        else if(value.maternalSurname.length > 15) error.maternalSurname = "*No mas de 15 caracteres"
        else if(!regName.test(value.maternalSurname.trim())) error.maternalSurname = "*Solo letras"
        
        return error;
}
