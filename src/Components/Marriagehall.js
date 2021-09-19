import React, { Component } from 'react'
import img1 from "../images/room-4.jpeg"
import img2 from "../images/room-5.jpeg"
import img3 from "../images/room-6.jpeg"
import Loading from './Loading';
import Room from "./Room"
import Title from './Title';
import "./Simpleflat.css"
export default class Marriagehall extends Component {    
    
    render() {
        let loading=false;
        let  roomarray=[
              {
                  id:"1",
                  name:"Vivah mahal",
                  slug:"/",
                  image:img1,
                  price:"10009"

              },
            {
                name:"Shadi darbar",
                slug:"/",
                image:img2,
                id:"2",
                price:"56567"
            },
            {
                name:"Shadi vivah",
                slug:"/",
                image:img3,
                id:"3",
                price:"470678"
            }
          ]
        let  rooms=roomarray.map(room=>{
          return <Room key={room.id} room={room}
         />;      })
    
        return (
           
            <section className="featured-rooms">
             
              <Title title="MARRIAGE HALL"/>
               <div className="featured-rooms-center">
                   {loading? <Loading/>:rooms}
               </div> 
              
            </section>
        ) 
       
    } 
   
}
