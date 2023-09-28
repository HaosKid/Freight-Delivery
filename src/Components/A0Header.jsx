import GooglePlayLogo from '../assets/Google Play Badge.png'
import AppStoreLogo from '../assets/App Store Badge.png'

export default function A0Header() {
    return(
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
            <img src={GooglePlayLogo} alt="Google Play logo"/>
            <img src={AppStoreLogo} alt="App Store Logo" />
          </div>
        </div>
      </article>
    )
}