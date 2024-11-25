import axios from "../setup/axios";



const registerNewUser = async ({ email, phoneNum, userName, password }) => {
    return await axios.post('/register', {
        email, phoneNum, userName, password
    })
}

const login = async ({ ephone, password }) => {
    return await axios.post('/login', {
        ephone, password
    })
}
const getUserList = async (page, limit) => {
    return await axios.get('/users/read?page=' + page + '&limit=' + limit);
}

const deleteUser = async (id) => {
    return await axios.delete('/users/delete', { data: { id } });
}

const createUser = async (data) => {
    return await axios.post('/users/create', { ...data });
}

const updateUser = async (data) => {
    return await axios.put('/users/update', { ...data });

}
const getAccount = async () => {
    return axios.get('/account');
}
export {
    registerNewUser,
    login,
    getUserList,
    deleteUser,
    createUser,
    updateUser,
    getAccount
}