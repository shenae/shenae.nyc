import React from 'react';
import './App.css';
import imgBanner from './images/imageBanner.jpg';
import imgAbout from './images/imageAbout.jpg';
import imgPortfolio from './images/imagePortfolio.jpg';

function App() {
  return (
    <div className="App">
      <div id="wrapper" class="divided">
{/* Banner */}
  <section class="banner style2 fullscreen image-position-center content-align-right onload-content-fade-up">
    <div class="content">
      <h1 id="title">Shenae.NYC</h1>
      <ul class="icons">
      <li><a href="https://www.docdroid.net/Qixrk1g/shenaesimmonsfseresume.pdf" alt="my resume"><i class="fa fa-folder"></i></a></li>
        <li><a href="http://www.github.com/shenae" class="icon brands style1 fa-github"><span class="label">GitHub</span></a></li>
        <li><a href="https://www.linkedin.com/in/shenae-simmons/" class="icon brands style1 fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
        <li><a href="mailto:hello@shenae.nyc" class="icon style1 fa-envelope"><span class="label">Email</span></a></li>
      </ul>
      {/* </p> */}
      <ul class="actions stacked">
        <li><a href="#first" class="button primary small smooth-scroll-middle">More <i class="far fa-grin-beam"></i></a></li>
      </ul>
    </div>
    <div class="image">
      <img src={imgBanner} alt="picture of me in front of graffiti" />
    </div>
  </section>
{/* About */}
  <section class="spotlight style2 orient-left content-align-left image-position-center onscroll-image-fade-in" id="first">
    <div class="content">
      <h2 id="title">About</h2>
      <p>👋🏾 Hello! I'm Shenae, a resourceful full stack engineer and graduate of General Assembly's Software Engineering Immersive.</p>
      <p>👩🏾‍💻 As both a manager with over 10 years experience in the hospitality industry and a developer, I believe the best products and services emphasize on relationship building and customer service.</p>
      <ul class="actions stacked">
        <li><a href="#" class="button">Portfolio <i class="fas fa-desktop"></i></a></li>
      </ul>
    </div>
    <div class="image">
      <img src={imgAbout} alt="picture of me leaning in front of graffiti" />
    </div>
  </section>
{/* Five */}
  <section class="wrapper style1 align-center">
    <div class="inner">
      <h2>Massa sed condimentum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
    </div>

    {/* Gallery */}
      <div class="gallery style2 medium lightbox onscroll-fade-in">
        <article>
          <a href="images/gallery/fulls/01.jpg" class="image">
            <img src="images/gallery/thumbs/01.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Gallery</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/02.jpg" class="image">
            <img src="images/gallery/thumbs/02.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Feugiat Lorem</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/03.jpg" class="image">
            <img src="images/gallery/thumbs/03.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Magna Amet</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/04.jpg" class="image">
            <img src="images/gallery/thumbs/04.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Sed Tempus</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/05.jpg" class="image">
            <img src="images/gallery/thumbs/05.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Ultrices Magna</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/06.jpg" class="image">
            <img src="images/gallery/thumbs/06.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Sed Tempus</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/07.jpg" class="image">
            <img src="images/gallery/thumbs/07.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Ipsum Lorem</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/08.jpg" class="image">
            <img src="images/gallery/thumbs/08.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Magna Risus</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/09.jpg" class="image">
            <img src="images/gallery/thumbs/09.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Tempus Dolor</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/10.jpg" class="image">
            <img src="images/gallery/thumbs/10.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Sed Etiam</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/11.jpg" class="image">
            <img src="images/gallery/thumbs/11.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Magna Lorem</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
        <article>
          <a href="images/gallery/fulls/12.jpg" class="image">
            <img src="images/gallery/thumbs/12.jpg" alt="" />
          </a>
          <div class="caption">
            <h3>Ipsum Dolor</h3>
            <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
            <ul class="actions fixed">
              <li><span class="button small">Details</span></li>
            </ul>
          </div>
        </article>
      </div>

  </section>

{/* Six */}
  <section class="wrapper style1 align-center">
    <div class="inner">
      <h2>Ipsum sed consequat</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
      <div class="items style1 medium onscroll-fade-in">
        <section>
          <span class="icon style2 major fa-gem"></span>
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-save"></span>
          <h3>Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-chart-bar"></span>
          <h3>Dolor</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-wifi"></span>
          <h3>Amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-cog"></span>
          <h3>Magna</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon style2 major fa-paper-plane"></span>
          <h3>Tempus</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-desktop"></span>
          <h3>Aliquam</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-sync-alt"></span>
          <h3>Elit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-hashtag"></span>
          <h3>Morbi</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-bolt"></span>
          <h3>Turpis</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-envelope"></span>
          <h3>Ultrices</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
        <section>
          <span class="icon solid style2 major fa-leaf"></span>
          <h3>Risus</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </section>
      </div>
    </div>
  </section>

{/* Seven */}
  <section class="wrapper style1 align-center">
    <div class="inner medium">
      <h2>Get in touch</h2>
      <form method="post" action="#">
        <div class="fields">
          <div class="field half">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" value="" />
          </div>
          <div class="field half">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" value="" />
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
        </div>
        <ul class="actions special">
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
      <p>&copy; by Shenae Simmons
      <br/>Design: <a href="https://html5up.net">HTML5 UP</a></p>
    </div>
  </footer>

</div>

    </div>
  );
}

export default App;
