import './home.css';
import lang from '../../media/logos/language.png';
import horse from '../../media/logos/horse.png';
import cloud from '../../media/logos/cloud.png';
import trophy from '../../media/logos/trophy.png';

export default function HomeSection1() {
 
  

  return (
    <div id="homeSectionOne" className="container-fluid text-center my-5">
      <h1 className="p-3">
        <span>About</span> Ashwani
      </h1>
      <b>Professional Internet Marketing & SEO Expert</b>
      <p className="p-4">
        Ashwani Kumar Sharma is the proud founder and director of the leading internet marketing
        and SEO company, eSign Web Services. An experienced internet marketing professional with
        a comprehensive knowledge and expertise in growing a business from the ground to the top,
        he launched his organization with the goal of providing high-quality internet marketing
        solutions with the most unparalleled customer experience possible.
      </p>

      <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
        <div className="col">
          <div className="p-3">
            <div className="card border-0" data-aos="fade-right">
              <img src={lang} className="card-img-top" alt="Language" />
              <div className="card-body">
                <h5 className="card-title m-3">White Hat SEO Work</h5>
                <p className="card-text lh-lg">
                  We offer professional, White Hat SEO service which will help you boost your
                  website within the search engine rankings, and also assist you in generating
                  better web traffic. This is done by being a Google Penguin and Panda Compliant
                  SEO Service.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="p-3">
            <div className="card border-0" data-aos="fade-up">
              <img src={horse} className="card-img-top" alt="Horse" />
              <div className="card-body">
                <h5 className="card-title m-3">Guaranteed Results</h5>
                <p className="card-text lh-lg">
                  Our guarantee is that our SEO services will get you the kind of visibility that
                  will move your site to the very first page of Google, Yahoo & Bing. We assure
                  you that our techniques work, and this is why we can be confident in our
                  guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="p-3">
            <div className="card border-0" data-aos="fade-up">
              <img src={cloud} className="card-img-top" alt="Cloud" />
              <div className="card-body">
                <h5 className="card-title m-3">Stable Traffic Growth</h5>
                <p className="card-text lh-lg">
                  Increase your organic traffic and your visibility. We guarantee that our SEO
                  service is not just a boost for today. We will help to continually improve your
                  search engine rankings and provide long-term increases in traffic over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="p-3">
            <div className="card border-0" data-aos="fade-left">
              <img src={trophy} className="card-img-top" alt="Trophy" />
              <div className="card-body">
                <h5 className="card-title m-3">Experienced SEO Team</h5>
                <p className="card-text lh-lg">
                  This is one area where we have dedicated ourselves to being experts. Our
                  experience and passion as a team will help to improve your search engine
                  rankings, as we are a dedicated SEO team that delivers genuine business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
