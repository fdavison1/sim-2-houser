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
const GET_HOUSES = 'GET_HOUSES'
const SET_NAME = 'SET_NAME'
const SET_ADDRESS = 'SET_ADDRESS'
const SET_CITY = 'SET_CITY'
const SET_STATE = 'SET_STATE'
const SET_ZIP = 'SET_ZIP'

//ACTION BUILDERS
//get houses 
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
//set name
export const setName = name => {
    return {
        type: SET_NAME,
        payload: name
    }
}
//set address
export const setAddress = address => {
    return {
        type: SET_ADDRESS,
        payload: address
    }
}
//set city
export const setCity = city => {
    return {
        type: SET_CITY,
        payload: city
    }
}

//set state
export const setState = state => {
    return {
        type: SET_STATE,
        payload: state
    }
}

//set zip
export const setZip = zip => {
    return {
        type: SET_ZIP,
        payload: zip
    }
}



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_HOUSES:
            return { houses: action.payload }
        case SET_NAME:
            console.log(action.payload)
            return { ...state, name: action.payload }
        case SET_ADDRESS:
            return { ...state, address: action.payload }
        case SET_CITY:
            return { ...state, city: action.payload }
        case SET_STATE:
                console.log(action.payload)
            return { ...state, state: action.payload }
        case SET_ZIP:
            return { ...state, zip: action.payload }
        default:
            return state
    }
}