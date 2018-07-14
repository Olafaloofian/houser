import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom' 
import { connect } from 'react-redux'
import { updateTwo } from '../../ducks/reducer'

export default class ChangeHouse extends Component {
    constructor() {
        super()

        this.state = {
            house: {}
        }
        

    }

    componentDidMount() {
        console.log(this.props)
        axios.get(`/api/house/${this.props.match.params.id}`).then(res => 
    
            this.setState({
                house: res.data
        }))
    }

    render() {
        console.log(this.state)
        return(
            <div> 
                <h1>Edit House</h1>
                <img src={this.state.house.url} alt='' width="400"/>
                <input onChange={e => this.makeChangeUrl(e.target.value)} placeholder="Image Url" value={this.state.url}/>
                <img src={this.state.url} alt="" width="400" />
                <Link to='/'><button>Home</button></Link>
                <Link to='/'><button>Submit</button></Link>
            </div>
        )
    }
}

// const mapStateToProps = (store) => {
//     return {
//         name: store.name,
//         address: store.address,
//         city: store.city,
//         state: store.state,
//         zip: store.zip,
//         url: store.url,
//         monthlyMortgage: store.monthlyMortgage,
//         rent: store.rent
//     }
// }

// export default connect(mapStateToProps, {updateThree, eraseAll})(WizardThree)