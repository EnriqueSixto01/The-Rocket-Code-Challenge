import React from 'react';
import styled from 'styled-components';
function Profile() {
        let nameValue = JSON.parse(localStorage.getItem('name'));
        let dateValue = JSON.parse(localStorage.getItem('date'));
        let contactValue = JSON.parse(localStorage.getItem('contact'))
    return (
        <Data>
            <p>Fecha de Nacimiento: {dateValue.day} {dateValue.month} {dateValue.year}</p>
            <p>Correo electrónico: {contactValue.email}</p>
            <p>Teléfono: {contactValue.phoneNumber}</p>
            <p>Nombre: {nameValue.name} {nameValue.surname} {nameValue.paternalSurname} {nameValue.maternalSurname}</p>
        </Data>
    );
}

export default Profile;


const Data = styled.div`
    background-color: #df82c0;
    width: 100%;
    height: 10rem;
    margin: 0 auto;
`