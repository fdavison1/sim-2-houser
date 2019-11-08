import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'
import {setURL} from '../ducks/reducer'

class Two extends React.Component {
    constructor() {
        super()

        this.state = {
            // imgURL: ''
        }
    }

  
    

    render() {
        return (
            <div>

                {/* INPUT BOXES */}
                <h3>Image URL</h3>
                <input
                    onChange={(e) => this.props.setURL(e.target.value)}
                    type="text" />

              
                <hr/>

                {/* PREVIOUS BUTTON */}

                <Link to='/wizard/step1'>
                <button>Previous</button></Link>

                   {/* NEXT BUTTON */}

                   <Link to='/wizard/step3'>
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

export default connect(mapStateToProps,{setURL})(Two)