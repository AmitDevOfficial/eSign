import React from 'react'
import "./footer.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Footer() {
    return (
        <div id='footerSection'>
            <div class="container-fluid">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3">
                            <h5>ABOUT US</h5>
                            <p className='lh-lg pt-4'>We are professional Internet Marketing & SEO expert from India specializing in Search Engine Optimization(SEO).</p>
                            <ul className='lh-lg'>
                                <li><LocationOnIcon className='greenIcon'/> New Delhi, India</li>
                                <li><PhoneAndroidIcon className='greenIcon'/> Phone: +91-9718099999</li>
                                <li><EmailIcon className='greenIcon'/> Email: support@esignwebservices.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                            <div className="footerMiddleSection">
                                <h5>MENUS</h5>
                                <ul className='lh-lg pt-4'>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> Home</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> About Us</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> Why Choose</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> SEO Services</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> Case Studies</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                            <h5>OUR SERVICES</h5>
                            <ul className='lh-lg pt-4'>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> Keyword Research</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> On-Page SEO</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> Off-Page SEO/Link Building</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> Google Console/Analytics</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> Google AdWords</li>
                                    <li> <KeyboardArrowRightIcon className='greenIcon'/> Other Internet Marketing Services</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footerStrip'>
                <p className='text-center p-3 text-white mb-0'>© 2024 Ashwani Kumar Sharma. All Rights Reserved.</p>
            </div>
        </div>
    )
}
