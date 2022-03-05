import { Link }  from 'react-router-dom';
import "./footer.css"

function Footer() {
  return (
    <>
        <section>
            <div className='footer1'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className='mt-3 ' style={{color:"#fff323"}}>Contact</h4>
                            <h6><i className="fas fa-mobile-alt"></i>  00000</h6>
                            <h6><i className="fas fa-envelope"></i>  info@proyojone.xyz</h6>
                            <h5 style={{color:"#fff323"}}>Corporate Address:</h5>
                            <p>North Tower,<br />
                                Uttara, Dhaka 1230</p>

                        </div>
                        <div className="col-md-3">
                            <h4 className='mt-3' style={{color:"#fff323"}}>Other Pages</h4>
                            <Link to="/blog" className='other-page'>Blog</Link><br />
                            <Link to="/help" className='other-page'>Help</Link><br />
                            <Link to="/term-of-use" className='other-page'>Terms Of Use</Link><br />
                            <Link to="/privacy" className='other-page'>Privacy Policy</Link><br />

                        </div>

                        <div className="col-md-6">
                            <h4 className='mt-3 text-center' style={{color:"#fff323"}}>Download Proyojone.xyz App</h4>
                            <p className='text-center'>Tackle your to-do list wherever you are with our mobile app & make your life easy.</p>
                            <div className='text-center'>
                                <a href="https://www.apple.com/app-store/" target="_blank" className='btn app_link m-1' rel="noopener noreferrer">
                                    <div className="d-flex flex-row">
                                        <div className='my-auto'><i className="fab fa-apple fa-2x"></i></div>
                                        &emsp;<div><span style={{ fontSize:"12px", fontWeight:'700' }}>Download on the</span> <br /> <span style={{ fontSize:"20px", fontWeight:'700' }}>App Store</span></div>
                                    </div> 
                                </a>
                                <a href="https://play.google.com/store/apps" target="_blank" className='btn app_link m-1' rel="noopener noreferrer">
                                    <div className="d-flex flex-row">
                                        <div className='my-auto'><i className="fab fa-google-play fa-2x"></i></div>
                                        &emsp;<div><span style={{ fontSize:"12px", fontWeight:'700' }}>GET IT ON</span> <br /> <span style={{ fontSize:"20px", fontWeight:'700' }}>Google Play</span></div>
                                    </div> 
                                </a>
                            </div>
                            <div className='footer-icon'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer2'>
                <p className='text-center pt-2 pb-2'>Copyright © {new Date().getFullYear()} Proyojone.xyz | All Rights Reserved</p>
            </div>
        </section>
    </>
  )
}

export default Footer