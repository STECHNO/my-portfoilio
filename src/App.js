import { useState } from 'react';
import './App.css';
import { BiSun, BiMoon } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import portfolioImg from './images/portfolio_img.png';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import project5 from './images/project5.png';
import webApp from './images/web-app.png';
import mobileApp from './images/mobile-app.png';
import web2 from './images/web2.webp';
import web3 from './images/web_development.webp';
import mobile2 from './images/mobile2.jpg';
import redux from './images/redux.png';
import bootstrap from './images/bootstrap.png';
import materialui from './images/materialui.png';
import firebase from './images/firebase.png';
import monogodb from './images/mongodb.png';
import flutter from './images/flutter.png';
import nodejs from './images/nodejs.png';
import github from './images/github.png';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <Container fluid className={`portfolio-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className={`${darkMode ? 'portfolio-header-dark' : 'portfolio-header-light'}`}>
        <div className='logo'>
          Saleheen.
        </div>
        <div className='nav-toggle-menu-wrapper'>
          <div className="nav-container">
            <nav className='portfolio-nav'>
              <ul>
                <li>
                  <a href="#home" className='animate-link' noreferrer>Home</a>
                </li>
                <li>
                  <a href="#services" className='animate-link' noreferrer>Services</a>
                </li>
                <li>
                  <a href="#projects" className='animate-link' noreferrer>Projects</a>
                </li>
                <li>
                  <a href="#skills" className='animate-link' noreferrer>Skills</a>
                </li>
                <li>
                  <a href="#contact" className='animate-link' noreferrer>Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={`${darkMode ? 'toggle-container-dark' : 'toggle-container-light'}`}>
            <button className={`toggle-btn ${darkMode ? 'toggle-btn-enabled' : 'null'}`} onClick={() => setDarkMode(true)}><BsMoon /></button>
            <button className={`toggle-btn ${darkMode ? 'null' : 'toggle-btn-enabled'}`} onClick={() => setDarkMode(false)}><BiSun /></button>
          </div>

          <div className="menu-btn-container" onClick={() => setMobileMenu(!mobileMenu)}>
            {/* <button> */}
            <span className={`menu-line ${darkMode ? 'menu-line-dark' : 'menu-line-light'}`}></span>
            <span className={`menu-line ${darkMode ? 'menu-line-dark' : 'menu-line-light'}`}></span>
            <span className={`menu-line ${darkMode ? 'menu-line-dark' : 'menu-line-light'}`}></span>
            {/* </button> */}
          </div>
        </div>
      </header>

      {mobileMenu && (
        <div className={`mobile-nav ${darkMode ? 'mobile-nav-dark' : 'mobile-nav-light'}`}>
          <div className='mobile-menu-wrapper'>
            <a onClick={() => setMobileMenu(false)} href="#home" className='animate-link' noreferrer>Home</a>
            <a onClick={() => setMobileMenu(false)} href="#services" className='animate-link' noreferrer>Services</a>
            <a onClick={() => setMobileMenu(false)} href="#projects" className='animate-link' noreferrer>Projects</a>
            <a onClick={() => setMobileMenu(false)} href="#skills" className='animate-link' noreferrer>Skills</a>
            <a onClick={() => setMobileMenu(false)} href="#contact" className='animate-link' noreferrer>Contact</a>
            <button onClick={() => window.location.href = 'mailto:saleheen.noor@gmail.com'}>Send a message</button>
          </div>
        </div>
      )}

      <section id='home'>
        <Container>
          <Row className='row-m'>
            <Col lg={6} md={6} sm={12}>
              <div className="portfolio-intro">
                <h3>Hi there, I'm Saleheen. 👋</h3>
                <h1>Full Stack MERN / Flutter <br /> Developer</h1>
                <div className='social-links'>
                  <a href='https://www.linkedin.com/in/saleheen-noor/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
                  <a href='https://github.com/STECHNO' target='_blank' rel='noreferrer'><FaGithubSquare /></a>
                  <a href='https://www.facebook.com/saleheen.noor' target='_blank' rel='noreferrer'><FaFacebookSquare /></a>
                  <a href='https://stackoverflow.com/users/6567203/saleheen-noor' target='_blank' rel='noreferrer'><FaStackOverflow /></a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="portfolio-image">
                <img src={portfolioImg} alt="Portfolio" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id='projects'>
        <Container>
          <Row className='row-m'>
            <Col lg={12} md={12} sm={12}>
              <div className={`${darkMode ? 'portfolio-headings-dark' : 'portfolio-headings-light'}`}>
                <h2>Projects</h2>
                <p>Glimpse of few projects i have worked in (Apps, Websites)</p>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="projects-wrapper pb-5">
              <div className="project-blocks">
                <div className='px-5 py-4 md:py-6'>
                  <a href="https://wonderful-northcutt-451a40.netlify.app/" target="_blank" rel='noreferrer'>
                    <div className="project-div first-project p-4">
                      <div className='project-text ifo'>
                        <p>Freelancer Client</p>
                        <h3>IFO</h3>
                      </div>
                      <div>
                        <img className='project-image' src={project1} alt="Project 1" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className='px-5 py-4 md:py-6'>
                  <a href="https://musing-benz-857a9c.netlify.app/" target="_blank" rel='noreferrer'>
                    <div className="project-div second-project p-4">
                      <div className='project-text memepad'>
                        <p>Freelancer Client</p>
                        <h3>Mempad</h3>
                      </div>
                      <div>
                        <img src={project2} alt="Project 2" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className='px-5 py-4 md:py-6'>
                  <a href="https://amazing-kalam-957bab.netlify.app/" target="_blank" rel='noreferrer'>
                    <div className="project-div third-project p-4">
                      <div className='project-text educat'>
                        <p>Freelancer Client</p>
                        <h3>Educat</h3>
                      </div>
                      <div>
                        <img src={project3} alt="Project 3" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className='px-5 py-4 md:py-6'>
                  <div className="review p-5">
                    <blockquote>
                      <q>When to use iterative development? You should use iterative development only on projects that you want to succeed.</q>
                      <br />
                      <i>– Martin Fowler</i>
                    </blockquote>
                  </div>
                </div>
                <div className='px-5 py-4 md:py-6'>
                  <div className="review p-5">
                    <blockquote>
                      <q>Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.</q>
                      <br />
                      <i>– Antoine de Saint-Exupery</i>
                    </blockquote>
                  </div>
                </div>
                <div className='px-5 py-4 md:py-6'>
                  <a href="https://zen-swanson-bf38c1.netlify.app/" target="_blank" rel='noreferrer'>
                    <div className="project-div fourth-project p-4">
                      <div className='project-text polkadot'>
                        <p>Freelancer Client</p>
                        <h3>Polkadot</h3>
                      </div>
                      <div>
                        <img src={project4} alt="Project 4" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className='px-5 py-4 md:py-6'>
                  <a href="https://optimistic-bartik-53700e.netlify.app/" target="_blank" rel='noreferrer'>
                    <div className="project-div fifth-project p-4">
                      <div className='project-text brt'>
                        <p>Freelancer Client</p>
                        <h3>BRT</h3>
                      </div>
                      <div>
                        <img src={project5} alt="Project 5" />
                      </div>
                    </div>
                  </a>
                </div>
                {/* <div className='px-5 py-4 md:py-6'>
                  <a href="_#" target="_blank" rel='noreferrer'>
                    <div className="project-div sixth-project p-4">

                    </div>
                  </a>
                </div> */}
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section id='services'>
        <Container>
          <Row className=''>
            <Col lg={12} md={12} sm={12}>
              <div className={`${darkMode ? 'portfolio-headings-dark' : 'portfolio-headings-light'}`}>
                <h2>Services</h2>
                <p>For those who know what they’re looking for</p>
              </div>
            </Col>
          </Row>
          <Row className='row-m'>
            <Col lg={6} md={6} sm={12}>
              <div className="services">
                <div>
                  <img src={web2} alt="Web Application" />
                </div>
                <h3>Web Application</h3>
                <p>Front-end development</p>
                <p>Responsive & Mobile Websites</p>
                <p>Firebase Auth/Cloud</p>
                <p>REST APIs</p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="services res-mt">
                <div>
                  <img src={mobile2} alt="Mobile Application" />
                </div>
                <h3>Mobile Application</h3>
                <p>Responsive</p>
                <p>Firebase Auth/Cloud</p>
              </div>
            </Col>
            {/* <Col lg={4} md={4} sm={12}>
              <div className="services">
                <h3>DevOps</h3>
                <p>AWS</p>
                <p>VPS Server</p>
                <p>Web Hosting</p>
                <p>SSL Certificate</p>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>

      <section id='skills'>
        <Container>
          <Row className=''>
            <Col lg={12} md={12} sm={12}>
              <div className={`${darkMode ? 'portfolio-headings-dark' : 'portfolio-headings-light'}`}>
                <h2>Skills</h2>
              </div>
            </Col>
          </Row>
          <Row className='row-m'>
            <Col lg={12} md={12} sm={12}>
              <div className="skills-and-tools">
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image-react skill-div-h'>
                    <svg version="1.1" id="Laag_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 2500 2246" xmlSpace="preserve" className="react">
                      <path d="M1963.1 778c-23.5-8.1-47.2-15.5-71-22.4 4-16.1 7.6-32.2 11-48.4 53.8-261 18.6-471.3-101.4-540.5-115.1-66.4-303.4 2.8-493.5 
                    168.3-18.7 16.3-37.1 33.2-54.9 50.4-12-11.5-24.2-22.7-36.6-33.8-199.3-176.9-399-251.5-518.9-182.1-115 66.6-149.1 264.2-100.7 511.6 
                    4.8 24.5 10.3 48.9 16.3 73.1-28.3 8-55.6 16.6-81.7 25.7-233.7 81.5-382.8 209.2-382.8 341.6 0 136.8 160.1 273.9 403.5 357.1 19.7 6.7 
                    39.6 12.9 59.7 18.7-6.5 26.1-12.3 52.4-17.3 78.8-46.2 243.1-10.1 436 104.6 502.2 118.5 68.3 317.3-1.9 510.9-171.1 15.3-13.4 30.7-27.6 
                    46-42.4 19.4 18.7 39.3 36.8 59.6 54.4 187.5 161.4 372.7 226.5 487.3 160.2 118.4-68.5 156.8-275.8 106.9-528.1-3.8-19.3-8.3-38.9-13.2-59 
                    14-4.1 27.7-8.4 41-12.8 253-83.8 417.5-219.3 417.5-357.9 0-133-154-261.5-392.3-343.6zM1370 406.1c162.9-141.8 315.2-197.7 384.5-157.7 
                    73.9 42.6 102.6 214.5 56.2 439.8-3 14.7-6.4 29.3-9.9 43.9-91.5-21.1-190.9-36.8-295-46.6-60.6-86.3-123.5-164.8-186.5-232.8 16.4-16 
                    33.4-31.5 50.7-46.6zm-569.6 828.5c20 38.5 40.8 76.6 62.6 114.2 22.2 38.3 45.3 76.1 69.3 113.3-72.3-8.1-140.4-19-203.4-32.7 19.4-63 
                    43.4-128.3 71.5-194.8zm-.2-221.7c-27.4-65.1-50.9-129.1-70.1-190.9 63-14.1 130.1-25.6 200-34.3-23.4 36.5-46 73.6-67.6 111.2-21.6 
                    37.4-42.4 75.5-62.3 114zm50.2 110.8c29-60.5 60.3-119.8 93.9-177.9 33.5-58.1 69.2-114.9 107-170.3 65.6-5 132.9-7.6 200.9-7.6 68.3 0 
                    135.7 2.6 201.3 7.6 37.4 55.3 72.9 111.9 106.3 169.7 33.6 58 65.3 117 95.1 177-29.5 60.6-61.1 120.2-94.8 178.6-33.4 58.1-68.7 115-105.9 
                    170.8-65.5 4.7-133.1 7.1-202.1 7.1-68.7 0-135.5-2.1-199.8-6.3-38.1-55.6-74.1-112.7-107.8-171.1-33.6-57.8-65-117.1-94.1-177.6zm791.3 
                    224.4c22.2-38.5 43.5-77.5 64-116.9 29.5 67.2 54.4 132.3 74.1 194.1-64 14.6-133.1 26.4-205.8 35.1 23.3-37 
                    45.8-74.4 67.7-112.3zm63.1-335.2c-20.4-38.7-41.6-77-63.5-114.8-21.6-37.3-43.9-74.1-67.1-110.3 70.4 8.9 
                    137.9 20.7 201.2 35.2-19 60.9-42.7 124.6-70.6 189.9zm-451.6-492.8c43.5 47.1 87 99.7 129.8 156.8-86.9-4.1-173.9-4.1-260.8-.1 42.9-56.6 86.8-109.1 
                    131-156.7zM744.9 251.2c73.8-42.7 237.1 18.2 409.1 171 11 9.8 22 20 33.1 30.6-64.1 68.8-127.4 147.2-188 
                    232.6-103.8 9.6-203.1 25.1-294.4 45.8-5.6-22.5-10.7-45.2-15.2-68-41.5-212-13.9-371.9 55.4-412zM637.3 
                    1406.4c-18.3-5.2-36.5-10.9-54.5-17.1-107.6-36.8-196.4-84.6-257.4-136.7-54.7-46.9-82.4-93.4-82.4-131.2 
                    0-80.3 119.8-182.8 319.6-252.5 25.1-8.7 50.4-16.7 75.9-23.9 27.6 89.8 63.8 183.7 107.5 278.7-44.1 
                    96.4-80.8 191.8-108.7 282.7zm510.8 429.6c-85.6 74.8-171.4 127.9-247 154.6-67.9 24-122 24.7-154.7 
                    5.8-69.6-40.1-98.5-195.1-59.1-403 4.7-24.6 10.1-49 16.1-73.3 90.4 20 190.4 34.4 297.4 43 61 85.9 
                    125 164.9 189.4 234-13.7 13.5-27.8 26.4-42.1 38.9zm107.7-106.5c-44.7-48.2-89.2-101.5-132.8-158.9 
                    42.2 1.7 85.3 2.5 129.1 2.5 45 0 89.4-1 133.2-3-43 58.5-86.4 111.9-129.5 159.4zm572.4 131.2c-13.1 
                    70.8-39.6 118.1-72.2 137-69.5 40.3-218.3-12.1-378.6-150.1-18.4-15.8-36.9-32.7-55.5-50.6 62.2-68 
                    124.3-147.1 185-234.9 106.7-9.5 207.5-24.9 298.8-46.1 4.5 18.2 8.5 36 11.9 53.4 22 111.6 25.2 
                    212.4 10.6 291.3zm80-470.8c-12.1 4-24.5 7.9-37.1 11.6-27.9-88.4-65.6-182.4-111.7-279.5 44-94.8 
                    80.2-187.6 107.4-275.5 22.6 6.5 44.5 13.4 65.6 20.7 204.2 70.3 328.7 174.2 328.7 254.3 0 85.3-134.5 196-352.9 268.4z" />
                      <path d="M1252.1 924.4c108.8 0 197 88.2 197 197s-88.2 197-197 197-197-88.2-197-197 88.2-197 197-197" />
                    </svg>
                  </div>
                  <div>React</div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image skill-div-h'>
                    <img src={redux} alt="Redux" />
                  </div>
                  <div>Redux</div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image skill-div-h'>
                    <img src={bootstrap} alt="bootstrap" />
                  </div>
                  <div>Bootstrap</div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image skill-div-h'>
                    <img src={materialui} alt="materialui" />
                  </div>
                  <div>Material-UI</div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image skill-div-h'>
                    <img src={firebase} alt="firebase" />
                  </div>
                  <div>Firebase</div>
                </div>
                {/* <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image skill-div-h'>
                    <img src={firebase} alt="firebase" />
                  </div>
                  <div>Axios</div>
                </div> */}
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image-mongodb py-4'>
                    <svg viewBox="0 0 100 25">
                      <g>
                        <path
                          d="M11.71 10.41C10.31 4.33 7.39 2.71 6.65 1.57 6.34 1.06 6.07 0.54 5.84 0 5.8 0.54 5.73 0.88 5.26 1.29 4.32 2.11 0.35 5.3 0.01 12.21 -0.3 18.65 4.82 22.62 5.5 23.03 6.02 23.28 6.65 23.03 6.96 22.8 9.43 21.13 12.8 16.69 11.71 10.41"
                          fill="#10AA50"
                        />
                        <path
                          d="M5.95 19.5C5.82 21.08 5.72 22 5.38 22.9 5.38 22.9 5.61 24.41 5.76 26L6.32 26C6.45 24.88 6.65 23.76 6.92 22.66 6.21 22.33 5.98 20.89 5.95 19.5Z"
                          fill={`${darkMode ? 'white' : 'black'}`}
                        />
                        <path
                          d="M7.03 22.75L7.03 22.75C6.34 22.43 6.14 20.94 6.11 19.55 6.28 17.25 6.33 14.95 6.26 12.64 6.22 11.44 6.28 1.46 5.96 0 6.18 0.49 6.43 0.97 6.7 1.44 7.44 2.59 10.33 4.21 11.71 10.32 12.79 16.61 9.47 21.06 7.03 22.75Z"
                          fill="#12924F"
                        />
                        <path
                          d="M98.46 20.65C97.61 20.65 96.93 19.97 96.92 19.12 96.92 18.28 97.6 17.6 98.45 17.59 99.29 17.58 99.99 18.25 100 19.1 100.01 19.51 99.85 19.9 99.56 20.2 99.27 20.49 98.87 20.65 98.46 20.65L98.46 20.65ZM98.46 17.73C97.89 17.72 97.38 18.06 97.16 18.58 96.94 19.1 97.06 19.7 97.46 20.1 97.86 20.5 98.46 20.62 98.98 20.41 99.51 20.19 99.85 19.69 99.85 19.12 99.86 18.75 99.72 18.39 99.45 18.13 99.19 17.87 98.83 17.72 98.46 17.73L98.46 17.73ZM98.83 20.08L98.44 19.23 98.12 19.23 98.12 20.08 97.88 20.08 97.88 18.15 98.46 18.15C98.88 18.15 99.06 18.33 99.06 18.69 99.06 18.97 98.93 19.15 98.68 19.21L99.09 20.08 98.83 20.08ZM98.12 19.03L98.46 19.03C98.73 19.03 98.84 18.94 98.84 18.69 98.84 18.45 98.74 18.36 98.43 18.36L98.12 18.36 98.12 19.03Z"
                          fill={`${darkMode ? 'white' : 'black'}`}
                        />
                        <path
                          d="M75.97 19.27C76.38 19.59 77.2 19.73 77.92 19.73 78.85 19.73 79.76 19.55 80.65 18.75 81.56 17.92 82.19 16.66 82.19 14.64 82.19 12.71 81.45 11.13 79.94 10.21 79.08 9.68 77.97 9.47 76.71 9.47 76.35 9.47 75.97 9.48 75.76 9.58 75.67 9.65 75.61 9.75 75.59 9.85 75.55 10.2 75.55 12.83 75.55 14.38 75.55 15.97 75.55 18.19 75.59 18.46 75.61 18.7 75.72 19.1 75.97 19.27M72.1 8.6C72.43 8.6 73.68 8.66 74.27 8.66 75.36 8.66 76.11 8.6 78.15 8.6 79.86 8.6 81.29 9.06 82.32 9.94 83.57 11.02 84.23 12.52 84.23 14.34 84.23 16.93 83.05 18.42 81.86 19.27 80.68 20.15 79.14 20.65 76.95 20.65 75.79 20.65 73.79 20.61 72.12 20.59L72.09 20.59C72.01 20.44 72.23 19.84 72.36 19.82 72.82 19.77 72.94 19.75 73.15 19.67 73.5 19.52 73.58 19.34 73.62 18.71 73.68 17.52 73.66 16.1 73.66 14.49 73.66 13.34 73.68 11.1 73.64 10.39 73.58 9.79 73.33 9.64 72.82 9.52 72.46 9.45 72.1 9.39 71.73 9.35 71.7 9.24 71.99 8.72 72.09 8.6"
                          fill={`${darkMode ? 'white' : 'black'}`}
                        />
                        <path
                          d="M89 9.54C88.93 9.56 88.83 9.75 88.83 9.85 88.81 10.54 88.79 12.34 88.79 13.58 88.8 13.63 88.84 13.67 88.89 13.68 89.14 13.7 89.76 13.72 90.28 13.72 91.01 13.72 91.43 13.62 91.67 13.51 92.28 13.2 92.57 12.53 92.57 11.8 92.57 10.13 91.41 9.5 89.69 9.5 89.46 9.5 89.23 9.51 89 9.54M93.38 17.2C93.38 15.52 92.14 14.56 89.89 14.56 89.79 14.56 89.07 14.54 88.9 14.58 88.85 14.6 88.79 14.63 88.79 14.67 88.79 15.88 88.77 17.81 88.83 18.58 88.87 18.9 89.1 19.36 89.39 19.5 89.69 19.67 90.39 19.71 90.87 19.71 92.2 19.71 93.38 18.96 93.38 17.2M85.52 8.6C85.69 8.6 86.21 8.66 87.52 8.66 88.75 8.66 89.75 8.62 90.95 8.62 92.43 8.62 94.48 9.16 94.48 11.38 94.48 12.47 93.71 13.35 92.7 13.77 92.65 13.79 92.65 13.83 92.7 13.85 94.13 14.21 95.38 15.09 95.38 16.78 95.38 18.43 94.36 19.46 92.88 20.11 91.97 20.51 90.85 20.65 89.72 20.65 88.85 20.65 86.52 20.56 85.23 20.57 85.1 20.51 85.35 19.9 85.47 19.8 85.77 19.8 86.06 19.75 86.34 19.67 86.81 19.55 86.86 19.4 86.92 18.71 86.96 18.12 86.96 15.99 86.96 14.48 86.96 12.41 86.98 11.02 86.96 10.33 86.94 9.79 86.75 9.62 86.38 9.52 86.09 9.46 85.61 9.41 85.22 9.35 85.13 9.25 85.42 8.68 85.52 8.6"
                          fill={`${darkMode ? 'white' : 'black'}`}
                        />
                        <path
                          d="M15.95 20.65C15.9 20.52 15.88 20.39 15.89 20.26 15.89 20.17 15.91 20.08 15.95 20 16.2 19.96 16.45 19.91 16.7 19.85 17.05 19.76 17.18 19.57 17.2 19.13 17.25 18.09 17.26 16.15 17.24 14.78L17.24 14.74C17.24 14.59 17.24 14.39 17.05 14.25 16.73 14.05 16.38 13.89 16.02 13.79 15.86 13.74 15.76 13.66 15.77 13.56 15.77 13.46 15.88 13.34 16.09 13.3 16.66 13.24 18.14 12.89 18.72 12.62 18.78 12.7 18.81 12.79 18.8 12.89 18.8 12.95 18.79 13.02 18.78 13.08 18.76 13.27 18.75 13.49 18.75 13.71 18.75 13.77 18.79 13.81 18.84 13.83 18.89 13.85 18.95 13.83 18.99 13.8 20.1 12.93 21.09 12.62 21.6 12.62 22.44 12.62 23.09 13.02 23.59 13.84 23.62 13.88 23.66 13.91 23.71 13.91 23.75 13.91 23.79 13.89 23.81 13.85 24.83 13.08 25.84 12.62 26.52 12.62 28.11 12.62 29.07 13.81 29.07 15.81 29.07 16.38 29.06 17.11 29.06 17.79 29.05 18.39 29.05 18.95 29.05 19.33 29.05 19.43 29.17 19.69 29.36 19.74 29.6 19.85 29.93 19.91 30.36 19.99L30.38 19.99C30.41 20.1 30.34 20.55 30.28 20.64 30.17 20.64 30.02 20.63 29.84 20.62 29.51 20.6 29.05 20.58 28.53 20.58 27.46 20.58 26.91 20.6 26.38 20.63 26.34 20.5 26.33 20.08 26.38 19.99 26.59 19.95 26.81 19.9 27.03 19.84 27.36 19.73 27.46 19.58 27.48 19.13 27.49 18.81 27.55 16.01 27.44 15.35 27.34 14.66 26.82 13.85 25.68 13.85 25.26 13.85 24.58 14.02 23.93 14.52 23.89 14.56 23.86 14.62 23.86 14.68L23.86 14.69C23.94 15.05 23.94 15.47 23.94 16.11 23.94 16.47 23.94 16.85 23.94 17.23 23.93 18 23.93 18.73 23.94 19.29 23.94 19.66 24.17 19.75 24.35 19.82 24.45 19.85 24.53 19.86 24.61 19.88 24.76 19.92 24.92 19.96 25.16 20 25.19 20.16 25.19 20.32 25.15 20.48 25.14 20.54 25.11 20.6 25.08 20.65 24.49 20.63 23.88 20.61 23.01 20.61 22.75 20.61 22.31 20.62 21.93 20.63 21.62 20.64 21.33 20.65 21.16 20.65 21.12 20.54 21.1 20.43 21.1 20.31 21.1 20.2 21.12 20.09 21.17 20L21.4 19.96C21.61 19.92 21.78 19.89 21.95 19.85 22.24 19.75 22.35 19.6 22.37 19.23 22.42 18.37 22.47 15.9 22.35 15.29 22.14 14.29 21.57 13.79 20.66 13.79 20.13 13.79 19.46 14.05 18.91 14.46 18.8 14.56 18.74 14.71 18.75 14.85 18.75 15.15 18.75 15.5 18.75 15.87 18.75 17.11 18.74 18.66 18.77 19.33 18.79 19.53 18.86 19.78 19.25 19.86 19.33 19.89 19.48 19.91 19.65 19.94 19.75 19.96 19.85 19.98 19.96 20 20 20.21 19.98 20.44 19.91 20.65 19.74 20.65 19.53 20.64 19.29 20.63 18.93 20.61 18.47 20.59 17.95 20.59 17.34 20.59 16.92 20.61 16.58 20.63 16.35 20.64 16.15 20.65 15.95 20.65"
                          fill={`${darkMode ? 'white' : 'black'}`}
                        />
                        <path
                          d="M35.36 13.42C35.04 13.41 34.72 13.5 34.44 13.68 33.77 14.08 33.43 14.88 33.43 16.07 33.43 18.28 34.55 19.83 36.16 19.83 36.59 19.84 37.01 19.69 37.34 19.41 37.83 19.02 38.1 18.2 38.1 17.07 38.1 14.89 37 13.42 35.36 13.42M35.67 20.65C32.77 20.65 31.73 18.54 31.73 16.58 31.73 15.2 32.3 14.13 33.42 13.38 34.21 12.9 35.11 12.64 36.04 12.62 38.26 12.62 39.81 14.19 39.81 16.44 39.81 17.98 39.19 19.18 38.02 19.94 37.46 20.28 36.48 20.65 35.67 20.65"
                          fill={`${darkMode ? 'white' : 'black'}`}
                        />
                        <path
                          d="M65.17 13.42C64.84 13.41 64.52 13.5 64.25 13.68 63.57 14.08 63.23 14.88 63.23 16.07 63.23 18.28 64.35 19.83 65.96 19.83 66.4 19.84 66.82 19.69 67.15 19.41 67.64 19.02 67.9 18.2 67.9 17.07 67.9 14.89 66.81 13.42 65.17 13.42M65.48 20.65C62.57 20.65 61.54 18.54 61.54 16.58 61.54 15.2 62.11 14.13 63.23 13.38 64.02 12.9 64.92 12.64 65.85 12.62 68.07 12.62 69.62 14.19 69.62 16.44 69.62 17.98 69 19.18 67.83 19.94 67.26 20.28 66.29 20.65 65.48 20.65"
                          fill={`${darkMode ? 'white' : 'black'}`}
                        />
                        <path
                          d="M55.3 13.35C54.4 13.35 53.81 14.06 53.81 15.14 53.81 16.22 54.31 17.51 55.73 17.51 55.98 17.51 56.42 17.41 56.64 17.17 56.97 16.87 57.19 16.26 57.19 15.61 57.19 14.2 56.49 13.35 55.31 13.35M55.19 20.84C54.93 20.84 54.68 20.9 54.46 21.02 53.74 21.47 53.4 21.92 53.4 22.44 53.4 22.92 53.6 23.31 54.01 23.66 54.52 24.08 55.2 24.28 56.09 24.28 57.86 24.28 58.64 23.35 58.64 22.44 58.64 21.8 58.32 21.37 57.64 21.13 57.12 20.94 56.25 20.84 55.19 20.84M55.31 25.24C54.25 25.24 53.49 25.02 52.84 24.53 52.21 24.05 51.92 23.34 51.92 22.85 51.93 22.54 52.05 22.23 52.27 22 52.45 21.8 52.88 21.41 53.87 20.75 53.9 20.74 53.92 20.71 53.92 20.67 53.92 20.64 53.89 20.6 53.86 20.59 53.04 20.29 52.8 19.79 52.72 19.52 52.72 19.51 52.72 19.49 52.72 19.48 52.69 19.37 52.67 19.27 52.82 19.17 52.93 19.09 53.11 18.98 53.31 18.87 53.58 18.72 53.85 18.55 54.1 18.37 54.12 18.34 54.14 18.3 54.13 18.26 54.12 18.22 54.1 18.19 54.06 18.17 52.86 17.78 52.26 16.9 52.26 15.57 52.25 14.73 52.66 13.93 53.37 13.44 53.85 13.07 55.06 12.62 55.85 12.62L55.9 12.62C56.7 12.64 57.16 12.8 57.79 13.03 58.15 13.16 58.53 13.22 58.91 13.2 59.58 13.2 59.87 13 60.13 12.76 60.17 12.86 60.19 12.98 60.19 13.09 60.21 13.37 60.13 13.64 59.97 13.87 59.84 14.06 59.51 14.19 59.22 14.19 59.19 14.19 59.16 14.19 59.13 14.19 58.97 14.18 58.82 14.15 58.67 14.11L58.59 14.14C58.57 14.17 58.58 14.21 58.6 14.26 58.61 14.27 58.61 14.28 58.61 14.29 58.67 14.53 58.71 14.77 58.72 15.02 58.72 16.41 58.16 17.02 57.55 17.47 56.97 17.9 56.27 18.17 55.53 18.23L55.53 18.23C55.52 18.23 55.44 18.24 55.3 18.25 55.21 18.26 55.09 18.27 55.07 18.27L55.05 18.27C54.92 18.31 54.58 18.47 54.58 18.77 54.58 19.01 54.73 19.32 55.48 19.38L55.96 19.41C56.94 19.48 58.17 19.56 58.75 19.75 59.54 20.02 60.06 20.76 60.04 21.57 60.04 22.82 59.13 24 57.61 24.72 56.89 25.05 56.1 25.23 55.31 25.22"
                          fill={`${darkMode ? 'white' : 'black'}`}
                        />
                        <path
                          d="M50.73 19.89C50.3 19.83 49.99 19.77 49.63 19.6 49.55 19.53 49.51 19.44 49.49 19.33 49.45 18.75 49.45 17.04 49.45 15.92 49.45 15.01 49.3 14.21 48.91 13.64 48.45 13 47.79 12.62 46.94 12.62 46.19 12.62 45.19 13.13 44.36 13.83 44.34 13.85 44.21 13.97 44.21 13.78 44.22 13.6 44.25 13.22 44.26 12.98 44.28 12.85 44.23 12.71 44.14 12.62 43.6 12.89 42.08 13.25 41.51 13.31 41.1 13.39 41 13.78 41.44 13.92L41.44 13.92C41.79 14.01 42.13 14.16 42.44 14.35 42.61 14.48 42.59 14.67 42.59 14.82 42.61 16.1 42.61 18.05 42.55 19.11 42.53 19.53 42.42 19.68 42.11 19.76L42.14 19.75C41.9 19.81 41.66 19.85 41.42 19.88 41.33 19.98 41.33 20.53 41.42 20.64 41.62 20.64 42.6 20.59 43.41 20.59 44.53 20.59 45.11 20.64 45.4 20.64 45.51 20.51 45.55 20 45.47 19.88 45.21 19.87 44.94 19.83 44.68 19.77 44.37 19.69 44.3 19.54 44.28 19.2 44.24 18.31 44.24 16.41 44.24 15.12 44.24 14.76 44.33 14.59 44.45 14.49 44.84 14.15 45.47 13.92 46.03 13.92 46.57 13.92 46.94 14.09 47.21 14.32 47.52 14.59 47.72 14.98 47.76 15.39 47.84 16.11 47.82 17.56 47.82 18.81 47.82 19.49 47.76 19.66 47.51 19.74 47.39 19.79 47.08 19.85 46.72 19.89 46.6 20 46.64 20.53 46.72 20.65 47.22 20.65 47.8 20.59 48.65 20.59 49.71 20.59 50.38 20.65 50.65 20.65 50.77 20.51 50.81 20.02 50.73 19.89"
                          fill={`${darkMode ? 'white' : 'black'}`}
                        />
                      </g>
                    </svg>
                  </div>
                  <div>MongoDb</div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image-react skill-div-h'>
                    <svg version="1.1" id="Laag_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 2500 2246" xmlSpace="preserve" className="react">
                      <path d="M1963.1 778c-23.5-8.1-47.2-15.5-71-22.4 4-16.1 7.6-32.2 11-48.4 53.8-261 18.6-471.3-101.4-540.5-115.1-66.4-303.4 2.8-493.5 
                    168.3-18.7 16.3-37.1 33.2-54.9 50.4-12-11.5-24.2-22.7-36.6-33.8-199.3-176.9-399-251.5-518.9-182.1-115 66.6-149.1 264.2-100.7 511.6 
                    4.8 24.5 10.3 48.9 16.3 73.1-28.3 8-55.6 16.6-81.7 25.7-233.7 81.5-382.8 209.2-382.8 341.6 0 136.8 160.1 273.9 403.5 357.1 19.7 6.7 
                    39.6 12.9 59.7 18.7-6.5 26.1-12.3 52.4-17.3 78.8-46.2 243.1-10.1 436 104.6 502.2 118.5 68.3 317.3-1.9 510.9-171.1 15.3-13.4 30.7-27.6 
                    46-42.4 19.4 18.7 39.3 36.8 59.6 54.4 187.5 161.4 372.7 226.5 487.3 160.2 118.4-68.5 156.8-275.8 106.9-528.1-3.8-19.3-8.3-38.9-13.2-59 
                    14-4.1 27.7-8.4 41-12.8 253-83.8 417.5-219.3 417.5-357.9 0-133-154-261.5-392.3-343.6zM1370 406.1c162.9-141.8 315.2-197.7 384.5-157.7 
                    73.9 42.6 102.6 214.5 56.2 439.8-3 14.7-6.4 29.3-9.9 43.9-91.5-21.1-190.9-36.8-295-46.6-60.6-86.3-123.5-164.8-186.5-232.8 16.4-16 
                    33.4-31.5 50.7-46.6zm-569.6 828.5c20 38.5 40.8 76.6 62.6 114.2 22.2 38.3 45.3 76.1 69.3 113.3-72.3-8.1-140.4-19-203.4-32.7 19.4-63 
                    43.4-128.3 71.5-194.8zm-.2-221.7c-27.4-65.1-50.9-129.1-70.1-190.9 63-14.1 130.1-25.6 200-34.3-23.4 36.5-46 73.6-67.6 111.2-21.6 
                    37.4-42.4 75.5-62.3 114zm50.2 110.8c29-60.5 60.3-119.8 93.9-177.9 33.5-58.1 69.2-114.9 107-170.3 65.6-5 132.9-7.6 200.9-7.6 68.3 0 
                    135.7 2.6 201.3 7.6 37.4 55.3 72.9 111.9 106.3 169.7 33.6 58 65.3 117 95.1 177-29.5 60.6-61.1 120.2-94.8 178.6-33.4 58.1-68.7 115-105.9 
                    170.8-65.5 4.7-133.1 7.1-202.1 7.1-68.7 0-135.5-2.1-199.8-6.3-38.1-55.6-74.1-112.7-107.8-171.1-33.6-57.8-65-117.1-94.1-177.6zm791.3 
                    224.4c22.2-38.5 43.5-77.5 64-116.9 29.5 67.2 54.4 132.3 74.1 194.1-64 14.6-133.1 26.4-205.8 35.1 23.3-37 
                    45.8-74.4 67.7-112.3zm63.1-335.2c-20.4-38.7-41.6-77-63.5-114.8-21.6-37.3-43.9-74.1-67.1-110.3 70.4 8.9 
                    137.9 20.7 201.2 35.2-19 60.9-42.7 124.6-70.6 189.9zm-451.6-492.8c43.5 47.1 87 99.7 129.8 156.8-86.9-4.1-173.9-4.1-260.8-.1 42.9-56.6 86.8-109.1 
                    131-156.7zM744.9 251.2c73.8-42.7 237.1 18.2 409.1 171 11 9.8 22 20 33.1 30.6-64.1 68.8-127.4 147.2-188 
                    232.6-103.8 9.6-203.1 25.1-294.4 45.8-5.6-22.5-10.7-45.2-15.2-68-41.5-212-13.9-371.9 55.4-412zM637.3 
                    1406.4c-18.3-5.2-36.5-10.9-54.5-17.1-107.6-36.8-196.4-84.6-257.4-136.7-54.7-46.9-82.4-93.4-82.4-131.2 
                    0-80.3 119.8-182.8 319.6-252.5 25.1-8.7 50.4-16.7 75.9-23.9 27.6 89.8 63.8 183.7 107.5 278.7-44.1 
                    96.4-80.8 191.8-108.7 282.7zm510.8 429.6c-85.6 74.8-171.4 127.9-247 154.6-67.9 24-122 24.7-154.7 
                    5.8-69.6-40.1-98.5-195.1-59.1-403 4.7-24.6 10.1-49 16.1-73.3 90.4 20 190.4 34.4 297.4 43 61 85.9 
                    125 164.9 189.4 234-13.7 13.5-27.8 26.4-42.1 38.9zm107.7-106.5c-44.7-48.2-89.2-101.5-132.8-158.9 
                    42.2 1.7 85.3 2.5 129.1 2.5 45 0 89.4-1 133.2-3-43 58.5-86.4 111.9-129.5 159.4zm572.4 131.2c-13.1 
                    70.8-39.6 118.1-72.2 137-69.5 40.3-218.3-12.1-378.6-150.1-18.4-15.8-36.9-32.7-55.5-50.6 62.2-68 
                    124.3-147.1 185-234.9 106.7-9.5 207.5-24.9 298.8-46.1 4.5 18.2 8.5 36 11.9 53.4 22 111.6 25.2 
                    212.4 10.6 291.3zm80-470.8c-12.1 4-24.5 7.9-37.1 11.6-27.9-88.4-65.6-182.4-111.7-279.5 44-94.8 
                    80.2-187.6 107.4-275.5 22.6 6.5 44.5 13.4 65.6 20.7 204.2 70.3 328.7 174.2 328.7 254.3 0 85.3-134.5 196-352.9 268.4z" />
                      <path d="M1252.1 924.4c108.8 0 197 88.2 197 197s-88.2 197-197 197-197-88.2-197-197 88.2-197 197-197" />
                    </svg>
                  </div>
                  <div>React-Native</div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image-flutter skill-div-h'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={120}
                      height={60}
                    >
                      <g transform="matrix(.038819 0 0 .038819 -.560501 8.162276)">
                        <defs>
                          <path
                            id="A"
                            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                          />
                          <path
                            id="B"
                            d="M79.564 38.728q-.812 0-1.518-.262-.68-.262-1.152-.707-.524-.497-.785-1.152-.262-.654-.262-1.597v-7.827h-2.33v-2.016h2.33v-3.77h2.225v3.77h3.246v2.016h-3.246v7.278q0 1.1.42 1.623.497.576 1.44.576.76 0 1.466-.445v2.173q-.393.183-.812.262-.393.08-1.02.08z"
                          />
                        </defs>
                        <clipPath id="C">
                          <use xlinkHref="#A" />
                        </clipPath>
                        <g clipPath="url(#C)">
                          <path d="M520 939.5L959.4 500H639.9L360.3 779.7z" fill="#39cefd" />
                        </g>
                        <defs>
                          <path
                            id="D"
                            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                          />
                        </defs>
                        <clipPath id="E">
                          <use xlinkHref="#D" />
                        </clipPath>
                        <path
                          clipPath="url(#E)"
                          d="M120.6 540L639.9 20.7h319.5l-679 679.1z"
                          fill="#39cefd"
                        />
                        <defs>
                          <path
                            id="F"
                            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                          />
                        </defs>
                        <clipPath id="G">
                          <use xlinkHref="#F" />
                        </clipPath>
                        <path
                          clipPath="url(#G)"
                          d="M639.9 1059.3h319.5L679.8 779.7 520 939.5z"
                          fill="#03569b"
                        />
                        <defs>
                          <path
                            id="H"
                            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                          />
                        </defs>
                        <clipPath id="I">
                          <use xlinkHref="#H" />
                        </clipPath>
                        <linearGradient
                          id="J"
                          gradientUnits="userSpaceOnUse"
                          x1="566.635"
                          y1="970.339"
                          x2="685.65"
                          y2="851.324"
                        >
                          <stop offset={0} stopColor="#1a237e" stopOpacity=".4" />
                          <stop offset={1} stopColor="#1a237e" stopOpacity={0} />
                        </linearGradient>
                        <path
                          clipPath="url(#I)"
                          d="M679.8 779.7L520 939.5l237-82.1z"
                          fill="url(#J)"
                        />
                        <defs>
                          <path
                            id="K"
                            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                          />
                        </defs>
                        <clipPath id="L">
                          <use xlinkHref="#K" />
                        </clipPath>
                        <g clipPath="url(#L)">
                          <path
                            d="M360.282 779.645L520.086 619.84 679.9 779.645 520.086 939.45z"
                            fill="#16b9fd"
                          />
                        </g>
                        <radialGradient
                          id="M"
                          cx="7824.659"
                          cy="-2855.979"
                          r="5082.889"
                          gradientTransform="matrix(0.25,0,0,-0.25,-1812,-622.5)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#fff" stopOpacity=".1" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </radialGradient>
                        <path
                          d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                          fill="url(#M)"
                        />
                      </g>
                      <g fill={`${darkMode ? 'white' : 'gray'}`}>
                        <path className='ml-3' d="M40.62 19.774h10.84v2.12h-8.64v6.414h7.8v2.094h-7.8v8.115h-2.2V19.774zm13.463 0h2.225v18.744h-2.225V19.774zm10.365 19.163q-2.408 0-3.7-1.414Q59.5 36.1 59.5 33.57v-8.403h2.225v8.063q0 1.9.864 2.8.864.9 2.33.9 1.126 0 2-.602.9-.602 1.36-1.57.497-.97.497-2.042v-7.54H71v13.35h-2.12V36.58h-.105q-.55.995-1.754 1.675-1.204.68-2.566.68z" />
                        <use xlinkHref="#B" />
                        <use xlinkHref="#B" x="9.436" />
                        <path d="M98.8 38.937q-1.9 0-3.43-.916-1.518-.916-2.382-2.513-.838-1.623-.838-3.64 0-1.937.785-3.56.812-1.623 2.278-2.592 1.466-.97 3.403-.97 1.963 0 3.403.9 1.44.864 2.2 2.408.785 1.545.785 3.534 0 .393-.08.68h-10.55q.08 1.518.733 2.566.654 1.047 1.65 1.57 1.02.524 2.12.524 2.566 0 3.953-2.408l1.885.916q-.864 1.623-2.356 2.566-1.466.942-3.56.942zm3.848-8.508q-.052-.838-.47-1.675-.42-.838-1.335-1.414-.9-.576-2.25-.576-1.57 0-2.67 1.02-1.073.995-1.414 2.644h8.142zm4.934-5.262h2.12v2.147h.105q.393-1.1 1.518-1.806 1.126-.733 2.356-.733.916 0 1.57.262v2.408q-.838-.42-1.885-.42-.97 0-1.78.55-.812.55-1.3 1.492-.47.916-.47 2v7.46h-2.225v-13.35z" />
                      </g>
                    </svg>
                  </div>
                  <div>Flutter</div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image-node skill-div-h'>
                    <svg
                      width={60}
                      height={60}
                      viewBox="0 0 256 282"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin meet"
                    >
                      <g>
                        <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 00-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 001.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />{" "}
                        <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
                      </g>
                    </svg>
                  </div>
                  <div>NodeJs</div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image skill-div-h'>
                    <svg
                      width={60}
                      height={60}
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fill={`${darkMode ? 'white' : 'black'}`}
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </div>
                  <div>Github</div>
                </div>
                {/* <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image'>
                  </div>
                  <div></div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image'>
                  </div>
                  <div></div>
                </div>
                <div className={`${darkMode ? 's-t-div-dark' : 's-t-div-light'}`}>
                  <div className='skills-image'>
                  </div>
                  <div></div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id='contact'>
        <Container>
          <Row className='row-m'>
            <Col lg={6} md={12} sm={12}>
              <div className="want-to-hire-me">
                <h2>In need of a Web/Mobile developer?</h2>
                <p><div className="availability-status"></div> I'm currently available for freelance work.</p>
                <button onClick={() => window.location.href = 'mailto:saleheen.noor@gmail.com'}>Send a message</button>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="call-me">
                <p>+92-321-8961570</p>
                <p>info@saleheennoor.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className={`${darkMode ? 'footer-dark' : 'footer-light'}`}>
                <p>Made by <span className='heart'>&hearts;</span></p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>



    </Container >
  );
}

export default App;
