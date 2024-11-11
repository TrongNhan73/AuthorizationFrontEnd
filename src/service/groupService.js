import axios from "axios";
const linkApi = 'http://localhost:8081/api/v1';

const getGroup = async () => {
    return await axios.get(linkApi + '/groups/read');
}
export { getGroup }