import React, { useState } from 'react';


const Login = () => {
    const [fullName,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        number:"",
        password:"",
    });

    

    const inputEvent = (event) => {
        const {name , value} = event.target;
        setFullName((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
            // if( name=== "fName"){
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //     };
            // }
            // else if( name=== "lName"){
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //     };
            // }
            
        })
    }
    
    const onSubmits = (event) => {
        event.preventDefault();
        
        alert("ffff");
    }
    
    
    return (
        <div>
            <form onSubmit={onSubmits}>
                <h1>hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email} {fullName.number} {fullName.password}</p>
                <input type="text" placeholder="first name" name="fname" onChange={inputEvent}
                  value={fullName.fname}
                 ></input>
                <br></br><br></br>
                <input type="text" placeholder="last name" name="lname" onChange={inputEvent} 
                 value={fullName.lname}
                ></input>
                <br></br><br></br>
                <input type="email" placeholder="email" name="email" onChange={inputEvent} 
                 value={fullName.email}
                ></input>
                <br></br><br></br>
                <input type="number" placeholder="mobile no" name="number" onChange={inputEvent} 
                 value={fullName.number}
                ></input>
                <br></br><br></br>
                <input type="password" placeholder="password" name="password" onChange={inputEvent} 
                 value={fullName.password}
                ></input>
                <br></br><br></br>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login