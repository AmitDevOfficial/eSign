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
                                <li><LocationOnIcon/> New Delhi, India</li>
                                <li><PhoneAndroidIcon/> Phone: +91-9718099999</li>
                                <li><EmailIcon/> Email: support@esignwebservices.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                            <div className="footerMiddleSection">
                                <h5>MENUS</h5>
                                <ul className='lh-lg pt-4'>
                                    <li> <KeyboardArrowRightIcon/> Home</li>
                                    <li> <KeyboardArrowRightIcon/> About Us</li>
                                    <li> <KeyboardArrowRightIcon/> Why Choose</li>
                                    <li> <KeyboardArrowRightIcon/> SEO Services</li>
                                    <li> <KeyboardArrowRightIcon/> Case Studies</li>
                                    <li> <KeyboardArrowRightIcon/> Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                            <h5>OUR SERVICES</h5>
                            <ul className='lh-lg pt-4'>
                                    <li> <KeyboardArrowRightIcon/> Keyword Research</li>
                                    <li> <KeyboardArrowRightIcon/> On-Page SEO</li>
                                    <li> <KeyboardArrowRightIcon/> Off-Page SEO/Link Building</li>
                                    <li> <KeyboardArrowRightIcon/> Google Console/Analytics</li>
                                    <li> <KeyboardArrowRightIcon/> Google AdWords</li>
                                    <li> <KeyboardArrowRightIcon/> Other Internet Marketing Services</li>
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
