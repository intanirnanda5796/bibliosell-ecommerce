import { DottedSquare, BookImage } from 'assets';

const First_section = () => {
  return (
    <section id="Page1" className="homepage-section1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 nopadding">
            <div className="homepage-section1__title">
              <span className="headings1--bold">Read Book</span>
              <br />
              <span className="headings1--bolder font-color--orange">
                Change your life
              </span>
              <br />
            </div>
            <div className="homepage-section1__title-description">
              <span className="title-description--regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <br />
              <span>
                <a href="/#" className="btn btnsubmit--smallsized">
                  Get Started
                </a>
              </span>
            </div>
            <div className="homepage-section1__subdescription-frame">
              <div className="homepage-section1__subdescription-content">
                <span className="headings2--bold font-color--orange">
                  300M+
                </span>
                <span className="homepage-section1__benefit">Transactions</span>
              </div>
              <div className="homepage-section1__subdescription-content">
                <span className="headings2--bold font-color--orange">1000</span>
                <span className="homepage-section1__benefit">Happy Customers</span>
              </div>
              <div className="homepage-section1__subdescription-content">
                <span className="headings2--bold font-color--orange">4.78</span>
                <span className="homepage-section1__benefit">Rating Worldwide</span>
              </div>
            </div>
          </div>
          <div className="col-6 nopadding">
            <div className="homepage-section1__book-image-frame">
              <div className="homepage-section1__book-image-circle"></div>
              <div className="homepage-section1__dotted-squares--above">
                <img src={DottedSquare} alt="gambar dotted" />
              </div>
              <div className="homepage-section1__book-image">
                <img src={BookImage} alt="gambar buku" />
              </div>
              <div className="homepage-section1__dotted-squares--below">
                <img src={DottedSquare} alt="gambar dotted 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default First_section;
