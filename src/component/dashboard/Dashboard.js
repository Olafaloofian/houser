import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom' 
import House from '../house/House'
import ChangeHouse from '../changehouse/changehouse';

export default class Dashboard extends Component {
    constructor() {
        super()
        
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        console.log('Dashboard Component Mounted!')
        axios.get('/api/houses').then( res => {
            console.log('-----------GET request server response', res)
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`).then (res => {
            console.log('------------DELETE server response', res)
        })
        this.componentDidMount()
    }

    render() {
        console.log('--------Dashboard')
        console.log(this.state.houses)
        return(
            <div> 
                <h1>Dashboard</h1>
                <Link to={'/wizard/step1'}><button >Add New Property</button></Link>
                {this.state.houses.map((e,i) => {
                    return(
                        <div key={i}><House 
                            name={e.name}
                            address={e.address}
                            state={e.state}
                            city={e.city}
                            zip={e.zip}
                            url={e.url}
                            monthly={e.monthly_mortgage}
                            rent={e.rent}
                            id={e.id}
                            delete={this.deleteHouse} /></div>
                    )
                })}
            </div>

        )
    }
}