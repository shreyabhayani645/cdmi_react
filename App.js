import './style.css';
import logo from './image/nexgen.PNG';
import { FaClock,FaPhoneAlt,FaGooglePlay } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiSocialFacebook,TiSocialTwitter,TiSocialLinkedin   } from "react-icons/ti";
import { SlBadge,SlNote  } from "react-icons/sl";
import { CiLock } from "react-icons/ci";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import img from './image/project-1.jpg';
import img1 from './image/project-2.jpg';
import img2 from './image/project-3.jpg';
import img3 from './image/project-4.jpg';
import img4 from './image/project-5.jpg';
import img5 from './image/project-6.jpg';



function App() {
  return (
    <div>
          <div className="layout">
            <div className="info">
              <div className="l_info">
                  <a className='clock'><FaClock ></FaClock > Open Hours:Mon-Sat-9:00 - 18:00</a>
              </div>
              <div className='r_info'>
                  <div className='phone'>
                        <a className='p_icon'><FaPhoneAlt ></FaPhoneAlt > +1 (305) 1234-5678</a>
                  </div>
                  <div className='email'>
                        <a className='p_icon'><MdEmail ></MdEmail> +1 (305) 1234-5678</a>
                  </div>
                  <div className='social'>
                      <a><TiSocialFacebook></TiSocialFacebook></a>
                      <a><TiSocialTwitter ></TiSocialTwitter ></a>
                      <a><TiSocialLinkedin ></TiSocialLinkedin ></a>
                  </div>
              </div>
            </div>
            <div className='menu'>
              <div className='logo'>
                  <img src={logo} className='nexgen'></img>
              </div>
              <div className='main_menu'>
                <ul>HOME</ul>
                <ul>ABOUT</ul>
                <ul>VIDEO</ul>
                <ul>GALLARY</ul>
                <ul>TEAM</ul>
                <ul>UNITS</ul>
                <button className='touch'>GET IN TOUCH</button>
              </div>
            </div>
            <div className='slider'>
                <img src={require(`./image/slider.PNG`)}></img>
            </div>
            <div className='main_about'>
              <div className='l_about'>
                    <h5>ABOUT THE NETWORK</h5>
                    <h1>The Company</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia. Mauris lacus tellus, ultrices eu volutpat sit amet, finibus a ipsum.</p>
                    <p>Curabitur convallis, diam a egestas iaculis, neque lorem interdum felis, in viverra lacus tortor in leo.</p>
              </div>
              <div className='r_about'>
                <div className='first_a'>
                  <div className='badge'>
                    <div className='badge1'>
                      <a><SlBadge></SlBadge></a>
                      <h4>Tradition</h4>
                    </div>
                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                  <div className='sec'>
                    <div className='badge1'>
                      <a><CiLock></CiLock></a>
                      <h4>Security</h4>
                    </div>
                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                </div>  
                <div className='first_a'>
                  <div className='badge'>
                    <div className='badge1'>
                      <a><SlNote ></SlNote ></a>
                      <h4>Certificate</h4>
                    </div>
                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                  <div className='sec'>
                    <div className='badge1'>
                      <a><RiGraduationCapLine></RiGraduationCapLine></a>
                      <h4>Expertise</h4>
                    </div>
                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                </div>  
              </div>
            </div>
            <div className='main_video'>
                <div className='intro'>
                  <h5>INTRODUCTION VIDEO</h5>
                  <h1>Tech Innovation</h1>
                  <p>Through an innovative inventory management system we are able to guarantee the monitoring of the entire process in real time.</p>
                  <img src={require(`./image/bg-9.webp`)} className='img_int'></img>
                  {/* <div className='layer'>
                    <a className='play'><FaGooglePlay></FaGooglePlay></a>
                  </div> */}
                </div>                
            </div>
            <div className='solu'>
                  <h6>LOGISTICS SOLUTIONS</h6>
                  <div className='stru'>
                    <h1>Structured</h1>
                    <h1 className='ware'>Warehouse</h1>
                  </div>
                  <p>We develop operational strategies with the customer to improve logistical efficiency.</p>
                  <div className='solu_img'>
                    <div className='first_img'>
                        <div className='one'>
                          <img src={img}></img>
                        </div>
                        <div className='one'>
                          <img src={img1}></img>
                        </div>
                        <div className='one'>
                          <img src={img2}></img>
                        </div>
                    </div>
                    <div className='sec_img'>
                        <div className='one'>
                          <img src={img3}></img>
                        </div>
                        <div className='one'>
                          <img src={img4}></img>
                        </div>
                        <div className='one'>
                          <img src={img5}></img>
                        </div>
                    </div>

                  </div>
            </div>
            <div className='manage'>
              <h6>WE LIKE WHAT WE DO</h6>
              <div className='stru'>
                  <h1 className='ware1'>Team </h1>
                  <h1 className='ware2'>of Experts</h1>
              </div>
              <div className='first_team'>
                <div className='team1'>
                  <div className='team_img'>
                    <img src={require(`./image/team-1.webp`)}></img>
                    </div>
                    <div className='team_t'>
                      <h3>David Cooper</h3>
                      <h4>CTO & CO-FOUNDER</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
                      <div className='social_t'>
                        <a><TiSocialFacebook></TiSocialFacebook></a>
                        <a><TiSocialTwitter></TiSocialTwitter></a>
                        <a><TiSocialLinkedin></TiSocialLinkedin></a>
                      </div>
                    </div>
                </div>
                <div className='team1'>
                  <div className='team_img'>
                    <img src={require(`./image/team-2.webp`)}></img>
                    </div>
                    <div className='team_t'>
                      <h3>Oliver Jones</h3>
                      <h4>CHIEF PROCUREMENT</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
                      <div className='social_t'>
                        <a><TiSocialFacebook></TiSocialFacebook></a>
                        <a><TiSocialTwitter></TiSocialTwitter></a>
                        <a><TiSocialLinkedin></TiSocialLinkedin></a>
                      </div>
                    </div>
                </div>
              </div>
              <div className='first_team'>
                <div className='team1'>
                  <div className='team_img'>
                    <img src={require(`./image/team-3.webp`)}></img>
                    </div>
                    <div className='team_t'>
                      <h3>Emma Lopez</h3>
                      <h4>CHIEF MARKETING</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
                      <div className='social_t'>
                        <a><TiSocialFacebook></TiSocialFacebook></a>
                        <a><TiSocialTwitter></TiSocialTwitter></a>
                        <a><TiSocialLinkedin></TiSocialLinkedin></a>
                      </div>
                    </div>
                </div>
                <div className='team1'>
                  <div className='team_img'>
                    <img src={require(`./image/team-4.webp`)}></img>
                    </div>
                    <div className='team_t'>
                      <h3>T. Johnson</h3>
                      <h4>CEO & PRESIDENT</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
                      <div className='social_t'>
                        <a><TiSocialFacebook></TiSocialFacebook></a>
                        <a><TiSocialTwitter></TiSocialTwitter></a>
                        <a><TiSocialLinkedin></TiSocialLinkedin></a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className='main_bus'>
                <div className='f_bus'>
                    <h6>TALK TO AN EXPERT</h6>
                    <h1>Our Business Units</h1>
                    <p>Curabitur convallis, diam a egestas iaculis, neque lorem interdum felis, in viverra lacus tortor in leo.</p>
                </div>
                <div className='s_bus'>
                    <h5>Branch</h5>
                    <div className='f_icon'>
                      <p><FaPhoneAlt></FaPhoneAlt></p>
                      <h5>+1 (305) 1234-5678</h5>
                    </div>
                    <div className='f_icon'>
                      <p><MdEmail></MdEmail></p>
                      <h5>Hello@gmail.com</h5>
                    </div>
                    <div className='f_icon'>
                      <p><FaLocationDot></FaLocationDot></p>
                      <h5>Main Avenue,987</h5>
                    </div>
                    <button className='map'>VIEW MAP</button>
                </div>
                <div className='t_bus'>
                    <h5>Headquarters</h5>
                    <div className='f_icon'>
                      <p><FaPhoneAlt></FaPhoneAlt></p>
                      <h5>+1 (305) 1234-5678</h5>
                    </div>
                    <div className='f_icon'>
                      <p><MdEmail></MdEmail></p>
                      <h5>Hello@gmail.com</h5>
                    </div>
                    <div className='f_icon'>
                      <p><FaLocationDot></FaLocationDot></p>
                      <h5>Main Avenue,987</h5>
                    </div>
                    <button className='map'>VIEW MAP</button>
                </div>
            </div>
            <div className='main_foot'>
                <div className='left_foot'>
                    <h6>SEND A MESSAGE</h6>
                    <div className='get'>
                      <h1>Get in</h1>
                      <h1 className='touch1'>Touch</h1>
                    </div>
                    <p>We will respond to your message as soon as possible.</p>
                    <div className='input'>
                      <input type='text' placeholder='Name'></input>
                      <input type='text' placeholder='Email' className='email'></input>
                    </div>
                    <div className='input'>
                      <input type='text' placeholder='Phone'></input>
                      <input type='text' placeholder='More Info' className='email'></input>
                    </div>
                    <div>
                      <input type='text' placeholder='Address' className='add'></input>
                    </div>
                <button className='send'>SEND</button>

                </div>

                <div className='right_foot'>
                    <h3>Example Inc.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Praesent diam lacus, dapibus sed imperdiet consectetur.</p>
                    <div className='f_icon'>
                      <p><FaPhoneAlt></FaPhoneAlt></p>
                      <h5>+1 (305) 1234-5678</h5>
                    </div>
                    <div className='f_icon'>
                      <p><MdEmail></MdEmail></p>
                      <h5>Hello@gmail.com</h5>
                    </div>
                    <div className='f_icon'>
                      <p><FaLocationDot></FaLocationDot></p>
                      <h5>Main Avenue,987</h5>
                    </div>
                    <button className='map1'>VIEW MAP</button>
                </div>
            </div>
            <div className='last'>
              <div className='price'>
                  <p>Enjoy the low price. We are tracking any intention of piracy.</p>
              </div>
              <div> 
                <p className='code'>2023 NEXGEN is Proudly Powered by Codings.</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default App;
