import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom' 
import { connect } from 'react-redux'
import { updateTwo } from '../../ducks/reducer'

class WizardTwo extends Component {
    constructor() {
        super()

        this.state = {
           url: ""
        }
        
        this.makeChangeUrl = this.makeChangeUrl.bind(this)
    }

    componentDidMount() {
        this.setState({
            url: this.props.url
        })
    }

    makeChangeUrl(val) {
        this.setState({
            url: val
        })
    }

    render() {
        return(
            <div> 
                <h1>Add New Listing</h1>
                <input onChange={e => this.makeChangeUrl(e.target.value)} placeholder="Image Url" value={this.state.url}/>
                <img src={this.state.url} alt="" width="400" />
                <Link to='/wizard/step1'><button onClick={() => this.props.updateTwo(this.state.url)}>Previous Step</button></Link>
                <Link to='/wizard/step3'><button onClick={() => this.props.updateTwo(this.state.url)}>Next Step</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        url: store.url
    }
}

export default connect(mapStateToProps, {updateTwo})(WizardTwo)