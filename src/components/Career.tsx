import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* A2Z IT HUB Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>A2Z IT HUB Pvt. Ltd.</h5>
              </div>
              <h3>May 2024</h3>
            </div>
            <p>
              Developed responsive web applications using HTML, CSS, JavaScript,
              and React.js. Worked on frontend integration with backend APIs,
              improved UI performance, and gained hands-on experience in real
              client-based projects.
            </p>
          </div>

          {/* Current Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Software Developer (.NET Fullstack)</h4>
                <h5>Sthapatya Software Pvt. Ltd.</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Designing and developing enterprise-grade web applications using
              ASP.NET Core, C#, Entity Framework Core, and SQL Server. Building
              secure RESTful APIs, implementing authentication & authorization,
              optimizing database queries, and contributing across the complete
              SDLC (Development → SIT → UAT → Production).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
