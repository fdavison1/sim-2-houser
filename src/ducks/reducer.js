import axios from 'axios'

const initialState = {
    loading: false,
    houses: [],
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: ''

}

//ACTION CONSTANTS
const GET_HOUSES = 'GET_HOUSES'
const SET_NAME = 'SET_NAME'
const SET_ADDRESS = 'SET_ADDRESS'
const SET_CITY = 'SET_CITY'
const SET_STATE = 'SET_STATE'
const SET_ZIP = 'SET_ZIP'
const SET_URL = 'SET_URL'
const SET_MORTGAGE = 'SET_MORTGAGE'
const SET_RENT = 'SET_RENT'

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
//set URL
export const setURL = img => {
    return {
        type: SET_URL,
        payload: img
    }
}
//set mortgage
export const setMortgage = mortgage => {
    return {
        type: SET_MORTGAGE,
        payload: mortgage
    }
}
//set rent
export const setRent = rent => {
    return {
        type: SET_RENT,
        payload: rent
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_HOUSES:
            return { houses: action.payload }
        case SET_NAME:
            // console.log(action.payload)
            return { ...state, name: action.payload }
        case SET_ADDRESS:
            return { ...state, address: action.payload }
        case SET_CITY:
            return { ...state, city: action.payload }
        case SET_STATE:
                // console.log(action.payload)
            return { ...state, state: action.payload }
        case SET_ZIP:
            return { ...state, zip: action.payload }
        case SET_URL:
            console.log(action.payload)
            return {...state, img: action.payload}
        case SET_MORTGAGE: 
        console.log(action.payload)
            return {...state, mortgage: action.payload}
        case SET_RENT:
            return {...state, rent: action.payload}
        default:
            return state
    }
}