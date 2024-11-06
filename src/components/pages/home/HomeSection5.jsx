import React from 'react';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AnchorIcon from '@mui/icons-material/Anchor';
import LinkIcon from '@mui/icons-material/Link';

export default function HomeSection5() {
  return (
    <div>
      <div id='homeSectionFive' className='container-fluid my-lg-5 py-lg-5'>
        <div>
          <div className="text-center">
            <h1><span>Our</span> Services</h1>
            <b>Internet Marketing & SEO Solutions That Work</b>
          </div>

          <div class="row row-cols-1 row-cols-lg-3 g-5 gy-lg-3 mt-lg-5" data-aos="fade-right">
            <div class="col">
              <div class="p-3 servicesCard">
                <div className="text-center">
                <div className="serviceIcon m-auto mb-2 py-4 text-center w-25 rounded-circle">
                    <VpnKeyIcon sx={{ fontSize: 60 }} />
                    <br />
                  </div>
                  <br />
                  <h5 className='py-2'>Keyword Research</h5>
                </div>
                <p className='lh-lg'>Working alongside you, together we will come up with keywords for your campaign. This is most significant right now to solidify a successful campaign.</p>
              </div>
            </div>
            <div class="col">
              <div class="p-3 servicesCard">
                <div className="text-center">
                <div className="serviceIcon m-auto mb-2 py-4 text-center w-25 rounded-circle">
                    <AnchorIcon sx={{ fontSize: 60 }} />
                    <br />
                  </div>
                  <br />
                  <h5 className='py-2'>Keyword Research</h5>
                </div>
                <p className='lh-lg'>Working alongside you, together we will come up with keywords for your campaign. This is most significant right now to solidify a successful campaign.</p>
              </div>
            </div>
            <div class="col">
            <div class="p-3 servicesCard">
                <div className="text-center">
                <div className="serviceIcon m-auto mb-2 py-4 text-center w-25 rounded-circle">
                    <LinkIcon sx={{ fontSize: 60 }} />
                    <br />
                  </div>
                  <br />
                  <h5 className='py-2'>Keyword Research</h5>
                </div>
                <p className='lh-lg'>Working alongside you, together we will come up with keywords for your campaign. This is most significant right now to solidify a successful campaign.</p>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-lg-3 g-5 gy-lg-3 mt-lg-5" data-aos="fade-left">
            <div class="col">
              <div class="p-3 servicesCard">
                <div className="text-center">
                <div className="serviceIcon m-auto mb-2 py-4 text-center w-25 rounded-circle">
                    <VpnKeyIcon sx={{ fontSize: 60 }} />
                    <br />
                  </div>
                  <br />
                  <h5 className='py-2'>Keyword Research</h5>
                </div>
                <p className='lh-lg'>Working alongside you, together we will come up with keywords for your campaign. This is most significant right now to solidify a successful campaign.</p>
              </div>
            </div>
            <div class="col">
              <div class="p-3 servicesCard">
                <div className="text-center">
                <div className="serviceIcon m-auto mb-2 py-4 text-center w-25 rounded-circle">
                    <AnchorIcon sx={{ fontSize: 60 }} />
                    <br />
                  </div>
                  <br />
                  <h5 className='py-2'>Keyword Research</h5>
                </div>
                <p className='lh-lg'>Working alongside you, together we will come up with keywords for your campaign. This is most significant right now to solidify a successful campaign.</p>
              </div>
            </div>
            <div class="col">
            <div class="p-3 servicesCard">
                <div className="text-center">
                <div className="serviceIcon m-auto mb-2 py-4 text-center w-25 rounded-circle">
                    <LinkIcon sx={{ fontSize: 60 }} />
                    <br />
                  </div>
                  <br />
                  <h5 className='py-2'>Keyword Research</h5>
                </div>
                <p className='lh-lg'>Working alongside you, together we will come up with keywords for your campaign. This is most significant right now to solidify a successful campaign.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
