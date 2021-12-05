import React, { useState } from  'react';
    
const MoreForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");

    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [cpassword, setCpassword] = useState(""); 
    const [cpasswordError, setCpasswordError] = useState("");
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password, cpassword };
        console.log("Welcome", newUser);
    	setFirstname("");
        setLastname("");
    	setEmail("");
    	setPassword("");
        setCpassword("");
    };

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("");
        } else if(e.target.value.length < 2) {
            setFirstnameError("First Name must be at least 2 characters");
        } 
        else {
            // an empty string is considered a "falsy" value
            setFirstnameError("");
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("");
        } else if(e.target.value.length < 2) {
            setLastnameError("Last Name must be at least 2 characters");
        } 
        else {
            // an empty string is considered a "falsy" value
            setLastnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } 
        else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } 
        else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }

    const handleCpassword = (e) => {
        setCpassword(e.target.value);
        if(e.target.value.length < 1) {
            setCpasswordError("");
        } 
        else if(password != e.target.value) {
            setCpasswordError("Password must match");
        } 
        else {
            // an empty string is considered a "falsy" value
            setCpasswordError("");
        }
    }


    
    return(
        <div className="space">
            <form onSubmit={ createUser }>
            {/*  First Name */}
            <div className="formInput">
                <div className="form">
                    <label>First Name: </label> 
                    <input className="input" type="text" value={firstname} onChange={ handleFirstname } placeholder="Type here..."/>
                </div>
                <div className="errorMessage">
                    {
                        firstnameError ?
                        <p>{ firstnameError }</p> :
                        ''
                    }
                </div>
            </div>
            {/*  Last Name */}
            <div className="formInput">
                <div className="form">
                    <label>Last Name: </label> 
                    <input className="input" type="text" value={lastname} onChange={ handleLastname } placeholder="Type here..."/>
                </div>
                <div className="errorMessage">
                    {
                        lastnameError ?
                        <p>{ lastnameError }</p> :
                        ''
                    }
                </div>
            </div>
            {/*  Email */}
            <div className="formInput">
                <div className="form">
                    <label>Email: </label> 
                    <input className="input" type="text" value={email} onChange={ handleEmail } placeholder="Type here..."/>
                </div>
                <div className="errorMessage">
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
            </div>
            {/*  Password */}
            <div className="formInput">
                <div className="form">
                    <label>Password: </label> 
                    <input className="input" type="password" value={password} onChange={ handlePassword } placeholder="Type here..."/>
                </div>
                <div className="errorMessage">
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
            </div>
            {/*  Confirm Password */}
            <div className="formInput">
                <div className="form">
                    <label>Confirm password: </label> 
                    <input className="input" type="password" value={cpassword} onChange={ handleCpassword } placeholder="Type here..."/>
                </div>
                <div className="errorMessage">
                    {
                        cpasswordError ?
                        <p>{ cpasswordError }</p> :
                        ''
                    }
                </div>
            </div>
            <br />
            <input type="submit" value="Create User" />
        </form>
        </div>
    );
};
    
export default MoreForm;
