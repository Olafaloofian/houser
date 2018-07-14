import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom' 
import { connect } from 'react-redux'
import { updateOne } from '../../ducks/reducer'

class WizardOne extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: null,
        }
        
        this.makeChangeAddress = this.makeChangeAddress.bind(this)
        this.makeChangeName = this.makeChangeName.bind(this)
        this.makeChangeCity = this.makeChangeCity.bind(this)
        this.makeChangeState = this.makeChangeState.bind(this)
        this.makeChangeZip = this.makeChangeZip.bind(this)
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip
        })
    }

    makeChangeName(val) {
        this.setState({
            name: val
        })
    }

    makeChangeAddress(val) {
        this.setState({
            address: val
        })
    }

    makeChangeCity(val) {
        this.setState({
            city: val
        })
    }

    makeChangeState(val) {
        this.setState({
            state: val
        })
    }

    makeChangeZip(val) {
        this.setState({
            zip: val
        })
    }

    render() {
        return(
            <div> 
                <h1>Add New Listing</h1>
                <input onChange={e => this.makeChangeName(e.target.value)} placeholder="Property Name" value={this.state.name}/>
                <input onChange={e => this.makeChangeAddress(e.target.value)} placeholder="Address" value={this.state.address}/>
                <input onChange={e => this.makeChangeCity(e.target.value)} placeholder="City" value={this.state.city}/>
                <input onChange={e => this.makeChangeState(e.target.value)} placeholder="State" maxLength="2" value={this.state.state}/>
                <input onChange={e => this.makeChangeZip(Number(e.target.value))} placeholder="Zipcode" type="number" value={this.state.zip}/>
                <Link to='/wizard/step2'><button onClick={() => this.props.updateOne(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}>Next Step</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        name: store.name,
        address: store.address,
        city: store.city,
        state: store.state,
        zip: store.zip
    }
}

export default connect(mapStateToProps, {updateOne})(WizardOne)