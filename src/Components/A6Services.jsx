import s6r1Iphone from '../assets/s6r1Iphone.png'
import s6r2Iphone from '../assets/s6r2Iphone.png'
import s6r3Iphone from '../assets/s6r3Iphone.png'
import ecommerce1 from '../assets/ecommerce1.png'
import ecommerce2 from '../assets/ecommerce2.png'
import ecommerce3 from '../assets/ecommerce3.png'


export default function A6Services() {
    return(
        <article id='Services' className="art6">
        <div className="section6">
          <div className="s6Heading">
            <h2 className="s6Title">
              Our Services
            </h2>
            <p className="s6TitleDesc">
              Strategic sourcing: Tradely helps companies identify, assess, and engage with suppliers to ensure they are getting <br /> 
              the best price and quality for their sourcing needs.
            </p>
          </div>
          <div className="s6Row1">
            <div className="s6Serv1">
              <div className="s6Desc1">
                <h2 className="s6Desc1Title">
                  Trade Facilitation
                </h2>
                <p className="s6Desc1Text">
                  Tradely assists companies in navigating the <br />
                  complexities of international trade, including <br />
                  customs clearance and documentation. <br />
                </p>
              </div>
              <div className="s6Img1">
                <img src={s6r1Iphone} alt="Iphone image"/>
              </div>
            </div>
            <div className="s6Serv2">
              <div className="s6Desc2">
                <h2 className="s6Desc2Title">
                  Supply Chain <br />
                  Management
                </h2>
                <p className="s6Desc2Text">
                  Tradely provides end-to-end supply chain <br /> 
                  management solutions, including <br />
                  forecasting, inventory management, and <br />
                  logistics.                
                </p>
              </div>
              <div className="s6Img2">
                <img src={ecommerce1} alt="Ecommerce img" />
              </div>
            </div>
          </div>

          <div className="s6Row2">
            <div className="s6Serv3">
              <div className="s6Desc3">
                <h2 className="s6Desc3Title">
                  Market Intelligence
                </h2>
                <p className="s6Desc3Text">
                  Tradely offers comprehensive market <br />
                  intelligence reports and analysis to help <br />
                  companies identify key market trends and <br />
                  competitive advantages.
                </p>
              </div>
              <div className="s6Img3">
                <img src={ecommerce2} alt="Ecommerce Image" />
              </div>
            </div>
            <div className="s6Serv4">
              <div className="s6Desc4">
                <h2 className="s6Desc4Title">
                Pricing Analysis
                </h2>
                <p className="s6Desc4Text">
                Tradely provides pricing analysis to help <br />
                 companies identify and make the best pricing <br />
                  decisions for their products and services. <br />               
                </p>
              
              </div>
              <div className="s6Img4">
                <img src={s6r2Iphone} alt="Ecommerce img" />
              </div>
            </div>
          </div>

          <div className="s6Row3">
            <div className="s6Serv5">
              <div className="s6Desc5">
                <h2 className="s6Desc5Title">
                  Procurement Consulting
                </h2>
                <p className="s6Desc5Text">
                  Tradely helps companies develop and <br />
                  implement efficient and cost-effective <br />
                  procurement strategies.
                </p>
              </div>
              <div className="s6Img5">
                <img src={s6r3Iphone} alt="Iphone Image" />
              </div>
            </div>
            <div className="s6Serv6">
              <div className="s6Desc6">
                <h2 className="s6Desc6Title">
                Trade Assurance
                </h2>
                <p className="s6Desc6Text">
                  Tradely Agro offers trade assurance services <br />
                  such as quality control, payment protection, <br />
                  and shipment tracking to help buyers and <br />
                  suppliers transact securely.            
                </p>
              
              </div>
              <div className="s6Img6 ">
                <img src={ecommerce3} alt="Ecommerce img" />
              </div>
            </div>
          </div>
        </div>
      </article>
    )
}