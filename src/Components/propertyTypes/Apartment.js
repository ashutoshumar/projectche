import React,{useState } from 'react'
import Title from '../Title';
import "./Apartment.css"
const Apartment = ( {nextStep,handleChange,
    values, prevStep}) =>  {
    const conTinue = e => {
        e.preventDefault();
      //  this.props.nextStep();
         
          setStepp(stepp+1);
      };
     const  previous = e => {
        e.preventDefault();
      //  this.props.nextStep();
      if(stepp>1)
          setStepp(stepp-1)
    else 
       prevStep()
      
      };

      const [stepp,setStepp, propertySubtype,setpropertySubtype, preferredTenants,setpreferredTenants,numbersOfBathRoom,setnumbersOfBathRoom, furnishingStatus,setfurnishingStatus,availabilityStatus,setavailabilityStatus,floorStatus,setfloorStatus, amenities,setamenities]=useState(1,'','','','','','','')

      switch(stepp){
        case 1:      
           return (
            <div>
                <div className="apartDiv1">
                <Title title="Property subtype"/>
                <div className="btn-menudiv">
                 <div>
                  <button className="btn-primarymenu">
                   One bhk flat
                    </button>
                   </div> 
                   
                   <div>
                   <button  className="btn-primarymenu">
                   Two bhk flat
                    </button>
                   </div> 
                   <div>
                  <button className="btn-primarymenu">
                  Three bhk flat
                    </button>
                   </div> 
                   
                   <div>
                   <button  className="btn-primarymenu">
                     Double Room
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                  Only Single Room
                    </button>
                   </div> 
                  
            </div>

                </div>
                <div>
                <div className='availStatus' >
                    <h1 className='availStatush1'>Availability Status:</h1>
                    
                  <button className='availStatusbtn' >
                  immediately available
                    </button>
                    <input  className='availStatusinp' type="date" value="dateAvail"/>
                   
                </div>
                <div  className='availStatus'>
                <h1 className='availStatush1'>Floor Status:</h1>
                    <input style={{width:"500px"}} className='availStatusinp'  type="text" placeholder='floor number' />
                </div>
                </div>
                
                <div className='btn-primaryContinueDiv'>

            <button
              className="btn-primaryContinuee"
               color="primary"
                variant="contained"
                onClick={previous }
  
                >Previous</button>
            <button
            className="btn-primaryContinuee"
             color="primary"
              variant="contained"
               onClick={conTinue }
  
              >Continue</button>
               </div>
               </div>
        )
        case 2: return(
            <div>
                <div className="apartDiv1">
                <Title  title="Preferred tenants"/>
                <div className="btn-menudiv">
                 <div>
                  <button className="btn-primarymenu">
                   Family
                    </button>
                   </div> 
                   
                   <div>
                   <button  className="btn-primarymenu">
                   Bachelors
                    </button>
                   </div> 
                   <div>
                  <button className="btn-primarymenu">
                  Both
                    </button>
                   </div> 
                              
            </div>
                </div>
                <div className="apartDiv1">
                <Title title="Numbers Of Bathrooms"/>
                <div className="btn-menudiv">
                 <div>
                  <button className="btn-primarymenu">
                   1
                    </button>
                   </div> 
                   
                   <div>
                   <button  className="btn-primarymenu">
                   2
                    </button>
                   </div> 
                   <div>
                  <button className="btn-primarymenu">
                  3
                    </button>
                   </div> 
                   <div>
                  <button className="btn-primarymenu">
                  4+
                    </button>
                   </div> 
 
                              
            </div>
                </div>
                <div  className='btn-primaryContinueDivv'>

<button
  className="btn-primaryContinuee"
   color="primary"
    variant="contained"
    onClick={previous }

    >Previous</button>
<button
className="btn-primaryContinuee"
 color="primary"
  variant="contained"
   onClick={conTinue }

  >Continue</button>
   </div>
            </div>
                
        )
        case 3:return(
            <div>
                <div className="apartDiv1">
                <Title title="Amenities"/>
                <div className="btn-menudiv">
                 <div>
                  <button className="btn-primarymenu">
                   Balcony
                    </button>
                   </div> 
                   
                   <div>
                   <button  className="btn-primarymenu">
                   Parking
                    </button>
                   </div> 
                   <div>
                  <button className="btn-primarymenu">
                  Power Backup
                    </button>
                   </div> 
                   
                   <div>
                   <button  className="btn-primarymenu">
                     Wi-Fi
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                  Laundry
                    </button>
                   </div> 
                   <div>
                  <button className="btn-primarymenu">
                   Lift
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Security/CCTV
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   RO Water System
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Waste Disposal
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Fire Extinguisher
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Club House
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Swimming Pool
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Park
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Gymnasium
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Kids play area
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Kids club
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Gardens/Flowers
                    </button>
                   </div>
                   <div>
                  <button className="btn-primarymenu">
                   Multipurpose hall
                    </button>
                   </div>
                  
            </div>

                </div>
                <div className='btn-primaryContinueDiv'>

            <button
              className="btn-primaryContinuee"
               color="primary"
                variant="contained"
                onClick={previous }
  
                >Previous</button>
            <button
            className="btn-primaryContinuee"
             color="primary"
              variant="contained"
               onClick={conTinue }
  
              >Continue</button>
               </div>
               </div> 
        )
        default:
        (console.log('This is a multi-step form built with React.'+values.propertyType+'hii'))

      }
     
                
        
      
    
}


export default Apartment
