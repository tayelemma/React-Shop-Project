import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';


function ProductAddNew() {
    const navigate = useNavigate();
    const [success, setsuccess] = useState(false); 
    const [product, setProduct] = useState({
        title: "",
        desc: "",
        img: "",
        categories: [],
        size: [],
        color: [],
        price: 0,
        inStock: false

    });


    function textFieldChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/products', {product})
            .then(response => {
                if (response.status === 201) setsuccess(true);
                     navigate("/product/display")
            })
            .catch(error => {
                console.log(error)
            })
    }
   

    return (
        <div className="container">
            <form action="action_page.php"  >
                <div>
                    <h1>Add Product  </h1>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="title" name="title" value={product.title} onChange={(e) => textFieldChange(e)} placeholder="Title" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="dec">Description</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="dec" name="dec" value={product.dec} onChange={(e) => textFieldChange(e)} placeholder="Description" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="img">Image</label>
                    </div>
                    <div className="col-75">
                        <input id="img" name="img" value={product.img} onChange={(e) => textFieldChange(e)} placeholder="Upload" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="phone">Category</label>
                    </div>
                    <div className="col-75">
                        <input type="tel" id="categories" name="categories" placeholder="categories" value={product.categories} onChange={(e) => textFieldChange(e)} />
                    </div>
                </div>


                {/*  */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="size">Size</label>
                    </div>
                    <div className="col-75">
                        <input type="size" id="size" name="size" placeholder="size" value={product.size} onChange={(e) => textFieldChange(e)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="favColor">Color</label>
                    </div>
                    <div className="col-75">
                        <input type="color" id="color" name="color" value={product.color} onChange={(e) => textFieldChange(e)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="price">Price</label>
                    </div>
                    <div className="col-75">
                        <input id="price" name="price" value={product.price} onChange={(e) => textFieldChange(e)} />
                    </div>
                </div>


                <div className='row'>
                    <div className="col-25">
                        <label htmlFor="instock">Instock</label>
                    </div>

                    <div className='col-75'>
                        <label className="container">True
                            <input type="checkbox" name="instock" checked={product && product.instock && product.instock.includes("true")} value="true" onChange={(e) => textFieldChange(e)} />
                            <span className="checkmark"></span>
                        </label> <br></br>

                        <label className="container">False
                            <input type="checkbox" name="instock" checked={product && product.instock && product.instock.includes("false")} value="false" onChange={(e) => textFieldChange(e)} />
                            <span className="checkmark"></span>
                        </label> <br></br>
                    </div>
                </div>

                <div className="row">
                    <input type="submit" value="Add" onClick={(e) => submitHandler(e)} />
                </div>

            </form>

        </div>

    );
    }
export default ProductAddNew;