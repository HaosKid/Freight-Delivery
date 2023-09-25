export function Articol5() {
    return(
        <article className="art5">
        <div className="section5">
          <div className="s5Description">
            <div className="s5Headings">
              <p className="s5OverHead">
                Experience the Convenience
              </p>
              <h2 className="s5Head">
                Realtime Communication
              </h2>
              <p className="s5UnderHead">
              Real-Time Communication: Stay connected with freight forwarders through our built-in messaging system. 
              Easily discuss shipment details, negotiate terms, and track the progress of your cargo. Our platform 
              facilitates seamless communication, ensuring that you are always up to date on the status of your shipment.
              </p>
            </div>
            <button className="s5Action">
              Get Started Now <img src={Arrow} alt="Arrow image" />
            </button>
          </div>
          <div className="s5Img">
            <img src={s5Iphone} alt="Iphone Image"/>
          </div>
        </div>
      </article>
    )
}