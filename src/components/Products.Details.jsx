import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Product from "./Product";

function ProductDetails(){

    let params = useParams();
    let [product,setProduct] = useState({});
    console.log(params)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    return(
       
        <Product product={product} showBtn={false}/>
    );
}

export default ProductDetails;