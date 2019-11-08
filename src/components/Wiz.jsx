import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import {Route} from 'react-router-dom'
import One from './One'
import Two from './Two'
import Three from './Three'

export default class Wiz extends React.Component {
    constructor() {
        super()

        this.state = {
           
        }
    }

    render() {
        return (
            <div className='dash'>




                <h2>Add New Listing</h2>


                {/* ROUTES */}
                <Route path='/wizard/step1' component={One}></Route>
                <Route path='/wizard/step2' component={Two}></Route>
                <Route path='/wizard/step3' component={Three}></Route>
               


                {/* CANCEL BUTTON */}

                <Link to={'/'}>
                    <button>Cancel</button>
                </Link>

            </div>
        )
    }
}