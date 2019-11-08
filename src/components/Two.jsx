import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

export default class Two extends React.Component {
    constructor() {
        super()

        this.state = {
            imgURL: ''
        }
    }

  

    //HANDLE CHANGE - INPUT FIELDS
    handleURL(e) {
        this.setState({
            name: e.target.value
        })
    }
    

    render() {
        return (
            <div>




                {/* <h2>Add New Listing</h2> */}



                {/* INPUT BOXES */}
                <h3>Image URL</h3>
                <input
                    onChange={(e) => this.handleURL(e)}
                    type="text" />

              
                <hr/>

                {/* PREVIOUS BUTTON */}

                <Link to='/wizard/step1'>
                <button>Previous</button></Link>

                   {/* NEXT BUTTON */}

                   <Link to='/wizard/step3'>
                <button>Next</button>
                </Link>
               
               <hr/>

            </div>
        )
    }
}