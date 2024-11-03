import axios from "axios";

const registerNewUser = async ({ email, phoneNum, userName, password }) => {
    return await axios.post('http://localhost:8081/api/v1/register', {
        email, phoneNum, userName, password
    })
}

export {
    registerNewUser
}