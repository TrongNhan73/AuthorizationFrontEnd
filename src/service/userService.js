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

const deleteUser = async (id) => {
    return await axios.delete(linkApi + '/users/delete', { data: { id } });
}

const createUser = async (data) => {
    return await axios.post(linkApi + '/users/create', { ...data });
}

const updateUser = async (data) => {
    return await axios.put(linkApi + '/users/update', { ...data });

}
export {
    registerNewUser,
    login,
    getUserList,
    deleteUser,
    createUser,
    updateUser
}