import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const sections = ['hero', 'about', 'resume', 'portfolio','portfolio-details', 'services', 'contact'];

function TopNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = (id) => {
    const OFFSET = 80; // Change based on your navbar height
    const el = document.getElementById(id);
    if (el) {
      const yOffset = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
      setActiveSection(id);
    }
  };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px', // Top margin helps account for navbar
      threshold: 0, // Trigger when 20% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      // Clean up observer
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header id="header" class={`header d-flex align-items-center sticky-top ${
          menuOpen ? "mobile-nav-active" : ""
        }`} >
        <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <Link to={"/"}  class="logo d-flex align-items-center me-auto me-xl-0">
        <h1 onClick={() => handleScroll('hero')} class="sitename">
          {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="45px" height="45px" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#5D3FD3" stroke="none">
<path d="M210 2775 l0 -2345 215 0 215 0 0 -215 0 -215 106 71 106 71 106 -71
107 -71 3 215 2 215 1920 0 1920 0 0 2345 0 2345 -2350 0 -2350 0 0 -2345z
m3560 -5 l0 -1920 -1565 0 -1565 0 0 1920 0 1920 1565 0 1565 0 0 -1920z m710
1425 l0 -495 -140 0 -140 0 0 495 0 495 140 0 140 0 0 -495z m0 -1420 l0 -495
-140 0 -140 0 0 495 0 495 140 0 140 0 0 -495z m0 -1425 l0 -500 -140 0 -140
0 0 500 0 500 140 0 140 0 0 -500z"/>
<path d="M1679 3480 c-104 -18 -202 -99 -239 -198 -29 -76 -25 -186 8 -254 46
-93 137 -162 236 -178 144 -23 288 55 349 188 34 73 31 189 -6 264 -64 130
-206 203 -348 178z m147 -181 c35 -32 54 -79 54 -134 0 -96 -49 -156 -132
-162 -97 -7 -150 50 -150 162 0 112 53 169 150 162 38 -3 59 -10 78 -28z"/>
<path d="M880 3165 l0 -315 85 0 85 0 0 95 0 95 50 0 c163 0 263 84 263 220 0
67 -19 115 -63 157 -59 58 -81 63 -259 63 l-161 0 0 -315z m292 148 c20 -18
24 -64 8 -94 -9 -15 -22 -19 -70 -19 l-60 0 0 65 0 65 52 0 c34 0 58 -6 70
-17z"/>
<path d="M2150 3165 l0 -315 85 0 85 0 0 96 0 95 36 -3 c34 -3 39 -8 88 -93
l52 -90 97 -3 c53 -1 97 -1 97 2 0 2 -27 51 -60 109 -33 57 -60 109 -60 114 0
5 9 18 19 27 53 48 77 168 48 239 -21 49 -67 98 -112 118 -34 16 -67 19 -207
19 l-168 0 0 -315z m311 143 c15 -28 14 -75 -2 -94 -8 -9 -32 -14 -75 -14
l-64 0 0 65 0 65 65 0 c56 0 66 -3 76 -22z"/>
<path d="M2710 3405 l0 -75 90 0 90 0 0 -240 0 -240 90 0 90 0 0 240 0 240 90
0 90 0 0 75 0 75 -270 0 -270 0 0 -75z"/>
<path d="M880 2380 l0 -320 85 0 85 0 0 120 0 120 110 0 110 0 0 70 0 69 -107
3 -108 3 0 50 0 50 133 3 133 3 -3 72 -3 72 -217 3 -218 2 0 -320z"/>
<path d="M1575 2688 c-87 -32 -166 -108 -196 -188 -60 -157 9 -334 159 -407
76 -38 191 -40 267 -5 248 114 254 463 9 583 -56 27 -187 37 -239 17z m183
-167 c63 -45 80 -169 32 -246 -40 -65 -143 -78 -203 -25 -82 72 -67 237 26
284 41 21 105 16 145 -13z"/>
<path d="M2090 2380 l0 -320 228 2 227 3 3 78 3 77 -146 0 -145 0 0 240 0 240
-85 0 -85 0 0 -320z"/>
<path d="M2622 2383 l3 -318 85 0 85 0 3 318 2 317 -90 0 -90 0 2 -317z"/>
<path d="M3120 2691 c-117 -36 -212 -143 -229 -258 -20 -141 51 -278 177 -340
48 -24 70 -28 137 -28 95 0 166 28 229 91 61 62 91 134 91 224 0 65 -5 85 -33
142 -56 114 -160 179 -285 177 -34 0 -73 -4 -87 -8z m144 -155 c76 -32 109
-147 68 -239 -24 -54 -64 -79 -130 -79 -84 0 -136 64 -136 167 0 125 92 195
198 151z"/>
</g>
</svg> */}Portfolio
        </h1>
      </Link>

      <nav id="navmenu" class="navmenu">
        <ul>
        <li><Link to={"/"} onClick={() => handleScroll('hero')} class={`cursor-pointer ${activeSection==='hero'?"active":""}`}><i class="fa-solid fa-house mx-1"></i> Home</Link></li>
        <li><Link to={"/"} onClick={() => handleScroll('about')} class={`cursor-pointer ${activeSection==='about'?"active":""}`}><i class="fa-solid fa-user mx-1"></i> About</Link></li>
        <li><Link to={"/"} onClick={() => handleScroll('resume')} class={`cursor-pointer ${activeSection==='resume'?"active":""}`}><i class="fa-solid fa-file-lines mx-1"></i> Resume</Link></li>
        <li><Link to={"/"} onClick={() => handleScroll('portfolio')} class={`cursor-pointer ${activeSection==='portfolio'?"active":activeSection==='portfolio-details' ? "active":""}`}><i class="fa-solid fa-briefcase mx-1"></i> Portfolio</Link></li>
        <li><Link to={"/"} onClick={() => handleScroll('contact')} class={`cursor-pointer ${activeSection==='contact'?"active":""}`}><i class="fa-solid fa-address-book mx-1"></i> Contact</Link></li>
      </ul>
         <i
              className={`mobile-nav-toggle d-xl-none bi ${
                menuOpen ? "bi-x" : "bi-list"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
      </nav>

      <div class="header-social-links">
        <a href="https://x.com/Selvag2001?t=PcN4_8o35Z7JvlIEmsSQcw&s=09" target="_blank" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="https://www.facebook.com/share/1JBA9K22wH/" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/selva_g_?igsh=MWxhaTNiMGFrODgyOA==" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/selvaganesh01" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/Selvaganesh0801" target="_blank" class="github"><i class="fa-brands fa-github"></i></a>
      </div>

    </div>
    </header>
    <script src="../../assets/js/main.js"></script>
    </>
  )
}

export default TopNav