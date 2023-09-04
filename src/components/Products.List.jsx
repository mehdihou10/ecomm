import Product from './Product';
import {useState,useEffect} from 'react';

function ProductsList(){

    let [data,setData] = useState([]);

    let [cat,setCat] = useState([]);

    useEffect(()=>{

        fetch("https://fakestoreapi.com/products").then(result => result.json())
        .then(dt => setData(dt));

        
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(dt => setCat(dt))

    },[]);

    let categoeriesBtns = cat.map((el,index) => <button key={index} className='btn btn-danger' onClick={handleCat}>{el}</button>)

    function handleCat(e){
        fetch(`https://fakestoreapi.com/products/category/${e.target.innerHTML}`)
        .then(res => res.json())
        .then(dt => setData(dt))
    }

    let showData = data.map(el => {

        return(
            <Product product={el} showBtn={true} key={el.id} />
        )
    })

    return(

        <div className="products-list py-5">
            <div className="container">
                <h1 className="text-center">Our Products:</h1>

                <div className="btns py-4 px-5 d-flex justify-content-center gap-3">

                    <button className='btn btn-danger' onClick={()=>{
                         fetch("https://fakestoreapi.com/products").then(result => result.json())
                         .then(dt => setData(dt));
                    }}>All</button>
                    {categoeriesBtns}

                </div>

                <div className="row g-4 mt-4">
                {showData}
                </div>
            </div>
        </div>
    );
}

export default ProductsList;