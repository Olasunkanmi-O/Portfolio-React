
import picture from '../Images/myself.jpg'
import weather from '../Images/weather-dashboard.jpg'


function Main() {
  return (
    <main>
      <div className="hero-banner">
        <h2>Olasunkanmi Moses Owolabi</h2>
        <h3>Front-End Web Developer</h3>
        <h4>HTML | CSS | JAVASCRIPT | REACT</h4>
      </div>

      <h3 className="category" id="About">
        About
      </h3>

      <span className="about">
        <img className="personal" src={picture} alt=" " />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          repudiandae fuga eaque, assumenda dolores a necessitatibus laudantium
          temporibus repellat ducimus, sunt omnis non, modi earum sapiente aperiam.
          Minus, debitis modi! Dolores minus earum aperiam consequuntur quam soluta
          tenetur molestiae accusamus ipsum, excepturi doloribus voluptas? Nesciunt
          reiciendis, earum aliquid quasi voluptatibus at quis perferendis
          reprehenderit, iste suscipit nisi quas voluptatem ipsa!
        </p>
      </span>

      <h3 className="category" id="Work">
        Work
      </h3>

      <div className="projects item1">
        <img src={weather} alt="" />
        <span>
          <h3>weather-dashboard</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure commodi,
            nemo harum nobis quae voluptatum vel reiciendis rem aliquam. At,
            reprehenderit repudiandae dolore ratione similique ipsam veritatis
            doloribus culpa tenetur?
          </p>
          <a href="https://olasunkanmi-o.github.io/weather-dashboard/">
            Link to the Project
          </a>
        </span>
      </div>

      <div className="projects item2">
        <span>
          <h3>Quizz Challenge</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure commodi,
            nemo harum nobis quae voluptatum vel reiciendis rem aliquam. At,
            reprehenderit repudiandae dolore ratione similique ipsam veritatis
            doloribus culpa tenetur?
          </p>
          <a href="https://olasunkanmi-o.github.io/Timed-Quiz/">
            Link to the Project
          </a>
        </span>
        <img src="./Assets/Images/Timed Quizz.jpg" alt="" />
      </div>

      <div className="projects item3">
        <img src="./Assets/Images/Password Generator.jpg" alt="" />
        <span>
          <h3>Password Generator</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure commodi,
            nemo harum nobis quae voluptatum vel reiciendis rem aliquam. At,
            reprehenderit repudiandae dolore ratione similique ipsam veritatis
            doloribus culpa tenetur?
          </p>
          <a href="https://olasunkanmi-o.github.io/Password_Generator/">
            Link to the Project
          </a>
        </span>
      </div>

      <div className="projects item4">
        <span>
          <h3>README Generator</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure commodi,
            nemo harum nobis quae voluptatum vel reiciendis rem aliquam. At,
            reprehenderit repudiandae dolore ratione similique ipsam veritatis
            doloribus culpa tenetur?
          </p>
          <a href="https://olasunkanmi-o.github.io/ReadMe-Generator/">
            Link to the Project
          </a>
        </span>
        <img src="./Assets/Images/README generator.jpg" alt="" />
      </div>

      <div className="projects item5">
        <img src="./Assets/Images/Fetchbook.jpg" alt="" />
        <span>
          <h3>Fetchbook</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure commodi,
            nemo harum nobis quae voluptatum vel reiciendis rem aliquam. At,
            reprehenderit repudiandae dolore ratione similique ipsam veritatis
            doloribus culpa tenetur?
          </p>
          <a href="https://c-navarroperez.github.io/fetchbook/">
            Link to the Project
          </a>
        </span>
      </div>
      
      <div className="projects item6">
        <span>
          <h3>Title</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure commodi,
            nemo harum nobis quae voluptatum vel reiciendis rem aliquam. At,
            reprehenderit repudiandae dolore ratione similique ipsam veritatis
            doloribus culpa tenetur?
          </p>
          <a href="https://github.com/Olasunkanmi-o">Link to the Project</a>
        </span>
        <img src="./Assets/Images/02-portfolio-4.jpg" alt="" />
      </div>

      <h3 className="category" id="Contact">
        Contact
      </h3>

      <div className="formitem">
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" />
          <label htmlFor="email">Your Email:</label>
          <input type="text" />
          <label htmlFor="message">Send me Message:</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            defaultValue={""}
          />
          <input type="Submit" />
        </form>
        
        <div className="contact">
          <a href="https://github.com/Olasunkanmi-O">Github</a>
          <a href="https://www.linkedin.com/in/olasunkanmi-owolabi/">Linkedin</a>
          <a href="mailto:olasunkanmi.m.owolabi@gmail.com">Email</a>
        </div>
      </div>
    </main>

  )
}

export default Main;

