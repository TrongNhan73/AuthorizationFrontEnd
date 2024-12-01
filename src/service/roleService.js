import axios from "../setup/axios";

const createRole = async (data) => {
    return await axios.post('/roles/create', [...data])
}


export { createRole }