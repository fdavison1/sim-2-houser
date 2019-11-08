import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Three extends React.Component {
    constructor() {
        super()

        this.state = {
            mortgage: '',
            rent: ''
        }
    }

    postHouse() {
        axios.post('/api/houses', this.state)
            .then(res => {
                this.setState({
                    houses: res.data
                })
                
            })
    }

    //HANDLE CHANGE - INPUT FIELDS
    handleMortgage(e) {
        this.setState({
            name: e.target.value
        })
    }
   

    render() {
        return (
            <div>




                {/* <h2>Add New Listing</h2> */}


                {/* INPUT BOXES */}
                <h3>Property Name</h3>
                <input
                    onChange={(e) => this.handleMortgage(e)}
                    type="text" />

                

                <hr />


                     {/* PREVIOUS BUTTON */}

                     <Link to='/wizard/step2'>
                <button>Previous</button></Link>


                {/* COMPLETE BUTTON */}

                <Link to='/'>

                    <button
                        onClick={() => this.postHouse()}
                    >Complete</button>

                </Link>
<hr/>
            </div>
        )
    }
}