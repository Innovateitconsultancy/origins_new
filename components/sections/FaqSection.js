import Link from 'next/link'

export default function FaqSection() {
    return (
        <section className="accordionSection section-padding fix">
            <div className="container">
               <div className="section-title text-center">
                        {/* <span className="wow fadeInUp">dfds</span> */}
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Frequently Asked Questions (FAQs)</h2>
                    </div>
                <div className="about-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
<div className="accordion">

  <details name="accordion">
    <summary>What is IV Therapy?</summary>
  <p>IV Therapy is a treatment that delivers fluids, vitamins, minerals, and nutrients directly into the bloodstream through an intravenous drip. This method allows your body to absorb nutrients faster and more efficiently compared to oral supplements.</p>
  </details>

  <details name="accordion">
    <summary>What are the benefits of IV Therapy?</summary>
<p>IV Therapy helps support overall wellness by improving hydration, boosting energy levels, strengthening the immune system, aiding recovery, and replenishing essential vitamins and minerals in the body.</p>
  </details>
    <details name="accordion">
    <summary>How long does an IV therapy session take?</summary>
<p>Most IV therapy sessions typically take 30 to 45 minutes. The duration may vary depending on the type of IV drip and the individual’s health needs.</p>  
</details>
    <details name="accordion">
    <summary>Is IV Therapy safe?</summary>
<p>Yes, IV Therapy is generally safe when administered by trained healthcare professionals. At our clinic, all treatments are conducted under proper medical supervision using sterile equipment and high-quality ingredients.</p>
  </details>
    <details name="accordion">
    <summary>Who can benefit from IV Therapy?</summary>
<p>IV Therapy can benefit individuals looking to improve hydration, boost energy, strengthen immunity, recover from fatigue, support athletic recovery, or improve overall wellness.</p>
  </details>
    <details name="accordion">
    <summary>How often should I get IV Therapy?</summary>
<p>The frequency of IV Therapy depends on your health goals and lifestyle. Some people benefit from occasional treatments, while others choose regular sessions for ongoing wellness support.</p>
  </details>
    <details name="accordion">
    <summary>Are there any side effects?</summary>
<p>Most people tolerate IV Therapy very well. Some individuals may experience mild bruising or slight discomfort at the injection site, which usually resolves quickly.</p>
  </details>
   <details name="accordion">
    <summary>How quickly will I feel the results?</summary>
<p>
  Many people start to feel refreshed and energized within a few hours after the treatment, while some benefits may continue to develop over the following days.
</p>
  </details>
    <details name="accordion">
    <summary>Do I need a consultation before treatment?</summary>
<p>
Yes, a brief health assessment or consultation is usually conducted before your session. This helps ensure the IV therapy selected is safe and suitable for your health needs.
</p>
  </details>
    <details name="accordion">
    <summary>How do I book an IV therapy session?</summary>
<p>
You can easily schedule your appointment through our website or by contacting our clinic directly. Our team will help you choose the right treatment and schedule a convenient time.
</p>
  </details>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}