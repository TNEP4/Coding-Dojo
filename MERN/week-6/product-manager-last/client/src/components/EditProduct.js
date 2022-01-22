import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const EditProduct = (props) => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setError] = useState({});

    //we don't want the header changing every time we type, so let's have a piece of state to
    //capture and display document's title as it is when this component renders and we make our
    //getOne request in our useEffect

    //We run our findOne request so that we can populate our inputs
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                //this is meant to be unchanging while we're on this component,
                //so we use another useState hook to capture and display it
            })
            .catch((err) => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, { //id is the req.params and the following object is the req.body
                title, //shorthand for title:title
                price,
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/"); //No need to worry about state here. Navigate will trigger a total rerender of Main/DisplayAll which will update our list via useEffect in Display
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.errors);
                setError(err.response.data.errors);
            });
    };

    return (
        <div>
            <h1>Edit Product</h1>
            <Link to="/">
                <button>Home</button>
            </Link>
            <br />
            <br />
            <form onSubmit={submitHandler}>
            <p>
                <label style={{fontWeight:"bold"}}>Title</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            { errors.title ? <div style={{marginTop:"10px"}}>{errors.title.message}</div> : null }
            <p>
                <label style={{fontWeight:"bold"}}>Price</label><br/>
                <input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            { errors.price ? <div style={{marginTop:"10px"}}>{errors.price.message}</div> : null }
            <p>
                <label style={{fontWeight:"bold"}}>Description</label><br/>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            { errors.description ? <div style={{marginTop:"10px"}}>{errors.description.message}</div> : null }
            <input type="submit" value="Update" />
        </form>
        </div>
    )
}

export default EditProduct;