import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const PersonForm = (props) => {

    const { productList, setProductList } = props;

    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setError] = useState({});

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
            })
            .catch((err)=>{
                // console.log(err);
                // console.log(err.response);
                // console.log(err.response.data);
                console.log(err.response.data.errors);
                setError(err.response.data.errors);
            })
    }          
    
    return (
        <>
            <h1>Add a new product</h1>
            {/* <Link to="/">
                <button>Home</button>
            </Link> */}
            {/* <br />
            <br /> */}

        <form onSubmit={onSubmitHandler}>
            <div>
                <label style={{fontWeight:"bold"}}>Title</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                <br />
            </div>
            { errors.title ? <div style={{marginTop:"10px"}}>{errors.title.message}</div> : null }
            <div>
            <br />
                <label style={{fontWeight:"bold"}}>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            { errors.price ? <div style={{marginTop:"10px"}}>{errors.price.message}</div> : null }
            <div>
            <br />
                <label style={{fontWeight:"bold"}}>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>

            </div>
            { errors.description ? <div style={{marginTop:"10px"}}>{errors.description.message}</div> : null }
            <br />
            <input type="submit"/>
        </form>
        </>
    )
}
export default PersonForm;

