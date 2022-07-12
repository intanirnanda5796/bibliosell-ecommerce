import {
    BookHarryPotter,
    GirlWithBookSquare,
  } from 'assets';
  
const Sixth_section = () => {
    return (
        <section id="page6">
        <div className="container-fluid nopadding">
          <div className="row homepage-section6__title">
            <span className="headings3--regular font-color--orange">
              Categories
            </span>
            <span className="headings2--bold">Product Categories</span>
            <div className="homepage-section6__title-desc">
              <span className="headings4--regular text-align-left">
                We provide books based on your favorite categories
              </span>
              <span className="headings4--regular text-align-right">
                See all our categories {` -> `}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-3 nopadding">
              <div className="homepage-section6__each-category-image">
                <img src={BookHarryPotter} alt="" />
              </div>
              <div className="homepage-section6__each-category-title">
                <span className="headings3--regular">Science Fiction</span>
              </div>
            </div>
            <div className="col-3 nopadding">
              <div className="homepage-section6__each-category-image">
                <img src={BookHarryPotter} alt="" />
              </div>
              <div className="homepage-section6__each-category-title">
                <span className="headings3--regular">Horror</span>
              </div>
            </div>
            <div className="col-3 nopadding">
              <div className="homepage-section6__each-category-image">
                <img src={BookHarryPotter} alt="" />
              </div>
              <div className="homepage-section6__each-category-title">
                <span className="headings3--regular">Self-Improvement</span>
              </div>
            </div>
            <div className="col-3 nopadding">
              <div className="homepage-section6__each-category-image">
                <img src={BookHarryPotter} alt="" />
              </div>
              <div className="homepage-section6__each-category-title">
                <span className="headings3--regular">Parenting</span>
              </div>
            </div>
          </div>
          <div className="row nopadding">
            <div className="col-12 nopadding homepage-section6__sale-poster-outer">
              <div className="homepage-section6__sale-poster-frame">
                <div className="homepage-section6__sale-poster-image">
                  <img src={GirlWithBookSquare} alt="" />
                </div>
                <div className="homepage-section6__background-poster-rectangle">
                  <div className="homepage-section6__title">
                    <span className="headings2--bold font-color--white">
                      Start Shopping at Bibliosell
                    </span>
                  </div>
                  <div className="homepage-section6__title-desc">
                    <span className="headings3--bold font-color--white">
                      As new user, you will get 20% off in your first purchase
                    </span>
                  </div>
                  <div className="homepage-section6__button">
                    <a href="/#" className="btn btnsubmit--smallsized--white">
                      <span className="headings3--semibold">Shop Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Sixth_section;