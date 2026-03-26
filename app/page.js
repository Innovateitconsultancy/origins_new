import Layout from "@/components/layout/Layout"
import HeroSection from "@/components/sections/HeroSection"
import MarqueSection from "@/components/sections/MarqueSection"
import TherapySection from "@/components/sections/TherapySection"
// import AchievementSection from "@/components/sections/AchievementSection"
import DiscoverSection from "@/components/sections/DiscoverSection"
import HowItWorks from "@/components/sections/HowItWorks"
import BlogSection from "@/components/sections/BlogSection"
import SubscribeSection from "@/components/sections/SubscribeSection"
import FaqSection from "@/components/sections/FaqSection"
export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <HeroSection />
                <MarqueSection />
                <TherapySection />
                 <HowItWorks />
                {/* <AchievementSection /> */}
                <DiscoverSection />               
                <BlogSection />
                <SubscribeSection />
                <FaqSection />
            </Layout>
        </>
    )
}