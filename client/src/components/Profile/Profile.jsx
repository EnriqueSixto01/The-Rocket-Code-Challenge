import React from 'react';

function Profile() {
        let nameValue = JSON.parse(localStorage.getItem('name'));
        let dateValue = JSON.parse(localStorage.getItem('date'));
        let contactValue = JSON.parse(localStorage.getItem('contact'))
    return (
        <div>
            <p>Fecha de Nacimiento: {dateValue.day} {dateValue.month} {dateValue.year}</p>
            <p>Correo electrónico: {contactValue.email}</p>
            <p>Teléfono: {contactValue.phoneNumber}</p>
            <p>Nombre: {nameValue.name} {nameValue.surname} {nameValue.paternalSurname} {nameValue.maternalSurname}</p>
        </div>
    );
}

export default Profile;