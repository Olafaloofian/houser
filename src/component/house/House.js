import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import ChangeHouse from '../changehouse/changehouse';

export default function House(props) {
    return(
        <div> 
                <img src={props.url} alt="" width="400"/>
                <div> Property name: {props.name} </div>
                <div> Address: {props.address} </div>
                <div> City: {props.city} </div>
                <div> State: {props.state} </div>
                <div> Zip: {props.zip} </div>
                <div> Monthly Mortgage: {props.monthly} </div>
                <div> Rent: {props.rent} </div>
                <button onClick={() => props.delete(props.id)}> Delete </button>
                <Link to={`/wizard/edit/${props.id}`}><button>Edit</button></Link>
        </div>
    )
}