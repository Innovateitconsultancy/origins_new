import Link from 'next/link'

export default function AboutSection() {
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
