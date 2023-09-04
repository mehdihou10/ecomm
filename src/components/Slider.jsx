import image1 from './images/image1.webp';

function Slider(){

    return(

        <div id="slider" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item position-relative active">
      <img src={image1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item position-relative">
      <img src="https://images.everydayhealth.com/images/what-are-natural-skin-care-products-alt-1440x810.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item position-relative">
      <img src="https://www.edureka.co/blog/wp-content/uploads/2022/10/New-Blog-Creative_1-2.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
       </div>
    );
}

export default Slider;