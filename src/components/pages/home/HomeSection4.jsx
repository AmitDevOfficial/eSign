import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import one from "../../media/images/one.png";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GoogleIcon from '@mui/icons-material/Google';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CountUp from 'react-countup';

export default function HomeSection4() {
    const { ref, inView } = useInView({ triggerOnce: true }); // Trigger the animation only once
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartCount(true);
        }
    }, [inView]);

    return (
        <>
            <div id='homeSectionFour' className='container-fluid mt-5 mb-5 pb-5'>
                <div className="overflow-hidden">
                    <div className='mb-lg-5 text-center'>
                        <h1 className='p-3'><span>Why </span>Choose</h1>
                        <b className='text-center'>We Deliver 1st Page Rankings Guaranteed*</b>
                    </div>

                    <div className="row row-cols-1 row-cols-lg-2 gx-5">
                        <div className="col">
                            <div className="p-3">
                                <h1>We Offer a Full Range of <span>SEO Services!</span></h1>
                                <p className="lh-lg py-4">We offer professional, White Hat SEO service which will help you boost your website within the search engine rankings, and also assist you in generating better web traffic.</p>
                                <ul className='lh-lg'>
                                    <li><StarHalfIcon color="success" className='me-3' /> We Deliver Top Rankings.</li>
                                    <li><AddTaskIcon color="success" className='me-3' /> High Customer Retention Rate.</li>
                                    <li><SupportAgentIcon color="success" className='me-3' /> Great Customer Support.</li>
                                    <li><AttachMoneyIcon color="success" className='me-3' /> Affordable Pricing Offers.</li>
                                    <li><GoogleIcon color="success" className='me-3' /> Best Google Paying Advertising.</li>
                                    <li><AdsClickIcon color="success" className='me-3' /> Pay Per Click Marketing.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 text-center">
                                <img src={one} alt="SEO services illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="seoImg" ref={ref}>
                <div className="container-fluid seoBackImg text-center text-white py-lg-5">
                    <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
                        <div className="col">
                            <div className="p-3">
                                <div className="numBorder p-3">
                                    <SettingsSuggestIcon sx={{ fontSize: 50 }} />
                                    <p className="num fw-semibold">
                                        {startCount && <CountUp delay={0.5} duration={4} end={17} />}
                                    </p>
                                    <p className="fs-4 fw-semibold">Years of Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <div className="numBorder p-3">
                                    <Diversity1Icon sx={{ fontSize: 50 }} />
                                    <p className="num fw-semibold">
                                        {startCount && <CountUp delay={1} duration={4} end={50} />}
                                    </p>
                                    <p className="fs-4 fw-semibold">Professionals</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <div className="numBorder p-3">
                                    <AddReactionIcon sx={{ fontSize: 50 }} />
                                    <p className="num fw-semibold">
                                        {startCount && <CountUp delay={0.5} duration={4} end={2500} />}
                                    </p>
                                    <p className="fs-4 fw-semibold">Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <div className="numBorder p-3">
                                    <WorkspacePremiumIcon sx={{ fontSize: 50 }} />
                                    <p className="num fw-semibold">
                                        {startCount && <CountUp delay={0.5} duration={4} end={98} />}<span className='numPer'>%</span>
                                    </p>
                                    <p className="fs-4 fw-semibold">Client Retention</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
