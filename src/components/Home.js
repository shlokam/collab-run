import React from "react";
import videoBg from '../assests/bgVideo.mp4';
import HamburgerMenu from "./Hamburger";
function Home(){
    return (
        <div className="home">
            {/* <div className="overlay"></div>
      <video src= {videoBg} autoPlay muted loop/>
      <div className="content">
        <h1 className="home-heading">Welcome To The</h1>
        <p className="home-heading-para">COLLABORATION RUN OF CHEETAZ RUNNING SQUAD</p>
        {/* <HamburgerMenu/> }
      </div> */}

      <div class="main-banner" id="top">
        {/* <video autoplay muted loop id="bg-video">
            <source src={videoBg} type="video/mp4" />
        </video> */}
        <video src= {videoBg} autoPlay muted loop/>

        <div class="video-overlay header-text">
            <div class="caption">
                <h6>Welcome To The</h6>
                <h2>Collaboration Run Of  <em>CHEETAZ RUNNING SQUAD</em></h2>
                <h5> On <em> Sunday, August 6 2023</em></h5>
                {/* <div class="main-button scroll-to-section">
                    <a href="#features">Become a member</a>
                </div> */}
            </div>
        </div>
    </div>
    <section class="section" id="call-to-action">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <h2>Don’t <em>think</em>, enroll <em>today</em>!</h2>
                        <p>“If it doesn’t challenge you, it won’t change you.”

– Fred Devito</p>                        <div class="main-button scroll-to-section">
                            <a href="#our-classes">Enroll Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div>
    <section class="section" id="our-classes">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Our <em>Tracks</em></h2>
                        <img src="assets/images/line-dec.png" alt=""/>
                        <p className="text">"Within the symphony of speed, the race track becomes a stage where dreams dare to outrun reality."</p>                    </div>
                </div>
            </div>
            <div class="row" id="tabs">
              <div class="col-lg-4">
                <ul>
                  <li className = 'tracks'>
                    {/* <a href='#tabs-1'> */}
                      
                      <img  src="assets/images/tabs-first-icon.png" alt=""/>
                    5 KM 
                    {/* </a> */}
                    </li>
                  <li className = 'tracks'>
                    {/* <a href='#tabs-2'> */}
                      <img src="assets/images/tabs-first-icon.png" alt=""/> 10 KM
                      {/* </a> */}
                      </li>
                </ul>
              </div>
              {/* <div class="col-lg-8">
                <section class='tabs-content'>
                  <article id='tabs-1'>
                    <img src="assets/images/training-image-01.jpg" alt="First Class"/>
                    <h4>First Training Class</h4>
                    <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                    
                  </article>
                  <article id='tabs-2'>
                    <img src="assets/images/training-image-02.jpg" alt="Second Training"/>
                    <h4>Second Training Class</h4>
                    <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </article>
                </section>
              </div> */}
            </div>
        </div>
    </section>
    </div>
 
    

    <section class="section" id="schedule">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading dark-bg">
                        <h2>Program <em>Schedule</em></h2>
                        <img src="assets/images/line-dec.png" alt=""/>
                        <p>📅 "Get Ready to Tune into the Rhythm of Our Program Schedule!" 🎶

</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="filters">
                        {/* <ul class="schedule-filter">
                            <li class="active" data-tsfilter="monday">Monday</li>
                            <li data-tsfilter="tuesday">Tuesday</li>
                            <li data-tsfilter="wednesday">Wednesday</li>
                            <li data-tsfilter="thursday">Thursday</li>
                            <li data-tsfilter="friday">Friday</li>
                        </ul> */}
                    </div>
                </div>
                <div class="col-lg-10 offset-lg-1">
                    <div class="schedule-table filtering">
                        <table>
                            <tbody>
                                <tr>
                                    <td class="day-time">Meeting Time</td>
                                    <td class="monday ts-item show" data-tsmeta="monday">05:00AM - 05:30AM</td>
                                    {/* <td class="tuesday ts-item" data-tsmeta="tuesday">2:00PM - 3:30PM</td> */}
                                    
                                    {/* <td>William G. Stewart</td> */}
                                </tr>
                                <tr>
                                    <td class="day-time">National Anthem</td>
                                    <td class="monday ts-item show" data-tsmeta="monday">05:30AM - 05:45AM</td>
                                    {/* <td class="tuesday ts-item" data-tsmeta="tuesday">2:00PM - 3:30PM</td> */}
                                    
                                    {/* <td>William G. Stewart</td> */}
                                </tr>
                                <tr>
                                    <td class="day-time">Start RUN</td>
                                    <td class="monday ts-item show" data-tsmeta="monday">05:45AM onwards</td>
                                    {/* <td class="tuesday ts-item" data-tsmeta="tuesday">2:00PM - 3:30PM</td> */}
                                    
                                    {/* <td>William G. Stewart</td> */}
                                </tr>
                                <tr>
                                    <td class="day-time">Breakfast</td>
                                    <td class="monday ts-item show" data-tsmeta="monday">07:00AM onwards</td>
                                    {/* <td class="tuesday ts-item" data-tsmeta="tuesday">2:00PM - 3:30PM</td> */}
                                    
                                    {/* <td>William G. Stewart</td> */}
                                </tr>
                                
                                {/* <tr>
                                    <td class="day-time">Meeting Time</td>
                                    <td class="monday ts-item" data-tsmeta="monday">05:00AM - 05:30AM</td>
                                    {/* <td class="thursday friday ts-item" data-tsmeta="thursday" >2:00PM - 3:30PM</td> */}
                                    {/* <td>Paul D. Newman</td> }
                                    <td>05:00 AM - 05:30 AM</td>
                                </tr> */}
                                {/* <tr>
                                    <td class="day-time">Body Building</td>
                                    <td class="tuesday ts-item" data-tsmeta="tuesday">10:00AM - 11:30AM</td>
                                    <td class="monday ts-item show" data-tsmeta="monday">2:00PM - 3:30PM</td>
                                    {/* <td>Boyd C. Harris</td> }
                                </tr> */}
                                {/* <tr>
                                    <td class="day-time">Yoga Training Class</td>
                                    <td class="wednesday ts-item" data-tsmeta="wednesday">10:00AM - 11:30AM</td>
                                    <td class="friday ts-item" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    {/* <td>Hector T. Daigle</td> }
                                </tr> */}
                                {/* <tr>
                                    <td class="day-time">Advanced Training</td>
                                    <td class="thursday ts-item" data-tsmeta="thursday">10:00AM - 11:30AM</td>
                                    <td class="wednesday ts-item" data-tsmeta="wednesday">2:00PM - 3:30PM</td>
                                    {/* <td>Bret D. Bowers</td> }
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
        </div>

        
    )
}

export default Home;