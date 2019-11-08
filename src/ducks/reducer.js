import axios from 'axios'

const initialState = {
    loading: false,
    houses: [],
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''

}

//ACTION CONSTANTS
// const REQUEST_HOUSES = 'REQUEST_HOUSES'
// const SET_HOUSE = 'SET_HOUSE'
const SET_NAME = 'SET_NAME'
const GET_HOUSES = 'GET_HOUSES'

//ACTION BUILDERS
// export const requestHouses = () => {
//     let houses = axios.get('/api/houses').then(res => res.data)
//     return {
//         type: REQUEST_HOUSES,
//         payload: houses
//     }
// }
// export const setHouse = (name, address, city, state, zip) => {
//     this.setState  ({
//         name: name,
//         address: address,
//         city: city,
//         state: state, 
//         zip: zip
//     })
//     return {
//         type: SET_HOUSE,
//         payload: this.houses
//     }
// }
export const getHouses = () => {
    let housePromise = axios.get('/api/houses').then(res => {
        console.log(res.data)
        return res.data
    })
    return {
        type: GET_HOUSES,
        payload: housePromise

    }
}
//-------------------
export const setName = name => {
    return {
        type: SET_NAME,
        payload: name
    }
}



export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_HOUSES: 
            return {houses: action.payload}
        case SET_NAME:
            console.log(action.payload)
            return {name: action.payload}
        default: 
        return state
    }
}