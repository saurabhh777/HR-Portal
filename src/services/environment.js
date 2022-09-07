import axios from 'axios';
const BASE_URL = "http://localhost:9091/rest/v1";
class Environment{
    getAllRoles(){
        return axios.post(BASE_URL +"/role/create-role",roleName);
    }
}






