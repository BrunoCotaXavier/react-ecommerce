import 'bootstrap/dist/css/bootstrap.min.css';
import './carrosselFullWidth.css'; 

import image01 from "../../assets/image01.jpg";
import image02 from "../../assets/image02.jpg";
import image03 from "../../assets/image03.jpg";

const FullWidthCarousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image01} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={image02} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={image03} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default FullWidthCarousel;
