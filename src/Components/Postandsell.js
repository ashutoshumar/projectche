import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Postandsell.css"
export default class Postandsell extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="btn-primarypostdiv">
                
              <div>
              <Link to="/" className="btn-primarypost">
                Buy Property
                </Link>
               </div> 
               
               <div>
               <Link to='/' className="btn-primarypost">
                 Sell Property
                </Link>
               </div>
               
             
               
            </div>
        )
    }
}
