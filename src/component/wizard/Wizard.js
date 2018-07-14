import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom' 
import WizardOne from '../wizardone/WizardOne'
import WizardTwo from '../wizardtwo/WizardTwo'
import WizardThree from '../wizardthree/WizardThree'
import ChangeHouse from '../changehouse/changehouse'
import { connect } from 'react-redux'
import { eraseAll } from '../../ducks/reducer'

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: null,
            redirect: false
        }
    }
    render() {
        return(
            <div> 
                <Switch>
                    <Route path='/wizard/step1' component={WizardOne} />
                    <Route path='/wizard/step2' component={WizardTwo} />
                    <Route path='/wizard/step3' component={WizardThree} />
                    <Route path='/wizard/edit/:id' component={ChangeHouse} />
                </Switch>
                <Link to={'/'}><button onClick={() => this.props.eraseAll}>Cancel</button></Link>
            </div>
        )
    }
}

export default connect(null, { eraseAll })(Wizard)