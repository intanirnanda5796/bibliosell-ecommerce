import {
    IllustrationFirst,
} from 'assets';

const Third_section = () => {
  return (
    <section id="Page3">
      <div className="homepage-section3">
        <div className="container-fluid nopadding">
          <div className="row">
            <div className="col-6">
              <div className="homepage-section3__column-left">
                <div className="homepage-section3__title">
                  <span className="headings3--regular font-color--orange">
                    Operation
                  </span>
                  <br />
                  <span className="headings2--bolder">Easy to order</span>
                  <br />
                  <span className="headings2--bold font-color--orange">
                    sit amet, consectetur
                  </span>
                </div>
                <span className="homepage-section3--regular">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
                <span>
                  <a href="/#" className="btn btnsubmit--smallsized">
                    Get Started
                  </a>
                </span>
              </div>
            </div>

            <div className="col-6 nopadding">
              <div className="homepage-section3__image-frame">
                <div className="homepage-section3__background-logo-circle"></div>
                <img src={IllustrationFirst} alt="ini IllustrationFirst" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third_section;
