import React, { useEffect, useRef } from 'react';
const Index = () => {

  const refs = useRef({});
  const refsIDs = useRef({});

  const accordinButton = (id) => {
    const el = refs.current[id];
    const secondel = refsIDs.current[id];
    const common = document.querySelector('.common_text');


    el.addEventListener('shown.bs.collapse', () => {
      common?.classList.remove('accor-btn');
      secondel?.classList.add('accor-btn');
    });

    el.addEventListener('hidden.bs.collapse', () => {
      secondel?.classList.remove('accor-btn'); // Usually you remove it on hide
    });
  };

  useEffect(() => {
    // Access global AOS from window object
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, []);
  return (
    <>
      <section data-aos="fade-in" className="text-white" style={{ background: 'linear-gradient(135deg, #ff7e00, #ff6a00)', backgroundImage: 'url(./img/banner-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
        <div className='banner-overlay'>
          <div className="container-fluid text-right" data-aos="fade-up">
            <div className='row'>
              <div className='col-md-6 text-center'>
                <div style={{ transform: 'translateY(4rem)' }}>
                  <h2 className="display-6 fw-bold">World's Most Advanced <br />End-to-End Software Powered by AI for Tour Operators & DMCs</h2>
                  <p className="mt-3" style={{ fontSize: '1.2rem', fontWeight: 500 }}><i>Specially Designed for East Africa</i></p>
                  <button className="btn btn-light btn-orange mt-3 fw-semibold w-50 p-2">Tab to know more !</button>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row m-5'>
                  <div className='col-md-6 card p-4 text-dark banner-block-first banner-hover-1'>
                    <p style={{ fontSize: '1.3rem' }}><b>Itinerary Builder</b></p>
                  </div>
                  <div className='col-md-6 card p-4 text-white banner-block-second banner-hover-2'>
                    <p style={{ fontSize: '1.3rem' }}><b>Auto Cost Calculator</b></p>
                  </div>
                  <div className='col-md-6 card p-4 text-white banner-block-third banner-hover-2'>
                    <p className='mt-2' style={{ fontSize: '1.3rem' }}><b>CRM Tool</b></p>
                  </div>
                  <div className='col-md-6 card p-4 text-dark banner-block-four banner-hover-1'>
                    <p style={{ fontSize: '1.3rem' }} className="mb-0"><b>Hotel & Agent Specific Markup</b></p>
                  </div>
                  <div className='col-md-6 card p-4 text-dark banner-block-five banner-hover-1'>
                    <p style={{ fontSize: '1.3rem' }}><b>B2B Agent Support</b></p>
                  </div>
                  <div className='col-md-6 card p-4 text-white banner-block-six banner-hover-2'>
                    <p style={{ fontSize: '1.3rem' }} className="mb-0"><b>and lot more</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 text-center bg-white">
        <div className="container">
          <h4 className="text-center mb-4 section-title">Trusted by Top Tour Operators in East Africa</h4>
          <div className="d-flex justify-content-center gap-4 flex-wrap align-items-center mt-3">
            <div className='operator-logo' style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImuTscOlURlU5o5gLWKYyYTJ6akCCpHZuvQ&s)' }}></div>
            <div className='operator-logo' style={{ backgroundImage: 'url(https://images-platform.99static.com//cGKFuBHBPhILC5LOZL_YCCqdqvc=/118x114:877x871/fit-in/500x500/99designs-contests-attachments/132/132793/attachment_132793251)' }}></div>
            <div className='operator-logo' style={{ backgroundImage: 'url(https://images-platform.99static.com//FGKbEryfX5ZrEwt-z766KwM-_kI=/262x150:795x683/fit-in/590x590/99designs-contests-attachments/42/42603/attachment_42603907)' }}></div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-5 bg-light" style={{ backgroundImage: 'url(https://www.pinkelephantinternational.com/wp-content/uploads/2018/01/bg-img-01-6.jpg)', backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', width: '100%', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <h3 className="text-center mb-4 section-title">Our Features</h3>
          <div className="row g-4">
            {/* Feature Cards */}
            <div className="col-md-12 col-lg-12">
              <div className="feature-card text-center">
                <h5 className="fw-semibold">Itinerary Builder</h5>
                <p>Create beautiful, detailed travel itineraries in minutes - Our itinerary Builder lets you Create and Customize day-by-day plans with ease - Complete with images, maps and pricing.Share Instantly with Client using professionally designed templates in multiple languages and currencies.</p>
                <button className='btn btn-orange'><span style={{ fontWeight: 600, marginRight: '.3rem' }}>Click for Live Preview</span> <i className="fa-solid fa-arrow-right-long"></i></button>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center">
                <h5 className="fw-semibold">Auto Cost Calculation with Circuit Discount</h5>
                <p>Effortless pricing that factors in room rates, child policies, and automatic circuit discounts — all calculated in seconds</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center">
                <h5 className="fw-semibold">Reports and Analytics</h5>
                <p>Track performance, monitor inquiries, and gain insights into your business — all in one dashboard.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center">
                <h5 className="fw-semibold">DMC specific CRM tool</h5>
                <p>Built for tour operators — manage leads, client preferences, and lead stages with a CRM tailored to your safari business.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center">
                <h5 className="fw-semibold">Vouchers, Receipts, Invoices and P&L Reports</h5>
                <p>Generate professional vouchers, invoices, and receipts — with real-time P&L reports to track your profitability with ease.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* building blocks */}
      <section className="py-5 bg-light" style={{ backgroundImage: 'url()', backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', width: '100%', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <h3 className="text-center mb-4 section-title">Our Building Blocks</h3>
          <div className="row g-4">
            {/* Feature Cards */}
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center building-border">
                <h5 className="fw-semibold">Step 1</h5>
                <p>once you receive a lead create your itinerary</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center building-border">
                <h5 className="fw-semibold">Step 2</h5>
                <p>review the cost calculated automatically with your the choice of your markup</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center building-border">
                <h5 className="fw-semibold">Step 3</h5>
                <p>save the details in the crm</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center building-border">
                <h5 className="fw-semibold">Step 4</h5>
                <p>send the itinerary in the language and currency of your choice</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center building-border">
                <h5 className="fw-semibold">Step 5</h5>
                <p>once the sale is closed, push the invoice/accounts to your cfo</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center building-border">
                <h5 className="fw-semibold">Step 6</h5>
                <p>push the operation details to your operations team</p>
              </div>
            </div>
            <div className='col-md-3'></div>
            <div className="col-md-6 col-lg-6">
              <div className="feature-card text-center building-border">
                <h5 className="fw-semibold">Step 7</h5>
                <p>generate P&L and productivity reports</p>
              </div>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </section>

      {/* Boost Your Sales */}
      <section className="py-5 text-center bg-white" style={{ backgroundImage: 'url(https://www.pinkelephantinternational.com/wp-content/uploads/2018/05/Madetomeasure.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: 'auto', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <h5 className="text-orange fw-bold mb-4">BOOST YOUR SALES TO THE NEXT LEVEL</h5>
          <div className="row g-4 justify-content-center">
            <div className='col-12'>
              <div className="row position-relative justify-content-center align-items-center" style={{ height: '150px' }}>
                <div className="col-md-6">
                  <div className="rounded-circle stat-box box" style={{ border: "2px solid #f46b00" }}>
                    <p>85% reduction of manual work</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 feature-card text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
                  <div className="box">
                    <p>Cut down repetitive work by 85% and focus on what truly matters—delivering unforgettable travel experiences.</p>
                  </div>
                </div>
                <div className="dotted-line">
                  <i className="fa-solid fa-chevron-right" style={{ position: 'absolute', right: 0, transform: 'translateY(-55.5%)', color: 'var(--orange)' }}></i>
                </div>
              </div>
            </div>
            <div className='col-12' style={{ marginTop: '5rem' }}>
              <div className="row position-relative justify-content-center align-items-center" style={{ height: '150px' }}>
                <div className="col-md-6 col-lg-6 feature-card text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
                  <div className="box">
                    <p>Boost your conversions—our users have seen up to 70% increase in bookings with faster turnaround and smarter proposals</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="rounded-circle stat-box box" style={{ border: "2px solid #f46b00" }}>
                    <p>Increased bookings by 70%</p>
                  </div>
                </div>
                <div className="dotted-line" style={{ right: '32%', left: 'unset' }}>
                  <i className="fa-solid fa-chevron-left" style={{ position: 'absolute', left: 0, transform: 'translateY(-55.5%)', color: 'var(--orange)' }}></i>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className="row position-relative justify-content-center align-items-center" style={{ height: '150px' }}>
                <div className="col-md-6">
                  <div className="rounded-circle stat-box box" style={{ border: "2px solid #f46b00" }}>
                    <p>Manual costing errors reduced by 99.99%</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 feature-card text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
                  <div className="box">
                    <p>Say goodbye to manual miscalculations—our precision-driven engine ensures 99.99% accuracy in costing every time.</p>
                  </div>
                </div>
                <div className="dotted-line">
                  <i className="fa-solid fa-chevron-right" style={{ position: 'absolute', right: 0, transform: 'translateY(-55.5%)', color: 'var(--orange)' }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Unique Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center mb-4 section-title">Unique Features</h3>
          <div className="row text-center g-4">
            <div className="col-md-6">
              <div className="feature-card fw-medium">Auto cost calculator</div>
            </div>
            <div className="col-md-6">
              <div className="feature-card fw-medium">Multilingual Itineraries</div>
            </div>
            <div className="col-md-6">
              <div className="feature-card fw-medium">Hotel and Resort specific markup</div>
            </div>
            <div className="col-md-6">
              <div className="feature-card fw-medium">Multicurrency</div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-5 bg-light" style={{ backgroundImage: 'url(./img/faq.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: 'auto', backgroundAttachment: 'fixed' }}>
        <div className='container'>
          <h3 className="text-center mb-4 section-title">FAQs</h3>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='card acordin-bg' style={{ borderRadius: '20px 0px 0px 20px' }}>
                <div className='card-body acordin-bg' style={{ borderRadius: '20px 0px 0px 20px' }}>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item acordin-bg" style={{ border: 'none' }}>
                      <h2 className="accordion-header acordin-bg">
                        <button className="accordion-button acordin-bg accor-btn common_text" ref={el => (refsIDs.current[0] = el)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => accordinButton(0)}>
                          <b>Why a Pink Elephant as your logo?</b>
                        </button>
                      </h2>
                      <div id="collapseOne" ref={el => (refs.current[0] = el)} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body acordin-bg">
                          <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item acordin-bg" style={{ border: 'none' }}>
                      <h2 className="accordion-header acordin-bg">
                        <button className="accordion-button collapsed acordin-bg common_text" ref={el => (refsIDs.current[1] = el)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => accordinButton(1)}>
                          <b>Why a Pink Elephant as your logo?</b>
                        </button>
                      </h2>
                      <div id="collapseTwo" ref={el => (refs.current[1] = el)} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body acordin-bg">
                          <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item acordin-bg" style={{ border: 'none' }}>
                      <h2 className="accordion-header acordin-bg">
                        <button className="accordion-button collapsed acordin-bg common_text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={() => accordinButton(2)} ref={el => (refsIDs.current[2] = el)}>
                          <b>Why a Pink Elephant as your logo?</b>
                        </button>
                      </h2>
                      <div id="collapseThree" ref={el => (refs.current[2] = el)} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body acordin-bg">
                          <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='card acordin-bg' style={{ borderRadius: '0px 20px 20px 0px' }}>
                <div className='card-body acordin-bg' style={{ borderRadius: '0px 20px 20px 0px' }}>
                  <div className="accordion" id="accordionExample1">
                    <div className="accordion-item acordin-bg" style={{ border: 'none' }}>
                      <h2 className="accordion-header acordin-bg">
                        <button className="accordion-button acordin-bg accor-btn common_text" ref={el => (refsIDs.current[4] = el)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1" onClick={() => accordinButton(4)}>
                          <b>Why a Pink Elephant as your logo?</b>
                        </button>
                      </h2>
                      <div id="collapseOne1" ref={el => (refs.current[4] = el)} className="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                        <div className="accordion-body acordin-bg">
                          <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item acordin-bg" style={{ border: 'none' }}>
                      <h2 className="accordion-header acordin-bg">
                        <button className="accordion-button collapsed acordin-bg common_text" ref={el => (refsIDs.current[5] = el)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2" onClick={() => accordinButton(5)}>
                          <b>Why a Pink Elephant as your logo?</b>
                        </button>
                      </h2>
                      <div id="collapseTwo2" ref={el => (refs.current[5] = el)} className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                        <div className="accordion-body acordin-bg">
                          <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item acordin-bg" style={{ border: 'none' }}>
                      <h2 className="accordion-header acordin-bg">
                        <button className="accordion-button collapsed acordin-bg common_text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3" onClick={() => accordinButton(6)} ref={el => (refsIDs.current[6] = el)}>
                          <b>Why a Pink Elephant as your logo?</b>
                        </button>
                      </h2>
                      <div id="collapseThree3" ref={el => (refs.current[6] = el)} className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                        <div className="accordion-body acordin-bg">
                          <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
      {/* Testimonials */}
      <section className="py-5 bg-light" style={{ backgroundImage: 'url()', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: 'auto', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <h3 className="text-center section-title mb-1">Client Testimonials</h3>
          <p className="text-center mb-5 testimonial-start" style={{ fontSize: '1.2rem', fontWeight: 500 }}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card testimonial-card h-100">
                <div className="card-body">
                  <p className="card-text text-center mt-3" style={{ lineHeight: '1.7' }}>
                        Twigaa.ai has revolutionized our tour operating business with its dynamic quotation and itinerary generation. The Connected CRM  functionality accelerates sales closure, enabling our team to connect  with more customers seamlessly.</p>
                  
                </div>
                <div className="card-footer border-0 text-center" style={{ backgroundColor: ' #adadad00' }}>
                  <div className='testimonial-image' style={{ backgroundImage: 'url(https://twigaa.ai//assets/img/testimonials/bigfoot.jpeg)' }}></div>
                  <strong className="text-body-secondary">Italy's leading DMC</strong>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card testimonial-card h-100">
                <div className="card-body">
                  <p className="card-text text-center mt-3" style={{ lineHeight: '1.7' }}>
                        Choosing Twigaa.ai for cost analysis and crafting tourism itineraries was a brilliant decision. The itinerary planning feature is a game-changer – it suggests personalized, engaging routes based on user preferences.</p>
                  
                </div>
                <div className="card-footer border-0 text-center" style={{ backgroundColor: ' #adadad00' }}>
                  <div className='testimonial-image'  style={{ backgroundImage: 'url(https://twigaa.ai//assets/img/testimonials/naturesurf.jpeg)'}}></div>
                  <strong className="text-body-secondary">Mauritus Incoming Specialist</strong>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card testimonial-card h-100">
                <div className="card-body">
                  <p className="card-text text-center mt-3" style={{ lineHeight: '1.7' }}>
                        To be honest,  twigaa.ia is one of the best Software i have come across in the market! The system makes it easy for tour operators to generate and manipulate Itineraries with just a few clicks. I mean in 5 mins and one is done. One can as well manage and keep track of deals closed by the sales team.</p>
                  
                </div>
                <div className="card-footer border-0 text-center" style={{ backgroundColor: ' #adadad00' }}>
                  <div className='testimonial-image' style={{ backgroundImage: 'url(https://twigaa.ai//assets/img/testimonials/jack.png)' }}></div>
                  <strong className="text-body-secondary">Africa Safari operator</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-white" style={{ backgroundImage: 'url(./img/book-bg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', backgroundAttachment: 'fixed', height: '200px', padding: '2rem' }}>
        <div className="container-fluid">
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='card' style={{ width: '40rem', 'background': 'rgba(255, 255, 255, 0.2)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: ' blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '20px' }}>
                <div className='card-body'>
                  <h4 className="fw-bold">Book a Demo today and get 2 weeks free trial</h4>
                  <button className="btn btn-orange mt-3">Click Here</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;