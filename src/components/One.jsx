import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'
// import {requestHouses} from '../ducks/reducer'
// import {setHouse} from '../ducks/reducer'
import {setName} from '../ducks/reducer'

class One extends React.Component {
    constructor() {
        super()

        this.state = {
            // name: '',
            // address: '',
            // city: '',
            // state: '',
            // zip: ''
        }
    }

    // postHouse() {
    //     axios.post('/api/houses', this.state)
    //         .then(res => {
    //             this.setState({
    //                 houses: res.data
    //             })
                
    //         })
    // }

    //HANDLE CHANGE - INPUT FIELDS
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    handleCity(e) {
        this.setState({
            city: e.target.value
        })
    }
    handleState(e) {
        this.setState({
            state: e.target.value
        })
    }
    handleZip(e) {
        this.setState({
            zip: e.target.value
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div>




                {/* <h2>Add New Listing</h2> */}




                {/* INPUT BOXES */}
                <h3>Property Name</h3>
                <input
                    onChange={(e) => this.props.setName(e.target.value)}
                    type="text" />

                <h3>Address</h3>
                <input
                    onChange={(e) => this.handleAddress(e)}
                    type="text" />

                <h3>City</h3>
                <input
                    onChange={(e) => this.handleCity(e)}
                    type="text" />

                <h3>State</h3>
                <input
                    onChange={(e) => this.handleState(e)}
                    type="text" />

                <h3>Zip</h3>
                <input
                    onChange={(e) => this.handleZip(e)}
                    type='text' />

                <hr />

                {/* NEXT BUTTON */}

                <Link to='/wizard/step2'>
                <button
                // onClick={()=> this.props.setName()}
                >Next</button>
                </Link>

                <hr/>

            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,{setName})(One)