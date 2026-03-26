import Layout from "@/components/layout/Layout"
import Link from "next/link"
import HeroSection from "@/components/sections/HeroSection"
// import HeroAboutUsSection from "@/iv_drip_therapy_pro/HeroAboutUsSection"


export const metadata = {
    title: 'Miniboost || Origins',
    description: 'Miniboost Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function Miniboost() {
    return (
        <>
            {/* <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Miniboost"> */}
                <Layout headerStyle={1} footerStyle={1} >
                 <section className="hero-section fix hero-1 bg-cover">
               
                <div className="heroBanner">
                    <div className="heroBannerInfo">
<div className="heroBannerText">
<div className="bannerContent">
<h1>Dehydration IV Treatment</h1>
<div className="text">
    Drip Hydration brings IV therapy and wellness treatments to your home, nationwide.
    </div>
        <div className="heroBannerBtns">
                                    <Link href="/contact"  >BOOK IV THERAPY</Link >
                                    <Link href="/iv_drip_therapy_pro" >VIEW ALL SERVICES</Link>
                                    <a href="" className="btnOutlineWhite" >BECOME A MEMBER</a>
        </div>
       
                    </div>
                    </div>
                    </div>
                </div> 
            </section>
                <section className="Project-details-section fix section-padding1 inner bgLightYellow sectionPdTopBottom80">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                       
                                        <div className="row g-4 justify-content-between">
                                           
                                            <div className="col-lg-6">
                                                <div className="details-content pt-5">
                                                    <h3>Small & Mighty 1</h3>
                                                    <p>Maintain your nutritional balance with Miniboost, a compact yet powerful option inspired by the Megaboost. Though smaller in size, Miniboost delivers an effective combination of B vitamins, vitamin C, and antioxidants, making it a strong choice for everyday wellness support. It helps boost energy levels, supports immune function, and promotes overall vitality. Ideal for regular use, Miniboost fits seamlessly into a busy, health-focused lifestyle.</p>
                                                </div>
                                            </div>
                                             <div className="col-lg-6">
                                                 <img src="/assets/img/therapy/miniboost-img1.jpg" alt="img" className="imgMax" />
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </section>
                                     <section className="Project-details-section fix section-padding1 inner bgLightGreen sectionPdTopBottom80">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="row ">
                                            <div className="col-lg-6">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/miniboost-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-3">Miniboost’s key nutrients help support energy production, reduce fatigue, and maintain the healthy functioning of the nervous system, immune system, bones, and teeth.</p>
                                                    <p className="mb-3"><b>Miniboost key nutrients contribute to:</b></p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports normal energy-producing metabolism
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps reduce tiredness and fatigue
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Contributes to the healthy functioning of the nervous system
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports normal immune system function
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps maintain healthy bones and teeth
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
