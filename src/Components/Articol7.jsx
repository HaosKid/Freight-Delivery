import GreenArrow from '../assets/GreenArrow.png'
import Cout1 from '../assets/cout1.png'
import Cout2 from '../assets/cout2.png'
import Cout3 from '../assets/cout3.png'
import Cout4 from '../assets/cout4.png'
import Cout5 from '../assets/cout5.png'


export default function Articol7() {
    return(
        <article className="sec7">
        <div className="conSec7">
          <div className="conSec7Desc">
            <h2 className="conSec7DescHead">
              Who We Serve? 
            </h2>
            <p className='conSec7DescSubHead'>
            Strategic sourcing: Tradely helps companies identify, assess, 
            and engage with suppliers to ensure they are getting the best price and quality <br />
            for their sourcing needs.
            </p>
          </div>
              {/* Who we serve? Articol 7 row 1*/}
          <div className="s7r1">
            <div className="s7r1TitleContainer primul">
              <div className="cout1Img">
              <img src={Cout1} alt="Line 1" />
              </div>
              <h2 className="s7r1Title">
                Exporters and <br />
                Importers
              </h2>
            </div>
            
            <p className="s7r1Text right35">
            Businesses engaged in international trade, looking to <br />
            connect with global buyers and suppliers, streamline <br />
            trade processes, and expand their market reach.
            </p>
            <button className="registerButton right35">
              Register Now 
              <img src={GreenArrow} alt="Green Arrow" />
            </button>
          </div>
        </div>
        <hr />
              {/* Who we serve? Articol 7 row 2*/}        
          <div className="s7r1">
            <div className="s7r1TitleContainer">
              <div className="cout1Img">
              <img src={Cout2} alt="Line 2" />
              </div>
              <h2 className="s7r1Title">
                Freight <br />
                Forwarders and <br />
                Logistics Provider 
              </h2>
            </div>
            
            <p className="s7r1Text ">
            Companies offering shipping, transportation, and <br />
            logistics services, seeking a platform to connect <br />
            with businesses in need of reliable and efficient <br />
            freight solutions.
            </p>
            <button className="registerButton right20">
              Register Now 
              <img src={GreenArrow} alt="Green Arrow" />
            </button>
          </div>
          <hr />
              {/* Who we serve? Articol 7 row 3*/}        
          <div className="s7r1">
            <div className="s7r1TitleContainer">
              <div className="cout1Img">
              <img src={Cout3} alt="Line 3" />
              </div>
              <h2 className="s7r1Title">
                Agents and Trade <br />
                Intermediaries 
              </h2>
            </div>
            
            <p className="s7r1Text ">
              Individuals or organizations acting as intermediaries <br />
              between buyers and sellers, facilitating trade <br />
              transactions, and providing valuable trade-related <br />
              services.
            </p>
            <button className="registerButton right20">
              Register Now 
              <img src={GreenArrow} alt="Green Arrow" />
            </button>
          </div>
          <hr />
              {/* Who we serve? Articol 7 row 4*/}        
            <div className="s7r1">
            <div className="s7r1TitleContainer left10px">
              <div className="cout1Img">
                <img src={Cout4} alt="Line 4" />
              </div>
              <h2 className="s7r1Title">
              Small and <br />
              Medium-sized <br />
              enterprises 
              </h2>
            </div>
            
            <p className="s7r1Text right10">
              SMEs looking to enter the global market, access new <br />
              trade opportunities, and leverage digital tools to enhance <br />
              their trade operations.
            </p>
            <button className="registerButton right35">
              Register Now 
              <img src={GreenArrow} alt="Green Arrow" />
            </button>
          </div>
          <hr />
              {/* Who we serve? Articol 7 row 5*/}        
              <div className="s7r1">
            <div className="s7r1TitleContainer right7">
              <div className="cout1Img">
                <img src={Cout5} alt="Line 5" />
              </div>
              <h2 className="s7r1Title">
                Trade <br />
                Associations and <br />
                Chamber of <br />
                Commerce
              </h2>
            </div>
            
            <p className="s7r1Text ">
            Industry associations and chambers of commerce <br />
            interested in offering their members a digital platform for <br />
            networking, trade facilitation, and access to trade-related <br />
            resources.
            </p>
            <button className="registerButton right20">
              Register Now 
              <img src={GreenArrow} alt="Green Arrow" />
            </button>
          </div>
          <hr />
      </article>
    )
}