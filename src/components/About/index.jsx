import React, { useState, useEffect } from 'react';
import aboutImg from "../../assets/img/profile/selva_g_profile.jpg";
function About() {

  const [age, setAge] = useState(null);

  useEffect(() => {
    const birthYear = 2001;
    const birthMonth = 10; // October
    const birthDay = 7;    // your full birthday
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthYear;

    const hasBirthdayPassed =
      today.getMonth() + 1 > birthMonth ||
      (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);

    if (!hasBirthdayPassed) {
      calculatedAge -= 1;
    }

    setAge(calculatedAge);
  }, []);
  return (
    <section id="about" class="about section light-background">
      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div class="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2"></path>
          </svg>
        </div>
        <p>
        My goal is to build web experiences that are visually appealing, highly functional, and optimized for performance — with a focus on user satisfaction and usability.
        </p>
      </div>
      {/* End Section Title */}
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-center">
          <div class="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
            <div class="about-image">
              <img src={aboutImg} alt="Profile Image" class="img-fluid rounded-4"/>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div class="about-content">
              <span class="subtitle">About Me</span>

              <h2>Front-End Developer with a Focus on Modern Web</h2>

              <p class="lead mb-4">
                I build scalable and efficient front-end applications using frameworks like React, Vue, and Next.js. My goal is to write clean, reusable code that powers engaging user experiences.
              </p>

              <p class="mb-4">
                I’m constantly learning and exploring new tools, from CSS frameworks like Tailwind to performance optimization techniques that make the web faster and more accessible.
              </p>

              <div class="personal-info">
                <div class="row g-4">
                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Name</span>
                      <span class="value">Selvaganesh</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Phone</span>
                      <span class="value">9488793821</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Age</span>
                      <span class="value">{age} Years</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Email</span>
                      <span class="value">selvaganeshselva01@gmail.com</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Occupation</span>
                      <span class="value">Software Developer</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Nationality</span>
                      <span class="value">Indian</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="signature mt-4">
                {/* <div class="signature-image">
                  <img src="/src/assets/img/misc/signature-1.webp" alt="" class="img-fluid"/>
                </div> */}
                <div class="signature-info">
                  <h4>Selvaganesh</h4>
                  <p>Designing with Purpose. Developing with Passion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About