import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Checkout new Outfits </strong>Best of ishopper Exclusive Brands{" "}
        <span class="badge rounded-pill text-bg-success">New</span>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      {/* -----------------------------------SLIDER-------------------------------------------- */}

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
          <span class="visually-h idden">Next</span>
        </button>
      </div>

      <h2 className="m-4 p-2">DEAL OF THE DAY</h2>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/44eb585b-c746-4070-aef7-de2672b8cea1/1.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682684700&Signature=fkIlyEOMvI5NtbNBQ1j%2Bk6V22V0%3D&response-content-disposition=inline%3B%20filename%3D%221.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/2f3e8b3b-ead2-4060-b4a8-86f001d657f5/2.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682684734&Signature=FO5dDv5Qr7PFHbfVuqiKB3R%2FKOI%3D&response-content-disposition=inline%3B%20filename%3D%222.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/3e8578e7-5e90-47c4-91e0-760f33649a5d/5.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682684785&Signature=P%2BhdX0TBTCZzRrPoWQWK8PH0sgg%3D&response-content-disposition=inline%3B%20filename%3D%225.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/13d6c274-001d-4ee3-8d46-63c42447d9b8/4.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682684812&Signature=6QWFZENQSm9WSRLSEeViSJuXEho%3D&response-content-disposition=inline%3B%20filename%3D%224.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/f2e70a34-24da-4956-a48f-f5eb685d3cd1/6.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682684877&Signature=DdW%2FWU4lJO4T62lXKTu9GrVBm3A%3D&response-content-disposition=inline%3B%20filename%3D%226.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
        </div>
        
      </div>
      <h2 className="m-4 p-2">DEALS ON TOP BRANDS</h2>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/676e1e3a-098f-452a-9ce4-c96bf42c3332/Screenshot%202023-04-28%20114232.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682748891&Signature=3QAGHcO9SE4L%2BcA%2BkpEWU2hfQBw%3D&response-content-disposition=inline%3B%20filename%3D%22Screenshot%202023-04-28%20114232.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/cc0f3bc3-f853-496d-9221-a7d69584e1f7/Screenshot%202023-04-28%20114220.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682749126&Signature=zGwMS67GsGqtG4OmDZ5driryH88%3D&response-content-disposition=inline%3B%20filename%3D%22Screenshot%202023-04-28%20114220.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/bc4eecb8-5ac7-4e59-b900-8fd35cacc399/Screenshot%202023-04-28%20114238.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682749161&Signature=3uWFa2GaBwR0oyCa5UxBHEKJF%2Bk%3D&response-content-disposition=inline%3B%20filename%3D%22Screenshot%202023-04-28%20114238.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/88226622-a938-4c2e-a7f1-fbba632aa445/Screenshot%202023-04-28%20114244.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682749200&Signature=e7s14DAhIPx9ULuPxo6r37ixZ4Q%3D&response-content-disposition=inline%3B%20filename%3D%22Screenshot%202023-04-28%20114244.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="https://storage.cloudconvert.com/tasks/8f51367d-a34e-4938-82d8-8d8beab54d70/Screenshot%202023-04-28%20114258.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1682749230&Signature=1ZwFTQPgOEwG4v%2Fg%2Fon24h4a47w%3D&response-content-disposition=inline%3B%20filename%3D%22Screenshot%202023-04-28%20114258.jpg%22&response-content-type=image%2Fjpeg"
              alt=""
            />
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Home;
