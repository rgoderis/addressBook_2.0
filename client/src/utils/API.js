import axios from 'axios'


const API = {
    getContacts: function(username){
        return axios.get("/api/users/"+username)
    },
    saveContact: function(username, contactData){
        return axios.post("/api/users/"+username, contactData)
    },
    getContact: function(id){
        return axios.get("/api/users/contact/"+id)
    }
        
}

export default API