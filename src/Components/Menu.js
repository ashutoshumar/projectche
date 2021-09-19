import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"
export default function Menu() {
    return (
        <div className="btn-menudiv">
             <div>
              <Link to="/" className="btn-primarymenu">
                Simple Flat
                </Link>
               </div> 
               
               <div>
               <Link to='/' className="btn-primarymenu">
                 Marriage Hall
                </Link>
               </div> 
               <div>
              <Link to="/" className="btn-primarymenu">
                Pg
                </Link>
               </div> 
               
               <div>
               <Link to='/' className="btn-primarymenu">
                 Banglow
                </Link>
               </div>
               <div>
              <Link to="/" className="btn-primarymenu">
                Panthouse
                </Link>
               </div> 
               
               <div>
               <Link to='/' className="btn-primarymenu">
                 School
                </Link>
               </div> 
               <div>
               <Link to="/" className="btn-primarymenu">
                Skyscrapper
                </Link>
               </div> 
               
               <div>
               <Link to='/' className="btn-primarymenu">
                 Mall
                </Link>
               </div>
        </div>
    )
}
