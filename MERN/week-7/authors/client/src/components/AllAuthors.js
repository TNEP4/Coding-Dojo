import React, {useState, useEffect} from "react";
import {Link, navigate} from "@reach/router";
import axios from "axios";

const AllAuthors = (props) => {

    const [authorList, setAuthorList] = useState([]);
    const {id}  = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthorList(res.data);
            })
            .catch(err => {
                console.log(err);
                navigate("/error");
            });
    }, []);

    const deleteHandler = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then(res => {
                setAuthorList(authorList.filter(author => author._id !== idFromBelow));
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <header style={{ textAlign:"left"}}>
                <h1>We have quotes by:</h1>
                <Link to="/new">Add New Author</Link>
            </header>
            <main>
                <table style={{margin: "auto", border:"1px solid black"}}>
                    <thead style={{backgroundColor:"lightgray", color:"white"}}>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            authorList?

                            authorList.map(author => {
                                return (
                                    <tr key={author._id}>
                                        <td>
                                            {author.authorName}
                                        </td>
                                        <td>
                                            <Link to={`/edit/${author._id}`}>
                                                <button>
                                                    Edit
                                                </button>
                                            </Link>
                                                <span> | </span>
                                                <button onClick={() => deleteHandler(author._id)}>
                                                    Delete
                                                </button>
                                        </td>
                                    </tr>
                                );
                            })

                            : <p>Loading</p>
                        }
                        
                    </tbody>
                </table>
            </main>
        </div>
    )

}

export default AllAuthors;