import axios from 'axios';

const ROLES_API_BASE_URL = "http://localhost:9091/rest/v1";
 class Roles {
    
getRoles(){
return axios.get(ROLES_API_BASE_URL+"/role/get-all-roles");
 }
    
 createRoles(roleName){
return axios.post(ROLES_API_BASE_URL +"/role/create-role",roleName);
}

    }

    export default new Roles () 











