import React, { Component } from 'react'
import img1 from "../images/room-1.jpeg"
import img2 from "../images/room-2.jpeg"
import img3 from "../images/room-3.jpeg"
import Loading from './Loading';
import Room from "./Room"
import Title from './Title';
import "./Simpleflat.css"
export default class Simpleflat extends Component {    
    
    render() {
        let loading=false;
        let  roomarray=[
              {
                  id:"1",
                  name:"Ak property",
                  slug:"/",
                  image:img1,
                  price:"100"

              },
            {
                name:"Vk property",
                slug:"/",
                image:img2,
                id:"2",
                price:"56"
            },
            {
                name:"As property",
                slug:"/",
                image:img3,
                id:"3",
                price:"470"
            }
          ]
        let  rooms=roomarray.map(room=>{
          return <Room key={room.id} room={room}
         />;      })
    
        return (
           
            <section className="featured-rooms">
             
              <Title title="SINGLE FLAT"/>
               <div className="featured-rooms-center">
                   {loading? <Loading/>:rooms}
               </div> 
              
            </section>
        ) 
       
    } 
   
}
