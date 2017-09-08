import React from 'react'

export default class Masonry extends React.Component {
  render() {
    return (
      <div className="container-fluid g-px-30 g-py-100">


      <div className="masonry-grid row">
        <div className="masonry-grid-sizer col-sm-1"></div>

        <div className="masonry-grid-item col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-cover g-bg-size-cover g-bg-pos-top-center g-bg-purple-gradient-opacity-v1--after"
            style={{backgroundImage: 'url(/img-temp/500x450/img11.jpg)'}}>
            <div className="g-pos-rel g-z-index-1 g-px-30 g-py-60">
              <div className="mb-5">
                <div className="g-width-20 g-height-1 g-bg-white-opacity-0_5 mb-4"></div>
                <span className="d-block g-color-white-opacity-0_9">Maria Woody</span>
                <h4 className="h5 g-color-white-opacity-0_9">Exclusive interview with InVisions CEO</h4>
              </div>
              <h2 className="g-color-white g-font-weight-700 g-font-size-45 text-capitalize mb-5">InVision</h2>
              <a className="btn btn-md u-btn-outline-white g-font-weight-600 text-uppercase g-rounded-25 g-px-25" href="#">Read more</a>
            </div>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-white g-pa-30">
            <h3 className="h5 g-color-black g-font-weight-600 text-capitalize mb-0">
                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">10 Typography Tips Every Business Should Know</a>
              </h3>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-white g-pos-rel">
            <img className="img-fluid w-100" src="/img-temp/500x450/img6.jpg" alt="Image Description"/>
            <div className="g-pa-30">
              <h3 className="h5 g-color-black g-font-weight-600 text-capitalize mb-3">
                  <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">More than a look, design is functional.</a>
                </h3>
              <a href="#">Read more</a>
            </div>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-white g-pos-rel">
            <img className="img-fluid w-100" src="/img-temp/600x300/img1.jpg" alt="simon"/>
            <div className="g-pa-30">
              <div className="mb-4">
                <h3 className="h5 g-color-black g-font-weight-600 text-capitalize mb-3">
                    <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">Google I/O17: Google Lens</a>
                  </h3>
                <p className="g-color-gray-dark-v5">Impressive technology. But its fake technology. Where does it stop?</p>
              </div>
              <div className="d-flex justify-content-start">
                <a className="align-self-center g-color-gray-dark-v5 g-color-black--hover g-text-underline--none--hover" href="#">Hi-tech.</a>
                <a className="align-self-center ml-auto" href="#">Read more</a>
              </div>
            </div>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-white g-pos-rel">
            <img className="img-fluid w-100" src="/img-temp/600x300/img2.jpg" alt="simon"/>
            <div className="g-pa-30">
              <div className="mb-4">
                <h3 className="h5 g-color-black g-font-weight-600 text-capitalize mb-3">
                    <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">Cybersecurity and Privacy Questionnaire</a>
                  </h3>
                <p className="g-color-gray-dark-v5">A survey of your knowledge towards cybersecurity topics.</p>
              </div>
              <div className="d-flex justify-content-start">
                <a className="align-self-center g-color-gray-dark-v5 g-color-black--hover g-text-underline--none--hover" href="#">Security.</a>
                <a className="align-self-center ml-auto" href="#">Read more</a>
              </div>
            </div>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-white g-pos-rel g-pa-30">
            <h3 className="h5 g-color-black g-font-weight-600 text-capitalize mb-4">
                <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">Free virtual conference to take your agile ux skills to the next level</a>
              </h3>
            <div className="d-flex justify-content-start">
              <img className="d-block align-self-center g-width-30 g-height-30 rounded-circle mr-3" src="/img-temp/100x100/img7.jpg" alt="simon"/>
              <a className="align-self-center g-color-gray-dark-v5 g-color-black--hover g-text-underline--none--hover" href="#">Andrew</a>
            </div>
          </article>
        </div>

        <div className="masonry-grid-item col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-cover g-bg-size-cover g-bg-pos-top-center g-bg-purple-gradient-opacity-v1--after"
            style={{backgroundImage: 'url(/img-temp/600x450/img6.jpg)'}}>
            <div className="g-pos-rel g-z-index-1 g-px-30 g-py-60">
              <a className="js-fancybox d-block mb-5" href="http://www.youtube.com/embed/BNpiwOkKIJ8?autoplay=1" title="Single Image">
                <span className="u-icon-v3 g-bg-white g-color-black g-color-primary--hover g-rounded-50x g-font-size-15 g-cursor-pointer">
                    <i className="g-pos-rel g-left-2 fa fa-play"></i>
                  </span>
              </a>
              <h2 className="g-color-white g-font-weight-700 g-font-size-45 text-capitalize mb-3">Unify</h2>
              <p className="g-color-white-opacity-0_8">We are a creative studio focusing on culture, luxury, editorial &amp; art.</p>
            </div>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-teal g-pa-30">
            <h3 className="h5 g-color-white g-font-weight-600 text-capitalize mb-0">
                <a className="g-color-white g-color-white--hover" href="#">10 Typography Tips Every Business Should Know</a>
              </h3>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-white g-pos-rel">
            <img className="img-fluid w-100" src="/img-temp/400x270/img9.jpg" alt="simon"/>
            <div className="g-pa-30">
              <h3 className="h5 g-color-black g-font-weight-600 text-capitalize mb-3">
                  <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">Baron Fig Co-Founder Joey Cofone presents a convincing use case for Comic Sans</a>
                </h3>
              <p className="g-color-gray-dark-v5">It’s common to have to draw the same kinds of icons over and over</p>
              <a href="#">Read more</a>
            </div>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-white g-pos-rel">
            <img className="img-fluid w-100" src="/img-temp/400x270/img2.jpg" alt="simon"/>
            <div className="g-pa-30">
              <h3 className="h5 g-color-black g-font-weight-600 text-capitalize mb-3">
                  <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">Multi-Swipe: New UX to act on many items (emails) really fast</a>
                </h3>
              <a href="#">Read more</a>
            </div>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-white g-pos-rel">
            <img className="img-fluid w-100" src="/img-temp/400x270/img3.jpg" alt="simon"/>
            <div className="g-pa-30">
              <div className="mb-4">
                <h3 className="h5 g-color-black g-font-weight-600 text-capitalize mb-3">
                    <a className="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#">iOS 11: iPad Wishes and Concept Video</a>
                  </h3>
                <p className="g-color-gray-dark-v5">Once heralded as a promising sign of Apples...</p>
              </div>
              <div className="d-flex justify-content-start">
                <a className="align-self-center g-color-gray-dark-v5 g-color-black--hover g-text-underline--none--hover" href="#">Hi-tech.</a>
                <a className="align-self-center ml-auto" href="#">Read more</a>
              </div>
            </div>
          </article>
        </div>

        <div className="masonry-grid-item col-sm-6 col-lg-3 g-mb-30">
          <article className="u-shadow-v11 g-bg-purple g-pa-30">
            <h3 className="h5 g-color-white g-font-weight-600 text-capitalize mb-0">
                <a className="g-color-white g-color-white--hover" href="#">Web Development Reading List #183: Comedy In Design, Security Checklist And The Life As A Nobody</a>
              </h3>
          </article>
        </div>
      </div>

      </div>
    )
  }
}
