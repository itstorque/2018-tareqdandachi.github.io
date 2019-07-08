---
title: Work
layout: default
script:
  - work
---

<div class="layout">

  {%- include picture.html img="work" alt="The title 'MY WORK' with a phone over the letter R" extra_class="work_banner" -%}

  <div class="search">

    <div class="search-item">
      <label for="domain">Domain</label>
      <div class="select">
        <select id="domain">
          <option value="">All</option>
          <option value="cs">Computer Science</option>
          <option value="design">Design</option>
          <option value="ee">Electrical Engineering</option>
          <option value="bio">Biomedical</option>
          <option value="ai">Artificial intelligence</option>
          <option value="ar">Augmented Reality</option>
        </select>
      </div>
    </div>

    <div class="search-item">
      <label for="lang">Language</label>
      <div class="select">
        <select id="lang">
          <option value="">Any</option>
          <option value="py">Python</option>
          <option value="cpp">C++</option>
          <option value="objc">Objective-C</option>
          <option value="swift">Swift</option>
          <option value="as">AppleScript</option>
          <option value="java">Java</option>
          <option value="php">PHP</option>
          <option value="js">JavaScript</option>
          <option value="ruby">Ruby</option>
          <option value="coffee">CoffeeScript</option>
        </select>
      </div>
    </div>

    <div class="search-item">
      <label for="platform">Platform</label>
      <div class="select">
        <select id="platform">
          <option value="">Any</option>
          <option value="mac">MacOS</option>
          <option value="linux">Linux</option>
          <option value="arduino">Arduino</option>
          <option value="app">iOS</option>
          <option value="web">Web</option>
          <option value="android">Android</option>
        </select>
      </div>
    </div>

  </div>

  <div class="search">
    <div class="search-item">
      <label for="keyword">Keyword Search</label>
      <input id="keyword" type="text" placeholder="Search" required>
    </div>
  </div>
  <center><label><span id="numberItemsShown">int items</span> match your search query</label></center>

  <div id="cbs" class="work-item" data-tags="ui web java php js design intern cs">

    {%- include picture.html img="work/cbs" alt="Picture of the CBS website on both mobile and desktop." -%}

    <h3 class="pretitle">Project for CBS — 2019</h3>

    <h3 class="work">
      I worked as a Java Developer Intern at CBS Lebanon over the summer of 2019. I also worked as a Freelance Brand and UI Designer for them where I got to rework lots of the brand, from redesigning the color pallete and logos to rebuilding their website from the ground up.
    </h3>

    <div class="work hidden_desc" id="cbs_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript & jQuery</li>
          <li>PHP</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platforms</h2>
        <ul>
          <li>Web (Responsive)</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #F5A623;" data-for-id="cbs_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work">
      go to <a target="\_blank" href="http://cbs.com.lb" style="color: #F5A623;">cbs.com.lb</a>
    </p>

    <div class="separator"></div>

  </div>

  <div id="at" class="work-item" data-tags="bio ui web php js cs design">

    {%- include picture.html img="work/at" alt="Picture of the Assitive Technology at MIT website on desktop on the left and a picture of the ATHack logo on the right." -%}

    <h3 class="pretitle">Assistive Technology MIT — 2018-2019</h3>

    <h3 class="work">
      My passion for interdisciplinary technology and making a change got me to join the Assistive Technology group at MIT where I get to help plan lots of events and hackathons. I also employed my design skills to redesign the logo, website and work as an outreach personnel where I got to design merchandise (shirts, hats, etc.) and marketing resources (pamphlets and posters). Getting to work with the AT team to see hackers build awesome tech for Co-Designers from the community is one of my favorite things at MIT.
    </h3>

    <div class="work hidden_desc" id="at_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript & jQuery</li>
          <li>PHP</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platforms</h2>
        <ul>
          <li>Web (Responsive)</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #FF6699;" data-for-id="at_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work">
      go to <a target="\_blank" href="http://assistivetech.mit.edu" style="color: #FF6699;">assistivetech.mit.edu</a>
    </p>

    <div class="separator"></div>

  </div>

  <div id="nyhack" class="work-item" data-tags="hackathon bio ai app cs">

    {%- include picture.html img="work/nyhack" alt="Person breathing air into phone on the left, an analysis of the data and healthy lung diagnosis on the right." -%}

    <h3 class="pretitle">Spirometer, Respirometer and Lung Health — 2018</h3>

    <h3 class="work">
      During the NY MIT Medical Hackathon, I worked with a team of brilliant engineers from Georgia Tech and Carnegie Mellon to build a decentralised lung health diagnosis and analysis system. One of my primary roles was developing a phone app that took in barometer and microphone input from an iPhone (without any exterior devices or input) and calculate important information about lungs that usually need expensive and inaccessible devices to measure. It can calculate the Lung Vital Capacity, percentage Oxygen and CO<sub>2</sub> and many other metrics thought to be impossible to calculate before. Then with a Machine Learning Classifier, we would be able to predict lung health and the occurence of a lung disease (such as lung cancer) at a very early stage. The reason we focused on Lung Cancer is that it has become the most common cancer and over 57% of the cases are metastatic when first diagnosed. With more data, our app could possibly predict Stage 0 or 1 lung cancer and increase the survival rate from 5% to over 98%.
    </h3>

    <div class="work hidden_desc" id="nyhack_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>Swift</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platform</h2>
        <ul>
          <li>iOS - iPhone & iPad App</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #22BC8F;" data-for-id="nyhack_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work"></p>

    <div class="separator"></div>

  </div>

  <div id="thetech" class="work-item" data-tags="ruby coffee js haml ui web cs design">

    {%- include picture.html img="work/thetech" alt="Picture of MIT The Tech's website on desktop on the left and a picture of the logo and a newspaper on the right." -%}

    <h3 class="pretitle">The Tech MIT — 2018-2019</h3>

    <h3 class="work">
      I thank my curiosity for joining The Tech. I wouldn't have ever thought of working at a newspaper, but here I am! It's one of the most unique experiences, being able to get together with people from so many different backgrounds and help implement features that easen their jobs while writing articles in the CMS. My job at The Tech helped me build essential skills in studying user workflows to enhance their experience. I also love maintaining the website where most people around campus get their information from.
    </h3>

    <div class="work hidden_desc" id="thetech_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>Ruby</li>
          <li>CoffeeScript</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>HAML & SCSS</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platforms</h2>
        <ul>
          <li>Web (Responsive)</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #993333;" data-for-id="thetech_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work">
      go to <a target="\_blank" href="http://thetech.com" style="color: #993333;">thetech.com</a>
    </p>

    <div class="separator"></div>

  </div>

  <div id="fliplearn" class="work-item" data-tags="ai ui web app vision edu cs design android">

    {%- include picture.html img="work/fliplearn" alt="Three images of FlipLearn running on an iPad, a picture of Brainy (the mascot) and the FlipLearn Logo." -%}

    <h3 class="pretitle">FlipLearn — 2018</h3>

    <h3 class="work">
      FlipLearn was one of my favorite cross-platform* apps to build. It was centered around converting any school into a digital learning school (without any infrastructure changes), where teachers, students, parents and admins all used the same platform to communicate, check attendance, create quizzes, share the teacher's whiteboard and literally everything else. From buying food from the cafeteria to scanning quizzes and having them corrected automatically, FlipLearn does everything a school needs! One of my favorite things about the platform was working on inclusive UI for all ages and implementing AI throughout to perform complex functions that make teachers jobs way easier.
    </h3>

    <div class="work hidden_desc" id="fliplearn_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>Swift</li>
          <li>Objective-C</li>
          <li>C++</li>
          <li>Java</li>
          <li>PHP</li>
          <li>HTML & CSS</li>
          <li>JavaScript & jQuery</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platform*</h2>
        <ul>
          <li>Web (Responsive)</li>
          <li>iOS - iPhone & iPad App</li>
          <li>iOS - iPad Only App</li>
          <li>Android</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #00DEFF;" data-for-id="fliplearn_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work"></p>

    <h3 class="note">the platform included a web-app for everyone, an iPad App for Students and both an Android and an iOS app for Teachers and Parents.</h3>

    <div class="separator"></div>

  </div>

  <div id="space" class="work-item" data-tags="ar ai ui app vision edu swift cpp objc cs design">

    {%- include picture.html img="work/space" alt="Images of the app on two iPads and four iPhones." -%}

    <h3 class="pretitle">Augmented Reality and Education - 2019</h3>

    <h3 class="work">
      While exploring the idea of integrating technology with learning, I found myself stumbling across AR (Augmented Reality), helping me merge the physical world and the learning experience without having the limitations of doing so. One of my projects was a space exploration app which used 3D models based on information gathered from NASA to help kids of all ages<span style="user-select: none;"> <span style="text-decoration: line-through; color: red;">study</span></span> <span style="color: green">learn while exploring</span> planets, galaxies and the cosmos. The app featured a kid friendly game-like UI and relied heavily on integrating scientifically accurate 3D models into the real world through the camera.
    </h3>

    <div class="work hidden_desc" id="space_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>Swift</li>
          <li>Objective-C</li>
          <li>C++</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platforms</h2>
        <ul>
          <li>iOS</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #4CD964;" data-for-id="space_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work"></p>

    <div class="separator" id="aus"></div>

  </div>

  <div id="aus" class="work-item" data-tags="bio ee py cpp cs as objc mac arduino">

    {%- include picture.html img="work/aus" alt="A graphic that portrays a pair of glasses with attached technology that performs the functions described below." -%}

    <h3 class="pretitle">Multi-Purpose Assistive Glasses - 2018</h3>

    <h3 class="work">
      Winning the first place award in the innovation competition at the American University of Sharjah in 2018, these glasses function as a cost-effective* device that helps people who live with disabilities. The glasses perform 2 major functions:
      <ol>
        <li>Uses an IR camera to track the motion of pupils to move a cursor on a computer or control a robot. Meant to help patients with MS, ALS or any Motor Neuron Disease.</li>
        <li>Restores hearing to deaf people.</li>
      </ol>
    </h3>

    <div class="work hidden_desc" id="aus_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>Python</li>
          <li>Objective-C</li>
          <li>C++</li>
          <li>AppleScript</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platforms</h2>
        <ul>
          <li>MacOS</li>
          <li>Linux on Raspberry Pi</li>
          <li>Arduino</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #FF7E7A;" data-for-id="aus_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work"></p>

    <h3 class="note">All of the included technology (excluding the glasses frame) cost less than $6 to build.</h3>

    <div class="separator"></div>

  </div>

  <div id="vmas" class="work-item" data-tags="bio ee py ai cpp cs arduino">

    {%- include picture.html img="work/vmas" alt="A graphic of a brain and a beanie that illustrate functions of VMAS." -%}

    <h3 class="pretitle">Vestibular Migraine Auditory Suppressant (VMAS) - 2018</h3>

    <h3 class="work">
      VMAS is an EEG (electroencephalography) technique where the electrodes are hidden inside a beanie to track the activity in certain regions of the brain associated with vestibular migraines. Using machine learning to predict the occurence of a vestibular migraine up to 10 minutes before it actually occurs, it informs the wearer with an LED notification to rest so that the migraine doesn't worsen. It doesn't stop there, VMAS also uses bone conduction to transmit binaural white noise to stimulate theta neural oscillations (brainwaves that are associated with calming) in the brain and moderate the hyper-active regions and prevent the migraine from occuring.
    </h3>

    <div class="work hidden_desc" id="vmas_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>Python</li>
          <li>C++</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platforms</h2>
        <ul>
          <li>Linux on Raspberry Pi</li>
          <li>Arduino</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #9DB99F;" data-for-id="vmas_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work"></p>

    <div class="separator"></div>

  </div>

  <div id="roboarm" class="work-item" data-tags="bio ee py ai robot cpp cs arduino">

    {%- include picture.html img="work/roboarm" alt="A graphic of a human controlled arm on the left and an environment driven arm on the right." -%}

    <h3 class="pretitle">Unintrusive Bionic Arm — 2017-2018</h3>

    <h3 class="work">
      An EEG equiped robot arm that uses machine learning to predict when neurons are firing and move the fingers accordingly. The arm also has "reflexes" built into it; where the arm would naturally respond to surroundings even if the neurons fail to fire. Examples include trying to catch a ball, clenching a hand while handshaking and adjusting grip while lifting objects. All of this is driven by the 14 sensors (Ultra-Sonic Sensors, Gyroscopes and Infra-Red Cameras) in the arm and an AI that decides what the environment is. The arm is also equipped with extra features that may be deemed useful, such as a super-bright flashlight and room mapping to aid the blind. The highlight of the arm is it requires no operation to be used, it's more like a piece of clothing than a medical device.
    </h3>

    <div class="work hidden_desc" id="roboarm_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>Python</li>
          <li>C++</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platforms</h2>
        <ul>
          <li>Linux on EV3</li>
          <li>Arduino</li>
          <li>EEG</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #66D7D1;" data-for-id="roboarm_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work"></p>

    <div class="separator"></div>

  </div>

  <div id="airsurface" class="work-item" data-tags="py ai swift objc cpp cs as mac">

    {%- include picture.html img="work/airsurface" alt="A graphic of different controls (buttons, a slider and a knob) on the left. A camera lens on the right." -%}

    <h3 class="pretitle">Air Surface — 2017</h3>

    <h3 class="work">
      One of my projects on Human-Computer Interfaces, blending the gap between technology and the real world involved Air Surface. It uses Machine Learning methods and haar cascades to map out hand gestures that are seen through a webcam into surface controls, similar to how humans interact with the world. Think of turning a knob or flicking a switch without touching any surface naturally and controlling the lights in the room. This project can be paired with Augmented Reality systems to create a fully digital i/o environment.
    </h3>

    <div class="work hidden_desc" id="airsurface_extra">
      <div class="col">
        <h2>Programming Languages</h2>
        <ul>
          <li>Swift</li>
          <li>Objective-C</li>
          <li>C++</li>
          <li>AppleScript</li>
          <li>Python</li>
        </ul>
      </div>
      <div class="col">
        <h2>Platforms</h2>
        <ul>
          <li>MacOS</li>
          <li>Linux</li>
        </ul>
      </div>
    </div>

    <p class="work more_info"><span style="color: #9098DC;" data-for-id="airsurface_extra" class="more_info_button">Show Technical Information</span></p>

    <p class="work"></p>

  </div>

</div>
