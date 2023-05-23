import React from "react";

const Home = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://ai-watch.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-02/AI%20Landscape.jpg?itok=VRk0lEKY"
            className="d-block w-100 h-50"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://ai-watch.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-02/AI%20Landscape.jpg?itok=VRk0lEKY"
            className="d-block w-100 h-50"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://ai-watch.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-02/AI%20Landscape.jpg?itok=VRk0lEKY"
            className="d-block w-100 h-50"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
