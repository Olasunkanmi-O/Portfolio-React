
import picture from '../Images/myself.jpg'
import weather from '../Images/weather-dashboard.jpg'
import Quizz from '../Images/Timed Quizz.jpg'
import Password from '../Images/Password_Generator.jpg'
import readme from '../Images/README generator.jpg'
import fetchbook from '../Images/Fetchbook.jpg'


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
        After 7 years in the Fast-Moving Consumer Goods as a logistics personnel, I realized I wanted more and as such,
        I decided to branch into tech. I got into the front End development of web and web applications and I have never
        been happier. I have worked with some other developers in creating some web applications. Some of my works are
        linked in this website as you may like to view them.
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
            This app was developed for travellers, such that you can check the weather conditions of the city you are planning to visit. It displays the weather conditions such as temperature, rainfall, UV index, wind speed. You are required to simplify type in the city you plan to visit in the search box and it gives the details of the weather for that day and a 5 day weather forecast.   
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
            This app tests your knowledge about front-end development basics. When the start button is clicked, it displays the first question, and the timer starts counting down, you lose 10 seconds for every questions missed. The number of seconds left at the end of the quizz determines your score. You can save your highscores as well. 
          </p>
          <a href="https://olasunkanmi-o.github.io/Timed-Quiz/">
            Link to the Project
          </a>
        </span>
        <img src={Quizz} alt="" />
      </div>

      <div className="projects item3">
        <img src={Password} alt="" />
        <span>
          <h3>Password Generator</h3>
          <p>
            Sometimes it might be a bit difficult to generate strong password just on the go and this is the problem the app aims to solve. It requires few inputs from you as regards the type of password you will like to generate. You will be required to allow some forms of input which range from strings(character), numbers, special characters, and symbols. The app then simply generayes password based on the number of input you choose.
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
            A professional README speaks so much about your project. It is the first part of the project that users have access to. A good readme gives a summary of the app, how the usage is, how to install the application, the type of license used, list of contributing developers, type of test to run and probably contact information. This app asks series of questions and generates a professional README for you.
          </p>
          <a href="https://olasunkanmi-o.github.io/ReadMe-Generator/">
            Link to the Project
          </a>
        </span>
        <img src={readme} alt="" />
      </div>

      <div className="projects item5">
        <img src={fetchbook} alt="" />
        <span>
          <h3>Fetchbook</h3>
          <p>
            A lot of times, people have found it a daunting task to make a good choice of book to read especially softcopy. The aim of this app is to didsplay NY best seller books for the user, it allows user to pick specific genres of book with a link to purchase the book as well as save the books in their favourite for future purchase.
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

