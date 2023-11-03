import './CSS/About.css'

function About() {
  return (
    <div className="about-page">
      <div className="about-section">
        <h2>About Our Digital Marketing Agency</h2>
        <p>
          Welcome to [Your Agency Name], a full-service digital marketing agency that specializes in helping businesses grow and succeed online. We are passionate about delivering results-driven marketing solutions tailored to your unique goals.
        </p>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="team-member-1.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Co-Founder and Digital Strategist</p>
        </div>
        <div className="team-member">
          <img src="team-member-2.jpg" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Content Marketing Expert</p>
        </div>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses of all sizes with effective digital marketing strategies. We are committed to staying ahead of industry trends, delivering exceptional results, and building long-lasting partnerships with our clients.
        </p>
      </div>

      <div className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>1. Client-Centric Approach: Your success is our top priority.</li>
          <li>2. Transparency: We believe in open communication and honesty.</li>
          <li>3. Innovation: We stay up-to-date with the latest marketing trends and technologies.</li>
          <li>4. Collaboration: We work as a team, both internally and with our clients.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
