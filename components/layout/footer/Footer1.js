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
                                          IV BAR Hydration brings IV therapy and wellness treatments to your home, nationwide.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                                            {/* <Link href="#"><i className="fab fa-twitter" /></Link> */}
                                            {/* <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link> */}
                                            {/* <Link href="#"><i className="fa-brands fa-youtube" /></Link> */}
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
                                    <Link href="/iv_drip_therapy_pro/immunity-recovery/hydrate_ultimate_uydration" >
                                         <i className="fa-solid fa-chevron-right" />    IMMUNITY & RECOVERY                                          
                                           
                                        </Link></li> 
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/detoxify_cleanse/heavy_metal_chelation_toxic_cleanse" >
                                           <i className="fa-solid fa-chevron-right" />  DETOXIFY & CLEANSE  
                                            
                                           
                                        </Link>
                                        </li> 
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/weight_performance/fat_burner_fat_burning_detoxification" >
                                          <i className="fa-solid fa-chevron-right" />    WEIGHT Loss
                                            {/* <span>Recovery</span> */}
                                           
                                        </Link>
                                        </li>
                                        <li>
                                            <Link href="/iv_drip_therapy_pro/detoxify_cleanse/post_party_hangover_recovery" >
                                          <i className="fa-solid fa-chevron-right" />   Male  PERFORMANCE 
                                           
                                        </Link>
                                        </li>
                                         <li>
                                        <Link href="/iv_drip_therapy_pro/enery_brain/blood_boost_iron_therapy" >
                                           <i className="fa-solid fa-chevron-right" />  ENERGY & BRAIN
                                            
                                           
                                        </Link>
                                        </li> 
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/glutathione_therapy" >
                                           <i className="fa-solid fa-chevron-right" />  GLUTATHIONE
                                           
                                           
                                        </Link>
                                        </li> 
                                       <li>
                                         <Link href="/iv_drip_therapy_pro/munjaro_ozempic" >
                                          <i className="fa-solid fa-chevron-right" /> 
                                            Munjaro                                         
                                           
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
                                          <Link href="/iv_drip_therapy_pro/munjaro_ozempic/ozempic" >
                                          <i className="fa-solid fa-chevron-right" /> 
                                            Ozempic                                           
                                           
                                        </Link>
                                        </li>
                                        <li>                                            
                                       
                                        <Link href="/iv_drip_therapy_pro/hair_nails_skin_nourishment/hair_nails_skin" >
                                          <i className="fa-solid fa-chevron-right" />
                                           HAIR, NAILS & SKIN
                                           
                                           
                                        </Link> 
                                        </li>
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/fatherhood_fertility_therapy/fatherhood_male_fertility" >
                                         
                                          <i className="fa-solid fa-chevron-right" /> 
                                           FERTILITY
                                          
                                           
                                        </Link>
                                        </li>
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/nad" >
                                         <i className="fa-solid fa-chevron-right" />
                                            NAD+
                                            
                                           
                                        </Link>
                                       </li>
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/slim_boost_fat_burner" >
                                         <i className="fa-solid fa-chevron-right" />
                                           BOOSTER SHOTS
                                           
                                           
                                        </Link>
                                        </li>
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/botox" >
                                         <i className="fa-solid fa-chevron-right" />
                                          Botox
                                           
                                           
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
                                         {/* <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                Community
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link href="/membership_program">
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
                 <Link href="https://wa.me/254707053367?text=Hello%20I%20want%20to%20know%20more" className="whatsapp">
                 <i class="fab fa-whatsapp"></i> </Link>
            </footer>

        </>
    )
}
