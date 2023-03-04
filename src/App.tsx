import * as React from 'react';
import './App.css';

export default function App() {
  return (
    <div>
      <section className="hero">
        <div className="title">
          <h1>Tyler Meekel</h1>
          <h2>
            A Fullstack Web Developer With a Passion for Beautiful Websites
          </h2>
        </div>
        <br />
        <div className="skills">
          <div className="frontend skillsection">
            <h2>Front End Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Svelte/SvelteKit</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
              <li>MaterialUI</li>
            </ul>
          </div>
          <div className="backend skillsection">
            <h2>Back End Skills</h2>
            <ul>
              <li>Node.JS</li>
              <li>BCrypt</li>
              <li>JSON Web Tokens</li>
              <li>Express.JS</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="others skillsection">
            <h2>Other Skills/Languages</h2>
            <ul>
              <li>Rust</li>
              <li>Java</li>
              <li>Assembly</li>
              <li>Golang</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="projectssection">
        <h1>Projects</h1>
        <div className="projects">
          <div className="project">
            <h3>
              <a href="https://dainty-blancmange-8fd122.netlify.app/">
                Social Media App
              </a>
            </h3>
            <h5>
              <a href="https://github.com/tylermeekel/mern-social-media-app">
                Github Link
              </a>
            </h5>
            <p>
              A solo-developed full-stack social media app complete with
              authentication. Utilizes the MERN stack with a full CRUD backend,
              and database operations done through mongoose.
            </p>
          </div>
          <div className="project">
            <h3>
              <a href="https://statuesque-creponne-ea0d40.netlify.app/">
                Kanban Todo App
              </a>
            </h3>
            <h5>
              <a href="https://github.com/tylermeekel/kantban-web-todos">
                Github Link
              </a>
            </h5>
            <p>
              A completely front-end todo app that utilizes browser localStorage
              to have data persist through browser sessions. Built with the
              Svelte framework.
            </p>
          </div>
          <div className="project">
            <h3>
              <a href="https://clinquant-salmiakki-523644.netlify.app/">
                Password Generator Webapp
              </a>
            </h3>
            <p>
              A password generator seeded by a prompt. Lets users generate a
              secure password by using an easy to memorize phrase/sentence.
            </p>
          </div>
          <div className="project">
            <h3>Rust Password Generator CLI</h3>
            <h5>
              <a href="https://github.com/tylermeekel/minipass">Github Link</a>
            </h5>
            <p>
              The initial implementation of my password generator webapp. Users
              can pass as many arguments as they want which are all used to seed
              a randomly generated password that is 16 characters in length.
            </p>
          </div>
          <div className="project">
            <h3>Golang Backend Project</h3>
            <p>
              Currently in progress. A reimplementation of the backend of my
              social media project in the Go language.
            </p>
          </div>
        </div>
        <h2>
          Click <span><a href="https://github.com/tylermeekel">here</a></span> for more projects
        </h2>
      </section>
      <section className="contact">
        <h1>Contact</h1>
        <h3>
          <a href="mailto:ty.meekel@gmail.com">Email</a>
        </h3>
        <h3>
          <a href="https://www.linkedin.com/in/tylermeekel/">LinkedIn</a>
        </h3>
        <h3>
          <a href="https://www.instagram.com/tylermeekel">Instagram</a>
        </h3>
      </section>
    </div>
  );
}
