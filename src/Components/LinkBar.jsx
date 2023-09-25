export function LinkBar() {
    return (<header id='header'>
    <img src={Logo} alt="Tradely Logo" />
    <div className='mainMenu'>

      <a href="#art0"><b>Home</b></a>
      <a href="#Services"><b>Services</b></a>
      <a href="#howItWorks  "><b>How it works?</b></a>
    </div>
    <div className="CTA">
      <a href="#" id='contact'>Contact</a>
      <div className="singUp">
        <a href="#" id='anchorSingUp'>Sign up</a>
      </div>
    </div>
  </header>)
 }