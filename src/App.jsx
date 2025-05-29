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
        <h1>Reinforcement Learning with External Knowledge Base</h1>
        <h3>Workshop proposal for NeurIPS 2025</h3>
        <h3>Date: TBD  | Location: TBD</h3>
      </div>
      
      <div className="navbar">
        <a href="#call-for-papers">Call for Papers</a> | <a href="#speakers">Speakers</a> | <a href="#schedule">Schedule</a> | <a href="#organization">Organization</a>
      </div>

      <div className="about">
        <h2>About</h2>
        <p>
          Reinforcement learning (RL) has been widely deployed to address complex tasks where the underlying dynamics of the environment are difficult to model explicitly.
However, RL's fundamental trial-and-error learning process presents significant challenges in terms of sample efficiency, safety, generalizability, knowledge transferability, and interpretability. RL can require a large amount of interaction data to learn effective policies, making them sample inefficient and impractical for domains where data collection is costly or risky. RL agents can also take undesirable actions during exploration, raising safety concerns in real-world applications where mistakes can have serious consequences. In addition, generalizing behaviors to and transferring knowledge across unseen tasks remains challenging, as RL agents may overfit to specific training conditions and require learning from scratch in new environments. Improving these aspects of RL is not straightforward, as the complexity of the algorithms and the black-box nature of the models used in training make it difficult to interpret agent decisions and diagnose failures.
          <br/>
          To address these challenges, researchers have increasingly incorporated external knowledge bases into RL frameworks. The knowledge bases can come from various sources such as external datasets (e.g., YouTube videos), guiding policies, knowledge graphs, natural language instructions, program synthesis, or systems for advanced sensing and control. External knowledge can improve sample efficiency by guiding agents' exploration while also enhancing safety by reducing potentially unsafe interactions with the environment. Lastly, RL agents may leverage these external resources during both learning and deployment to facilitate knowledge transfer across multiple environments and tasks.
          <br/>
          More recently, foundation models have proven to be powerful external knowledge for RL. These large pre-trained models offer broad reasoning capabilities and multimodal understanding, which RL agents can exploit in several ways. Foundation models can serve as priors for policy or value functions, guiding exploration and learning; as teachers and external reward generators, providing rich feedback and alignment; and as powerful representation learners, extracting generalizable features from complex, high-dimensional data. In embodied domains such as robotics, RL with foundation models is increasingly used to bridge perception, reasoning, and control. Conversely, RL has benefited from human feedback (RLHF) to align and refine the outputs of foundation models. Integrating knowledge on an unprecedented scale is driving advances in efficiency, safety, generalizability, transferrability, and interpretability of RL.
          <br/>
          Despite recent breakthroughs, empowering RL with external knowledge bases in various forms -- from demonstrations to foundation models -- still presents significant challenges.
These challenges include (1) effectively leveraging external knowledge for decision-making; (2) reliability and timeliness of available information -- potentially leading to biased or outdated decisions; or even (3) conflicts between internally learned experiences and external information. In addition, the computational resources required by RL can be further amplified when leveraging large-scale external knowledge sources. This computational burden may limit the scalability and practicality of RL solutions, particularly for organizations and individuals without access to extensive resources.
        </p>

      </div>

      <div className="call-for-papers" id="call-for-papers">
        <h2>Call for Papers</h2>
        <p>
          This workshop explores various techniques for leveraging external knowledge to improve RL in different domains and identifies the common principles and limitations of these methods. These techniques range from redesigning the fundamental problem formulation and algorithms of RL such that external information can be seamlessly used to update policies; finding knowledge representations that RL agents can easily incorporate; and coupling the designs of RL algorithms and knowledge representations to suit different real-world applications better. The recent resurgence of RL based on these techniques, driven by advances in large datasets and foundation models, has reignited enthusiasm and optimism in this field. This creates a unique opportunity to bring together researchers from diverse backgrounds seeking to harness external knowledge for more efficient, safe, generalizable, transferrable, and interpretable RL. A conversation among researchers from different perspectives, but with shared foundational goals, will help further advance the reliability and computational efficiency of RL with large external knowledge bases.
          <br/>
          Relevant topics include, but are not limited to:
          <ul>
            <li><b>Algorithm design for RL with external knowledge:</b>
              Novel RL algorithms that effectively integrate external knowledge sources to enhance efficiency, safety, generalizability, transferability, and interpretability. Example topics include RL with foundation models [1, 2, 3, 4, 5, 6], offline RL [7, 8, 9, 10, 11], program-guided RL [12, 13, 14, 15, 16], knowledge-grounded RL [17, 18, 19], reincarnating RL [20, 21], safe RL [22, 23, 24, 25, 26], and explainable RL [27, 28, 29].</li>
            <li><b>Knowledge transfer in RL:</b>
              Methods for transferring learned skills and knowledge representations across different tasks, environments, and domains to reduce learning time in new RL scenarios. Example topics include meta-RL [30, 31, 32, 33, 34], multi-task RL [35, 36, 37, 38, 39], lifelong and continual RL [40, 41, 42, 43, 44], incremental RL [45, 46, 47, 48, 49], and hierarchical RL [50, 51, 52, 53, 54].</li>
            <li><b>RL for foundation models:</b>
              RL techniques for training, fine-tuning, and aligning foundation models to improve their reasoning abilities, reduce harmful outputs, and enhance their alignment with human preferences and values.</li>
            <li><b>Applications of RL with external knowledge:</b>
              Real-world applications demonstrating how external knowledge integration enhances RL performance across domains such as robotics, autonomous systems, healthcare, and finance.</li>
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
            <img src="https://shaohua0116.github.io/images/profile.jpg" />
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
            <div className="institute">University of Bistro</div>
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
