import Arrow from '../assets/arrow.png'
import s4Mockup from '../assets/s4Mockup.png'


export default function Articol4() {
    return(
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
            <img src={s4Mockup} alt="Iphone image" className='s4Iphone phoneSize'/>
          </div>
        </div>
      </article>
    )
}