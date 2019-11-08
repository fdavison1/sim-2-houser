import React from 'react'

export default class House extends React.Component{
    constructor(){
        super()

        this.state = {

        }
    }
    render(){
        const {name, address, city, state, zip, img, mortgage, rent} = this.props.houses
        return(
            <div className="house">
                {/* House.jsx */}
                
                <img src={img} alt=""/>
                
                
                <h4>Property Name: {name}</h4>
        <h4>Address: {address}</h4>
        <h4>City: {city}</h4>
                <h4>State: {state} </h4>
                <h4>Zip: {zip}</h4>
        <h4>Monthly Mortgage Amount: {mortgage}</h4>
        <h4>Desired Monthly Rent: {rent}</h4>
                
                
                {/* DELETE BUTTON */}
                <button
                onClick={()=> this.props.deleteHouse(this.props.houses.id)}
                >Delete</button>
                
                
                </div>
        )
    }
}