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
    },
    saveNote: function(id, noteData) {
        return axios.post("/api/users/"+id+"/note", noteData)
    },
    deleteNote: function(contactId, noteId){
        return axios.delete("/api/users/"+contactId+"/note/"+noteId)
    },
        
}

export default API