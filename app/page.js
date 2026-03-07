import Layout from "@/components/layout/Layout"
import HeroSection from "@/components/sections/HeroSection"
import MarqueSection from "@/components/sections/MarqueSection"
import TherapySection from "@/components/sections/TherapySection"
// import AchievementSection from "@/components/sections/AchievementSection"
import DiscoverSection from "@/components/sections/DiscoverSection"
import AboutSection from "@/components/sections/AboutSection"
import BlogSection from "@/components/sections/BlogSection"
import SubscribeSection from "@/components/sections/SubscribeSection"
import AccordionSection from "@/components/sections/AccordionSection"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <HeroSection />
                <MarqueSection />
                <TherapySection />
                 <AboutSection />
                {/* <AchievementSection /> */}
                <DiscoverSection />
               
                <BlogSection />
                <SubscribeSection />
                <AccordionSection />
            </Layout>
        </>
    )
}