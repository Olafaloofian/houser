import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom' 
import { connect } from 'react-redux'
import { updateThree } from '../../ducks/reducer'
import { eraseAll } from '../../ducks/reducer'

class WizardThree extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: undefined,
            url: "",
            monthlyMortgage: undefined,
            rent: undefined,
            redirect: false
        }
        
        this.makeChangeMonthlyMortgage = this.makeChangeMonthlyMortgage.bind(this)
        this.makeChangeRent = this.makeChangeRent.bind(this)
        this.addHouse = this.addHouse.bind(this)
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            url: this.props.url,
            monthlyMortgage: this.props.monthlyMortgage,
            rent: this.props.rent
        })
    }

    clicky = () => {
        this.addHouse()
        this.props.eraseAll()
    }
    
    addHouse () {
        axios.post('/api/houses', { 
            name: this.props.name, 
            address: this.props.address, 
            city: this.props.city, 
            state: this.props.state, 
            zip: this.props.zip, 
            url: this.props.url, 
            monthlyMortgage: this.state.monthlyMortgage, 
            rent: this.state.rent })
            .then( () => this.setState({redirect: true}))
    }

    makeChangeMonthlyMortgage(val) {
        this.setState({
            monthlyMortgage: val
        })
    }

    makeChangeRent(val) {
        this.setState({
            rent: val
        })
    }

    render() {
        const { redirect } = this.state

        if (redirect) {
            return <Redirect to='/'/>
        }

        return(
            <div> 
                <h1>Add New Listing</h1>
                <div> Recommended Rent: {this.state.monthlyMortgage * 1.25} </div>
                <input onChange={e => this.makeChangeMonthlyMortgage(e.target.value)} placeholder="Monthly Mortgage Amount" value={this.state.monthlyMortgage}/>
                <input onChange={e => this.makeChangeRent(e.target.value)} placeholder="Desired Monthly Rent" value={this.state.rent}/>
                <Link to='/wizard/step2'><button onClick={() => this.props.updateThree(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip, this.state.url, this.state.monthlyMortgage, this.state.rent)}>Previous Step</button></Link>
                <button onClick={() => this.clicky()}> Complete </button>
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
        zip: store.zip,
        url: store.url,
        monthlyMortgage: store.monthlyMortgage,
        rent: store.rent
    }
}

export default connect(mapStateToProps, {updateThree, eraseAll})(WizardThree)