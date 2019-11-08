import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {getHouses, setRent, setMortgage} from '../ducks/reducer'
import {connect} from 'react-redux'

class Three extends React.Component {
    constructor() {
        super()

        this.state = {
            mortgage: '',
            rent: ''
        }
    }

    postHouse() {
        axios.post('/api/houses', this.props)
            .then(res => {
                this.setState({
                    houses: res.data
                })
                
            })
            
    }

    render() {
        return (
            <div>




                {/* INPUT BOXES */}
                <h3>Monthly Mortgage Amount</h3>
                <input
                // onChange={(e) => console.log(e.target.value)}
                    onChange={(e) => this.props.setMortgage(e.target.value)}
                    type="text" />

                <h3>Desired Monthly Rent</h3>
                <input
                    onChange={(e) => this.props.setRent(e.target.value)}
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



function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,{getHouses, setMortgage, setRent})(Three)