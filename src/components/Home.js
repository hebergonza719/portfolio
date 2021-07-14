import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="profile-pic-container">
        <img src="http://placehold.jp/150x150.png" alt="placeholdery"/>
      </div>
      <h1>Full-stack Web Developer</h1>
      <section>
        <h3>Skills</h3>
        <div>
          <h4>Front-end</h4>
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>JavaScript</h5>
          <h5>React JS</h5>
        </div>
        <hr/>
        <div>
          <h4>Back-end</h4>
          <h5>Node.js</h5>
          <h5>Express</h5>
          <h5>Knex</h5>
          <h5>Sequelize</h5>
        </div>
        <hr/>
        <div>
          <h4>Database</h4>
          <h5>PostgreSQL</h5>
          <h5>MongoDB</h5>
        </div>
      </section>
    </div>
  )
}

export default Home;