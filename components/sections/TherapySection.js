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

          <button className={activeTab === "immunity" ? "active" : ""}
            onClick={() => setActiveTab("immunity")}>
           IMMUNITY & RECOVERY
          </button>

          <button className={activeTab === "detoxify" ? "active" : ""}
            onClick={() => setActiveTab("detoxify")}>
           DETOXIFY & CLEANSE
          </button>

          <button  className={activeTab === "weight" ? "active" : ""}
            onClick={() => setActiveTab("weight")}>
            WEIGHT & PERFORMANCE
          </button>
           <button  className={activeTab === "enrgy" ? "active" : ""}
            onClick={() => setActiveTab("enrgy")}>
            ENERGY & BRAIN
          </button>
             <button className={activeTab === "glutathione" ? "active" : ""}
            onClick={() => setActiveTab("glutathione")}>
            GLUTATHIONE
          </button>
            <button className={activeTab === "hair" ? "active" : ""}
            onClick={() => setActiveTab("hair")}>
            HAIR, NAILS & SKIN
          </button>
          <button className={activeTab === "fertlity" ? "active" : ""}
            onClick={() => setActiveTab("fertlity")}>
            FERTILITY 
          </button>
          <button  className={activeTab === "nad" ? "active" : ""}
            onClick={() => setActiveTab("nad")}>
            NAD+
          </button>
            {/* <button  className={activeTab === "customerisediv" ? "active" : ""}
            onClick={() => setActiveTab("customerisediv")}>
           CUSTOMERISED IV'S
          </button> */}
            <button  className={activeTab === "boostershorts" ? "active" : ""}
            onClick={() => setActiveTab("boostershorts")}>
           BOOSTER SHOTS
          </button>
           <button  className={activeTab === "munjaroozempic" ? "active" : ""}
            onClick={() => setActiveTab("munjaroozempic")}>
          Munjaro
          </button>
          <button  className={activeTab === "munjaroozempic_new" ? "active" : ""}
            onClick={() => setActiveTab("munjaroozempic_new")}>
          Ozempic
          </button>
           <button  className={activeTab === "botox" ? "active" : ""}
            onClick={() => setActiveTab("botox")}>
           Botox
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
                                            <Link href="/iv_drip_therapy_pro/immunity-recovery/hydrate_ultimate_uydration" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/immunity-recovery/vitamin_c_varied_doses" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/immunity-recovery/immunity_cold_flu_booster" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/detoxify_cleanse/heavy_metal_chelation_toxic_cleanse" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/detoxify_cleanse/detox_liver_gut_cleanse" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/detoxify_cleanse/post_party_hangover_recovery" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/weight_performance/fat_burner_fat_burning_detoxification" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/weight_performance/the_athlete_fitness_performance" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/weight_performance/recovery_healing_recovery_therapy" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/enery_brain/blood_boost_iron_therapy" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/enery_brain/wellness_replenish_revitalise" className="theme-btn-2 mt-3">
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
                                            <Link href="/iv_drip_therapy_pro/hydromax" className="theme-btn-2 mt-3">
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
                                            <img src="/assets/img/therapy/nourishment.png" alt="therapy-img" />
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
                                            <Link href="/iv_drip_therapy_pro/hair_nails_skin_nourishment/hair_nails_skin" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/skin_glow_vitamin_c.png" alt="therapy-img" />
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
                                            <Link href="/iv_drip_therapy_pro/hair_nails_skin_nourishment/skin_glow_vitamin_c" className="theme-btn-2 mt-3">
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
                                            <img src="/assets/img/therapy/fatherhood.png" alt="therapy-img" />
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
                                            <Link href="/iv_drip_therapy_pro/fatherhood_fertility_therapy/fatherhood_male_fertility" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/motherhood.png" alt="therapy-img" />
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
                                            <Link href="/iv_drip_therapy_pro/fatherhood_fertility_therapy/fatherhood_female_fertility" className="theme-btn-2 mt-3">
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
                                            <img src="/assets/img/therapy/nad.jpg" alt="therapy-img" />
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
                                            <Link href="/iv_drip_therapy_pro/nad" className="theme-btn-2 mt-3">
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
                                            <p className="threeDotLine">Super B – B Complex IV Therapy is designed to boost energy, support metabolism, and improve overall wellness. By delivering essential B vitamins directly into your bloodstream, this therapy helps your body convert nutrients into energy more efficiently. It is ideal for individuals experiencing fatigue, stress, or low energy levels, helping you feel more active, focused, and balanced throughout the day.</p>
