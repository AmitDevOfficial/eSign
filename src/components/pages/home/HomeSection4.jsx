import React from 'react';
import one from "../../media/images/one.png";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GoogleIcon from '@mui/icons-material/Google';
import AdsClickIcon from '@mui/icons-material/AdsClick';

export default function HomeSection4() {
    return (
        <>
            <div id='homeSectionFour' className='container-fluid mt-5 mb-5 pb-5'>
                <div class="overflow-hidden">
                    <div className='mb-lg-5 text-center'>
                        <h1 className='p-3'><span>Why </span>Choose</h1>
                        <b className='text-center'>We Deliver 1st Page Rankings Guaranteed*</b>
                    </div>

                    <div class="row row-cols-1 row-cols-lg-2 gx-5">
                        <div class="col">
                            <div class="p-3">
                                <h1>We Offer a Full Range of <span>SEO Services!</span></h1>
                                <p className="lh-lg py-4">We offer professional, White Hat SEO service which will help you boost your website within the search engine rankings, and also assist you in generating better web traffic.</p>
                                <ul className='lh-lg'>
                                    <li><StarHalfIcon color="success" className='me-3' /> We Deliver Top Rankings.</li>
                                    <li><AddTaskIcon color="success" className='me-3' /> High Customer Retention Rate.</li>
                                    <li><SupportAgentIcon color="success" className='me-3' /> Great Customer Support.</li>
                                    <li><AttachMoneyIcon color="success" className='me-3' /> Afordable Pricing Offers.</li>
                                    <li><GoogleIcon color="success" className='me-3' /> Best Google Paying Advertising.</li>
                                    <li><AdsClickIcon color="success" className='me-3' /> Pay Per Click Marketing.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3 text-center">
                                <img src={one} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="seoImg">
                <div class="container-fluid seoBackImg text-center text-white">
                    <div class="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
