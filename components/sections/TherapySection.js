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
            slidesPerView: 4,
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
                        <div className="section-title">
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                IV Drip Therapy
                            </h2>
                        </div>

                        <div className='tabsHomeMain'>
 {/* Tabs */}
        <div className="tabsHome">

          <button
            className={activeTab === "immunity" ? "active" : ""}
            onClick={() => setActiveTab("immunity")}
          >
           IMMUNITY & RECOVERY
          </button>

          <button
            className={activeTab === "detoxify" ? "active" : ""}
            onClick={() => setActiveTab("detoxify")}
          >
           DETOXIFY & CLEANSE
          </button>

          <button
            className={activeTab === "weight" ? "active" : ""}
            onClick={() => setActiveTab("weight")}
          >
            WEIGHT & PERFORMANCE
          </button>
           <button
            className={activeTab === "enrgy" ? "active" : ""}
            onClick={() => setActiveTab("enrgy")}
          >
            ENERGY & BRAIN
          </button>
             <button
            className={activeTab === "glutathione" ? "active" : ""}
            onClick={() => setActiveTab("glutathione")}
          >
            GLUTATHIONE
          </button>
            <button
            className={activeTab === "hair" ? "active" : ""}
            onClick={() => setActiveTab("hair")}
          >
            HAIR, NAILS & SKIN
          </button>
          <button
            className={activeTab === "fertlity" ? "active" : ""}
            onClick={() => setActiveTab("fertlity")}
          >
            FERTILITY
          </button>
          <button
            className={activeTab === "nad" ? "active" : ""}
            onClick={() => setActiveTab("nad")}
          >
            NAD+
          </button>
            <button
            className={activeTab === "customerisediv" ? "active" : ""}
            onClick={() => setActiveTab("customerisediv")}
          >
           CUSTOMERISED IV'S
          </button>
            <button
            className={activeTab === "boostershorts" ? "active" : ""}
            onClick={() => setActiveTab("boostershorts")}
          >
           BOOSTER SHOTS
          </button>
          
        </div>

        {/* Tab Content */}
        <div className="mt-4 therapytapShow">

          {activeTab === "immunity" && (
            <div>
              <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/miniboost.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Hydrate| Ultimate Hydration</h4>
                                            {/* <h5>Small & Mighty</h5> */}
                                            <p>This deep tissue replenishment therapy is designed to restore
optimal fluid balance and vitality. By delivering essential
fluids and electrolytes directly into your system, it rapidly
alleviates symptoms of dehydration, fatigue, and burnout,
leaving your skin radiant and your body revitalized. Perfect
for post-travel recovery or after intense physical exertion.</p>
<p className="productIngr"><b>Ingredients:</b>  Balanced Electrolytes, Sodium Chloride, Potassium Chloride, Calcium
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
                                            <img src="/assets/img/therapy/hydromax.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Hydromax</h4>
                                            <h5>Your Peak Perfomance</h5>
                                            <p>Hydromax IV therapy is carefully formulated using scientific principles...</p>
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
                                            <img src="/assets/img/therapy/ultraviv.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Ultraviv</h4>
                                            <h5>Get Well & Bounce Back</h5>
                                            <p>Ultraviv is expertly developed by our medical team with a unique combination...</p>
                                            <Link href="/iv-drip-therapy/ultraviv" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/megaboost.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Megaboost</h4>
                                            <h5>The signature IV</h5>
                                            <p>Created to promote overall wellness, the Megaboost infusion delivers a powerful...</p>
                                            <Link href="/iv-drip-therapy/megaboost" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/vitaglow.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Vitaglow</h4>
                                            <h5>Go for the glow</h5>
                                            <p>Packed with nourishing ingredients, Vitaglow is designed to support...</p>
                                            <Link href="/iv-drip-therapy/vitaglow" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/royal-flush.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Royal Flush</h4>
                                            <h5>Recover your wellness</h5>
                                            <p>Bringing together the powerful benefits of Ultraviv, Megaboost...</p>
                                            <Link href="/iv-drip-therapy/royal-flush" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/nad.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>NAD+</h4>
                                            <h5>Biohack your Biology</h5>
                                            <p>NAD+ is a vital coenzyme found in all cells of the body, playing a key role in energy...</p>
                                            <Link href="/iv-drip-therapy/nad" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/ultraviv-pro.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Ultraviv PRO</h4>
                                            <h5>Ultraviv like a PRO</h5>
                                            <p>Ultraviv PRO is a thoughtfully crafted blend of vitamins, minerals, and essential...</p>
                                            <Link href="/iv-drip-therapy/ultraviv-pro" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/methylene-blue.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Methylene Blue</h4>
                                            <h5>Biohack your baseline</h5>
                                            <p>In today’s fast-paced lifestyle where concentration, quick recovery, and sustained...</p>
                                            <Link href="/iv-drip-therapy/methylene-blue" className="theme-btn-2 mt-3">
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

          {activeTab === "detoxify" && (
            <div>
              <p>Energy Boost Therapies</p>
            </div>
          )}

          {activeTab === "weight" && (
            <div>
              <p>Beauty & Glow Therapies</p>
            </div>
          )}

          {activeTab === "enrgy" && (
            <div>
              <p>Beauty & Glow Therapies</p>
            </div>
          )}
          {activeTab === "glutathione" && (
            <div>
              <p>Beauty & Glow Therapies</p>
            </div>
          )}
          {activeTab === "hair" && (
            <div>
              <p>Beauty & Glow Therapies</p>
            </div>
          )}
            {activeTab === "fertlity" && (
            <div>
              <p>Beauty & Glow Therapies</p>
            </div>
          )}
             {activeTab === "nad" && (
            <div>
              <p>Beauty & Glow Therapies</p>
            </div>
          )}
           {activeTab === "customerisediv" && (
            <div>
              <p>Beauty & Glow Therapies</p>
            </div>
          )}
              {activeTab === "boostershorts" && (
            <div>
              <p>Beauty & Glow Therapies</p>
            </div>
          )}
        </div>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                   
                </div>
            </section>
        </>
    )
}
