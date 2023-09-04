import { Link } from "react-router-dom";

function Product(props){

  const {product,showBtn} = props;

    return (
        <div className="product col-md-6 col-lg-4">
<div className="card">
  <img src={product.image} className="card-img-top img-fluid" alt="product" />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <h3>${product.price}</h3>
    {showBtn && <Link to={"/product/" + product.id} className="btn btn-primary d-block">Details</Link>}
  </div>
</div>
        </div>
    )
}

export default Product;