
import React, { Component } from 'react'
import PropertyType from './PropertyType'
import Title from './Title';
import BasicDetailsForm from './BasicDetailsForm';
import PropertyDetails from './PropertyDetails';
export default class Upload extends Component {

  state = {
    step: 1,
    propertyType:0,
    name: '',
    email: '',
    city: '',
    pinCode:'',
    fullAddress:'',
    propertySubtype:'',
    preferredTenants:'',
    numbersOfBathRoom:'',
    furnishingStatus:'',
    availabilityStatus:'',
    floorStatus:'',
    amenities:''
  };
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  setPropertyType=(inputtype)=>{
    this.setState({
      propertyType:inputtype
    })
  }
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { propertyType,  name, email, pinCode, city, fullAddress, propertySubtype, preferredTenants,numbersOfBathRoom,furnishingStatus, availabilityStatus, floorStatus, amenities} = this.state;
    const values = { propertyType,  name, email, pinCode, city, fullAddress, propertySubtype, preferredTenants,numbersOfBathRoom,furnishingStatus, availabilityStatus, floorStatus, amenities};

    
    switch (step) {
      case 1:
        return (
          <PropertyType
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            setPropertyType={this.setPropertyType}
          />
        );
      
     case 2:
       return(
         <div>
           
            <BasicDetailsForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}/>
         </div>
        
         
       )
       case 3:
        return(
          <div>
           
             <PropertyDetails
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             values={values}
             propertyType={propertyType}/>
          </div>
         
          
        )
      default:
        (console.log('This is a multi-step form built with React.'+values.propertyType+'hii'))
  }
}




}