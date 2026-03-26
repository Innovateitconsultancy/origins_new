import Layout from "@/components/layout/Layout"
// import HeroAboutUsSection from "@/components/sections/HeroAboutUsSection"
export const metadata = {
    title: 'About Us || Origins',
    description: 'About Us Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function AboutUs() {
    return (
        <>
            {/* <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us"> */}
             <Layout headerStyle={1} footerStyle={1} >
              
                   <section className="hero-section fix hero-11111 bg-cover otherBanner">
                {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source
                        src="https://d1wqnyfrrx5uw1.cloudfront.net/reviv-staging/REVIV_Website_Video_1_0db8eb8c18.webm"
                        type="video/webm"
                    />
                </video> */}
                {/* <div className="hero-content">
                    <div className="hero-button">
                        <Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                            Start Feeling You
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                </div> */}
                <div className="heroBanner">
                    <div className="heroBannerInfo">
<div className="heroBannerText">
<div className="bannerContent">
<h1>About Us</h1>
<div className="text">
    IV BAR Hydration brings IV therapy and wellness treatments to your home, nationwide.
    </div>
        <div className="heroBannerBtns">
                                    <a href="" >BOOK IV THERAPY</a>
                                    <Link href="/iv_drip_therapy_pro" >VIEW ALL SERVICES</Link>
                                    {/* <a href="" className="btnOutlineWhite" >BECOME A MEMBER</a> */}
        </div>
     
                    </div>
                    </div>
                    </div>
                </div>
            </section>
                <section className="Project-details-section fix  inner sectionPdTopBottom80">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                       
                                        <div className="row g-4 justify-content-between topBottm30">
                                                <div className="col-lg-6">
                                                    <div className="details-image">
                                                                                            <img className="radiusImg" src="/assets/img/about-img1.jpg" alt="img" />
                                                                                        </div>
                                                </div>
                                            
                                            <div className="col-lg-6">
                                                <div className="details-content pt-5">
                                                    <h3>Your Partner in Modern Wellness</h3>
                                                    <p>At <b>IV Bar Wellness Clinic</b>, we are dedicated to helping individuals achieve better health, improved energy, and enhanced wellness through advanced IV therapy treatments. Our clinic focuses on delivering essential vitamins, minerals, and hydration directly into the bloodstream, allowing your body to absorb nutrients quickly and effectively.
We believe that wellness should be accessible, personalized, and results-driven. That’s why our IV therapy treatments are carefully designed to support a variety of health goals, including hydration, immune support, energy recovery, and overall vitality.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row g-4 justify-content-between topBottm30">                                    
                                            
                                            <div className="col-lg-6">
                                                <div className="details-content pt-5">
                                                    <h3>Our Approach to Wellness</h3>
                                                    <p>
                                                        At  IV Bar Wellness Clinic, we <b>combine modern medical practices with a personalized wellness approach</b>.
                                                         Every client receives individual attention to ensure the most suitable IV therapy solution for their needs.
                                                         </p>
                                                         <p>
                                                Our process begins with a brief consultation to understand your health goals, after which our trained professionals recommend the most appropriate IV therapy treatment.
                                                </p>
                                                <p>
                                                Our focus is on providing a <b>safe, comfortable, and relaxing environment </b> where you can recharge your body and feel revitalized.

                                                    </p>
                                                   
                                                </div>
                                            </div>
                                             <div className="col-lg-6">
                                                    <div className="details-image">
                                                                                            <img className="radiusImg" src="/assets/img/about-img1.jpg" alt="img" />
                                                                                        </div>
                                                </div>
                                            </div>
                                            <div className="row g-4 justify-content-between topBottm30">
                                                <div className="col-lg-6">
                                                    <div className="details-image">
                                                                                            <img className="radiusImg" src="/assets/img/about-img1.jpg" alt="img" />
                                                                                        </div>
                                                </div>
                                            
                                            <div className="col-lg-6">
                                                <div className="details-content pt-5">
                                                    <h3>Our Mission</h3>
                                                    <p>Our mission is to help individuals improve their health and well-being by providing safe, effective, and high-quality IV therapy treatments that support modern lifestyles. </p>
                                                   
                                                </div>
                                            </div>
                                            </div>
                                             <div className="row g-4 justify-content-between topBottm30">                                    
                                            
                                            <div className="col-lg-6">
                                                <div className="details-content pt-5">
                                                    <h3>Our Vision</h3>
                                                    <p>
                                                       To become a trusted wellness destination where people can enhance their health, restore balance, and experience the benefits of advanced nutrient therapy. </p>
                                                        
                                                </div>
                                            </div>
                                             <div className="col-lg-6">
                                                    <div className="details-image">
                                                                                            <img className="radiusImg" src="/assets/img/about-img1.jpg" alt="img" />
                                                                                        </div>
                                                </div>
                                            </div>
                                               <div className="row g-4 justify-content-between">
                                                <div className="col-lg-6">
                                                    <div className="details-image">
                                                                                            <img className="radiusImg" src="/assets/img/about-img1.jpg" alt="img" />
                                                                                        </div>
                                                </div>
                                            
                                            <div className="col-lg-6">
                                                <div className="details-content pt-5">
                                                    <h3>Why Choose IV Bar Wellness Clinic</h3>
                                                    <div>
                                                        <ul className="list mb-4">
                                                            <li><i className="fa-regular fa-circle-check"></i> Professional and trained healthcare staff</li>
                                                            <li><i className="fa-regular fa-circle-check"></i> Safe and medically supervised treatments</li>
                                                            <li><i className="fa-regular fa-circle-check"></i> High-quality vitamins and nutrients</li>
                                                            <li><i className="fa-regular fa-circle-check"></i> Comfortable and relaxing clinic environment</li>
                                                            <li><i className="fa-regular fa-circle-check"></i> Personalized wellness solutions</li></ul>
                                                       
                                                        </div>                                                   
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
