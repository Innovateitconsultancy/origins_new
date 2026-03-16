'use client'
import { useState } from "react"
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: false,
    autoplay: false,
    /* autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    }, */
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function TherapySection() {
    const [activeTab, setActiveTab] = useState("immunity")
    return (
        <>
            <section className="service-section fix section-padding bg-cover productList">
                <div className="container">
                    <div className="section-title-area therapyTaps">
                         {/* <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div> */}
                        <div className="section-title text-center">
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                {/* IV Drip Therapy */}
                                Your journey to better health  starts with <b>Just one Drip</b>.
                            </h2>
                            <p className="therapyTapsInfo">
                                Explore our range of in-home vitamin IV treatments designed to support optimal health and wellness.
                            </p>
                        </div>

                        <div className='tabsHomeMain'>
 {/* Tabs */}
        <div className="tabsHome">

          <button
            className={activeTab === "immunity" ? "active" : ""}
            onClick={() => setActiveTab("immunity")}>
           IMMUNITY & RECOVERY
          </button>

          <button
            className={activeTab === "detoxify" ? "active" : ""}
            onClick={() => setActiveTab("detoxify")}>
           DETOXIFY & CLEANSE
          </button>

          <button
            className={activeTab === "weight" ? "active" : ""}
            onClick={() => setActiveTab("weight")}>
            WEIGHT & PERFORMANCE
          </button>
           <button
            className={activeTab === "enrgy" ? "active" : ""}
            onClick={() => setActiveTab("enrgy")}>
            ENERGY & BRAIN
          </button>
             <button
            className={activeTab === "glutathione" ? "active" : ""}
            onClick={() => setActiveTab("glutathione")}>
            GLUTATHIONE
          </button>
            <button
            className={activeTab === "hair" ? "active" : ""}
            onClick={() => setActiveTab("hair")}>
            HAIR, NAILS & SKIN
          </button>
          <button
            className={activeTab === "fertlity" ? "active" : ""}
            onClick={() => setActiveTab("fertlity")}>
            FERTILITY 
          </button>
          <button
            className={activeTab === "nad" ? "active" : ""}
            onClick={() => setActiveTab("nad")}>
            NAD+
          </button>
            <button
            className={activeTab === "customerisediv" ? "active" : ""}
            onClick={() => setActiveTab("customerisediv")}>
           CUSTOMERISED IV'S
          </button>
            <button
            className={activeTab === "boostershorts" ? "active" : ""}
            onClick={() => setActiveTab("boostershorts")}>
           BOOSTER SHOTS
          </button>
          
        </div>

        {/* Tab Content */}
        <div className="mt-4 therapytapShow">
{/* immunity */}
          {activeTab === "immunity" && (
            <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/immunity_booster.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Hydrate| Ultimate Hydration</h4>
                                            {/* <h5>Small & Mighty</h5> */}
                                            <p className="threeDotLine">This deep tissue replenishment therapy is designed to restore
optimal fluid balance and vitality. By delivering essential
fluids and electrolytes directly into your system, it rapidly
alleviates symptoms of dehydration, fatigue, and burnout,
leaving your skin radiant and your body revitalized. Perfect
for post-travel recovery or after intense physical exertion.</p>
<p className="productIngr twoDotLine"><b>Ingredients:</b>  Balanced Electrolytes, Sodium Chloride, Potassium Chloride, Calcium
Chloride, Magnesium Chloride, Sodium Lactate, Hyaluronic Acid.
</p>
                                            <Link href="/iv-drip-therapy/miniboost" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/vitamin_c_img.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Vitamin C (varied doses)</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Our high-dose Vitamin C infusion acts as a powerful
antioxidant boost, protecting cells from damage caused by
free radicals. It enhances collagen production for firmer skin,
supports cardiovascular health, and strengthens the body's
natural defenses. Doses are individually adjusted to meet your
specific wellness needs for maximum benefit.</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:</b>
     Ascorbic Acid (Vitamin C), Zinc, B-Complex Vitamins, Alpha-Lipoic Acid.

</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/immunity_booster.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Immunity | Cold & Flu Booster
</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Formulated to rapidly bolster your immune system, this
targeted infusion helps you fight off common illnesses or
shorten their duration. By combining key nutrients and
powerful anti-inflammatory agents, it promotes faster recovery
and reinforces your body's resilience during the changing
seasons or times of stress.</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:</b>
   Glutathione, Zinc, Vitamin C, Echinacea, Elderberry Extract, Vitamin
D, Selenium.

</p>
                                            <Link href="/iv-drip-therapy/immunity_booster" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
{/* DETOXIFY & CLEANSE */}

          {activeTab === "detoxify" && (
             <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/toxic_img.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Heavy Metal Chelation | Toxic Cleanse
</h4>
                                            {/* <h5>Small & Mighty</h5> */}
                                            <p className="threeDotLine">This advanced treatment is designed to gently bind and
eliminate heavy metals like lead, mercury, and arsenic
from the body. Utilizing a specialized chelating agent, it
helps reduce total body burden, improve organ function,
and alleviate chronic symptoms associated with toxic
build-up, promoting enhanced clarity and vitality.</p>
<p className="productIngr twoDotLine"><b>Key Ingredients:</b>  EDTA, DMPS, Vitamin C, Glutathione, Alpha Lipoic Acid.
</p>
                                            <Link href="/iv-drip-therapy/miniboost" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/detoxic_img.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Detox | Liver & Gut Cleanse
</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Restore your body's natural detoxification pathways with
our comprehensive liver and gut cleanse. This program
supports healthy liver function, promotes effective bile
production, and rebalances gut flora. It assists in
processing fats and toxins, improving digestion, boosting
metabolism, and reducing inflammation for a rejuvenated
digestive system and clearer complexion.</p>
<p className="productIngr twoDotLine">
    <b>Key Ingredients:</b>
     Milk Thistle, Dandelion Root, Artichoke Leaf, N-Acetyl
Cysteine, Probiotic Blend, Psyllium Husk.

</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/hangover_recovery.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Post Party Hangover Recovery

</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Quickly recover from the effects of overindulgence with our
specialized hangover protocol. This restorative therapy
rapidly rehydrates the body, replenishes essential
electrolytes, and provides key nutrients to alleviate
headache, nausea, and fatigue, helping you bounce back
faster and feel refreshed.</p>
<p className="productIngr twoDotLine">
    <b>Key Ingredients:</b>
   IV Fluids, B-Complex Vitamins, Vitamin C, Magnesium,
Ondansetron, Ketorolac.

</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
{/* WEIGHT & PERFORMANCE */}
          {activeTab === "weight" && (
              <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/fat_burner_img.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Fat Burner | Fat Burning & Detoxification
</h4>
                                            {/* <h5>Small & Mighty</h5> */}
                                            <p className="threeDotLine">Designed to accelerate your
metabolism and aid in the
effective breakdown of fat
cells. This treatment supports your body's natural
detoxification processes,
promoting a leaner, more
defined physique through a
blend of essential nutrients.
It assists in flushing out
toxins while boosting energy levels for a revitalized
feeling.</p>
<p className="productIngr twoDotLine"><b>Ingredients:</b>   Vitamin B12, B- Complex, L-Carnitine, MIC
(Methionine, Inositol, Choline).
</p>
                                            <Link href="/iv-drip-therapy/miniboost" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/fitness_img.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>The Athlete | Fitness & Performance
</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Optimized for individuals
seeking peak physical performance and enhanced
endurance. This formulation
delivers a potent mix
of vitamins, amino acids,
and electrolytes crucial for
muscle function, reduced
fatigue, and faster recovery
times. It helps sustain high
energy output during
intense workouts and
competitions.
</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:</b>
    B-Complex, B12,
Vitamin C, Magnesium, Calcium,
Taurine, Glutamine, Arginine.


</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/healing_recovery_img.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Recovery | Healing &
Recovery

</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Focuses on rapid postexertion healing and reducing muscle soreness. This
infusion aids in tissue repair,
decreases inflammation,
and replenishes vital nuttrients lost during strenuous
activity. It promotes overall
wellness and restores your
body's balance, helping you
bounce back quickly.</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:</b>
  Vitamin C, B-Complex, Magnesium, Zinc, Glutathione, Selenium, Lysine.

</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
{/* ENERGY & BRAIN */}
          {activeTab === "enrgy" && (
            <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                               
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/immunity_booster.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Blood Boost Iron |
Boosted Iron Levels </h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Formulated to address iron deficiency and
combat fatigue associated with low iron
levels. This treatment efficiently replenishes your body's iron stores, crucial for healthy red blood cell production, imnproved oxygen transport, and sustained
energy throughout the day. It is essential for
combating anemia and enhancing overall vitality.

</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:</b>
    Iron Sucrose, Vitamin C, B12, Folic Acid.
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/iv_drip_product.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>The Wellness
Replenish & Revitalise</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">A comprehensive infusion designed to
restore hydration and essential vitamins for
overall well-being. This treatment revitalizes
your body from within, boosting your immmune system, improving skin health, and
combating the effects of stress and dehydration. It offers a complete reset for a reffreshed and balanced feeling.</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:</b>
  Vitamin C, B-Complex, B12,
Magnesium, Calcium, Zinc, Glutathione, Biotin.
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
          {/* GLUTATHIONE */}
          {activeTab === "glutathione" && (
            <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                               
                                
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/iv_drip_product.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>The Wellness
Replenish & Revitalise</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Experience the transformative power of Glutathione, the
body's master antioxidant. This potent treatment helps
to brighten skin tone, reduce the appearance of
pigmentation and dark spots, and protect cells from
oxidative stress for a radiant, youthful glow. It also
supports immune function and detoxification pocesses,
promoting overall wellness from within.</p>
<p className="productIngr twoDotLine">
    <b>600mg: Kes </b> <b>1200mg: Kes</b> <b>2400mg: Kes</b>
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
          
          {/* HAIR, NAILS & SKIN */}

          {activeTab === "hair" && (
             <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                               
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/iv_drip_product.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Hair, Nails & Skin
Nourishment</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">A comprehensive blend
of essential vitamins and
minerals to strengthen
and fortify hair and nails,
while enhancing skin
elasticity and hydration
for a healthy
appearance.
</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:</b>
    Biotin,
Collagen Peptides,
Vitamin E, Zinc, Silica.
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/iv_drip_product.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Skin Glow (Vitamin C +
Glutathione) </h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">A powerful combination
designed to dramatically
boost skin radiance and
clarity, clarity,
combating dullness and
promoting a luminous,
even complexion with
enhanced antioxidant
support.</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:  </b>itamin C
(Ascorbic Acid),
Glutathione, Hyaluronic
Acid, Alpha Lipoic Acid.
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
          {/* FERTILITY */}
            {activeTab === "fertlity" && (
             <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/iv_drip_product.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Fatherhood | Male Fertility
</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Our specialized male fertility program is designed to optimize male
reproductive health through a holistic approach, focusing on
enhancing sperm quality, count, and motility. We combine targeted
nutritional support, lifestyle counseling, and advanced diagnostic
assessments to address underlying factors that may impact
fertility. This comprehensive plan aims to boost vitality and
support the journey towards fatherhood towards fatherhood,
offering a nurturing path for aspiring fathers. Our expert team
utilizes scientifically proven methods to ensure the best possible
outcomes, fostering a supportive environment for male
reproductive wellness.
</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:  </b> CoQ10, L-Carnitine, Zinc, Selenium, Vitamin C, Vitamin E, Folate, Maca Root
Extract, Ashwagandha Extract.
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/iv_drip_product.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Motherhood Female Fertility
</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Our comprehensive female fertility program offers a personalized
path to reproductive wellness, addressing hormonal balance, ovarian
health, and uterine vitality. We utilize a blend of advanced fertilityenhancing treatments, nutritional guidance, and stress management
techniques to optimize conception chances. This holistic approach
supports every stage of the fertility journey, from preconception
preparation to early pregnancy, providing emotional and physical
support for women aspiring to become mothers. Our dedicated experts
work closely with you to understand your unique needs, creating a
tailored plan that encompasses all aspects of female reproductive health.

</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:</b>
    Myo-Inositol, D-Chiro-Inositol, Folate, Vitamin D3, Omega-3 Fatty Acids,
NAC (N-Acetyl Cysteine), CoQ10, Black Cohosh, Vitex Agnus-Castus.
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/iv_drip_product.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Fatherhood | Male Fertility
</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Our specialized male fertility program is designed to optimize male
reproductive health through a holistic approach, focusing on
enhancing sperm quality, count, and motility. We combine targeted
nutritional support, lifestyle counseling, and advanced diagnostic
assessments to address underlying factors that may impact
fertility. This comprehensive plan aims to boost vitality and
support the journey towards fatherhood towards fatherhood,
offering a nurturing path for aspiring fathers. Our expert team
utilizes scientifically proven methods to ensure the best possible
outcomes, fostering a supportive environment for male
reproductive wellness.
</p>
<p className="productIngr twoDotLine">
    <b>Ingredients:  </b> CoQ10, L-Carnitine, Zinc, Selenium, Vitamin C, Vitamin E, Folate, Maca Root
Extract, Ashwagandha Extract.
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
          {/* NAD+ */}
             {activeTab === "nad" && (
             <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                             
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/iv_drip_product.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Fatherhood | Male Fertility
</h4>
                                            {/* <h5>Your Peak Perfomance</h5> */}
                                            <p className="threeDotLine">Nicotinamide Adenine Dinucleotide (NAD+) is a vital
coenzyme found in every cell of your body, essential
for energy production and cellular repair. Our advanced
NAD+ therapy is designed to replenish declining
levels, promoting enhanced mental clarity, increased
energy, improved metabolism, and overall cellular
rejuvenation. Experience the revitalizing benefits of
optimized cellular health.
</p>
<p className="productIngr twoDotLine">
    <b>100mg: $250</b> <br/>
    <b>250mg: $450</b>
    <b>500mg: $800</b>
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
          {/* CUSTOMERISED IV'S */}
         
           {activeTab === "customerisediv" && (
            <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                             
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/b_complex.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Super B's Booster</h4>
                                            <h5>B-Complex</h5>
                                            <p className="threeDotLine">Our bespoke IV therapy begins with a comprehensive
blood analysis to identify your unique nutritional needs.
Based on these precise results, our medical experts
formulate a tailored blend of vitamins, minerals, and
amino acids to address deficiencies, boost immunity,
and optimize your well-being from within. Discover the
power of targeted hydration and nutrient delivery.</p>
<p className="productIngr twoDotLine">
    <b>Starting From  $350</b> 
</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
           {/* BOOSTER SHOTS */}
              {activeTab === "boostershorts" && (
              <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                             
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/b_complex.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Super B's Booster</h4>
                                            <h5>B-Complex</h5>
                                            
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/vitamin_d.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Sunshine</h4>
                                            <h5>Vitamin D</h5>
                                            
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/vitamin_b7.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Biotin</h4>
                                            <h5>Vitamin B7</h5>
                                            
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/fat_burner_img.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Slim Boost</h4>
                                            <h5>Fat Burner</h5>
                                            
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/vitamin_b12.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>B12 Energy Booster
</h4>
                                            <h5>Vitamin B12</h5>
                                            
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/immunity_booster.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Co-Enzyme Q10</h4>
                                            <h5>Energy & Recovery</h5>
                                            
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
            </div>
          )}
        </div>
                        </div>
                        {/* <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div> */}
                    </div>
                   
                </div>
            </section>
        </>
    )
}
