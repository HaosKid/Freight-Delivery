export function Articol10() {
    return(
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
            <img src={a10Img} alt="Option image"   className='optionImg' />
          </div>
          
        </div>
      </article>
    )
}