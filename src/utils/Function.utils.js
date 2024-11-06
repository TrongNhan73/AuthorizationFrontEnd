import React from 'react'

function isValidEmail(email) {
    return (
        /^\S+@\S+\.\S+$/.test(email)
    );
}


const isValidPhone = (phone) => {
    return (/^0\d{9}$/.test(phone));
}


const isValidPassword = (password) => {
    return password.length > 3;
}
export {
    isValidEmail,
    isValidPhone,
    isValidPassword
}