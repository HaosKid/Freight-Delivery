import Arrow from '../assets/arrow.png'
import s3Iphone from '../assets/s3Iphone.png'


export default function Articol3() {
    return (
        <article className="art3">
        <div className="section3">
          <div className="s3Img">
            <img src={s3Iphone} alt="Iphone Image" className='s3Iphone ' />
          </div>
          <div className="s3Desc art3DescMobile">
            <div className="s3Heading">
              <p className="s2HeadingT1">
                Secured Transactions
              </p>
              <h2 className="s2Head2 art3DescMobile">
                Say GoodBye to financial risks and legal disputes
              </h2>
              <p className="s2Desc art3DescMobile">
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
    )
}