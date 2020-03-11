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
            <p className="card-text">We aim to develop sustainable Social Enterprises</p>
            <a href="#"  className="btn btn-primary stretched-link" >Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="card mb-4 mb-lg-0 border-primary shadow">
        <img className="card-img-top" src={civic} alt="civic engagement" />
          <div className="card-body">
            <h5 className="card-title">Civic Engagement</h5>
            <p className="card-text">Civic Engagement as a means of alternative Information desimination and empowerment.</p>
            <a href="#"  className="btn btn-primary stretched-link" >Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="card mb-4 mb-lg-0 border-primary shadow">
        <img className="card-img-top" src={skills} alt="Life Skills" />
          <div className="card-body">
            <h5 className="card-title">Entrepreneurship and Life Skills</h5>
            <p className="card-text">Promoting innovation and entrepreneurship </p>
           <a href="#"  className="btn btn-primary stretched-link" >Learn More</a>
          </div>
        </div>
      </div>
    </div>
   </div>
	);
}

export default Home;