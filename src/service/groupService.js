import axios from "../setup/axios";


const getGroup = async () => {
    return await axios.get('/groups/read');
}
export { getGroup }