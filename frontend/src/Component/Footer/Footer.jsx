import { Link }  from 'react-router-dom';
import "./footer.css"

function Footer() {
  return (
    <>
        <footer>
            <div className='footer1'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className='mt-3 ' style={{color:"#fff323"}}>Contact</h4>
                            <h6><i class="fas fa-mobile-alt"></i>  00000</h6>
                            <h6><i class="fas fa-envelope"></i>  info@proyojone.xyz</h6>
                            <h5 style={{color:"#fff323"}}>Corporate Address:</h5>
                            <h7>House # 57, Road # 25, Block - A,<br />
                                Banani, Dhaka 1212</h7>

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

                        </div>
                    </div>
                </div>
            </div>
            <div className='footer2'>
                <p className='text-center mt-2'>Copyright © {new Date().getFullYear()} Proyojone.xyz | All Rights Reserved</p>
            </div>
        </footer>
    </>
  )
}

export default Footer