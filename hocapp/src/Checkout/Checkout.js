import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Checkbox } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
import {useFormik} from 'formik';
import * as yup from 'yup';


const ariaLabel = { 'aria-label': 'description' };



export default function Checkout() {

  
  const formik = useFormik({
    
    
    initialValues: {
      firstname: '',
      lastname: '',
      addressline1 : '',
      addressline2 : '',
      city : '',
      state : '',
      zipcode : '',
      country : '',
    },
    onSubmit: values => {
      fetch('http://localhost:3001/Details', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },  
        body: JSON.stringify(values)
      })

        .then(res => res.json())
        .then(data => { 
          document.getElementById("alert").innerHTML = `<div class="alert alert-success" role="alert">
          Data Saved Successfully
        </div>`;
        setTimeout(function(){
          //animation for alert

          document.getElementById("alert").innerHTML = "";
        
         
      

        }, 1500);

          
        
        })
},
validationSchema: yup.object().shape({
  firstname: yup.string()
      .min(8, 'FirstName should be atleast 8 characters')
      
      .required('FirstName cannot be left blank'),
  lastname: yup.string()
      .min(8, 'LastName should be atleast 8 characters')
      
      .required('LastName cannot be left blank'),
  addressline1: yup.string()
      .min(32, 'AddressLine1 should be atleast 32 characters')
      
      .required('AddressLine1 cannot be left blank'),
  addressline2: yup.string()
      .optional("It is Optional"),
  city: yup.string()
  
      .required('City cannot be left blank'),
  state: yup.string()
      .optional("It is Optional"),
  zipcode: yup.string()
     // .exactLength(6, 'Zipcode must be 6 characters')
       
      .required('Zipcode cannot be left blank'),
  country: yup.string()
      
      .required('Country cannot be left blank'),
}),















  });





  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="on"
      onSubmit={formik.handleSubmit}
    >  



<div id='alert'>

      </div>
    <div data-testid="container" className="container border border-1 w-100">
      
      <div className="row">
        <div className="col">
          <div className='text-#212121 py-2 text-center'>
            <h2>Checkout Form</h2>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className=''>
            <h5>Shipping address</h5>
          </div>
        </div>
      </div> 
  
          <div className="row">
           
              <div className= 'col py-3 ' >
           
              <Input id="firstname" name='firstname'  placeholder="First Name *" inputProps={ariaLabel} value={formik.values.firstname} onChange={formik.handleChange}/>
              {formik.errors.firstname && formik.touched.firstname ? (  <div className="error text-danger">{formik.errors.firstname}</div> ) : null}
            
              </div>
              <div className='col py-3 ' >
           
              <Input id='lastname' name='lastname' placeholder="Last Name *" inputProps={ariaLabel} className="float-end" value={formik.values.lastname} onChange={formik.handleChange}/>
              {formik.errors.lastname && formik.touched.lastname ? (  <div className="error text-danger">{formik.errors.lastname}</div> ) : null}
              
              </div>
              
            </div>
             <div className="row">
        
              <div className='col py-3 text-center'>
                <Input id='addressline1' name='addressline1' placeholder="Address line 1 *" inputProps={ariaLabel} className="w-100" value={formik.values.addressline1} onChange={formik.handleChange}/>
                {formik.errors.addressline1 && formik.touched.addressline1 ? (  <div className="error text-danger">{formik.errors.addressline1}</div> ) : null}
              </div>
       
             </div>
             
             <div className="row">
             <div className='col py-3 text-center'>
                <Input id='addressline2' name='addressline2' placeholder="Address line 2" inputProps={ariaLabel} className="w-100 " required />
                {formik.errors.addressline2 && formik.touched.addressline2 ? (  <div className="error text-danger">{formik.errors.addressline2}</div> ) : null}
              </div>
           
             </div>
             <div className="row">
       
              <div className='col py-3' >
              <Input id='city' name='city' placeholder="City *" inputProps={ariaLabel} value={formik.values.city} onChange={formik.handleChange} />
              {formik.errors.city && formik.touched.city ? (  <div className="error text-danger">{formik.errors.city}</div> ) : null}
              </div>
              <div className='col py-3' >
              <Input id='state' name='state' placeholder="State/Province/Region" inputProps={ariaLabel} className="float-end" value={formik.values.state} onChange={formik.handleChange} />
              {formik.errors.state && formik.touched.state ? (  <div className="error text-danger">{formik.errors.state}</div> ) : null}
      
              </div>
             </div>
             <div className="row">
        
              <div className='col py-3' >
              <Input id='zipcode' name='zipcode' placeholder="Zip/postal code" inputProps={ariaLabel} value={formik.values.zipcode} onChange={formik.handleChange} />
              {formik.errors.zipcode && formik.touched.zipcode ? (  <div className="error text-danger">{formik.errors.zipcode}</div> ) : null}
              </div>
              <div className='col py-3' >
              <Input id='country' name='country' placeholder="Countery *" inputProps={ariaLabel} className="float-end" value={formik.values.country} onChange={formik.handleChange} />
              {formik.errors.country && formik.touched.country ? (  <div className="error text-danger">{formik.errors.country}</div> ) : null}
              </div>
             
             </div>
             <div className="row">
            <div className="col">
            <Checkbox id="checkbox"/> <span><label htmlFor="checkbox">Use this Address for payment detail</label></span>
            </div>
             </div>
             <div className="row">
            <div className="col">
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className='float-end m-3'>
              <Button type='submit'>Next</Button>
              
            </ButtonGroup>
            </div>

             </div>

            
            </div>
            
          
            <footer  className="text-center mt-5">
              Copyright &copy; test website 2022
            </footer>
 

     
     
    </Box>
  );
}