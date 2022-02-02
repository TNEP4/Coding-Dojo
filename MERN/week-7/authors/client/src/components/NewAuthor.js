import { Link } from "@reach/router";
import React, {useState} from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const NewAuthor = (props) => {

    const [errors, setErrors] = useState({});
    const [authorName, setAuthorName] = useState("");

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {authorName})
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
            <h1>New Author</h1>
            <Link to="/">Home</Link>
            </header>
            <br />
            <main>
                <form onSubmit={newSubmitHandler}>
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

export default NewAuthor;