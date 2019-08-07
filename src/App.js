import React from 'react';
import './App.css';
import imgBanner from './images/imageBanner.jpg';
import imgAbout from './images/imageAbout.jpg';
import imgPortfolio from './images/imagePortfolio.jpg';
import circumveloScreenshot from './images/circumvelo_screenshot.png';
import made2fitScreenshot from './images/made2fit_screenshot.png';
import recipleaseScreenshot from './images/reciplease_screenshot.png';
import jsScreenshot from './images/javascript_to_screen.png';
import reluxScreenshot from './images/relux_screenshot.png';
import css from './images/css.png';
import html from './images/html.png';
import javascript from './images/javascript.png';
import node from './images/node.png';
import postgresql from './images/postgresql.png';
import imgReact from './images/react.png';
import ruby from './images/ruby_on_rails.png';

function App() {
  return (
    <div className="App">
      <div id="wrapper" class="divided">
{/* Banner */}
  <section class="banner style2 fullscreen image-position-center content-align-left onload-content-fade-up">
    <div class="image">
      <img src={imgBanner} alt="picture of me in front of graffiti" />
      <div class="top-left"><h1 class="content-align-center" id="title">Shenae.NYC</h1>
      <ul class="icons" id="center-icons">
        <li><a href="https://www.docdroid.net/Qixrk1g/shenaesimmonsfseresume.pdf" target="blank" alt="my resume"><i class="fa fa-folder"></i></a></li>
        <li><a href="http://www.github.com/shenae" class="icon brands style1 fa-github"><span class="label">GitHub</span></a></li>
        <li><a href="https://www.linkedin.com/in/shenae-simmons/" class="icon brands style1 fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
        <li><a href="mailto:hello@shenae.nyc" class="icon style1 fa-envelope"><span class="label">Email</span></a></li>
        </ul>
        <ul class="actions stacked" id="center-icons">
        <li><a href="#about" class="button default small smooth-scroll-middle"><i class="fas fa-arrow-down"></i></a></li>
      </ul>
      
      </div>
    </div>
  </section>
{/* About */}
  <section class="spotlight style2 orient-left content-align-left image-position-center onscroll-image-fade-in" id="about">
    <div class="content">
      <h2 id="title">About</h2>
      <p>👋🏾 Hello! I'm Shenae, a resourceful full stack engineer based in NYC 🗽</p>
      <p>🚴🏾‍ I try to <a href ="https://www.strava.com/athletes/24985427" target="blank">bike</a> as much as I can. I love to travel to experience different cultures and I speak 🇺🇸 🇫🇷 🇪🇸 🇯🇵.</p>
      <p>👩🏾‍🍳 I enjoy cooking at home, going to movies with friends, and coding, of course 🖥️.</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ul class="actions stacked" id="center-icons">
        <li><a href="#portfolio" class="button default small smooth-scroll-middle"><i class="fas fa-arrow-down"></i></a></li>
      </ul>
    </div>
    <div class="image">
      <img src={imgAbout} alt="picture of me leaning in front of graffiti" />
    </div>
  </section>

 {/* Portfolio */}
    <section class="wrapper style1 align-center" id="portfolio">
    <h2 id="title">Portfolio</h2>
      <div class="gallery style1 medium onscroll-fade-in">
        <article>
          <a href="http://circumvelo.herokuapp.com" class="image" target="blank">
            <img src={circumveloScreenshot} alt="thumbnail of my circumvelo website" />
          </a>
          <div class="caption">
            <h3>CircumVelo</h3>
            <p>The dropdown list selection re­renders the map location by integrating the longitude and latitude coordinates from 2 APIs.</p>
            <ul class="actions fixed">
              <li><span class="button small">View</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="https://epic-jones-4619fa.netlify.com/" class="image" target="blank">
            <img src={made2fitScreenshot} alt="screenshot of made2fit, a menswear website" />
          </a>
          <div class="caption">
            <h3>Made2Fit</h3>
            <p>I was the project manager for this collaboration  with a team of UX designers and engineers.</p>
            <ul class="actions fixed">
              <li><span class="button small">View</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="http://reciplease.surge.sh" class="image" target="blank">
            <img src={recipleaseScreenshot} alt="screenshot of the ReciPlease web app" />
          </a>
          <div class="caption">
            <h3>ReciPlease</h3>
            <p>I supervised the version control and composed the design for the frontend components in React and the backend in Express.</p>
            <ul class="actions fixed">
              <li><span class="button small">View</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="http://relux.netlify.com" class="image" target="blank">
            <img src={reluxScreenshot} alt="screenshot of the ReciPlease web app" />
          </a>
          <div class="caption">
            <h3>ReLux</h3>
            <p>Created in 3 days at Hackathon NYC, this site leveraged React, jQuery, javascript and a spreadsheet API.</p>
            <ul class="actions fixed">
              <li><span class="button small">View</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="https://loving-shannon-2e1a10.netlify.com/" class="image" target="blank">
            <img src={jsScreenshot} alt="screenshot of the website" />
          </a>
          <div class="caption">
            <h3>JavaScript to Screen</h3>
            <p>Fan Site for the Netflix show "Russian Doll" where the main storyline is a javascript loop.</p>
            <ul class="actions fixed">
              <li><span class="button small">View</span></li>
            </ul>
          </div>
        </article>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ul class="actions stacked" id="center-icons">
        <li><a href="#resume" class="button default small smooth-scroll-middle"><i class="fas fa-arrow-down"></i></a></li>
      </ul>
  </section>

{/* Resume */}
<section class="spotlight style2 orient-right content-align-right image-position-center onscroll-image-fade-in" id="resume">
    <div class="content">
      <h2 id="title">Resume</h2>
      <p>👩🏾‍💻 As both a manager with over 10 years experience in the hospitality industry and a developer, I believe the best products and services focus on relationship building and customer service.</p>
      <p>📄 Take a look at my resume <a href="https://www.docdroid.net/Qixrk1g/shenaesimmonsfseresume.pdf" target="blank" alt="my resume">here</a>.</p>
      <br />
      <br />
      <img src={imgReact} />
      <img src={javascript} />
      <img src={html}/>
      <img src={postgresql}/>
      <img src={css}/>
      <img src={node}/>
      <img src={ruby}/>
      <ul class="actions stacked">
      <br />
      <br />
      <br />
        <li><a href="#contact" class="button default small smooth-scroll-middle"><i class="fas fa-arrow-down"></i></a></li>
      </ul>
    </div>
    <div class="image">
      <img src={imgPortfolio} alt="picture of me pretending to spray graffiti" />
    </div>
  </section>

{/* Contact */}
  <section class="wrapper style1 align-center">
    <div class="inner medium" id="contact">
      <h2 id="title">Contact</h2>
      <form method="post" action="https://formspree.io/hello@shenae.nyc">
        <div class="fields">
          <div class="field half">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="your name" />
          </div>
          <div class="field half">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="enter your email address" />
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="2"></textarea>
          </div>
        </div>
        <ul class="actions special fit">
          <li><input type="submit" name="submit" id="submit" value="Send Message" /></li>
        </ul>
      </form>

    </div>
  </section>

{/* Footer */}
  <footer class="wrapper style1 align-center">
    <div class="inner">
      <ul class="icons">
        <li><a href="http://www.github.com/shenae" class="icon brands style2 fa-github"><span class="label">GitHub</span></a></li>
        <li><a href="https://www.linkedin.com/in/shenae-simmons/" class="icon brands style2 fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
        <li><a href="mailto:hello@shenae.nyc" class="icon style2 fa-envelope"><span class="label">Email</span></a></li>
      </ul>
      <p>&copy; by Shenae Simmons</p>
      <ul class="actions stacked">
        <li><a href="#" class="button default small smooth-scroll-middle"><i class="fas fa-arrow-up"></i></a></li>
      </ul>
    </div>
  </footer>

</div>

    </div>
  );
}

export default App;
