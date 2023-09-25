export function Footer() {
    return(
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
    )
}