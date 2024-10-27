import React from 'react';
import './home.css';
import { useTypewriter } from 'react-simple-typewriter'
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';

export default function Home() {
    const [text] = useTypewriter({
        words: ['Internet Marketing', 'Digital Marketing', 'Social Media Handler', 'Web Development!'],
        loop: 0
    })

    return (

        <>
            <section id='mainHome1'>
                <div className="container-fluid mainHome_content">
                    <h1>SEO and<br /><span className='typewriter-wrap'>!{text}</span></h1>
                    <p className='lh-lg'>Secure Top Natural Rankings, Increased Qualified Web Traffic, Outstanding Return on Investment and Fast, Friendly & Very Effective</p>
                    <button type="button" class="btn btn-secondary rounded-1 bg-dark p-2 px-4 me-3 ">LEARN MORE</button>
                    <button type="button" class="btn btn-success rounded-1 p-2 px-4">GET STARTED</button>
                </div>
            </section>
            <HomeSection1 />
            <HomeSection2 />
        </>
    )
}
