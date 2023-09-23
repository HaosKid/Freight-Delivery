import { useState } from 'react'
import Logo from './assets/Logo.svg'
import mailLogo from './assets/mailLogo.png'
import a10Img from './assets/a10Img.png'
import GooglePlayLogo from './assets/Google Play Badge.png'
import AppStoreLogo from './assets/App Store Badge.png'
import Arc from './assets/Arc.svg'
import Arrow from './assets/arrow.png'
import arrowDown from './assets/arrowDown.png'
import GreenArrow from './assets/GreenArrow.png'
import A11GreenCheck from './assets/A11GreenCheck.png'
import Cout1 from './assets/cout1.png'
import Cout2 from './assets/cout2.png'
import Cout3 from './assets/cout3.png'
import Cout4 from './assets/cout4.png'
import Cout5 from './assets/cout5.png'
import Video from './assets/Video.png'
import s1Mockups from './assets/s1Mockups.png'
import s4Mockup from './assets/s4Mockup.png'
import s5Iphone from './assets/s5Iphone.png'
import s3Iphone from './assets/s3Iphone.png'
import s6r1Iphone from './assets/s6r1Iphone.png'
import s6r2Iphone from './assets/s6r2Iphone.png'
import s6r3Iphone from './assets/s6r3Iphone.png'
import s8r1Iphone from './assets/s8r1Iphone.png'
import ecommerce1 from './assets/ecommerce1.png'
import ecommerce2 from './assets/ecommerce2.png'
import ecommerce3 from './assets/ecommerce3.png'
import TiltedIphone from './assets/Tilted Iphone.png'
import footerPhone from './assets/footerPhone.png'
import footerMail from './assets/footerMail.png'
import Instagram from './assets/Instagram.png'
import Linkedin from './assets/Linkedin.png'
import Facebook from './assets/Facebook.png'
import Twitter from './assets/Twitter.png'
import footerLocation from './assets/footerLocation.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id='header'>
        <img src={Logo} alt="Tradely Logo" />
        <div className='mainMenu'>

          <a href="#art0"><b>Home</b></a>
          <a href="#Services"><b>Services</b></a>
          <a href="#"><b>How it works?</b></a>
        </div>
        <div className="CTA">
          <a href="#" id='contact'>Contact</a>
          <div className="singUp">
            <a href="#" id='anchorSingUp'>Sign up</a>
          </div>
        </div>
      </header>
      <article className="art0">
        <div className="headerUp">
          <div className="headerTitle">
            <h1>Revolutionizing Global Trade through<br />
              Innovative B2B Marketplace Solutions</h1>
            <p className='headerDesc'>Tradely Ltd is a leading B2B marketplace platform that transforms<br />
              the way businesses buy and sell across borders.</p>
          </div>
          <div className='appDownloadImg'>
            <p className="ctaHeader">Get it on</p>
            <img src={GooglePlayLogo} alt="Google Play logo" />
            <img src={AppStoreLogo} alt="App Store Logo" />
          </div>
        </div>
      </article>
                                                        {/* Home */}
      <article id='section1'>
        <div className="headerDown">
          <div className='cutiutza'> </div>
          <img src={Arc} alt="Learn More Button" height="110px" width="110px" className='learnMoreButton' />
          <div className="learnMoreAbout">
            <p className='lmaText'>
              Our innovative B2B marketplace platform <br />
              connect buyers and sellers worldwide, <br />
              providing a range of features for efficient <br />
              trade facilitation.
            </p>
            <div className="iphoneImg">
              <img src={s1Mockups} alt="Two Phones Img" />
            </div>
          </div>
        </div>
      </article>
      <article className='art2'>
        <div className="section2">
          <div className="s2Description">
            <p className="s2HeadingT1">
              Digital Supply Chain solution
            </p>
            <h2 className='s2Head2'>
              Africa sourcing hub for
              Food and Agriculture
            </h2>
            <p className="s2Desc">
            Tradely is a digital supply chain finance solution that connects buyers and suppliers from all 
            over the world in a secure, reliable, and cost-effective manner. Our mission is to revolutionize 
            the agro commodity industry in Africa and the world by addressing the gaps in the current 
            supply chain system, promoting export businesses, and reducing the barriers to trade.
            </p>
            <button className="s2Action">
              Get Started Now <img src={Arrow} alt="Arrow Img" />
            </button>
          </div>
          <div className="s2Iphone">
            <img src={TiltedIphone} alt="Tilted Iphone" />
          </div>
        </div>
      </article>
                                                        {/* Articol 3 */}
      <article className="art3">
        <div className="section3">
          <div className="s3Img">
            <img src={s3Iphone} alt="Iphone Image" className='s3Iphone'/>
          </div>
          <div className="s3Desc">
            <div className="s3Heading">
              <p className="s2HeadingT1">
                Secured Transactions
              </p>
              <h2 className="s2Head2">
                Say GoodBye to financial risks and legal disputes
              </h2>
              <p className="s2Desc">
                Tradely provides a secure and transparent trading environment for agro commodity
                businesses. Our platform ensures fair transactions, dispute resolution, and peace of mind. 
                Trade confidently with Tradely by your side!
              </p>
            </div>
            <button className="s2Action">
              Get Started Now <img src={Arrow} alt="Arrow Image" />
            </button>
          </div>
        </div>
      </article>
                                                        {/* Articol 4 */}
      <article className="art4">
        <div className="section4">
          <div className="s4Desc">
            <div className="s4Heading">
              <p className="s4HeadingT1">
                Streamline Your Freight Needs with Tradely
              </p>
              <h2 className="s4Head2">
                Wide Network of Trusted Freight Forwarders
              </h2>
              <p className="s4Description">
                Gain access to a wide network of reliable and experienced freight forwarders. We have 
                carefully vetted our partners to ensure they meet the highest standards of professionalism 
                and service quality. Rest assured that your cargo will be handled with utmost care and 
                delivered efficiently to its destination.
              </p>
            </div>
            <button className="s2Action pad20">
              Get Started Now <img src={Arrow} alt="Arrow Image" />
            </button>
          </div>
          <div className="s4Img">
            <img src={s4Mockup} alt="Iphone image" className='s4Iphone'/>
          </div>
        </div>
      </article>
                                                        {/* Articol 5 */}
      <article className="art5">
        <div className="section5">
          <div className="s5Description">
            <div className="s5Headings">
              <p className="s5OverHead">
                Experience the Convenience
              </p>
              <h2 className="s5Head">
                Realtime Communication
              </h2>
              <p className="s5UnderHead">
              Real-Time Communication: Stay connected with freight forwarders through our built-in messaging system. 
              Easily discuss shipment details, negotiate terms, and track the progress of your cargo. Our platform 
              facilitates seamless communication, ensuring that you are always up to date on the status of your shipment.
              </p>
            </div>
            <button className="s5Action">
              Get Started Now <img src={Arrow} alt="Arrow image" />
            </button>
          </div>
          <div className="s5Img">
            <img src={s5Iphone} alt="Iphone Image" />
          </div>
        </div>
      </article>
                                                        {/* Articol 6 */}
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
                <img src={s6r1Iphone} alt="Iphone image" />
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
                                                        {/* Who we serve? Articol 7 */}
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

                                                        {/* RFQ Articol 8 */}

      <article className="art8">
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
              <img src={s8r1Iphone} alt="Iphone image" className='s8r1Img'/>
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
              <div className="s8Head white">
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
              <img src={Video} alt="" />
            </div>
        </div>
      </article>
                                                        {/* RFQ Articol 9 */}
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
                                                              {/* Articol 10 */}
      <article className="art10">
        <div className="a10Container">
          <div className="a10Left">
            <h2 className='a10Head'>
              Endless Possibilities
            </h2>
            <p className='a10Text'>
            Lorem ipsum dolor sit amet consectetur. Arcu dapibus pretium ultrices eget morbi <br />
            nec. Felis suscipit tincidunt nam lobortis aliquet suspendisse habitant. Bibendum at <br />
            feugiat non mauris tempor elementum cum elementum orci.
            </p>
            <p className='a10CTA'>Get it on</p>
            <div className='GoogleAppleLogo'>
              <img src={GooglePlayLogo} alt="Google Play Image" />
              <img src={AppStoreLogo} alt="App Store Image" />
            </div>
          </div>
          <div className="a10Right">
            <img src={a10Img} alt="Option image" />
          </div>
          
        </div>
      </article>  
                                                                    {/* Articol 11 */}
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
            <footer className="a11Footer">
              <div className="upperFooter">
                <div className="footerLeft">
                  <img src={Logo} alt="Logo" />
                  <p className='footerText'>
                    Tradely Ltd is a leading B2B marketplace platform that transforms the way <br />
                    businesses buy and sell across borders.
                  </p>
                </div>


                <div className="footerRight">
                  <div className="footerMenu">
                    <h2 className="footerHead">
                      Menu
                    </h2>
                    <a href="#" className='menuItem'>Home</a>
                    <a href="#" className='menuItem'>Services</a>
                    <a href="#" className='menuItem'>How it Works?</a>
                    <a href="#" className='menuItem'>Pricing</a>
                  </div>

                  <div className="footerContact">
                    <h2 className="footerHead">
                      Contact
                    </h2>

                      <p><img src={footerPhone} alt="" /> +234 123 4567 890</p>

                      <p><img src={footerMail} alt="" /> info@example.com</p>

                      <p><img src={footerLocation} alt="" /> The best street in the world N.2</p>

                  </div>

                  <div className="footerAppDownload">
                    <h2 className="footerHead">
                      Get it on
                    </h2>

                      <img src={GooglePlayLogo} alt="google play logo" />


                      <img src={AppStoreLogo} alt="app store logo" />

                  </div>
                </div>
              </div>
              


              <div className="footerBottom">
                <p className='copyright'>Copyright © 2023 Tradely</p>
                <div className="SocialMedia">
                  <img src={Instagram} alt="Instagram logo" />
                  <img src={Linkedin} alt="Linkedin logo" />
                  <img src={Facebook} alt="Facebook logo" />
                  <img src={Twitter} alt="Twitter logo" />
                </div>
              </div>
            </footer>
              

            
          </div>
        </div>
      </article>                                     
    </>
  )
}

export default App
