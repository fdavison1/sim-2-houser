import React from 'react'
import { Link } from 'react-router-dom'
import House from './House'
import axios from 'axios'

export default class Dash extends React.Component {
    constructor() {
        super()

        this.state = {
            houses : []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }



    //AXIOS - GET ALL HOUSES
    componentDidMount(){
        this.getAll()
    }
    
    getAll(){
        axios.get('/api/houses').then(res => {
            console.log(res.data)
            this.setState({
                houses: res.data
            })
        })
    }


    //AXIOS - DELETE HOUSE
    deleteHouse(id){
        axios.delete(`api/houses/${id}`)
        .then(res => {
            this.getAll()
        })
    }



    render() {
        return (
            <div className='dash'>

                <div className="dash2">

                <h1>Dashboard</h1>
                {/* ADD NEW PROPERTY BUTTON */}

                <Link to='/wizard/step1'>
                    <button>Add New Property</button>
                </Link>
                
                </div>

                <hr/>

                <h2>Home Listings:</h2>

                

                {/* MAPPING */}
                {this.state.houses.map(el => (

                    <House 
                    houses = {el}
                    key={el.id}
                    deleteHouse ={this.deleteHouse}
                    />

                ))}



            </div>
        )
    }
}