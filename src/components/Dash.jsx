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
            <div>



                <h1>Dashboard</h1>


                {/* ADD NEW PROPERTY BUTTON */}

                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>

                {/* MAPPING */}
                {this.state.houses.map(el => (

                    <House 
                    houses = {el}
                    deleteHouse ={this.deleteHouse}
                    />

                ))}



            </div>
        )
    }
}