export default function validateContact(value){
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let error = {}

    if(!value.email.trim()) error.email = "*Campo requerido";
    else if(!regexEmail.test(value.email.trim())) error.email = "email no valido";

    if(!value.phoneNumber) error.phoneNumber = "*Campo requerido";
    else if(isNaN(value.phoneNumber)) error.phoneNumber = "*Solo numeros"
    else if(value.phoneNumber.length > 10) error.phoneNumber = "*Telefono invalido"

    return error;
}
