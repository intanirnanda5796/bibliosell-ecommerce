import {
    LineTitle,
    BookKayaTerencana,
    BookMindset,
    BookPhilosophyOfWalking,
  } from 'assets';

const Fifth_section = () => {
    return (
        <section id="Page5">
        <div className="homepage-section5__title">
          <div className="container-fluid">
            <div className="row">
              <div className="homepage-section5__title">
                <span className="headings3--regular font-color--orange">
                  Product
                </span>
              </div>
              <div className="homepage-section5__desc">
                <span className="headings2--bold">Meet Our BestSeller</span>
                <br />
                <img src={LineTitle} alt="" />
              </div>
            </div>
            <div className="row homepage-section5__bestseller-books">
              <div className="col-3 nopadding">
                <div className="homepage-section5__each-bestseller-image">
                  <img src={BookKayaTerencana} alt="" />
                </div>
                <div className="homepage-section5__each-bestseller-desc">
                  <span className="headings3--semibold">
                    Kaya dan Terencana
                  </span>
                  <span className="headings3--semibold font-color--orange">
                    Rp 100.000
                  </span>
                </div>
              </div>
              <div className="col-3 nopadding">
                <div className="homepage-section5__each-bestseller-image">
                  <img src={BookPhilosophyOfWalking} alt="" />
                </div>
                <div className="homepage-section5__each-bestseller-desc">
                  <span className="headings3--semibold">
                    A Philosophy of Walking
                  </span>
                  <span className="headings3--semibold font-color--orange">
                    Rp 100.000
                  </span>
                </div>
              </div>
              <div className="col-3 nopadding">
                <div className="homepage-section5__each-bestseller-image">
                  <img src={BookMindset} alt="" />
                </div>
                <div className="homepage-section5__each-bestseller-desc">
                  <span className="headings3--semibold">Mindset</span>
                  <span className="headings3--semibold font-color--orange">
                    Rp 100.000
                  </span>
                </div>
              </div>
              <div className="col-3 nopadding">
                <div className="homepage-section5__each-bestseller-image">
                  <img src={BookMindset} alt="" />
                </div>
                <div className="homepage-section5__each-bestseller-desc">
                  <span className="headings3--semibold">Mindset</span>
                  <span className="headings3--semibold font-color--orange">
                    Rp 100.000
                  </span>
                </div>
              </div>
            </div>
            <div className="homepage-section5__btn-see-all-books">
              <span>
                <a href="/#" className="btn btnsubmit--auto">
                  See all our products
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Fifth_section