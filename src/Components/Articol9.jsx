import Logo from '../assets/Logo.svg'
import mailLogo from '../assets/mailLogo.png'
import arrowDown from '../assets/arrowDown.png'


export default function Articol9() {
    return(
        <article className='art9'>
        <div className="art9Container">
          <div className="art9Left">
            <img src={Logo} alt="Logo" />
            <h2 className='a9LeftHead'>
              Frequently <br />
              Asked Questions
              </h2>
            <p className='a9LeftSubHead'>
              Still need help? Contact Us
            </p>
            <button className='a9LeftButton'>
              <img src={mailLogo} alt=" Mail Logo" /> 
              info@tradelyco.com
            </button>
          </div>
          <div className="art9Right">
            <div className="a9Item1">
              <img src={arrowDown} alt="Arrow Down Img" className='rotate90'/>
              <div>
                <h2>What do we do?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nunc varius eros vulputate accusan. <br />
                  Aliquam mattis purus hac feugiat quam vitae fames orci sagittis.
                </p>
              </div>
              
            </div>
            <div className="a9RightItem">
              <img src={arrowDown} alt="Arrow Down Img"/>
              <h2>
                Getting started with Tradely
              </h2>
            </div>
            <div className="a9RightItem">
              <img src={arrowDown} alt="Arrow Down Img"/>
              <h2>
                How does Tradely works?
              </h2>
            </div>
            <div className="a9RightItem">
              <img src={arrowDown} alt="Arrow Down Img"/>
              <h2>
                How does RFQ works?
              </h2>
            </div>
            <div className="a9RightItem">
              <img src={arrowDown} alt="Arrow Down Img"/>
              <h2>
                How does RFF works?
              </h2>
            </div>
            <div className="a9RightItem">
              <img src={arrowDown} alt="Arrow Down Img"/>
              <h2>
                How to join Tradely?
              </h2>
            </div>
          </div>
        </div>
      </article> 
    )
}