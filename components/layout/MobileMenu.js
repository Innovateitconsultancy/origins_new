'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [activeItem, setActiveItem] = useState(null);
    const [activeItemSub, setActiveItemSub] = useState(null);

    console.log(activeItem, activeItemSub);

    const handleActiveItem = (index) => {
        setActiveItem(prev => (prev === index ? null : index));
    };

    const handleActiveItemSub = (index) => {
        setActiveItemSub(prev => (prev === index ? null : index));
    };

    return (
        <>
            <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                    <Link href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
                        <span>
                            <span><span />
                            </span>
                        </span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            
                            <li>
                                <Link href="#">IV Drip Therapy</Link>
                                <ul className="submenu" style={{ display: `${activeItem === 2 ? "block" : "none"}` }}>
                                   <li>
                                 <Link href="/iv_drip_therapy_pro">
                                                IV Drip Therapy
                                            </Link>
                            </li>
                                   <li>
                                    <Link href="/iv_drip_therapy_pro/immunity-recovery/hydrate_ultimate_uydration" >
                                            IMMUNITY & RECOVERY                                          
                                            <i className="fas fa-arrow-right-long" />
                                        </Link></li> 
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/detoxify_cleanse/heavy_metal_chelation_toxic_cleanse" >
                                            DETOXIFY & CLEANSE  
                                            {/* <span>Hydration & Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        </li> 
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/weight_performance/fat_burner_fat_burning_detoxification" >
                                            WEIGHT Loss
                                            {/* <span>Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        </li>
                                        <li>
                                            <Link href="/iv_drip_therapy_pro/detoxify_cleanse/post_party_hangover_recovery">
                                           Male  PERFORMANCE 
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        </li>
                                         <li>
                                        <Link href="/iv_drip_therapy_pro/enery_brain/blood_boost_iron_therapy" >
                                            ENERGY & BRAIN
                                            {/* <span>Wellness</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        </li> 
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/glutathione_therapy" >
                                            GLUTATHIONE
                                            {/* <span>Beauty & Pro-Aging</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        </li> 
                                        <li>
                                         {/* <Link href="/iv_drip_therapy_pro/munjaro_ozempic" >
                                            Munjaro                                           
                                            <i className="fas fa-arrow-right-long" />
                                        </Link> */}
                                        </li>
                                             {/* <li>
                                         <Link href="/iv_drip_therapy_pro/munjaro_ozempic/ozempic" >
                                           Ozempic                                          
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        </li> */}
                                       
                                        <li>                                            
                                       
                                        <Link href="/iv_drip_therapy_pro/hair_nails_skin_nourishment/hair_nails_skin" >
                                           HAIR, NAILS & SKIN
                                            {/* <span>Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link> 
                                        </li>
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/fatherhood_fertility_therapy/fatherhood_male_fertility" >
                                           FERTILITY
                                            {/* <span>Detox</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        </li>
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/nad" >
                                            NAD+
                                            {/* <span>Wellness</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                       </li>
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/slim_boost_fat_burner" >
                                           BOOSTER SHOTS
                                            {/* <span>Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        </li>
                                        <li>
                                        <Link href="/iv_drip_therapy_pro/botox" >
                                          Botox
                                            {/* <span>Recovery</span> */}
                                            <i className="fas fa-arrow-right-long" />
                                        </Link>
                                        </li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 2 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(2)}>
                                    <i className="far fa-plus" />
                                </a>
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
                            {/* <li>
<Link href="/">Community</Link>
                            </li> */}
                            <li>
                             <Link href="/about-us">About Us</Link>    
                            </li>
                          
                          
                          
                            <li className="mean-last">
                                <Link href="/contact" className="theme-btn"><span>Contact Us <i className="fa-solid fa-arrow-right-long"></i></span> </Link>
                            </li>
                        </ul>
                    </nav></div></div>

        </>
    )
}
