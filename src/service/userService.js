import axios from "axios";
const linkApi = 'http://localhost:8081/api/v1';
const registerNewUser = async ({ email, phoneNum, userName, password }) => {
    return await axios.post(linkApi + '/register', {
        email, phoneNum, userName, password
    })
}

const login = async ({ ephone, password }) => {
    return await axios.post(linkApi + '/login', {
        ephone, password
    })
}
const getUserList = async (page, limit) => {
    return await axios.get(linkApi + '/users/read?page=' + page + '&limit=' + limit);
}
export {
    registerNewUser,
    login,
    getUserList
}