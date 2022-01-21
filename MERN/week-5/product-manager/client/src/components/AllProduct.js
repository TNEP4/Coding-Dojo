import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "@reach/router";

const AllProduct = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => {
                console.log("Find All Products failed");
                res.json({ message: "Something went wrong in findAll", error: err });
            })
    }, []);

    return (
        <div>
            <header>
            <h1>All Products</h1>
            </header>
            
            <br />

                {productList.map((product) => {
                    return (
                        <div key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                <p style={{fontWeight:"bold"}}>{product.title}</p>
                            </Link>
                        </div>
                    )
                })}

        </div>
    )
}

export default AllProduct;