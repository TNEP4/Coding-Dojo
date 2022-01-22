import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "@reach/router";

const AllProduct = (props) => {

    const { productList, setProductList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => {
                console.log("Find All Products failed");
                console.log({ message: "Something went wrong in findAll", error: err });
            })
    }, []);

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                setProductList(productList.filter(product => product._id !== idFromBelow));
                const newList = productList.filter((product, index) => product._id !== idFromBelow)
                setProductList(newList);
                //could also write like this:
                // setProductList(productList.filter((product, index) => product._id !== idFromBelow))
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div>
            <br />
            <br />
            <header>
            <h1>All Products</h1>
            {/* <Link to="/new">
                <button>Add New Product</button>
            </Link> */}
            </header>

                {productList.map((product) => {
                    return (
                        <div key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                <p style={{fontWeight:"bold"}}>{product.title}</p>
                            </Link>
                            <Link to={`/products/edit/${product._id}`}>
                                <button>Edit</button>
                            </Link>
                                <button style={{marginLeft: "10px"}} onClick={() => deleteFilter(product._id)}>Delete</button>
                            <br />
                            <br />
                            <div>-</div>
                            <br />
                        </div>
                    )
                })}

        </div>
    )
}

export default AllProduct;