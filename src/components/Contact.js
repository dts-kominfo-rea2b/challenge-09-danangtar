// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (param) => {
    return (
        <div className="contact">
            <div className="kitten">
                <img src={param.data.photo}></img>
            </div>
            <div className="info">
                <p className="name">{param.data.name}</p>
                <p>{param.data.phone}</p>
                <p>{param.data.email}</p>
            </div>
        </div>
    )
}

export default Contact;