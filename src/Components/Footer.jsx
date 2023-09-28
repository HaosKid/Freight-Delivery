import Logo from '../assets/Logo.svg'
import GooglePlayLogo from '../assets/Google Play Badge.png'
import AppStoreLogo from '../assets/App Store Badge.png'
import footerPhone from '../assets/footerPhone.png'
import footerMail from '../assets/footerMail.png'
import Instagram from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import footerLocation from '../assets/footerLocation.png'

export default function Footer() {
    return(
        <footer className="a11Footer" id='footer'>
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
                    <a href="#" className='menuItem UpLink'>Home</a>
                    <a href="#Services" className='menuItem UpLink'>Services</a>
                    <a href="#howItWorks" className='menuItem UpLink'>How it Works?</a>
                    <a href="#JoinUs" className='menuItem UpLink'>Pricing</a>
                  </div>

                  <div className="footerContact">
                    <h2 className="footerHead">
                      Contact
                    </h2>

                      <p className='UpLink'><img src={footerPhone} alt=""/> +234 123 4567 890</p>

                      <p className='UpLink'><img src={footerMail} alt=""/> info@example.com</p>

                      <p className='UpLink'><img src={footerLocation} alt=""/> The best street in the world N.2</p>

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
                  <img src={Instagram} alt="Instagram logo"  className='UpLink'/>
                  <img src={Linkedin} alt="Linkedin logo"  className='UpLink'/>
                  <img src={Facebook} alt="Facebook logo"  className='UpLink'/>
                  <img src={Twitter} alt="Twitter logo"  className='UpLink'/>
                </div>
              </div>
            </footer>
    )
}