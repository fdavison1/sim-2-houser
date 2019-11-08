import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'
// import {requestHouses} from '../ducks/reducer'
// import {setHouse} from '../ducks/reducer'
import {setName, setAddress, setCity, setState, setZip} from '../ducks/reducer'

class One extends React.Component {
    constructor() {
        super()

        this.state = {
           
        }
    }

  
    // nextButton(){
    //     this.
    // }
    

    render() {
        // console.log(this.props)
        return (
            <div className='dash'>

                {/* INPUT BOXES */}
                <h3>Property Name</h3>
                <input
                    onChange={(e) => this.props.setName(e.target.value)}
                    type="text" />

                <h3>Address</h3>
                <input
                     onChange={(e) => this.props.setAddress(e.target.value)}
                    type="text" />

                <h3>City</h3>
                <input
                     onChange={(e) => this.props.setCity(e.target.value)}
                    type="text" />

                <h3>State</h3>
                <input
                     onChange={(e) => this.props.setState(e.target.value)}
                    type="text" />

                <h3>Zip</h3>
                <input
                     onChange={(e) => this.props.setZip(e.target.value)}
                    type='text' />

                <hr />

                {/* NEXT BUTTON */}

                <Link to='/wizard/step2'>
                <button
                
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

export default connect(mapStateToProps,{setName, setAddress, setCity, setState, setZip})(One)