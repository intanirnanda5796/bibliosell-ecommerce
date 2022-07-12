import {
    LineTitle,
    FreeDeliveryIcon,
    PremiumQualityIcon,
    RefundIcon,
    WarrantyIcon,
} from 'assets';
import { useState } from 'react';

const Second_section = () => {
  const [isFreeDeliveryHover, setFreeDeliveryHover] = useState(false);
  const [isPremiumHover, setPremiumHover] = useState(false);
  const [isRefundHover, setRefundHover] = useState(false);
  const [isWarrantyHover, setWarrantyHover] = useState(false);

  return (
    <section id="Page2">
      <div className="homepage-section2">
        <div className="container-fluid nopadding">
          <div className="row">
            <div className="homepage-section2__title">
              <span className="headings3--regular font-color--orange">
                Why Choose us ?
              </span>
            </div>
            <div className="homepage-section2__title">
              <span className="headings2--bolder">
                Over 200+ successfull purchasing
              </span>{' '}
              <br />
              <span className="headings2--bolder">and still counting</span>{' '}
              <br />
              <img src={LineTitle} alt="ini garis title" />
            </div>
          </div>
        </div>
        <div className="container-fluid nopadding">
          <div className="row homepage-section2__cards">
            <div className="col-3 nopadding">
              <div
                className={`homepage-section2__each-card sec2-card 
                  ${
                    isFreeDeliveryHover
                      ? 'homepage-section2__each-card--hovered'
                      : 'homepage-section2__each-card--normal'
                  }
                  `}
                onMouseEnter={() => setFreeDeliveryHover(true)}
                onMouseLeave={() => setFreeDeliveryHover(false)}
              >
                <div className="homepage-section2__card-icon-header">
                  <div className="homepage-section2__card-icon-square-frame">
                    <img
                      src={FreeDeliveryIcon}
                      className="card-img-top"
                      alt="ini FreeDeliveryIcon"
                    />
                  </div>
                </div>
                <div className="homepage-section2__card-description">
                  <span className="headings3--semibold">Free Delivery</span>
                  <p className="headings4--regular">
                    If you order above Rp 100,000, we will deliver it for free
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 nopadding">
              <div
                className={`homepage-section2__each-card sec2-card
                  ${
                    isPremiumHover
                      ? 'homepage-section2__each-card--hovered'
                      : 'homepage-section2__each-card--normal'
                  }
                  `}
                onMouseEnter={() => setPremiumHover(true)}
                onMouseLeave={() => setPremiumHover(false)}
              >
                <div className="homepage-section2__card-icon-header">
                  <div className="homepage-section2__card-icon-square-frame">
                    <img
                      src={PremiumQualityIcon}
                      className="card-img-top"
                      alt="gambar PremiumQualityIcon"
                    />
                  </div>
                </div>
                <div className="homepage-section2__card-description">
                  <span className="headings3--semibold">Premium Quality</span>
                  <p className="headings4--regular">
                    We provide certified top quality books for your need
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 nopadding">
              <div
                className={`homepage-section2__each-card sec2-card
                  ${
                    isRefundHover
                      ? 'homepage-section2__each-card--hovered'
                      : 'homepage-section2__each-card--normal'
                  }
                  `}
                onMouseEnter={() => setRefundHover(true)}
                onMouseLeave={() => setRefundHover(false)}
              >
                <div className="homepage-section2__card-icon-header">
                  <div className="homepage-section2__card-icon-square-frame">
                    <img
                      src={RefundIcon}
                      className="card-img-top"
                      alt="ini RefundIcon"
                    />
                  </div>
                </div>
                <div className="homepage-section2__card-description">
                  <span className="headings3--semibold">100% Refund</span>
                  <p className="headings4--regular">
                    If our book dont meet your expectation,you can refund it
                    after 3 days
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 nopadding">
              <div
                className={`homepage-section2__each-card sec2-card
                  ${
                    isWarrantyHover
                      ? 'homepage-section2__each-card--hovered'
                      : 'homepage-section2__each-card--normal'
                  }
                  `}
                onMouseEnter={() => setWarrantyHover(true)}
                onMouseLeave={() => setWarrantyHover(false)}
              >
                <div className="homepage-section2__card-icon-header">
                  <div className="homepage-section2__card-icon-square-frame">
                    <img
                      src={WarrantyIcon}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="homepage-section2__card-description">
                  <span className="headings3--semibold">Warranty</span>
                  <p className="headings4--regular">
                    We guarantee our books are very exclusive for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second_section;
