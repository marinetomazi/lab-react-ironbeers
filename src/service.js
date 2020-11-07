import axios from 'axios';


const service = axios.create({baseURL :"https://ih-beers-api2.herokuapp.com/beers"})
export default service


function listBeers() {
    return service.get('/') // Promise
}

function getBeer(id) {
    return service.get(`/${id}`)
}

function getRandom() {
    return service.get(`/random`)
}

function newBeer(params) {
    return service.post(`/new`, params )
}
export {listBeers, getBeer, getRandom, newBeer}