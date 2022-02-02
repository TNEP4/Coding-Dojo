import { Link } from "@reach/router";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const EditAuthor = (props) => {

    const [errors, setErrors] = useState({});
    const [authorName, setAuthorName] = useState("");
    const {id} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthorName(res.data.authorName);
            })
            .catch((err) => {
                console.log(err);
                navigate("/error");
            });
    }, [id]);

    useEffect(() => {
        axios
          // Make get request to get data for individual author
          // put id into url using `${}`
          .get(`http://localhost:8000/api/authors/${id}`)
          // Succes block: this code block will be triggered if axios.get() promise is successfully resolved
          .then((res) => {
            console.log(res.data);
            // Set authorName state variable with response from server
            setAuthorName(res.data.authorName);
          })
          // Error block: this will run if promise axios.get is rejected
          .catch((err) => {
            console.log(err);
            // If error, navigate to UI route "/error"
            navigate("/error");
          });
      }, [id]);

    const updateSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {authorName})
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };


    return (
        <div>
            <header style={{ textAlign:"left"}}> 
            <h1>Edit this Author</h1>
            <Link to="/">Home</Link>
            </header>
            <br />
            <main>
                <form onSubmit={updateSubmitHandler}>
                    <label>Author Name:</label>
                    <input type="text" value={authorName} onChange={e => setAuthorName(e.target.value)} />
                    <br />
                    {
                        errors.authorName ? 
                        <p style={{color:"red"}}>{errors.authorName.properties.message}</p>
                        : null
                    }
                    <br />
                    <button>Submit</button>
                    <button onClick={(e) => navigate("/")}>Cancel</button>
                </form>
            </main>
        </div>
    )
};

export default EditAuthor;