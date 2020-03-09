import axios from 'axios'


const API = {
    getContacts: function(username){
        return axios.get("/api/users/"+username)
    }
}

export default API