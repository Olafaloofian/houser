const initialState ={
    name: "",
    address: "",
    city: "",
    state: "",
    zip: null,
    url: "",
    monthlyMortgage: null,
    rent: null
}

export default function reducer (state = initialState, action) {
    switch(action.type){

        case 'UPDATE_ONE':
            return {...state, name: action.payload.name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zip: action.payload.zip}

        case 'UPDATE_TWO':
            return {...state, url: action.payload.url}

        case 'UPDATE_THREE':
            return {...state, name: action.payload.name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zip: action.payload.zip, url: action.payload.url, monthlyMortgage: action.payload.monthlyMortgage, rent: action.payload.rent}

        case 'ERASE':
            return {initialState}
        
        default: return state
    }
}

export function eraseAll() {
    return {
        type: 'ERASE',
        payload: initialState
    }
}

export function updateOne( name, address, city, state, zip) {
    return {
        type: 'UPDATE_ONE',
        payload: {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip
        }
    }
}

export function updateTwo ( url ) {
    return {
        type: 'UPDATE_TWO',
        payload: {
            url: url
        }
    }
}

export function updateThree ( name, address, city, state, zip, url, monthlyMortgage, rent) {
    return {
        type: 'UPDATE_THREE',
        payload: {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip,
            url: url,
            monthlyMortgage: monthlyMortgage,
            rent: rent
        }
    }
}