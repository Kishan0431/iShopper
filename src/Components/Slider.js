import React from "react";
import style from "./Style/Slider.module.css";

const Slider = () => {
  return (
    <>
    <div className="container">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner carousel-fade">
          <div class="carousel-item active">
            <img
             
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Sports/1400X400-Without-Copy.gif"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              
              src="https://images.remotehub.com/6f1c17a076f211ed8fa45a67e3e342ef/1400x400/4d341e79.jpg?version=1670501923"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
        
              src="https://sonamoni.com/image/cache/catalog/CATEGORY%20IMAGE/Footwear-Booties-1400x400.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
        
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzaGlvbnx8fHx8fDE2ODI1ODU3ODE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400"
              class="d-block w-100"
              alt="..."
              
            />
          </div>
          <div class="carousel-item">
            <img
        
              src="https://images.unsplash.com/photo-1612215327100-60fc5c4d7938?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzaGlvbnx8fHx8fDE2ODI1ODU4NTI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400"
              class="d-block w-100"
              alt="..."
              
            />
          </div>
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </>
  );
};

export default Slider;
