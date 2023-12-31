import './SignUp.css'
import { Link } from 'react-router-dom'
import {Formik,Form,Field} from 'formik'
import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';


function SignUp() {
 const [formData ,setData] = useState({
        name:'',
        lastName:'',
        email:'',
        password: '',
        rePassword:''
        }); 
    

let handleSubmit = (e)=>{
    console.log(e)
    alert('congratulation Your Sign-Up is Successfull now go to login')
    // console.log(e.target.value)
    // console.log(`The user's detail is ${e.name.value} ${e.lastName.value} ${e.email.value} ${e.password.value} ${e.rePassword.value}`)

}



// let submitForm = (e)=>{
    
    let submitform = (value) => {
        
    console.log(value)
    console.log(`The user's detail is ${value.name} ${value.lastName} ${value.email} ${value.password} ${value.rePassword}`)
    alert('congratulation Your Sign-Up is Successfull now go to login')
    
    // console.log(e.target.value)
    // console.log({[this.name]: e.target.value}) // throwing error    

}



const LoginSchema = Yup.object().shape({
    
    name: Yup.string()
        .required("Name is required!")
        .min(4,"Name should be 4 charactor"),

   lastName:Yup.string()
        .required("Last Name is required!")
        .min(4,"Last Name should be 4 charactor"),

   email: Yup.string()
       .required("Email is required!")
       .email("Invalid Email"),
   
    password: Yup.string()
       .required("Password is required!")
       .min(8, "password should not be less than 8 chars")
       .max(20, "password is too long!")
       .matches(/^(?=.*[a-z])/, "Password must contain atleast a lowercase character")
       .matches(/^(?=.*[A-Z])/, "Password must contain atleast a uppercase character")
       .matches(/^(?=.*[0-9])/, "Password must contain at least a number"),

    rePassword: Yup.string()
       .required("Confirm-Password is neccessary!")
       .min(8, "Confirm-password should not be less than 8 chars")
       .max(30, "Confirm-password is too long!")
                
       });

    return(

    <div className='signup-container'>
        <div className='form-container'>
            <h1>Sign Up</h1>

            <Formik initialValues={formData} validationSchema={LoginSchema} onSubmit={submitform} >

            {({errors})=>(  <Form id="form" method='post'>

                        <Field id="firstName" name="name"  type="text"placeholder="First Name"/>
                        <span>{errors.name}</span>
                        <Field id="lastName" name="lastName" type="text"placeholder="Last Name"/>
                        <span>{errors.lastName}</span>
                        <Field id="email" name="email" type="email"placeholder="Email Address"/>
                        <span> {errors.email}</span>
                        <Field id="password"name="password"type="password"placeholder="Password"/>
                        <span> {errors.password}</span>
                        <Field id="c-password"name="rePassword" type="password" placeholder="Confirm Password"/>
                        <span> {errors.rePassword}</span>

                           <p> Already have a account? Login <Link to='/login'>here.</Link></p>

                        <button id="formSubmit"className="submit-btn" onClick={handleSubmit} type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                                    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
                                    </svg>&nbsp;Sign Up
                        </button>
               
                </Form>)}
            </Formik>
       </div>
    </div> 
    )
}


export default SignUp