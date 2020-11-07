import axios from 'axios';


const service = axios.create({baseURL :"https://ih-beers-api2.herokuapp.com/beers"})
export default service


function listBeers() {
    return service.get('/') // Pronise
}

function getBeer(id) {
    return service.get(`/${id}`)
}
export {listBeers, getBeer}