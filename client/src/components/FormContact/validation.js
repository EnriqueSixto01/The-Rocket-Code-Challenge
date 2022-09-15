export default function validateContact(value){
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let error = {}

    if(!value.email.trim()) error.email = "*Completa este campo";
    else if(!regexEmail.test(value.email.trim())) error.email = "*Email no valido";

    if(!value.phoneNumber) error.phoneNumber = "*Completa este campo";
    else if(isNaN(value.phoneNumber)) error.phoneNumber = "*Solo numeros"
    else if(value.phoneNumber.length > 10) error.phoneNumber = "*Telefono invalido"

    return error;
}
