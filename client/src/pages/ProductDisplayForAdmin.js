import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

function ProductDisplayForAdmin() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [success, setsuccess] = useState(false);


    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(`http://localhost:3000/api/products`);
            setProducts(res.data);
            console.log(res.data)

        }
        getProducts();
        console.log(products)
    }, []);


    const clickHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }


    const deleteHandler = (pro) => {
        const filteredproduct = products.filter((p) => p !== pro);
        setProducts(filteredproduct);
    }


    function editHandler(id, e) {
        e.preventDefault();
        axios.put("/products/" + id, products)
            .then((res) => {
                if (res.status === 200) setsuccess(true);
            })
            .catch((err) => {
                console.error(`Error while editing a post ${err}`);
            });
    }

    return (
        <div style={{ width: "80%", border: "1px solid black", margin: "auto", padding: "20px", background:"black", color: "white" }}>


             <h1  > Product List</h1>
            <div style={{background: "black", padding:"10px" , display: "flex",gap: "20px ", textDecoration: "none"}}> 


           
            {/* <button style={{padding:"5px 34px", background: "lightblue"}}><Link to="/product/addnew"> ADD</Link>  </button>
            <button style={{ padding: "5px 34px" }} onClick={(e) => clickHandler(e)}> HOME</button> */}

                <Link style={{ textDecoration: "none" , color: "white", border: "1px solid white", padding: "5px 40px"}} to="/product/addnew"> ADD</Link> 
                <Link style={{ textDecoration: "none", color: "white", border: "1px solid white", padding: "5px 40px" }} to="/"> HOME</Link>
        </div>
           


            {products.map((item) =>
            (
                <div key={item._id} style={{ marginBottom: "1px solid balck" }}>
                    <div style={{border:"1px solid black", padding: "10px", background:"white", color: "black"}}>
                        <div> <strong></strong> <img style={{width: "10%"}} src={`${item.img}`} /> </div>
                        <div>   <strong>Title </strong>: {item.title}</div>
                        <div>   <strong>Discription </strong>: {item.desc}</div>
                        <div> <strong>Price </strong>: ${item.price}.00</div>
                        <div>  <strong>Category </strong>: {item.categories}</div>
                        <div>  <strong>Size </strong>: {item.size}</div>
                        <button style={{ padding: "5px 34px" }} onClick={() => deleteHandler(item)}> DELETE</button>
                        <button style={{ padding: "5px 34px" }} onClick={() => editHandler(item._id)}> <Link style={{ textDecoration: "none", color: "black"}} to={`/product/update`}>   UPDATE </Link>  </button>
                    </div>

                </div>

            )

            )}

        </div>
    )
}

export default ProductDisplayForAdmin