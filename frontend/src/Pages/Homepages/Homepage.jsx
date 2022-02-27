import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import "./homepage.css"
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.green.css';
function Homepage() {
  const options = {
    loop:true,
    margin: 10,
    autoplay: true,
    autoplaySpeed:2000,
    responsiveRefreshRate:10,
    nav:true,
    responsive: {
      0: {
        items: 1,
        
      },
      480: {
        items: 2,
      },
      990: {
        items: 4,
      },
    }
    
};
 
  return (
    <>
      <section>
        <div>
          <img src="/assets/images/homepage/2.jpg" className='homepage-image' alt="" />
        </div>
        <div className='container'>
            <div className='image-text'>
              <p className='h3' >One App <br/> More Service</p>
              <button className='btn btn1'><i className="fas fa-money-bill-wave"></i> Make Money</button> <br /><br />
              <button className='btn btn2'><i className="fas fa-download"></i> Download App</button>
            </div>
            
        </div>
      </section>

      <section>
        <div className="shop-count-block">
          <div className="container">
            <div className="row pt-3 pb-3">
              <div className="col-md-3 text-center">
                <h1>1000</h1>
                <h6>Shop</h6>
              </div>

              <div className="col-md-3 text-center">
                <h1>43</h1>
                <h6>Services</h6>
              </div>
              
              <div className="col-md-3 text-center">
                <h1>100</h1>
                <h6>Area</h6>
              </div>

              <div className="col-md-3 text-center">
                <h1>100000</h1>
                <h6>Apps Download</h6>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      <section >
        <div className="container mt-5 what_we_provide">
          <h6 className='what-we-provide'>What We Provide</h6>
          <h3>We Provide all service that you need </h3>
          <div className="mt-5">
            

          <OwlCarousel options={options}>

                  <div className="card">
                    <div className="card-body text-center">
                        <img src= "assets/images/menubar-icon/car.png" className='img-fluid service-img ' alt="Care Ride" />
                        <h6 className='mt-2'>Car Ride</h6>
                        <p>Travel in Comfort</p>
                    </div>
                  </div>
              

              
                  <div className="card">
                    <div className="card-body text-center">
                        <img src= "assets/images/menubar-icon/motorbike.png" className='img-fluid service-img ' alt="Care Ride" />
                        <h6 className='mt-2'>Bike Ride</h6>
                        <p>Beat the Traffic, Save Time</p>
                    </div>
                  </div>
              

              
                <div className="card">
                  <div className="card-body text-center">
                      <img src= "assets/images/menubar-icon/fast-food.png" className='img-fluid service-img ' alt="Care Ride" />
                      <h6 className='mt-2'>Food Delivery</h6>
                      <p>Get Your Food Just In Time</p>
                  </div>
                </div>
              

              
                <div className="card">
                  <div className="card-body text-center">
                      <img src= "assets/images/menubar-icon/shopping-bag.png" className='img-fluid service-img ' alt="Care Ride" />
                      <h6 className='mt-2'>Grocery Delivery</h6>
                      <p>Order From Home & feel relax</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body text-center">
                      <img src= "assets/images/menubar-icon/mop.png" className='img-fluid service-img ' alt="Care Ride" />
                      <h6 className='mt-2'>Home Cleaning</h6>
                      <p>Clean Your Home and Office</p>
                  </div>
                </div>

                </OwlCarousel>
          </div>
        </div>
      </section>

      <section className='container mt-5'>
        <h4>Why Choose US</h4>
        <h1>Because we care about you.... </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Homepage