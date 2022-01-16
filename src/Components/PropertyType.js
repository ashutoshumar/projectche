import React,{useState} from 'react'
import Title from './Title'
import PropertyDetails from './PropertyDetails'
import "./PropertyType.css"

const PropertyType = ({nextStep,handleChange,values,setPropertyType}) => {
   // const { values, handleChange } = this.props;
    const conTinue = e => {
        e.preventDefault();
      //  this.props.nextStep();
          setPropertyType(property);
          nextStep();
      };
    
    const [property, setProperty] = useState("NotSelected");
    return (
        <div className='featured-rooms'>
            <Title title="Choose Property Type"/>
        <div className="btn-menudiv">
             <div  className="btn-primarymenu"  onClick={() =>  setProperty("SimpleFlat")}>
             
                Simple Flat
               
               </div> 
               <div  className="btn-primarymenu" onClick={() =>setProperty(1)}>
             
             Apartment
            
            </div> 
            <div  className="btn-primarymenu" onClick={() => setProperty("Houses")} >
             
             Houses
            
            </div> 
            <div  className="btn-primarymenu" onClick={() => setProperty("FarmHouse")}>
             
             FarmHouse
            
            </div> 
             <div  className="btn-primarymenu" onClick={() => setProperty("  Villa")} >
             
             Villa
            
            </div> 
            <div  className="btn-primarymenu"  onClick={() => setProperty("  Pg")} >
             
             Pg
            
            </div> 
            <div  className="btn-primarymenu"  onClick={() => setProperty(" CommercialSpace")} >
             
             Commercial space
            
            </div> 
            <div  className="btn-primarymenu"  onClick={() => setProperty("  Hostel")} >
             
             Hostel
            
            </div> 
            <div  className="btn-primarymenu"  onClick={() => setProperty("OnlyDoubleRoom")} >
             
             Only Double Room
            
            </div>
            <div  className="btn-primarymenu"  onClick={() => setProperty("OnlySingleRoom")} >
             
             Onlyy Single Room
            
            </div> 
            <div  className="btn-primarymenu"  onClick={() => setProperty("MarriageHall")}  >
             
             MarriageHall
            
            </div>  
        </div>
        
            <button
            className="btn-primaryContinue"
              color="primary"
              variant="contained"
              onClick={conTinue  }
              
            >Continue</button>
        </div>
    )
}

export default PropertyType
