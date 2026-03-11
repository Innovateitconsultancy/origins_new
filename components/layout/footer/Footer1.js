import Link from "next/link"

export default function Footer1() {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>

            <footer className="footer-section footer-bg">
                <div className="footer-widgets-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head footerLogo">
                                        <Link href="/">
                                    <img src="/assets/img/logo/logo.png" alt="logo-img" />
                                </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Phasellus ultricies aliquam volutpat
                                            ullamcorper laoreet neque, a lacinia
                                            curabitur lacinia mollis
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="#"><i className="fab fa-twitter" /></Link>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                         <li>
                                            <Link href="iv-drip-therapy">
                                                <i className="fa-solid fa-chevron-right" />
                                               IMMUNITY & RECOVERY  
                                            </Link>
                                        </li>
                                         <li>
                                            <Link href="iv-drip-therapy">
                                                <i className="fa-solid fa-chevron-right" />
                                               DETOXIFY & CLEANSE 
                                            </Link>
                                        </li>
                                         <li>
                                            <Link href="iv-drip-therapy">
                                                <i className="fa-solid fa-chevron-right" />
                                                WEIGHT & PERFORMANCE
                                            </Link>
                                        </li>
                                         <li>
                                            <Link href="iv-drip-therapy">
                                                <i className="fa-solid fa-chevron-right" />
                                               ENERGY & BRAIN
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="iv-drip-therapy">
                                                <i className="fa-solid fa-chevron-right" />
                                               GLUTATHIONE
                                            </Link>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                           <div className="col-xl-3 col-lg-3 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget style-margin">
                                    <div className="widget-head">
                                        <h3></h3>
                                    </div>
                                    <ul className="list-area">
                                       <li>
                                            <Link href="/vitamin-shots">
                                                <i className="fa-solid fa-chevron-right" />
                                                HAIR, NAILS & SKIN
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                FERTILITY
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                NAD+
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                               CUSTOMERISED IV'S
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                BOOSTER SHOTS
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> 
                            <div className="col-xl-2 col-lg-2 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-footer-widget style-margin">
                                    <div className="widget-head">
                                        <h3>Other link</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/about-us">
                                                <i className="fa-solid fa-chevron-right" />
                                                About Us
                                            </Link>
                                        </li>
                                         <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                Community
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                Memberships
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                Blog
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                FAQs
                                            </Link>
                                        </li> */}
                                        
                                        {/* <li>
                                            <Link href="/contact-us">
                                                <i className="fa-solid fa-chevron-right" />
                                                Contact Us
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-3">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <div className="footer-logo wow fadeInLeft" data-wow-delay=".3s">
                                {/* <Link href="/">
                                    <img src="/assets/img/logo/logo.png" alt="logo-img" />
                                </Link> */}
                            </div>
                            <p className="wow fadeInRight color-2" data-wow-delay=".5s">
                                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                    <span id="scrollUp" className="scroll-icon" onClick={scrollTop}>
                        <i className="far fa-arrow-up" />
                    </span>
                </div>
            </footer>

        </>
    )
}
