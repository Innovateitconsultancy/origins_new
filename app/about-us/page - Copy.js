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
              
                   <section className="hero-section fix hero-1 bg-cover ">
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
                                    <a href="" >VIEW ALL SERVICES</a>
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
                                       
                                        <div className="row g-4 justify-content-between">
<div className="col-lg-6">
     <div className="details-image">
                                            <img src="/assets/img/about-img1.jpg" alt="img" />
                                        </div>
</div>
                                            
                                            <div className="col-lg-6">
                                                <div className="details-content pt-5">
                                                    <h3>Your Partner in Modern Wellness</h3>
                                                    <p>
At<b>IV Bar Wellness Clinic</b> , we are dedicated to helping individuals achieve better health, improved energy, and enhanced wellness through advanced IV therapy treatments. Our clinic focuses on delivering essential vitamins, minerals, and hydration directly into the bloodstream, allowing your body to absorb nutrients quickly and effectively.
We believe that wellness should be accessible, personalized, and results-driven. That’s why our IV therapy treatments are carefully designed to support a variety of health goals, including hydration, immune support, energy recovery, and overall vitality.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                            <div className="row g-lg-5  ">
                                                  <div className="col-lg-12">
                                                     <div>
                                                        <h3 className="h3Other text-center">What makes us different</h3> 
                                                    </div>
                                                    <div className="aboutDifferentInfo">
                                                       <div className="aboutIconInfo">
                                                        <div className="aboutIcon">
                                                            <i class="fa-classic fa-solid fa-earth-americas"></i>
                                                        </div>
                                                        <div className="aboutIconName">
                                                            100+ cities worldwide
                                                        </div>
                                                        </div> 
                                                         <div className="aboutIconInfo">
                                                            <div className="aboutIcon">
                                                                <i class="fa-classic fa-solid fa-user-doctor"></i>
                                                            </div>
                                                            <div className="aboutIconName">
                                                                Expert medical team
                                                            </div>
                                                        </div> 
                                                         <div className="aboutIconInfo">
                                                            <div className="aboutIcon">
                                                               <i class="fa-regular fa-comment-dots"></i>
                                                            </div>
                                                            <div className="aboutIconName">
                                                               3,000+ 5-star reviews
                                                            </div>
                                                        </div> 
                                                          <div className="aboutIconInfo">
                                                            <div className="aboutIcon">
                                                               <i class="fa-solid fa-hand-holding-medical"></i>
                                                            </div>
                                                            <div className="aboutIconName">
                                                              Modern, Comprehensive Care
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    </div> 
                                            </div>
                                        </div>
                                       
                                        <div className="row g-lg-5 g-4 pt-5">
                                            
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>Our multidisciplinary team, a wealth of knowledge</h3>
                                                    <p className="mb-3">At Origins, we are a collaborative team pushing the boundaries of human science. Experts from multiple disciplines come together to design and deliver innovative therapies focused on optimizing personalized nutritional solutions.</p>
                                                    <p className="mb-3"><b>Our team consists of experts in</b></p>
                                                    <ul className="list mb-4">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Clinical Medicine & Nursing
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Pharmacology
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Biomedical Science
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Food & Nutritional Science
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Genetics
                                                        </li>
                                                    </ul>
                                                    <h3>Our journey</h3>
                                                    <p className="mb-3">Origins is at the forefront of precision nutrition, driving a scientific movement to deliver personalized solutions worldwide. We believe that optimal nutrition is the foundation of good health, and our mission is to enhance your well-being through tailored recommendations, nourishing therapies, and genetic insights. By taking a proactive approach to your health, you can support your long-term wellness-start your Origins journey today.</p>
                                                    <p>Our broader mission is to empower individual health and wellness journeys across the global population.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/about-img3.jpg" alt="img" />
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
