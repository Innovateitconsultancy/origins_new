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
                                    <Link href="/contact"  >BOOK IV THERAPY</Link >
                                    <Link href="/iv_drip_therapy_pro" >VIEW ALL SERVICES</Link>
                                    {/* <a href="" className="btnOutlineWhite" >BECOME A MEMBER</a> */}
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