<p className="productIngr twoDotLine">
    <b>Energize • Focus • Perform</b> 
</p>
                                            <Link href="/iv_drip_therapy_pro/super_b_complex" className="theme-btn-2 mt-3">
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
                                            <h4>Sunshine Vitamin D</h4>
                                            <h5>Vitamin D </h5>
                                            <p className="threeDotLine">Sunshine Vitamin D IV Therapy is designed to support bone health, strengthen immunity, and improve overall wellness. By delivering Vitamin D directly into your bloodstream, this therapy ensures better absorption compared to oral supplements. It is ideal for individuals with low Vitamin D levels, helping improve energy, support mood, and maintain strong bones and overall health.</p>
<p className="productIngr twoDotLine">
    <b>Strength • Immunity • Vitality</b> 
</p>
                                            <Link href="/iv_drip_therapy_pro/super_b_complex/sunshine_vitamin_d_therapy" className="theme-btn-2 mt-3">
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
                                            <img src="/assets/img/therapy/slim_boost.png" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Slim Boost IV Therapy for Faster Metabolism & Detox</h4>
                                            <h5>Burn Fat. Boost Energy.</h5>
                                            <p className="threeDotLine">
Slim Boost – Fat Burner IV Therapy is designed to support fat metabolism, boost energy levels, and enhance overall wellness. By delivering essential vitamins, amino acids, and nutrients directly into your bloodstream, this therapy helps your body burn fat more efficiently. It is ideal for individuals looking to support weight management, improve metabolism, and achieve a more active and balanced lifestyle.
                                                </p>

                                            <Link href="/iv_drip_therapy_pro/slim_boost_fat_burner" className="theme-btn-2 mt-3">
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
           {/* munjaroozempic */}
              {activeTab === "munjaroozempic" && (
              <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                             
                                 <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/munjaro_pro.png" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Munjaro Therapy</h4>
                                            <h5>Achieve Your Weight Goals with Confidence</h5>
                                            <p className="threeDotLine">
Slim Boost – Fat Burner IV Therapy is designed to support fat metabolism, boost energy levels, and enhance overall wellness. By delivering essential vitamins, amino acids, and nutrients directly into your bloodstream, this therapy helps your body burn fat more efficiently. It is ideal for individuals looking to support weight management, improve metabolism, and achieve a more active and balanced lifestyle.
                                                </p>
<p>
    Control • Balance • Transform
</p>
                                            <Link href="/iv_drip_therapy_pro/munjaro_ozempic/munjaro" className="theme-btn-2 mt-3">
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
          {/* munjaroozempic */}
              {activeTab === "munjaroozempic_new" && (
              <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                             
                                
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/ozempic_pr.png" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Ozempic Therapy</h4>
                                            <h5>Ozempic Therapy for Metabolism, Appetite & Balance</h5>
                                            <p className="threeDotLine">
Ozempic Therapy is designed to support weight management and metabolic health as part of a medically guided wellness plan. This therapy helps regulate appetite, improve energy balance, and support overall well-being. It is ideal for individuals looking to achieve sustainable weight goals while improving lifestyle habits and maintaining long-term health through structured and professional care.
                                                </p>
<p>
    Control • Balance • Transform
</p>
                                            <Link href="/iv_drip_therapy_pro/munjaro_ozempic/ozempic" className="theme-btn-2 mt-3">
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
          {/* Botox */}
              {activeTab === "botox" && (
              <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                             
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/botox_img.png" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Botox</h4>
                                            <h5>The Art of Ageless Expression</h5>
                                            
                                            <Link href="/iv_drip_therapy_pro/botox" className="theme-btn-2 mt-3">
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
