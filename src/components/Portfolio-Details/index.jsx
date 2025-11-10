import React from 'react'
import { Link } from 'react-router-dom'
import portDtsImg1 from "../../assets/img/portfolio/portfolio-1.webp";
import portDtsImg2 from "../../assets/img/portfolio/portfolio-10.webp";
import portDtsImg3 from "../../assets/img/portfolio/portfolio-7.webp";
import portDtsImg4 from "../../assets/img/portfolio/portfolio-4.webp";
import portDtsImg5 from "../../assets/img/portfolio/portfolio-5.webp";
import portDtsImg6 from "../../assets/img/portfolio/portfolio-11.webp";
import portDtsImg7 from "../../assets/img/portfolio/portfolio-8.webp";
import profile from "../../assets/img/person/person-f-5.webp";

function PortfolioDetailsComponent() {
  return (
    <main class="main">

    <div class="page-title">
      <div class="breadcrumbs">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to={"/"}><i class="bi bi-house"></i> Home</Link></li>
            {/* <li class="breadcrumb-item"><a href="#">Category</a></li> */}
            <li class="breadcrumb-item active current">Portfolio Details</li>
          </ol>
        </nav>
      </div>

      <div class="title-wrapper">
        <h1>Portfolio Details</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
    </div>

    <section id="portfolio-details" class="portfolio-details section">

      <div class="container" data-aos="fade-up">

        <div class="row gy-4 g-lg-5">
          <div class="col-lg-6">
            <img src={portDtsImg1} class="img-fluid mb-4" alt=""/>
            <img src={portDtsImg2} class="img-fluid mb-4" alt=""/>
            <img src={portDtsImg3} class="img-fluid mb-4" alt=""/>
            <img src={portDtsImg4} class="img-fluid mb-4" alt=""/>
            <img src={portDtsImg5} class="img-fluid mb-4" alt=""/>
            <img src={portDtsImg6} class="img-fluid mb-4" alt=""/>
            <img src={portDtsImg7} class="img-fluid mb-4" alt=""/>
          </div>

          <div class="col-lg-6">

            <div class="position-sticky" style={{top: "40px"}}>
              <div class="portfolio-description">
                <h2>This is an example of portfolio details</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                </p>
                <p>
                  Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                </p>

                <div class="testimonial-item">
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img src={profile} class="testimonial-img" alt=""/>
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>

                <p>
                  Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
                </p>

                <p>
                  Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
                </p>

              </div>

              <div class="portfolio-info mt-5">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong> Web design</li>
                  <li><strong>Client</strong> ASU Company</li>
                  <li><strong>Project date</strong> 01 March, 2020</li>
                  <li><strong>Project URL</strong> <a href="#">www.example.com</a></li>
                  <li><a href="#" class="btn-visit align-self-start">Visit Website</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>

  </main> 
  )
}

export default PortfolioDetailsComponent