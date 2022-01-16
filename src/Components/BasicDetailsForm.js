import React from 'react'
import "./BasicDetailsForm.css"
import Title from './Title';

const BasicDetailsForm = ( {nextStep,handleChange,
    values, prevStep}) => {
    const conTinue = e => {
        e.preventDefault();
      //  this.props.nextStep();
         
          nextStep();
      };
      const previous = e => {
        e.preventDefault();
      //  this.props.nextStep();
         
      prevStep();
      };
    return (
    <div className='basic'>
         <Title title="Basic Details"/>
        <form>
            <label>Name</label>
     <input name="name" type="text" onChange={handleChange('name')}
              defaultValue={values.propertyType} />
     <label>Email</label>
     <input name="email" type="email"  onChange={handleChange('email')}
              defaultValue={values.email} />
     <label>City</label>
     <input name="city" type="text" onChange={handleChange('city')}
              defaultValue={values.city}/>
     <label>Full Address</label>
     <input name="address" type="text" onChange={handleChange('fullAddress')}
              defaultValue={values.fullAddress} />
     <label>Pin Code</label>
     <input name="pin" type="number"  onChange={handleChange('pinCode')}
              defaultValue={values.pinCode} />
     
    
            </form>
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
}

export default BasicDetailsForm
