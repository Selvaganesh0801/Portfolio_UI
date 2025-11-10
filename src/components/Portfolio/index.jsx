import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import GLightbox from 'glightbox';
import portImg1 from "../../assets/img/portfolio/portfolio-1.webp";
import portImg2 from "../../assets/img/portfolio/portfolio-10.webp";
import portImg3 from "../../assets/img/portfolio/portfolio-7.webp";
import portImg4 from "../../assets/img/portfolio/portfolio-4.webp";
import portImg5 from "../../assets/img/portfolio/portfolio-2.webp";
import portImg6 from "../../assets/img/portfolio/portfolio-11.webp";

function Portfolio() {
    useEffect(() => {
    // Init GLightbox
    const glightbox = GLightbox({
      selector: '.glightbox',
    });

    // Wait for images to load before initializing Isotope
    const grid = document.querySelector('.isotope-container');

    if (!grid) return;

    imagesLoaded(grid, function () {
      const iso = new Isotope(grid, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        filter: '*',
        sortBy: 'original-order',
      });

      // Filter items on click
      const filters = document.querySelectorAll('.isotope-filters li');
      filters.forEach((filter) => {
        filter.addEventListener('click', function () {
          document.querySelector('.filter-active')?.classList.remove('filter-active');
          this.classList.add('filter-active');

          const filterValue = this.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
        });
      });
    });
  }, []);
  return (
    <section id="portfolio" class="portfolio section">
      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <div class="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2"></path>
          </svg>
        </div>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
      </div>
      {/* End Section Title */}
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div class="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
            <ul class="portfolio-filters isotope-filters">
              <li data-filter="*" class="filter-active">All Work</li>
              <li data-filter=".filter-web">Web Design</li>
              <li data-filter=".filter-graphics">Graphics</li>
              <li data-filter=".filter-motion">Motion</li>
              <li data-filter=".filter-brand">Branding</li>
            </ul>
          </div>

          <div class="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

            <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={portImg1} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={portImg1} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={"/portfolio-details"} class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Design</span>
                  <h3>Modern Dashboard Interface</h3>
                  <p>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={portImg2} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={portImg2} class="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i class="bi bi-eye"></i></a>
                      <Link to={"/portfolio-details"} class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Graphics</span>
                  <h3>Creative Brand Identity</h3>
                  <p>Vestibulum id ligula porta felis euismod semper at vulputate.</p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-motion">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={portImg3} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={portImg3} class="glightbox preview-link" data-gallery="portfolio-gallery-motion"><i class="bi bi-eye"></i></a>
                      <Link to={"/portfolio-details"} class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Motion</span>
                  <h3>Product Animation Reel</h3>
                  <p>Donec ullamcorper nulla non metus auctor fringilla dapibus.</p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-brand">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={portImg4} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={portImg4} class="glightbox preview-link" data-gallery="portfolio-gallery-brand"><i class="bi bi-eye"></i></a>
                      <Link to={"/portfolio-details"} class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Branding</span>
                  <h3>Luxury Brand Package</h3>
                  <p>Aenean lacinia bibendum nulla sed consectetur elit.</p>
                </div>
              </div>
            </div>
             {/* End Portfolio Item */}
            <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={portImg5} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={portImg5} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={"/portfolio-details"} class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Design</span>
                  <h3>E-commerce Platform</h3>
                  <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={portImg6} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={portImg6} class="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i class="bi bi-eye"></i></a>
                      <Link to={"/portfolio-details"} class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Graphics</span>
                  <h3>Digital Art Collection</h3>
                  <p>Cras mattis consectetur purus sit amet fermentum.</p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
          </div>

        </div>
        {/* End Portfolio Container */}

      </div>

    </section>
  )
}

export default Portfolio