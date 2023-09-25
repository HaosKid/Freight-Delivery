export function Articol2() {
    return(
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
            <img src={TiltedIphone} alt="Tilted Iphone"/>
          </div>
        </div>
      </article>
    )
}