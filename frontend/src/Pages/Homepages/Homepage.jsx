import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import CountUp from 'react-countup';
import TextTransition, { presets } from "react-text-transition";
import "./homepage.css"
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.green.css';
import { Link } from 'react-router-dom';

const texts = ["Shop","Service","Option","Choose","Order"];

function Homepage() {
  const options = {
    loop:true,
    margin: 10,
    autoplay: true,
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
const [index, setIndex] = React.useState(0);
React.useEffect(() => {
  const intervalId = setInterval(() => setIndex(index => index + 1), 3000);
  return () => clearTimeout(intervalId);
}, []);

  return (
    
    <>
      <section>
        <div>
          <img src="/assets/images/homepage/2.png" className='homepage-image' alt="" />
        </div>
        <div >
            <div className='image-text'>
              <h2>One Of The Best Platfrom</h2>
              <div className='inline h2'>
                More&nbsp;
              <TextTransition
                  text={ texts[index % texts.length] }
                  springConfig={{ stiffness: 50, damping: 20 }}
                  inline
                />s
              </div>
              <Link to='/' className='btn btn1 banner_button'><i className="fas fa-money-bill-wave"></i> Make Money</Link> <br /><br />
              <Link to='/' className='btn btn2 banner_button'><i className="fas fa-download"></i> Download App</Link>
            </div>
            
        </div>
      </section>

{/* Total number of shop area rider user  */}

      <section>
        <div className="shop-count-block">
          <div className="container">
            <div className="row pt-3 pb-3">
              <div className="col-md-3 text-center">
                <h1><CountUp end={1000} />+</h1>
                <h6>Shop</h6>
              </div>

              <div className="col-md-3 text-center">
                <h1><CountUp end={43} />+</h1>
                <h6>Services</h6>
              </div>
              
              <div className="col-md-3 text-center">
                <h1><CountUp end={100} />+</h1>
                <h6>Area</h6>
              </div>

              <div className="col-md-3 text-center">
                <h1><CountUp end={1000} />+</h1>
                <h6>Apps Download</h6>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Carousel */}
      <section >
        <div className="container mt-5 what_we_provide">
          <div className='text-center'>
            <h6 className='what-we-provide'>What We Provide</h6>
            <h3>We Provide all service that you need </h3>
          </div>
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

      <section className='earn_with_skill pt-5 pb-3'>
        <div className="text-center">
          <h3>Earn With Your Skill </h3>
          <h5>If you have any skill you can earn easily</h5>
        </div>
        <div>
          <div className='text-center mt-3'>
            <Link to="/earn" className='btn start_earning pt-2 pb-2'>Start Earning <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      <section className="container">

      </section>
    </>
  )
}

export default Homepage