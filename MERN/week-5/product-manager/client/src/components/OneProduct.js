import React, {useEffect, useState} from "react";
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
            res.json({ message: "Something went wrong in findAll", error: err });
        })
    }, [id])

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    )
}

export default OneProduct;