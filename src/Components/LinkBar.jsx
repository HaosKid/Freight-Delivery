import Logo from '../assets/Logo.svg'

export default function LinkBar() {
    return (<header id='header'>
    <img src={Logo} alt="Tradely Logo" />
    <div className='mainMenu'>

      <a href="#art0" className='UpLink'><b>Home</b></a>
      <a href="#Services" className='UpLink'><b>Services</b></a>
      <a href="#howItWorks" className='UpLink'><b>How it works?</b></a>
    </div>
    <div className="CTA">
      <a href="#footer" id='contact'>Contact</a>
      <div className="singUp">
        <a href="#JoinUs" id='anchorSingUp'>Join Us</a>
      </div>
    </div>
  </header>)
 }