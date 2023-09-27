import Cout1 from '../assets/cout1.png'
import Cout2 from '../assets/cout2.png'
import Cout3 from '../assets/cout3.png'
import Cout4 from '../assets/cout4.png'
import Video from '../assets/Video.png'
import s8r1Iphone from '../assets/s8r1Iphone.png'


export default function Articol8() {
    return(
        <article className="art8" id='howItWorks'>
        <header className="s8Header">
          <h1 className="s8Head">
            How It Works?
          </h1>
          <div className="buttonArea">
            <button className="selected"> Request For Quotations (RFQ)</button>
            <button className="notSelected">Request For Freight (RFF)</button>
          </div>
        </header>
        <div className="ContainerSummary">
            <div className="gridTemplate">
            <div className="gridItem s8r1Title">
              <p className="s8r1OverHead">How it Works?</p>
              <h2 className="s8r1Head"> RFQ Summary</h2>
              <img src={s8r1Iphone} alt="Iphone image" className='s8r1Img '/>
            </div>
            <div className="gridItem cutieMica">
              <img src={Cout1} alt="1"/>
              <p className="cutieMicaDesc">
                Submit your product <br />
                details and <br />
                requirements.
              </p>
            </div>
            <div className="gridItem cutieMica">
              <img src={Cout2} alt="2"/>
              <p className="cutieMicaDesc">
              Verified suppliers <br />
              respond with tailored <br />
              quotations.
              </p>
            </div>
            <div className="gridItem cutieMica">
              <img src={Cout3} alt="3"/>
              <p className="cutieMicaDesc">
              Verified suppliers <br />
              respond with tailored <br />
              quotations.
              </p>
            </div>
            <div className="gridItem cutieMica">
              <img src={Cout4} alt="4"/>
              <p className="cutieMicaDesc">
              Verified suppliers <br />
              respond with tailored <br />
              quotations.
              </p>
            </div>
          </div>
            <div className="s8Header">
              <div className="s8Head white gap30">
                  Explanatory Video
              </div>
              <div className="buttonArea w946">
                <button className='selected'>For Buyers</button>
                <button className='notSelected'>For Sellers</button>
                <button disabled="disabled" className='notSelected'>For Freight Forwarders</button>
              </div>
            </div>
            <div className="videoclipArea">
              <h2 className='overVideo'>Post RFQ & Post RFF</h2>
            </div>
            <div className='Videoclip'>
              <img src={Video} alt=""   className='VideoSize'/>
            </div>
        </div>
      </article>
    )
}