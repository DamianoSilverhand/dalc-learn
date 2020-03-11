import React from 'react';
import enterprise from '../images/enterprise.jpg';
import skills from '../images/skills.jpg';
import civic from '../images/civic.jpg';
function Home() {
	return(
 <div className = "container" >
    <div className="row">
      <div className="col-12 col-lg-4">
        <div className="card mb-4 mb-lg-0 border-primary shadow">
        <img className="card-img-top" src={enterprise} alt="social enterprise" />
          <div className="card-body">
            <h5 className="card-title">Social Enterprise and Welfare</h5>
            <p className="card-text">Get full certification for life in Zero G!</p>
            <a href="#"  className="btn btn-primary stretched-link" >Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="card mb-4 mb-lg-0 border-primary shadow">
        <img className="card-img-top" src={civic} alt="civic engagement" />
          <div className="card-body">
            <h5 className="card-title">Civic Engagement</h5>
            <p className="card-text">Our instructors are out of this world!</p>
            <a href="#"  className="btn btn-primary stretched-link" >L
earn More</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="card mb-4 mb-lg-0 border-primary shadow">
        <img className="card-img-top" src={skills} alt="Life Skills" />
          <div className="card-body">
            <h5 className="card-title">Entrepreneurship and Life Skills</h5>
            <p className="card-text">Reach for the Stars with your career!</p>
           <a href="#"  className="btn btn-primary stretched-link" >Learn More</a>
          </div>
        </div>
      </div>
    </div>
   </div>
	);
}

export default Home;