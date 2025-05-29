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
          To be announced.
        </p>
      </div>

      <div className="call-for-papers" id="call-for-papers">
        <h2>Call for Papers</h2>
        <p>
          To be announced.
        </p>
      </div>

      <div className="invited-speakers" id="speakers">
        <h2>Speakers</h2>
        <div className="row">
          <div className="speaker">
            <img src="https://ai.stanford.edu/~cbfinn/_files/sail_headshot_left_facing_crop.jpg" />
            <div className="name">Chelsea Finn</div>
            <div className="institute">Stanford</div>
          </div>
          <div className="speaker">
            <img src="https://people.csail.mit.edu/pulkitag/images/pulkit.jpg" />
            <div className="name">Pulkit Agrawal</div>
            <div className="institute">MIT</div>
          </div>
          <div className="speaker">
            <img src="speaker_Aleksandra_Faust.jpg" />
            <div className="name">Aleksandra Faust</div>
            <div className="institute">Google DeepMind</div>
          </div>
        </div>
        <div className="row">
          <div className="speaker">
            <img src="https://takuseno.github.io/static/b9ef0dc632cf93e77bab0a1b51661269/6ff99/profile.webp" />
            <div className="name">Takuma Seno</div>
            <div className="institute">Sony AI / Turing Inc.</div>
          </div>
          <div className="speaker">
            <img src="https://rockt.ai/assets/img/me.jpg" />
            <div className="name">Tim Rocktäschel</div>
            <div className="institute">UCL / Google DeepMind</div>
          </div>
          <div className="speaker">
            <img src="https://jiayuanm.com/static/img/avatar25.png" />
            <div className="name">Jiayuan Mao</div>
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
            <div className="name">Zih-Yun (Sarah) Chiu</div>
            <div className="institute">UC San Diego<br/>/ Johns Hopkins University</div>
          </div>
          <div className="organizer">
            <img src="https://www.nicklashansen.com/files/me.png" />
            <div className="name">Nicklas Hansen</div>
            <div className="institute">UC San Diego</div>
          </div>
          <div className="organizer">
            <img src="https://pascalson.github.io/assets/img/my_pic.jpg" />
            <div className="name">Yi-Lin (Pascal) Tuan</div>
            <div className="institute">Orchat AI</div>
          </div>
          <div className="organizer">
            <img src="https://shaohua0116.github.io/images/profile.jpg" />
            <div className="name">Shao-Hua Sun</div>
            <div className="institute">National Taiwan<br/>University</div>
          </div>
        </div>
        <div className="row">
          <div className="organizer">
            <img src="https://furong-huang.com/wp-content/uploads/2024/03/cropped-Furong_Huang_Headshot_Medium.jpeg" />
            <div className="name">Furong Huang</div>
            <div className="institute">University of Maryland</div>
          </div>
          <div className="organizer">
            <img src="https://ymy4323460.github.io/assets/img/IMG_1201.JPG" />
            <div className="name">Mengyue Yang</div>
            <div className="institute">University of Bistro</div>
          </div>
          <div className="organizer">
            <img src="https://aravindr93.github.io/assets/dp2023.jpeg" />
            <div className="name">Aravind Rajeswaran</div>
            <div className="institute">Meta AI (FAIR)</div>
          </div>
          <div className="organizer">
            <img src="organizer_michael_yip.jpg" />
            <div className="name">Michael Yip</div>
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
