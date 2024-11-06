import React from 'react'
import './home.css';
import about from "../../media/images/about.png"

export default function HomeSection2() {
    return (
        <div id="homeSectionTwo" className='container-fluid mt-5 pt-5'>
            <div class="px-4">
                <div class="row row-cols-1 row-cols-lg-2 gx-5">
                    <div class="col" data-aos="fade-up" data-aos-duration="3000">
                        <div class="p-3 text-center">
                            <img src={about} alt="" />
                        </div>
                    </div>
                    <div class="col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <div class="p-3">
                            <h1 className='mb-5'>Best <span>SEO Expert</span> in India</h1>
                            <p className='lh-lg'>We are professional Internet Marketing & SEO expert from India specializing in Search Engine Optimization(SEO). At eSign Web Services, we specialize in a broad spectrum of internet marketing services. Our certified team work closely with clients using state of the art techniques and creativity combined with the highest level of professionalism to improve the marketing of your products and services.</p>
                            <p className='lh-lg'>Whether you’re just starting out or need to improve your existing business to attract new customers more efficiently, increase customer trust and achieve a high ROI (Returns on Investment), we’re so confident in our ability to deliver amazing results. We believe in building a long term relationship with our clients, delivering affordable yet efficient, effective, competent & high-class services. We love to engage and drive results for your brands. So get in touch today, and let’s help you maximize your potentials as we have done for many in the industry!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
