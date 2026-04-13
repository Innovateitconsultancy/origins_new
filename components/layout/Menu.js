import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                <li className="has-dropdown active menu-thumb">
                      <Link href="/iv_drip_therapy_pro">
                        IV Drip Therapy
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu has-homemenu">
                        <li>
                            <div className="homemenu-items">
                                <div className="homemenu">
                                    <div className="homemenu-content">
                                        <h4 className="homemenu-title">
                                            <Link href="/iv_drip_therapy_pro">
                                                IV Drip Therapy
                                            </Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="homemenu-items">
                                <div className="homemenu">
                                    <div className="demo-button">
                                        <Link href="/iv_drip_therapy_pro/immunity-recovery/hydrate_ultimate_uydration" className="theme-btn">
                                            IMMUNITY & RECOVERY                                          
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/iv_drip_therapy_pro/detoxify_cleanse/heavy_metal_chelation_toxic_cleanse" className="theme-btn">
                                            DETOXIFY & CLEANSE  
                                            {/* <span>Hydration & Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/iv_drip_therapy_pro/weight_performance/fat_burner_fat_burning_detoxification" className="theme-btn">
                                            WEIGHT & PERFORMANCE
                                            {/* <span>Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/iv_drip_therapy_pro/enery_brain/blood_boost_iron_therapy" className="theme-btn">
                                            ENERGY & BRAIN
                                            {/* <span>Wellness</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/iv_drip_therapy_pro/vitaglow" className="theme-btn">
                                            GLUTATHIONE
                                            {/* <span>Beauty & Pro-Aging</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                         {/* <Link href="/iv_drip_therapy_pro/munjaro_ozempic" className="theme-btn">
                                            Munjaro
                                           
                                        </Link> */}
                                        
                                    </div>
                                </div>
                                <div className="homemenu">
                                    <div className="demo-button">
                                         {/* <Link href="/iv_drip_therapy_pro/munjaro_ozempic/ozempic" className="theme-btn">
                                            Ozempic
                                          
                                           
                                        </Link> */}
                                        <Link href="/iv_drip_therapy_pro/hair_nails_skin_nourishment/hair_nails_skin" className="theme-btn">
                                           HAIR, NAILS & SKIN
                                            {/* <span>Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/iv_drip_therapy_pro/fatherhood_fertility_therapy/fatherhood_male_fertility" className="theme-btn">
                                           FERTILITY
                                            {/* <span>Detox</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/iv_drip_therapy_pro/nad" className="theme-btn">
                                            NAD+
                                            {/* <span>Wellness</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                       
                                        <Link href="/iv_drip_therapy_pro/munjaro_ozempic/munjaro" className="theme-btn">
                                           BOOSTER SHOTS
                                            {/* <span>Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/iv_drip_therapy_pro/botox" className="theme-btn">
                                          Botox
                                            {/* <span>Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                               
                            </div>
                        </li>
                    </ul>
                </li>
                 <li>
                    <Link href="/iv_drip_therapy_pro/munjaro_ozempic"> Munjaro</Link>
                </li>
                <li>
                    <Link href="/iv_drip_therapy_pro/munjaro_ozempic/ozempic"> Ozempic</Link>
                </li>
                
                 <li>
                    <Link href="/membership_program">Memberships</Link>
                </li>
                 <li>
                    <Link href="/membership_program">Memberships</Link>
                </li>
                 {/* <li>
                    <Link href="/">Community</Link>
                </li> */}
                 <li>
                    <Link href="/about-us">About Us</Link>
                </li>
                 {/* <li>
                    <Link href="/">Book Now CTA</Link>
                </li> */}
                {/* <li className="has-dropdown active menu-thumb">
                    <Link href="#">
                        Vitamin Shots
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu has-homemenu">
                        <li>
                            <div className="homemenu-items">
                                <div className="homemenu">
                                    <div className="homemenu-content">
                                        <h4 className="homemenu-title">
                                            <Link href="/vitamin-shots">
                                                Vitamin Shots
                                            </Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="homemenu-items">
                                <div className="homemenu">
                                    <div className="demo-button">
                                        <Link href="/vitamin-shots/b-family" className="theme-btn">
                                            B Family
                                            <span>Energy Metabolism & Nervous System</span>
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/vitamin-shots/biotin" className="theme-btn">
                                            Biotin
                                            <span>Healthy Skin, Hair, & Energy Levels</span>
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/vitamin-shots/vitamin-c" className="theme-btn">
                                            Vitamin C
                                            <span>Supports Immune System, Recovery & Collagen Production</span>
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/vitamin-shots/vitamin-d" className="theme-btn">
                                            Vitamin D
                                            <span>Supports Immunity, Bone Strength & Overall Wellness</span>
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="homemenu">
                                    <div className="demo-button">
                                        <Link href="/vitamin-shots/coq10-family" className="theme-btn">
                                            CoQ10 Family
                                            <span>Supports Fitness, Heart Health & Cellular Energy</span>
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/vitamin-shots/" className="theme-btn">
                                            NAD+ IM
                                            <span>Cellular Energy & Healthy Aging Support</span>
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/vitamin-shots/" className="theme-btn">
                                            Vitaboost
                                            <span>Cellular Antioxidant & Detoxification Support</span>
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/vitamin-shots/" className="theme-btn">
                                            Slimboost
                                            <span>Supports Metabolism & Fat Processing</span>
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li> */}
                {/* <li className="has-dropdown active menu-thumb">
                    <Link href="#">
                        Our Services
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu has-homemenu two">
                        <li>
                            <div className="homemenu-items">
                                <div className="homemenu">
                                    <div className="demo-button">
                                        <Link href="/" className="theme-btn">
                                            Mobile IV Therapy
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/" className="theme-btn">
                                            Group Bookings
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/" className="theme-btn">
                                            Corporate Events
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li> */}
                {/* <li className="has-dropdown active menu-thumb">
                    <Link href="#">
                        Genetics
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu has-homemenu two">
                        <li>
                            <div className="homemenu-items">
                                <div className="homemenu">
                                    <div className="demo-button">
                                        <Link href="/" className="theme-btn">
                                            Precision Nutrition
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/" className="theme-btn">
                                            Precision IV
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        <Link href="/" className="theme-btn">
                                            Blood Testing
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li> */}
                {/* <li className="has-dropdown">
                    <Link href="#">
                        Nutrients
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu ntui">
                        <li className="has-dropdown">
                            <Link href="#">
                                Minerals / Metals
                                <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/magnesium">Magnesium</Link></li>
                                <li><Link href="/zinc">Zinc</Link></li>
                                <li><Link href="/selenium">Selenium</Link></li>
                                <li><Link href="/manganese">Manganese</Link></li>
                                <li><Link href="/copper">Copper</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link href="#">
                                Amino Acids
                                <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/methionine">Methionine</Link></li>
                                <li><Link href="/choline">Choline</Link></li>
                                <li><Link href="/inositol">Inositol</Link></li>
                                <li><Link href="/l-carnitine">L-Carnitine</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link href="#">
                                Others
                                <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/sodium-chloride-solution">Sodium Chloride Solution</Link></li>
                                <li><Link href="/nad">NAD</Link></li>
                                <li><Link href="/methylene-blue">Methylene Blue</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link href="#">
                                B Complex
                                <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/vitamin-b1">Vitamin B1</Link></li>
                                <li><Link href="/vitamin-b2">Vitamin B2</Link></li>
                                <li><Link href="/vitamin-b3">Vitamin B3</Link></li>
                                <li><Link href="/vitamin-b5">Vitamin B5</Link></li>
                                <li><Link href="/vitamin-b6">Vitamin B6</Link></li>
                                <li><Link href="/vitamin-b12">Vitamin B12</Link></li>
                                <li><Link href="/biotin-b7">Biotin (B7)</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link href="#">
                                Antioxidants
                                <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/n-acetylcysteine">N-Acetylcysteine</Link></li>
                                <li><Link href="/glutathione">Glutathione</Link></li>
                                <li><Link href="/alpha-lipoic-acid">Alpha Lipoic Acid</Link></li>
                                <li><Link href="/coenzyme-q10">Coenzyme Q10</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link href="#">
                                Vitamins
                                <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/vitamin-c">Vitamin C</Link></li>
                                <li><Link href="/vitamin-D">Vitamin D</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li> */}
                {/* <li>
                    <Link href="/">Memberships</Link>
                </li> */}
            </ul>
        </>
    )
}
