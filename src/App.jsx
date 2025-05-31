import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <div className="banner">
        {/*<img src="pexels-tara-winstead-8386440.jpg" alt="Photo by Tara Winstead: https://www.pexels.com/photo/robot-pointing-on-a-wall-8386440/"/>*/}
        <h1>Reinforcement Learning with External Knowledge Bases</h1>
        <h3>Workshop proposal for NeurIPS 2025</h3>
        <h3>Date: TBD  | Location: TBD</h3>
      </div>
      
      <div className="navbar">
        <a href="#call-for-papers">Call for Papers</a> | <a href="#speakers">Speakers</a> | <a href="#schedule">Schedule</a> | <a href="#organization">Organization</a>
      </div>

      <div className="about">
        <h2>About</h2>
        <p>
          Reinforcement learning (RL) has been widely deployed for complex tasks where environmental dynamics are difficult to model explicitly. 
          However, the trial-and-error nature of RL presents significant challenges.
          RL often requires extensive interaction data, limiting use in domains where interaction is costly, and may raise safety concerns when undesirable actions are taken during exploration. 
          Lastly, generalizing and transferring knowledge across unseen tasks remains challenging, as agents may overfit to specific training conditions.
          These aspects are difficult to improve given the complexity and black-box nature of RL algorithms, limiting our ability to interpret decisions and diagnose failures.
          <br/>
          To address these challenges, researchers have increasingly incorporated external knowledge bases into RL frameworks from sources such as external datasets (e.g. YouTube videos), guiding policies, knowledge graphs, natural language instructions, program synthesis, or advanced sensing and control systems. External knowledge can improve sample efficiency by guiding exploration, enhance safety by reducing potentially unsafe interactions with the environment, and facilitate knowledge transfer across multiple environments and tasks during both learning and deployment.
          <br/>
          Foundation models have recently emerged as powerful external knowledge sources for RL, offering broad reasoning capabilities and multimodal understanding.
          These models can serve as priors for policy or value functions, as teachers and external reward generators, and as generalizable representation learners.
          They have also helped RL bridge perception, reasoning, and control in embodied domains such as robotics, while simultaneously benefiting from RL to align and refine their own outputs.
          This large-scale knowledge integration is driving advances in all aspects of RL.
          <br/>
          Despite recent breakthroughs, empowering RL with external knowledge bases -- from demonstrations to foundation models -- still presents significant challenges.
          These include (1) effectively leveraging external knowledge for decision-making; (2) reliability and timeliness of available information -- potentially leading to biased or outdated decisions; or even (3) conflicts between internally learned experiences and external information.
          In addition, computational requirements are amplified when leveraging large-scale external knowledge sources, potentially limiting the scalability and practicality of RL solutions, particularly for organizations and individuals without access to extensive resources.
        </p>

      </div>

      <div className="call-for-papers" id="call-for-papers">
        <h2>Call for Papers</h2>
        <p>
          This workshop explores techniques that improve RL across domains by leveraging external knowledge, and identifies common principles and limitations.
          The recent resurgence of RL, largely driven by advances in datasets and foundation models, has reignited enthusiasm and optimism in this field, creating a unique opportunity to bring together researchers from diverse backgrounds seeking to harness external knowledge for more efficient, reliable, and scalable RL.
          Conversations among researchers with different perspectives, but shared foundational goals, will help advance the reliability and computational efficiency of RL with external knowledge.
          <br/>
          Relevant topics include, but are not limited to:
          <ul>

            <li><b>Algorithms for RL with external knowledge: </b>
    RL algorithms that integrate external knowledge sources to enhance efficiency, safety, generalizability, transferability, and interpretability. Example topics include RL with foundation models, offline RL, program-guided RL, knowledge-grounded RL, reincarnating RL, safe RL, and explainable RL.</li>

            <li><b>Knowledge transfer in RL: </b>
              Methods for transferring learned skills and knowledge representations across different tasks, environments, and domains to reduce learning time in new RL scenarios. Example topics include meta-RL, multi-task RL, lifelong and continual RL, incremental RL, and hierarchical RL.</li>

            <li><b>Knowledge-guided RL for foundation models: </b>
              RL techniques for leveraging external knowledge to train, fine-tune, or align foundation models. Example topics include improving reasoning abilities, reducing harmful outputs, and enhancing their alignment with human preferences and values.</li>

            <li><b>Applications of RL with external knowledge: </b>
              Real-world applications demonstrating how external knowledge integration enhances RL performance across various domains, such as robotics, natural science, and healthcare.</li>

          </ul>
        </p>
      </div>

      <div className="invited-speakers" id="speakers">
        <h2>Speakers</h2>
        <div className="row">
          <div className="speaker">
            <img src="https://ai.stanford.edu/~cbfinn/_files/sail_headshot_left_facing_crop.jpg" />
            <div className="name"><a href="https://ai.stanford.edu/~cbfinn">Chelsea Finn</a></div>
            <div className="institute">Stanford</div>
          </div>
          <div className="speaker">
            <img src="https://people.csail.mit.edu/pulkitag/images/pulkit.jpg" />
            <div className="name"><a href="https://people.csail.mit.edu/pulkitag">Pulkit Agrawal</a></div>
            <div className="institute">MIT</div>
          </div>
          <div className="speaker">
            <img src="speaker_Aleksandra_Faust.jpg" />
            <div className="name"><a href="https://www.afaust.info/">Aleksandra Faust</a></div>
            <div className="institute">Google DeepMind</div>
          </div>
        </div>
        <div className="row">
          <div className="speaker">
            <img src="https://takuseno.github.io/static/b9ef0dc632cf93e77bab0a1b51661269/6ff99/profile.webp" />
            <div className="name"><a href="https://takuseno.github.io">Takuma Seno</a></div>
            <div className="institute">Sony AI / Turing Inc.</div>
          </div>
          <div className="speaker">
            <img src="https://rockt.ai/assets/img/me.jpg" />
            <div className="name"><a href="https://rockt.ai/assets/img/me.jpg">Tim Rocktäschel</a></div>
            <div className="institute">UCL / Google DeepMind</div>
          </div>
          <div className="speaker">
            <img src="https://jiayuanm.com/static/img/avatar25.png" />
            <div className="name"><a href="https://jiayuanm.com">Jiayuan Mao</a></div>
            <div className="institute">MIT</div>
          </div>
        </div>
      </div>

      <div className="schedule" id="schedule">
        <h2>Schedule</h2>
        <table>
          <tr>
            <td>8:20 - 8:50</td>
            <td>Poster session 1</td>
          </tr>
          <tr>
            <td>8:50 - 9:00</td>
            <td>Opening remarks</td>
          </tr>
          <tr>
            <td>9:00 - 9:30</td>
            <td>Invited talk 1</td>
          </tr>
          <tr>
            <td>9:30 - 10:00</td>
            <td>Invited talk 2</td>
          </tr>
          <tr>
            <td>10:00 - 10:30</td>
            <td>Social/Coffee break</td>
          </tr>
          <tr>
            <td>10:30 - 11:00</td>
            <td>Invited talk 3</td>
          </tr>
          <tr>
            <td>11:00 - 11:30</td>
            <td>Oral session 1</td>
          </tr>
          <tr>
            <td>11:30 - 12:00</td>
            <td>Poster session 2</td>
          </tr>
          <tr>
            <td>12:00 - 13:00</td>
            <td>Lunch</td>
          </tr>
          <tr>
            <td>13:00 - 13:30</td>
            <td>Invited talk 4</td>
          </tr>
          <tr>
            <td>13:30 - 14:00</td>
            <td>Invited talk 5</td>
          </tr>
          <tr>
            <td>14:00 - 14:30</td>
            <td>Oral session 2</td>
          </tr>
          <tr>
            <td>14:30 - 15:00</td>
            <td>Poster session 3</td>
          </tr>
          <tr>
            <td>15:00 - 15:10</td>
            <td>Paper awards</td>
          </tr>
          <tr>
            <td>15:10 - 16:00</td>
            <td>Panel discussion</td>
          </tr>
          <tr>
            <td>16:00 - 16:15</td>
            <td>Social/Coffee break</td>
          </tr>
          <tr>
            <td>16:15 - 16:45</td>
            <td>Invited talk 6</td>
          </tr>
          <tr>
            <td>16:45 - 16:50</td>
            <td>Closing remarks</td>
          </tr>
          <tr>
            <td>16:50 - 17:30</td>
            <td>Social</td>
          </tr>
        </table>
      </div>

      <div className="organizers" id="organization">
        <h2>Organizers</h2>
        <div className="row">
          <div className="organizer">
            <img src="https://sarahchiu.github.io/images/zihyunchiu.png" />
            <div className="name"><a href="https://sarahchiu.github.io">Zih-Yun (Sarah) Chiu</a></div>
            <div className="institute">UC San Diego<br/>/ Johns Hopkins University</div>
          </div>
          <div className="organizer">
            <img src="https://www.nicklashansen.com/files/me.png" />
            <div className="name"><a href="https://www.nicklashansen.com">Nicklas Hansen</a></div>
            <div className="institute">UC San Diego</div>
          </div>
          <div className="organizer">
            <img src="https://pascalson.github.io/assets/img/my_pic.jpg" />
            <div className="name"><a href="https://pascalson.github.io">Yi-Lin (Pascal) Tuan</a></div>
            <div className="institute">Orchat AI</div>
          </div>
          <div className="organizer">
            <img src="organizer_shao-hua-sun.jpg" />
            <div className="name"><a href="https://shaohua0116.github.io">Shao-Hua Sun</a></div>
            <div className="institute">National Taiwan<br/>University</div>
          </div>
        </div>
        <div className="row">
          <div className="organizer">
            <img src="https://furong-huang.com/wp-content/uploads/2024/03/cropped-Furong_Huang_Headshot_Medium.jpeg" />
            <div className="name"><a href="https://furong-huang.com">Furong Huang</a></div>
            <div className="institute">University of Maryland</div>
          </div>
          <div className="organizer">
            <img src="https://ymy4323460.github.io/assets/img/IMG_1201.JPG" />
            <div className="name"><a href="https://ymy4323460.github.io">Mengyue Yang</a></div>
            <div className="institute">University of Bristol</div>
          </div>
          <div className="organizer">
            <img src="https://aravindr93.github.io/assets/dp2023.jpeg" />
            <div className="name"><a href="https://aravindr93.github.io">Aravind Rajeswaran</a></div>
            <div className="institute">Meta AI (FAIR)</div>
          </div>
          <div className="organizer">
            <img src="organizer_michael_yip.jpg" />
            <div className="name"><a href="https://yip.eng.ucsd.edu/">Michael Yip</a></div>
            <div className="institute">UC San Diego</div>
          </div>
        </div>
      </div>

      <div className="contact">
        <h2>Contact</h2>
        <p>
          To be announced.
        </p>
      </div>

      {/*<div className="sponsors">
        <h2>Sponsors</h2>
        <div className="sponsor">
          <img src="" />
        </div>
      </div>*/}
      
    </>
  )
}

export default App
