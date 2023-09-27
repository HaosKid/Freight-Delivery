import Footer from './Footer'

import GreenArrow from '../assets/GreenArrow.png'
import A11GreenCheck from '../assets/A11GreenCheck.png'


export default function Articol11() {
    return(
        <article className="art11">
        <div className="a11Container">
          <div className="a11Header">
            <div className="a11HeadSection">
              <h2 className="a11Head">
                Join our community
              </h2>
              <p className="a11SubHead">
                Join 10,000+ supports agent that elevate their entire support experience with one <br />
                straightforward platform. Get Started today.
              </p>
            </div>
            <div className="a11UnderHeadSection">
              <div className="a11ItemContainer">
                <div className="a11HeadItem">
                  <img src={A11GreenCheck} alt="" />
                  <p className="a11ItemText">
                    No credit card required
                  </p>
                </div>
                <div className="a11HeadItem">
                  <img src={A11GreenCheck} alt="" />
                  <p className="a11ItemText">
                    Full access to all features
                  </p>
                </div>
                <div className="a11HeadItem">
                  <img src={A11GreenCheck} alt="" />
                  <p className="a11ItemText">
                    Cancel at anytime
                  </p>
                </div>
              </div>
              <div className="a11InputSection">
                <input className='emailInput' type="text" placeholder='youremail@emaill.com' />
                
              </div>
              <div className="a11HeadButton">
                <button className="a11Button">
                  Get Started Now <img src={GreenArrow} alt="Green Arrow" />
                </button>
              </div>
            </div>

                                                                    {/* Footer */}
            <Footer />
              

            
          </div>
        </div>
      </article>
    )
}