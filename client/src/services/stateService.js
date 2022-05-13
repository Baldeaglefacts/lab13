import axios from 'axios'

export default { // Make requests to states api for data
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },
}