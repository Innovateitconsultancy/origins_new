import Link from 'next/link'

export default function HowItWorks() {
    return (
        <>
            <section className="about-section section-padding fix">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-image-items">
                                    <div className="about-image-1">
                                        <div className="about-image-2 wow fadeInUp" data-wow-delay=".3s">
                                            <img src="/assets/img/home-img4.jpg" alt="about-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <h2 className=" wow fadeInUp" data-wow-delay=".3s">
                                            How it works 
                                        </h2>
                                    </div>
                                    <p className=" mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                      Experience seamless wellness with our at-home IV therapy, designed for your convenience and comfort.
                                    </p>
                                  
                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".9s">
                                            <Link href="/about" className="btnGreen">
                                                Know More 
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="accordion accordionHowItWork">

  <details name="accordion">
    <summary> <i>1</i> Book Your Appointment</summary>
    <p>
Schedule your session online or contact our clinic to book a convenient time for your IV therapy treatment.
✔ Quick consultation <br/>
✔ Flexible appointment slots

    </p>
  </details>
  <details name="accordion">
    <summary><i>2</i>Personal Health Assessment</summary>
    <p>
       Our trained medical professionals will discuss your health goals and recommend the most suitable IV therapy for your needs.
✔ Wellness evaluation <br/>
✔ Personalized treatment plan <br/>
✔ Safe medical guidance
 
    </p>
  </details>
  <details name="accordion">
    <summary><i>3</i>Relax During Your IV Therapy</summary>
    <p>
      Once your IV drip is prepared, a small catheter is placed in your arm to deliver vitamins and hydration directly into your bloodstream.
✔ Comfortable treatment <br/>
✔ Takes about 30–45 minutes <br/>
✔ Relax in a calm environment
  
    </p>
  </details>
  <details name="accordion">
    <summary><i>4</i>Feel Revitalized</summary>
    <p>
      After your session, you may begin to feel refreshed, hydrated, and energized as your body absorbs the essential nutrients.
✔ Boost energy levels <br/>
✔ Improve hydration <br/>
✔ Support immunity and recovery
  
    </p>
  </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
