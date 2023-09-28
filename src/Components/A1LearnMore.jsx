import Arc from '../assets/Arc.svg'
import s1Mockups from '../assets/s1Mockups.png'


export default function A1LearnMore() {
    return (
        <article id='section1'>
        <div className="headerDown">
          <div className='cutiutza'> </div>
          <a href="#Services" className='learnMoreButton'><img src={Arc} alt="Learn More Button" height="110px" width="110px"  className='SpinImage'/></a>
          <div className="learnMoreAbout">
            <p className='lmaText'>
              Our innovative B2B marketplace platform <br />
              connect buyers and sellers worldwide, <br />
              providing a range of features for efficient <br />
              trade facilitation.
            </p>
            <div className="iphoneImg">
              <img src={s1Mockups} alt="Two Phones Img"  className='firstPhone'/>
            </div>
          </div>
        </div>
      </article>
    )
}