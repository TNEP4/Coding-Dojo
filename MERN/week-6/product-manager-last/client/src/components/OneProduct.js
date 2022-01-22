import React, {useEffect, useState} from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const OneProduct = (props) => {

    const {id} = props;

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err) => {
            console.log("Find one product failed");
            console.log({ message: "Something went wrong in findAll", error: err });
        })
    }, [id])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <br />
            <Link to="/">
                <button>Home</button>
            </Link>
            <br />
            <h1>{product.title}</h1>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <br />
            <br />
            <button onClick={deleteProduct}>Delete {product.title}</button>
        </div>
    )
}

export default OneProduct;