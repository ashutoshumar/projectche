import React from 'react'
import Apartment from './propertyTypes/Apartment'
import Title from './Title';
const PropertyDetails = ({nextStep,prevStep,handleChange, values,propertyType}) => {
    switch(propertyType)
    {
        case 1:return(
            <Apartment
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}/>
        )
        default:
            <Title title={values.step}/>
    }
     
     
}

export default PropertyDetails
